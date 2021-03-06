import styled from 'styled-components';

const Card = styled.div`
  background: #191C1D;
  box-shadow: 0 1px 5px rgba(0,0,0,0.05);
  margin-bottom: 30px;
  padding: 50px 75px;

  @media only screen and (max-width: 870px) {
    border-left: none;
    border-right: none;
    padding: 75px 15px;
  }
`;

export default Card;