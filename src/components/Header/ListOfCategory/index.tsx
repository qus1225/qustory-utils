import React, { Component, useEffect, useState } from 'react';
import './index.scss';
import { graphql, Link } from 'gatsby';

export enum CategoryType {
  TAGS,
  SERIES
}

interface IProps {
  categoryType: CategoryType;
  list: Array<string>;
}
const Container = (props: IProps) => {
  return (
    <div className="category-list-container">
      {getTitleByCategory(props.categoryType)}
      <div className="list">
        {props.list &&
          props.list.map((item) => {
            return (
              <div className="item-wrapper" key={item}>
                {getLinkByCategory(props.categoryType, item)}
              </div>
            );
          })}
      </div>
    </div>
  );
};

function getTitleByCategory(categoryType: CategoryType) {
  if (categoryType === CategoryType.TAGS) {
    return (
      <div className="title">
        <i className="las la-tags"></i> Tags
      </div>
    );
  }
  if (categoryType === CategoryType.SERIES) {
    return (
      <div className="title">
        <i className="las la-copy"></i> 시리즈
      </div>
    );
  }
}

function getLinkByCategory(categoryType: CategoryType, label: string) {
  if (categoryType === CategoryType.TAGS) {
    return (
      <Link to={`/tags/${label}`}>
        <div className="item">{label}</div>
      </Link>
    );
  }
  if (categoryType === CategoryType.SERIES) {
    return (
      <Link to={`/series/${label}`}>
        <div className="item">{label}</div>
      </Link>
    );
  }
}

export default Container;
