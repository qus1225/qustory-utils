import React, { Component, useEffect, useState } from 'react';
import './index.scss';
import { Link } from 'gatsby';
import { CategoryType } from '../../types';

interface IProps {
  categoryType: CategoryType;
  postList: Array<any>;
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
        {props.postList.length > 0 &&
          props.postList.map((node) => {
            return (
              <Link to={`/post/${node.fields.slug}`} key={node.id}>
                <h1 className="item">{node.frontmatter.title}</h1>
                <div className="date">{node.fields.prefix}</div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Container;
