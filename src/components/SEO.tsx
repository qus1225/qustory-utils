/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

interface IMetaItemType1 {
  name: string;
  content: string;
}

interface IMetaItemType2 {
  property: string;
  content: string;
}

export interface IProps {
  siteData: any;
  title: string;
  defaultKeywordsByTheme: string;
  description?: string;
  imageUrl?: string;
  keywords?: Array<string>;
  meta?: Array<IMetaItemType1 | IMetaItemType2>;
}

function Container(props: IProps) {
  // TODO: 개별화
  const metaDescription =
    props.description || props.siteData.siteMetadata.description;

  const defaultKeywords =
    '쿠스토리,Qustory,쿠스,Qus' + props.defaultKeywordsByTheme;
  const metaKeywords =
    props.keywords && props.keywords.length > 0
      ? props.keywords.join(',') + ',' + defaultKeywords
      : defaultKeywords;
  return (
    <Helmet
      htmlAttributes={{
        lang: 'ko'
      }}
      title={props.title}
      titleTemplate={props.siteData.siteMetadata.title}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          name: `keywords`,
          content: metaKeywords
        },
        {
          property: `og:title`,
          content: props.title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: 'og:image',
          content: props.imageUrl || require('../images/qustory.png')
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: metaDescription
        },
        {
          name: `twitter:creator`,
          content: props.siteData.siteMetadata.author
        },
        {
          name: `twitter:title`,
          content: props.title
        },
        {
          name: `twitter:description`,
          content: metaDescription
        }
      ].concat(props.meta || [])}
    />
  );
}

export default Container;
