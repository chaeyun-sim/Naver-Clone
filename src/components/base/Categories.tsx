import { css } from '../../../styled-system/css';

interface Props {
  renderLeft: () => JSX.Element;
  renderRight: () => JSX.Element;
}

const Categories = ({ renderLeft, renderRight }: Props) => {
  return (
    <div className={container}>
      <div>{renderLeft()}</div>
      <div>{renderRight()}</div>
    </div>
  );
};

export default Categories;

const container = css({
  height: '5rem',
  backgroundColor: '#F5F7F8',
  margin: '0 2rem 1.8rem',
  borderRadius: '0.4rem',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: '0 2rem',
});
