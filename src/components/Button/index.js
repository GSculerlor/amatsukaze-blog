import styled from 'styled-components';
import Link from 'gatsby-link';

const Button = styled(Link)`
  border: 1px solid #bfc8d2;
  border-radius: 25px;
  color: #3e465b;
  display: inline-block;
  font-size: 14px;
  font-weight: 700;
  margin: 0 10px;
  padding: 5px 15px;
  text-decoration: none;
  text-transform: lowercase;

  &:hover {
    color: white;
  }
`;

export default Button;