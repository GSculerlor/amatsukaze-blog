import styled from 'styled-components';
import GatsbyLink from 'gatsby-link';

const ContinueReading = styled(GatsbyLink)`
  color: #666d71;
  display: inline-block;
  font-size: 14px;
  margin-top: 20px;
  text-decoration: none;

  &:hover {
    color: white;
  }  
`;

export default ContinueReading;