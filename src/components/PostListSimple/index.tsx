import React, { Component, useEffect, useState } from 'react';
import './index.scss';
import { Link } from 'gatsby';
import { CategoryType } from '../../types';

interface IProps {
  categoryType: CategoryType;
  postData: any;
  title: string;
  desc?: string;
}
const Container = (props: IProps) => {
  return (
    <div className="post-list-simple-container">
      <div className="title">{props.title}</div>
      {props.categoryType === CategoryType.SERIES && props.desc && (
        <div className="desc">{props.desc}</div>
      )}
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
