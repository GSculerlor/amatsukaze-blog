import styled from 'styled-components';
import Link from 'gatsby-link';

const Button = styled(Link)`
  border: 1px solid #959595;
  border-radius: 25px;
  color: #959595;
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