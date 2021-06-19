import styled from 'styled-components';

const Wrapper = styled.div`
  background: #ffd54f;
  box-shadow: 0 1px 5px rgba(0,0,0,0.05);
  padding: 10px 75px;

  @media only screen and (max-width: 870px) {
    border-left: none;
    border-right: none;
    padding: 10px 15px;
  }
`;

export default Wrapper;