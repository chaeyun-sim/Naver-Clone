import React from 'react';
import { css } from '../../../styled-system/css';
import classNames from 'classnames';

interface Props {
  height: string;
  children: React.ReactNode;
}

const Section = ({ height, children }: Props) => {
  return <section className={classNames(section, css({ height: height }))}>{children}</section>;
};

export default Section;

const section = css({
  width: '100%',
  border: '0.1rem solid #EBEBEB',
  borderRadius: '0.8rem',
  boxSizing: 'border-box',
  backgroundColor: '#fff',
  marginTop: '1.6rem',
  boxShadow: '0 0 0 1px #e3e5e8, 0 1px 2px 0 rgba(0,0,0,.04)',
});
