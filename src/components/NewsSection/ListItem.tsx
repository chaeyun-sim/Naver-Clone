import { css } from '../../../styled-system/css';
import { List } from '../LeftSection/News/Entertainment';
import Dot from '../base/Dot';

interface Props {
  data: List;
  isFirstItem?: boolean;
}

const ListItem = ({ data, isFirstItem = false }: Props) => {
  return (
    <li className={container} style={{ marginTop: isFirstItem ? 0 : '1.7rem' }}>
      <a href={data.url} className={urlStyle}>
        <span className={textStyle}>{data.text}</span>
      </a>
      <div className={dotWrapper}>
        <Dot />
      </div>
      <span className={newspaper}>{data.editor}</span>
    </li>
  );
};

export default ListItem;

const container = css({
  width: '34.3rem',
  height: '2rem',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
});

const urlStyle = css({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  width: '100%',
});

const textStyle = css({
  marginRight: '0.5rem',
  fontSize: '1.47rem',
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
