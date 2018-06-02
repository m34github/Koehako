import React from 'react';
import 'wired-elements';

class Sandbox extends React.Component {
  render() {
    const style = {
      card: {
        height: 160,
        width: 160,
        top: (window.innerHeight - 160) / 2,
        left: (window.innerWidth - 160) / 2
      }
    };

    return (
      <article>
        <wired-card style={style.card} elevation={3} />
      </article>
    );
  }
}

export default Sandbox;
