import {graphql} from 'gatsby';
import Helmet from 'react-helmet';
import get from 'lodash/get';
import React from 'react';

import Layout from './layout';
import Container from '../components/Container';
import Card from '../components/Card';
import Button from '../components/Button';
import PageNav from '../components/PageNav';
import PostHeader from '../components/PostHeader'
import Post from '../components/Post'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const author = get(this.props, 'data.site.siteMetadata.author');
    const { previous, next } = this.props.pageContext;

    return (
      <Layout>
        <Container>
          <Helmet
            title = {`${post.frontmatter.title} | ${author}`}
            htmlAttributes = {{ lang: 'en' }}
          >
            <meta
              name = "description"
              content = ""
            />
          </Helmet>

          <Card>
            <PostHeader>
              <h1>{post.frontmatter.title}</h1>
              <p>{post.frontmatter.date} by {author}</p>
            </PostHeader>

            <Post>
              <div dangerouslySetInnerHTML = {{ __html: post.html }} />
            </Post>
          </Card>

          <PageNav>
            {previous && (
              <Button to={previous.fields.slug} rel="prev">
                ← prev: {previous.frontmatter.title}
              </Button>
            )}

            {next && (
              <Button to={next.fields.slug} rel="next">
                next: {next.frontmatter.title} →
              </Button>
            )}
          </PageNav>
        </Container>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        image
      }
    }
  }
`;
