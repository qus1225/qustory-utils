import React from 'react';
import './index.scss';
import Disqus from '../Disqus';
import { Theme, CategoryType } from '../../types';
import PostListSimple from '../PostListSimple';

interface IOtherPosts {
  previous: any;
  node: any;
  next: any;
}

interface IProps {
  post: any;
  theme: Theme;
  otherPostsList?: Array<IOtherPosts>;
}
const Container = ({ post, theme, otherPostsList }: IProps) => {
  const otherPosts: IOtherPosts = otherPostsList
    ? otherPostsList.find((item) => item.node.fields.slug === post.fields.slug)
    : (null as any);

  let postList: Array<any> = [];
  if (otherPosts) {
    postList = [];
    postList = otherPosts.previous ? (postList = [otherPosts.previous]) : [];
    postList = otherPosts.next
      ? (postList = [...postList, otherPosts.next])
      : postList;
  }

  return (
    <div className="post-container">
      <div className="intro">
        <h1 className="title">{post.frontmatter.title}</h1>

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
          {post.fields.prefix ? post.fields.prefix : 'Draft'}
        </div>
      </div>

      <div className="body">
        <div
          className="markdown-body"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>

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
          직업은 소프트웨어 개발자.
          <br />
          기술로 사회문제를 해결하는 시빅해킹(Civic Hacking)에 관심이 많고,{' '}
          <br />
          이것저것 생각나는 것들을 글로 정리하는 것을 좋아합니다.
          {/* <br className="invisible-mobile" /> */}
        </div>
        <div className="footer">
          <a className="mailto" href="mailto:qus1225@gmail.com">
            <i className="las la-envelope"></i>
          </a>
          <div className="extra-info">
            <a href="https://qustory.com/" target="_blank">
              더 궁금하다면...
              <i className="la la-external-link-alt" />
            </a>
          </div>
        </div>
      </div>

      {postList.length > 0 && (
        <div className="other-posts-container">
          <PostListSimple
            categoryType={CategoryType.SERIES}
            title={`'${post.fields.series}' 시리즈의 다른 이야기들`}
            postList={postList}
            desc={post.fields.seriesDescription}
          />
        </div>
      )}

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
