import { css } from '../../../styled-system/css';

export const container = css({
  width: '50rem',
  margin: '0 auto',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
});

export const header = css({
  padding: '1.6rem 0 1.6rem 2rem',
});

export const logo = css({
  backgroundImage: 'url(https://ssl.pstatic.net/static/nid/join/m_sp_06_realname_48b1e603.png)',
  backgroundSize: '37.2rem 32.6rem',
  backgroundPosition: '0 -24.4rem',
  backgroundRepeat: 'no-repeat',
  width: '9.4rem',
  height: '1.8rem',
});

export const content = css({
  flex: '1 1 auto',
  height: '100%',
  padding: '3rem 2rem 0 2rem',
});

export const joinByVerifiedName = css({
  width: '100%',
  marginTop: '-1.3rem',
  textAlign: 'right',
});

export const joinByVerifiedNameText = css({
  position: 'relative',
  paddingRight: '2.3rem',
  fontSize: '1.3rem',
  lineHeight: '1.8rem',
  letterSpacing: '-0.04rem',
  color: '#929294',
});

export const unchecked = css({
  backgroundImage: 'url(https://ssl.pstatic.net/static/nid/join/m_sp_06_realname_48b1e603.png)',
  backgroundPosition: '-342px -248px',
});

export const checked = css({
  backgroundImage: 'url(https://ssl.pstatic.net/static/nid/join/m_sp_06_realname_48b1e603.png)',
  backgroundPosition: '-342px -270px',
});

export const checkedIcon = css({
  backgroundSize: '372px 326px',
  backgroundRepeat: 'no-repeat',
  width: '2rem',
  height: '2rem',
  position: 'absolute',
  top: 0,
  right: 0,
  marginTop: '-0.15rem',
  cursor: 'pointer',
});

export const formList = css({
  height: '15rem',
  margin: '1rem 0',
  borderRadius: '0.6rem',
  border: '1px solid #C6C6C6',
});

export const formItem = (
  isFocused: boolean,
  isError: boolean,
  isLastItem?: boolean,
  noOutline?: boolean,
) =>
  css({
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    boxSizing: 'border-box',
    maxWidth: '100%',
    minHeight: '5rem',
    padding: '0 1rem 0 4.5rem',
    borderBottom: isLastItem || isFocused ? 'none' : '1px solid #DFDFDF',
    outline:
      isFocused && !noOutline && !isError
        ? '2px solid #09AA5C'
        : isError
          ? '2px solid #ff3f3f'
          : 'none',
    textDecoration: isError ? 'underline' : 'none',
    textDecorationColor: isError ? '#ff3f3f' : 'none',
    '&:first-of-type': {
      borderTopLeftRadius: '0.6rem',
      borderTopRightRadius: '0.6rem',
    },
    '&:last-of-type': {
      borderBottomLeftRadius: '0.6rem',
      borderBottomRightRadius: '0.6rem',
    },
  });

export const input = (isError: boolean) =>
  css({
    boxSizing: 'border-box',
    outline: 'none',
    width: '100%',
    fontSize: '1.6rem',
    fontWeight: '500',
    lineHeight: '2.2rem',
    color: isError ? '#ff3f3f' : '#222',
    cursor: 'pointer',
    '&::placeholder': {
      color: isError ? '#ff3f3f' : 'none',
    },
  });

export const email = css({
  flex: 'none',
  padding: '0 0.4rem 0 0.6rem',
  fontSize: '1.5rem',
  fontWeight: '500',
  lineHeight: '2.2rem',
  letterSpacing: '-.2px',
  color: '#767678',
});

export const showOrNot = css({
  flex: 'none',
  padding: '0 0.5rem',
  position: 'relative',
});

export const showOrNotButton = css({
  marginLeft: '0.4rem',
  verticalAlign: 'middle',
  cursor: 'pointer',
});

export const genderList = css({
  width: '100%',
  listStyle: 'none',
});

export const radioItem = (itemNumber: number) =>
  css({
    borderRadius:
      itemNumber === 1 ? '0.4rem 0 0 0.4rem' : itemNumber === 3 ? '0 0.4rem 0.4rem 0' : 'none',
    width: 100 / 3 + '%',
    display: 'inline-block',
    verticalAlign: 'top',
    border: '1px solid #C6C6C6',
    cursor: 'pointer',
    '&:not(:first-child):not(:last-child)': {
      borderLeft: 'none',
      borderRight: 'none',
    },
  });

export const gender = (isFocused: boolean) =>
  css({
    display: 'block',
    position: 'relative',
    boxSizing: 'border-box',
    width: '100%',
    padding: '0.6rem 0',
    borderRadius: 'inherit',
    outline: isFocused ? '1px solid #09AA5C' : 'none',
    fontSize: '1.3rem',
    fontWeight: '500',
    lineHeight: '1.8rem',
    color: isFocused ? '#09AA5C' : '#929294',
    textAlign: 'center',
    cursor: 'pointer',
  });

export const selectBox = css({
  flex: '1 1 auto',
  position: 'realtive',
  padding: '0.1rem 0 0.1rem 0',
  display: 'block',
  '&::after': {
    content: '""',
    backgroundImage: 'url(https://ssl.pstatic.net/static/nid/join/m_sp_06_realname_48b1e603.png)',
    backgroundSize: '37.2rem 32.6rem',
    backgroundPosition: '-9.6rem -24.4rem',
    backgroundRepeat: 'no-repeat',
    width: '1.6rem',
    height: '1.7rem',
    position: 'absolute',
    top: '50%',
    right: '1rem',
    transform: 'translateY(-50%)',
  },
});

export const select = css({
  width: '100%',
  fontSize: '1.6rem',
  lineHeight: '2.2rem',
  color: '#222',
  appearance: 'none',
  WebkitAppearance: 'none',
  cursor: 'pointer',
  outline: 'none',
});

export const selectItem = css({
  fontWeight: 'normal',
  display: 'block',
  minHeight: '1.6rem',
  lineHeight: '2.2rem',
  color: '#222',
  padding: '0 0.2rem 0.1rem',
});

export const errorText = (visible: boolean, isFirstItem?: boolean) =>
  css({
    display: visible ? 'flex' : 'none',
    position: 'relative',
    paddingLeft: '0.8rem',
    letterSpacing: '-.4px',
    margin: isFirstItem ? '1rem 0.4rem 0' : '0 0.4rem 0',
    fontSize: '1.3rem',
    lineHeight: '1.8rem',
    color: '#ff3f3f',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '0.7rem',
      left: 0,
      width: '0.3rem',
      height: '0.3rem',
      borderRadius: '50%',
      background: '#ff3f3f',
    },
  });

// icons

export const personIcon = (hasItem?: boolean) =>
  css({
    '&::before': {
      content: '""',
      backgroundImage: 'url(https://ssl.pstatic.net/static/nid/join/m_sp_06_realname_48b1e603.png)',
      backgroundSize: '37.2rem 32.6rem',
      backgroundPosition: hasItem ? '-31rem -16rem' : '-34.2rem -6.4rem',
      backgroundRepeat: 'no-repeat',
      width: '3rem',
      height: '3rem',
      position: 'absolute',
      top: '1rem',
      left: '0.9rem',
    },
  });

export const lockerIcon = (hasItem?: boolean) =>
  css({
    '&::before': {
      content: '""',
      backgroundImage: 'url(https://ssl.pstatic.net/static/nid/join/m_sp_06_realname_48b1e603.png)',
      backgroundSize: '37.2rem 32.6rem',
      backgroundPosition: hasItem ? '-31rem -6.4rem' : '-31rem -0rem',
      backgroundRepeat: 'no-repeat',
      width: '3rem',
      height: '3rem',
      position: 'absolute',
      top: '1rem',
      left: '0.9rem',
    },
  });

export const hideOrShowIcon = (show: boolean) =>
  css({
    '&::after': {
      content: '""',
      backgroundImage: 'url(https://ssl.pstatic.net/static/nid/join/m_sp_06_realname_48b1e603.png)',
      backgroundSize: '37.2rem 32.6rem',
      backgroundPosition: show ? '-25.6rem -29.6rem' : '-25.6rem -26.4rem',
      backgroundRepeat: 'no-repeat',
      width: '3rem',
      height: '3rem',
      position: 'absolute',
      top: 0,
      right: 0,
    },
  });

export const envelopeIcon = (hasItem?: boolean) =>
  css({
    '&::before': {
      content: '""',
      backgroundImage: 'url(https://ssl.pstatic.net/static/nid/join/m_sp_06_realname_48b1e603.png)',
      backgroundSize: '37.2rem 32.6rem',
      backgroundPosition: hasItem ? '-21.6rem -12.8rem' : '-9.6rem -29.6rem',
      backgroundRepeat: 'no-repeat',
      width: '3rem',
      height: '3rem',
      position: 'absolute',
      top: '1rem',
      left: '0.9rem',
    },
  });

export const calendarIcon = (hasItem: boolean) =>
  css({
    '&::before': {
      content: '""',
      backgroundImage: 'url(https://ssl.pstatic.net/static/nid/join/m_sp_06_realname_48b1e603.png)',
      backgroundSize: '37.2rem 32.6rem',
      backgroundPosition: hasItem ? '-3.2rem -29.6rem' : '-19.2rem -29.6rem',
      backgroundRepeat: 'no-repeat',
      width: '3rem',
      height: '3rem',
      position: 'absolute',
      top: '1rem',
      left: '0.9rem',
    },
  });

export const globalIcon = css({
  '&::before': {
    content: '""',
    backgroundImage: 'url(https://ssl.pstatic.net/static/nid/join/m_sp_06_realname_48b1e603.png)',
    backgroundSize: '37.2rem 32.6rem',
    backgroundPosition: '-3.2rem -26.4rem',
    backgroundRepeat: 'no-repeat',
    width: '3rem',
    height: '3rem',
    position: 'absolute',
    top: '1rem',
    left: '0.9rem',
  },
});

export const phoneIcon = (hasItem: boolean) =>
  css({
    '&::before': {
      content: '""',
      backgroundImage: 'url(https://ssl.pstatic.net/static/nid/join/m_sp_06_realname_48b1e603.png)',
      backgroundSize: '37.2rem 32.6rem',
      backgroundPosition: hasItem ? '-16rem -29.6rem' : '-31rem -12.8rem',
      backgroundRepeat: 'no-repeat',
      width: '3rem',
      height: '3rem',
      position: 'absolute',
      top: '1rem',
      left: '0.9rem',
    },
  });
