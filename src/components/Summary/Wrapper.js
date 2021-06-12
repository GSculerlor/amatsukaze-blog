import styled from 'styled-components';

const Wrapper = styled.div`
  background: #202022;
  box-shadow: 0 1px 5px rgba(0,0,0,0.05);
  margin-bottom: 8px;
  padding: 40px;

  @media only screen and (max-width: 870px) {
    border-left: none;
    border-right: none;
    padding: 40px 15px;
  }
`;

export default Wrapper;