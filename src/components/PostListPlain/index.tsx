import React, { Component, useEffect, useState } from 'react';
import './index.scss';
import { graphql, Link } from 'gatsby';

interface IProps {
  postData: any;
  title: string;
}
const Container = (props: IProps) => {
  return (
    <div className="post-list-plain-container">
      <div className="title">{props.title}</div>
      <div className="list">
        {props.postData &&
          props.postData.allMarkdownRemark.totalCount > 0 &&
          props.postData.allMarkdownRemark.edges.map(
            ({ node }: { node: any }) => {
              return (
                <Link to={`/post/${node.fields.slug}`} key={node.id}>
                  <div className="item">{node.frontmatter.title}</div>
                  <div className="date">{node.fields.prefix}</div>
                </Link>
              );
            }
          )}
      </div>
    </div>
  );
};

export default Container;
