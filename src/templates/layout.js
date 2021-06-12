import React from 'react';
import 'prismjs/themes/prism.css';

import GlobalStyle from '../global-styles';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Template extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <GlobalStyle />
        <Header />
        {children}
        <Footer />
      </div>
    );
  }
}

export default Template;
