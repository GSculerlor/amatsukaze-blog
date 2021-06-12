import styled from 'styled-components';

const Post = styled.article`
  color: #949495;
  font-size: 16px;

  a {
    color: #64b4c4;
    font-weight: 700;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  h1 {
    color: #b0b0b0;
    font-size: 30px;
    font-weight: 700;
    line-height: 1.5;
    margin: 25px 0px 15px 0px;
  }

  h2 {
    color: #b0b0b0;
    font-size: 22px;
    font-weight: 700;
    line-height: 1.5;
    margin: 25px 0px 15px 0px;
  }

  h3 {
    color: #b0b0b0;
    font-size: 17px;
    font-weight: 700;
    line-height: 1.5;
    margin: 25px 0px 15px 0px;
  }

  h4 {
    color: #b0b0b0;
    font-weight: 700;
    line-height: 1.5;
    margin: 25px 0px 15px 0px;
  }

  h5,
  h6 {
    color: #b0b0b0;
    font-weight: 700;
    line-height: 1.5;
    margin: 25px 0px 15px 0px;
  }

  p {
    line-height: 1.7;
    margin: 15px 0px;
  }

  blockquote {
    border-left: 5px solid #e0e6ed;
    line-height: 1.7;
    margin: 15px 50px 15px 75px;
    padding: 10px 10px 10px 15px;

    p {
      margin: 0;
    }
  }

  ul,
  ol {
    line-height: 1.7;
    margin: 15px 0;

    p,
    ul,
    ol {
      margin: 0;
    }

    ul,
    ol {
      padding: 0 0 0 30px;
    }
  }

  img {
    margin: 15px 0;
  }
`;

export default Post;
