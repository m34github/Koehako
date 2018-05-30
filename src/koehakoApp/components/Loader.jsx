import React from 'react';
import 'wired-elements';

import { loader } from '../style';

const Loader = () => (
  <section style={loader.section}>
    <wired-icon-button>hourglass_full</wired-icon-button>
  </section>
);

export default Loader;
