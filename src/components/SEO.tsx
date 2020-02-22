import React from 'react';
import Helmet from 'react-helmet';
import { ISEOMetaItemType1, ISEOMetaItemType2 } from '../types';

export interface IProps {
  siteData: any;
  title: string;
  defaultKeywordsByTheme: string;
  description?: string;
  imageUrl?: string;
  keywords?: Array<string>;
  meta?: Array<ISEOMetaItemType1 | ISEOMetaItemType2>;
}

function Container(props: IProps) {
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
