import React from 'react';

import Wrapper from './Wrapper';
import Link from './Link';
import Date from './Date';
import H1 from './H1';
import P from './P';
import ContinueReading from './ContinueReading';

function Summary({date, title, excerpt, slug}) {

  return (
    <Wrapper>
        <H1><Link to={slug}>{title}</Link></H1>
        <Date>{date}</Date>
        <P>{excerpt}</P>
        <Link to={slug}></Link>
        <ContinueReading to={slug}>Continue Reading &rarr;</ContinueReading>
    </Wrapper>
  );
}

export default Summary;