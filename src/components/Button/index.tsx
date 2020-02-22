import React from 'react';
import './index.scss';
import { Link } from 'gatsby';

interface IProps {
  label: any;
  link: string;
  className?: string;
  notYet?: boolean;
}
const Component = (props: IProps) => {
  return (
    <div
      className={`component-container ${
        props.className ? props.className : ''
      }`}
    >
      {props.notYet ? (
        <a>{props.label}</a>
      ) : (
        <Link to={props.link}>{props.label}</Link>
      )}
    </div>
  );
};

export default Component;
