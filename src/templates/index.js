import Helmet from 'react-helmet';
import React from 'react';


import Layout from './layout';

import Container from '../components/Container';
import Pagination from '../components/Pagination';
import Summary from '../components/Summary';

const IndexPage = ({ pageContext }) => {
  const { group, index, pageCount } = pageContext;
  const previousUrl = index - 1 === 1 ? '' : (index - 1).toString();
  const nextUrl = (index + 1).toString();
  return (
    <Layout>
      <Container>
        <Helmet
          title="blog.ganen.moe"
          htmlAttributes={{ lang: 'en' }}
        >
          <meta
            name="description"
            content="blog.ganen.moe"
          />
        </Helmet>
        {group.map(({ node }) => (
          <Summary
            key={node.fields.slug}
            date={node.frontmatter.date}
            title={node.frontmatter.title}
            excerpt={node.excerpt}
            slug={node.fields.slug}
          />
        ))}
        <Pagination
          isFirst={index === 1}
          isLast={index === pageCount}
          nextUrl={nextUrl}
          previousUrl={previousUrl}
        />
      </Container>
    </Layout>
  );
};
export default IndexPage;
