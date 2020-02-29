import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import './index.scss';

interface IProps {
  title: string;
  postList: Array<any>;
}
const Container = (props: IProps) => {
  return (
    <div className="post-list-verbose-container">
      <div className="title">{props.title}</div>
      <div className="list">
        {props.postList &&
          props.postList.map(({ node }: { node: any }) => {
            return (
              <Link to={`/post/${node.fields.slug}`} key={node.id}>
                <div className="image-wrapper">
                  <Img
                    fluid={node.frontmatter.thumbNail.childImageSharp.fluid}
                    className="image"
                  />
                </div>
                <div className="item-container">
                  <div className="top-container">
                    <div className="title">{node.frontmatter.title}</div>
                    <div className="date">{node.fields.prefix}</div>
                  </div>
                  <div className="series">
                    <i className="las la-copy"></i>{' '}
                    {`'${node.fields.series}' 시리즈`}
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};
export default Container;
