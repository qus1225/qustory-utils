import React from 'react';
import { Disqus } from 'gatsby-plugin-disqus';
import styled from 'styled-components';
import { Theme, THEME_LABEL } from '../types';

const StyledDiv = styled.div`
  padding-top: 50px;
`;

export interface IProps {
  path: string;
  identifier: string;
  title: string;
  theme: Theme;
}

const Container = (props: IProps) => {
  const disqusConfig = {
    url: `https://${THEME_LABEL[props.theme].EN.toLowerCase()}.qustory.com${
      props.path
    }`,
    identifier: props.identifier,
    title: props.title
  };
  return (
    <StyledDiv>
      <Disqus config={disqusConfig} />
    </StyledDiv>
  );
};

export default Container;
