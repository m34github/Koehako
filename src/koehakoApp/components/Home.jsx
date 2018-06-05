import React from 'react';
import PropTypes from 'prop-types';
import 'wired-elements';
import 'seedrandom';

import Loader from './Loader.jsx';
import { common, home } from '../style';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.keywordRef = React.createRef();
  }

  componentDidMount() {
    this.props.search('', '目安箱');
  }

  search() {
    const keyword = this.keywordRef.current.value;
    this.props.search(keyword, '目安箱');
  }

  render() {
    const getGender = (sender) => {
      Math.seedrandom(sender);
      return Math.round(Math.random()) ? 'male' : 'female';
    };

    if (this.props.home.isLoaded) {
      return (
        <article style={common.article}>
          <header style={home.header}>
            <section>
              <wired-input
                type="text"
                placeholder="キーワード"
                ref={this.keywordRef}
                style={home.input}
              />
            </section>
            <section>
              <wired-icon-button style={common.wiredIcon} onClick={() => { this.search(); }}>
                search
              </wired-icon-button>
            </section>
          </header>

          <hr />

          <main>
            {
              this.props.home.result.map(r => (
                <section key={r.id} style={home.cardSection}>
                  <wired-card elevation={3} style={home.card}>
                    <h2>{r.text.replace('目安箱', '')}</h2>
                    <hr />
                    <section style={home.sender}>
                      <section
                        alt="avatar"
                        style={{
                          background: `url(https://avatars.dicebear.com/v2/${getGender(r.sender)}/${r.sender}.svg) center / cover`,
                          width: 36,
                          height: 36
                        }}
                      />
                      <section style={home.date}>{r.date.replace('T', ' ').replace('Z', '')}</section>
                    </section>
                  </wired-card>
                </section>
              ))
            }
          </main>
        </article>
      );
    }
    return (
      <article>
        <Loader />
      </article>
    );
  }
}

Home.propTypes = {
  home: PropTypes.object.isRequired,
  search: PropTypes.func.isRequired
};

export default Home;
