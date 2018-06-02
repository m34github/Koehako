import React from 'react';
import PropTypes from 'prop-types';
import 'wired-elements';

import Loader from './Loader.jsx';
import { common, home } from '../style';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.keywordRef = React.createRef();
  }

  componentDidMount() {
    this.props.loadHome('');
  }

  search() {
    const keyword = this.keywordRef.current.value;
    this.props.loadHome(keyword);
  }

  render() {
    if (this.props.home.isLoaded) {
      return (
        <article style={common.article}>
          <header style={home.header}>
            <section>
              <wired-input
                type="text"
                placeholder="キーワード"
                ref={this.keywordRef}
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
                          background: `url(https://avatars.dicebear.com/v2/male/${r.sender}.svg) center / cover`,
                          width: 36,
                          height: 36
                        }}
                      />
                      <section style={home.date}>{r.date}</section>
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
  loadHome: PropTypes.func.isRequired
};

export default Home;
