import { css } from '../../../styled-system/css';
import Dot from '../base/Dot';

interface Props {
  text: string;
  news: string;
  isFirstItem?: boolean;
}

const ListItem = ({ text, news, isFirstItem = false }: Props) => {
  return (
    <li className={container} style={{ marginTop: isFirstItem ? 0 : '1.7rem' }}>
      <span className={textStyle}>{text}</span>
      <div className={dotWrapper}>
        <Dot />
      </div>
      <span className={newspaper}>{news}</span>
    </li>
  );
};

export default ListItem;

const container = css({
  width: '34.3rem',
  height: '2rem',
  fontSize: '1.47rem',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
});

const textStyle = css({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  width: '100%',
  marginRight: '0.5rem',
});

const newspaper = css({
  whiteSpace: 'nowrap',
  fontSize: '1.35rem',
  color: '#606060',
});

const dotWrapper = css({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '0.2rem',
});
