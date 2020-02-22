import React, { useState } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import ListOfCategory from './ListOfCategory';

import './index.scss';
import { CategoryType, Theme, THEME_LABEL } from '../../types';

interface IProps {
  theme: Theme;
  children: any;
  seriesList: Array<string>;
  tagList: Array<string>;
}

const Rss = ({ theme }: { theme: Theme }) => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  return (
    <div className="rss-container">
      <i
        className="las la-rss"
        id="rss"
        onClick={() => setIsVisibleModal(true)}
      ></i>
      <div className={`message ${isVisibleModal ? 'active' : ''}`}>
        <i
          className="las la-times-circle"
          id="rss-close"
          onClick={() => setIsVisibleModal(false)}
        ></i>
        <b>RSS Feed</b>
        <br />{' '}
        {`https://${THEME_LABEL[theme].EN.toLowerCase()}.qustory.com/rss.xml`}
      </div>
    </div>
  );
};

const Container = (props: IProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <main>
      <div className="content-container">
        <div className="content-header-wrapper">
          <div className={`content-header  ${isExpanded ? 'expanded' : ''}`}>
            <div className="title-area">
              <div className="main">{`${
                THEME_LABEL[props.theme].KR
              } 이야기`}</div>
              <div className="sub">
                <span className="strong">
                  <Link to={'/'}>{`${THEME_LABEL[props.theme].EN} Story`}</Link>
                </span>
                of
                <a href={'https://qustory.com/'}>Qus</a>
              </div>
            </div>
            <div className="addon-area">
              <Rss theme={props.theme} />
              {/* TODO: 검색 구현 */}
              {/* <i className="las la-search" /> */}
            </div>
            <div className={`area-to-expand ${isExpanded ? 'active' : ''}`}>
              <ListOfCategory
                categoryType={CategoryType.SERIES}
                list={props.seriesList}
              />
              <ListOfCategory
                categoryType={CategoryType.TAGS}
                list={props.tagList}
              />
            </div>
            <div className="fold-btn-container">
              {!isExpanded && (
                <i
                  className="las la-angle-double-down fold-arrow"
                  onClick={() => setIsExpanded(true)}
                ></i>
              )}
              {isExpanded && (
                <i
                  className="las la-angle-double-up fold-arrow"
                  onClick={() => setIsExpanded(false)}
                ></i>
              )}
            </div>
          </div>
        </div>
        <div className="content-body">{props.children}</div>
      </div>
    </main>
  );
};
export default Container;
