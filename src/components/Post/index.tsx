import React from 'react';
import './index.scss';
import Disqus from '../Disqus';
import { Theme } from '../../types';

interface IProps {
  post: any;
  theme: Theme;
}
const Container = ({ post, theme }: IProps) => {
  return (
    <div className="post-container">
      <div className="intro">
        <div className="title">{post.frontmatter.title}</div>

        {post.fields.series && (
          <div className="series">
            <a href={`/series/${post.fields.series}`}>
              <i className="las la-copy"></i>
              {`'${post.fields.series}' 시리즈`}
            </a>
          </div>
        )}

        <div className="sub-title">{post.frontmatter.subTitle}</div>

        <div className="created-at">
          {post.fields.prefix
            ? post.fields.prefix.replace('-', '.').replace('-', '.')
            : 'Draft'}
        </div>
      </div>

      <div className="body">
        <div
          className="markdown-body"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>

      {post.frontmatter.summary && (
        <div className="summary">{post.frontmatter.summary}</div>
      )}

      <div className="tags">
        {post.frontmatter.tags.map((tag: string) => {
          return (
            <span key={tag} className="item">
              <a href={`/tags/${tag}`}>
                <i className="las la-tag"></i>
                {tag}
              </a>
            </span>
          );
        })}
      </div>

      <div className="signiture">
        <div className="title">
          <span className="label">글쓴이</span>
          <span className="name">쿠스, Qus</span>
        </div>
        <div className="desc">
          직업은 소프트웨어 개발자, 웹 프론트엔드 & 백엔드 개발을 하고 있습니다.
          <br />
          기술로 사회문제를 해결하는 시빅해킹(Civic Hacking)에 관심이 많고,{' '}
          <br className="invisible-mobile" />
          취미로는 3D프린터를 활용한 메이커 활동도 하고 있습니다.
        </div>
        <div className="extra-info">
          <a href="https://qustory.com/" target="_blank">
            더 궁금하다면...
            <i className="la la-external-link-alt" />
          </a>
        </div>
      </div>

      <Disqus
        theme={theme}
        path={post.fields.slug}
        title={post.frontmatter.title}
        identifier={post.id}
      />
    </div>
  );
};

export default Container;
