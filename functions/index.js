// modules
const axios = require('axios');
const bodyParser = require('body-parser');
const express = require('express');
const functions = require('firebase-functions');
// const multer = require('multer');

const { auth, db } = require('./.env/firebase.config');
const { index } = require('./.env/algoliasearch.config');

// config
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(multer());

// endpoints
app.all('/', (req, res) => {
  const message = 'Please access to the below.\n[GET] /ping - return "pong"';
  res.send(message);
});

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.post('/get-message', (req, res) => {
  const password = req.body.password;
  const roomID = req.body.roomID;
  const accessToken = req.body.accessToken;

  auth.signInWithEmailAndPassword('alice@email.com', password)
    .then(async () => {
      await (db.ref('/').once('value', (snapshot) => {
        const latestID = snapshot.val().latest_id.toString();

        axios({
          method: 'get',
          url: 'https://api.bocco.me/alpha/rooms/' + roomID + '/messages?access_token=' + accessToken + '&newer_than=' + latestID
        })
        .then(async (data) => {
          await res.send(data.data);
          return null;
        })
        .catch((err) => {
          res.send(err)
        });
      }));

      return null;
    })
    .catch((err) => {
      res.send(err);
    })
});

app.post('/update-algolia', (req, res) => {
  axios({
    method: 'post',
    url: 'https://us-central1-koehako.cloudfunctions.net/api/get-message',
    data: {
      password: req.body.password,
      roomID: req.body.roomID,
      accessToken: req.body.accessToken
    }
  })
  .then(async (data) => {
    const message = data.data;

    await (index.addObjects(message, function(err, content) {
      if (err) {
        res.send(err)
      } else {
        if (message.length) {
          db.ref('/').update({
            latest_id: message[message.length - 1].id
          })
          .then(async () => {
            await res.send('Updated ' + message.length.toString() + ' records');
            return null;
          })
          .catch((err) => {
            res.send(err)
          });
        } else {
          res.send('Nothing to update');
        }
      }
    }));

    return null;
  })
  .catch((err) => {
    res.send(err);
  });
});

exports.api = functions.https.onRequest(app);
