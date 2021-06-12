import styled from 'styled-components';

const Wrapper = styled.header`
  padding-bottom: 50px;

  h1 {
    color: white;
    font-size: 40px;
    line-height: 1;
    margin: 0;
    padding: 0;
    text-align: left;
  }

  p {
    color: #959595;
    display: block;
    font-size: 1.5em;
    margin-top: 10px;
    text-align: left;
  }

  @media only screen and (max-width: 870px) {
    padding: 20px 15px;
  }
`;

export default Wrapper;