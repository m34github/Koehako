import React from 'react';
import PropTypes from 'prop-types';
import 'wired-elements';

import Loader from './Loader.jsx';
import { common, home } from '../style';

class Home extends React.Component {
  componentDidMount() {
    this.props.loadHome();
  }

  render() {
    if (this.props.home.isLoaded) {
      return (
        <article style={common.article}>
          <header style={home.header}>
            <section>
              <wired-combo selected={1}>
                <wired-item value={1} text='わたしの "こえ"' />
                <wired-item value={2} text='みんなの "こえ"' />
              </wired-combo>
            </section>
            <section>
              <wired-input placeholder="キーワード" />
            </section>
            <section>
              <wired-icon-button>search</wired-icon-button>
            </section>
          </header>

          <hr />

          <main>
            {
              this.props.home.result.map(r => (
                <section key={r.id} style={home.cardSection}>
                  <wired-card elevation={3} style={home.card}>
                    {r.text}
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
  loadHome: PropTypes.func.isRequired
};

export default Home;
