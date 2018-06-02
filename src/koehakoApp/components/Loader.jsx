import React from 'react';
import 'wired-elements';

import { common, loader } from '../style';

const Loader = () => (
  <section style={loader.section}>
    <wired-icon-button style={common.wiredIcon}>hourglass_full</wired-icon-button>
  </section>
);

export default Loader;
