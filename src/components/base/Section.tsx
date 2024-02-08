import React from 'react';
import { css } from '../../../styled-system/css';

interface Props {
  height: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const Section = ({ height, children, style }: Props) => {
  const section = css({
    height,
    width: '100%',
    border: '1px solid #EBEBEB',
    borderRadius: '0.8rem',
    boxSizing: 'border-box',
    backgroundColor: '#fff',
    boxShadow: '0 0 0 1px #e3e5e8, 0 1px 2px 0 rgba(0,0,0,.04)',
    ...style,
  });

  return <section className={section}>{children}</section>;
};

export default Section;
