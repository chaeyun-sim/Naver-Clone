import { css } from '../../../../styled-system/css';

export const article = (isFirstItem?: boolean) =>
  css({
    marginTop: isFirstItem ? 0 : '1.5rem',
    fontSize: '1.3rem',
    fontWeight: '500',
    lineHeight: '1.8rem',
    letterSpacing: '-.43px',
    color: ' #767678',
  });

export const articleTitle = css({
  letterSpacing: '-.38px',
  color: '#303038',
  fontSize: '1.55rem',
  fontWeight: '800',
});

export const articleSubTitle = css({
  marginTop: '1rem',
  fontSize: '1.2rem',
  lineHeight: '1.6rem',
  fontWeight: '700',
  color: '#303038',
  // color: '#767678',
});

export const articleText = css({
  marginTop: '0.5rem',
  fontFamily: 'Malgun Gothic,留묒� 怨좊뵓,Helvetica,sans-serif',
});

export const articleLink = css({
  color: '#09AA5C',
  textDecoration: 'none',
  cursor: 'pointer',
});

export const articleList = css({
  position: 'relative',
  paddingLeft: '2rem',
  display: 'flex',
  alignItems: 'center',
  '&::before': {
    width: '0.2rem',
    height: '0.2rem',
    position: 'absolute',
    top: '0.7rem',
    left: '0.8rem',
    background: '#8e8e8e',
    borderRadius: '50%',
    content: '""',
  },
});
