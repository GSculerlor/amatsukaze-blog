import React from 'react';

import Container from '../Container';
import Link from './Link';
import Wrapper from './Wrapper';

function Header() {

  return (
    <Container>
      <Wrapper>
        <h1><Link to="/">ganen blog.</Link></h1>
        <p>hey finally I have a blog!</p>
      </Wrapper>
    </Container> 
  );
}

export default Header;