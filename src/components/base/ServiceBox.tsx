import { css } from '../../../styled-system/css';

interface Props {
  icon: () => JSX.Element;
}

const ServiceBox = ({ icon }: Props) => {
  return (
    <div className={container}>
      <div className={circle}>{icon()}</div>
      <span className={name}>메일</span>
    </div>
  );
};

export default ServiceBox;

const container = css({
  width: '6.4rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.7rem',
  position: 'relative',
});

const circle = css({
  width: '11.3rem',
  height: '11.4rem',
  background: `url(https://pm.pstatic.net/resources/asset/sp_main.ae81c9d5.png) no-repeat 3px -252px`,
  zoom: '0.53',
  marginTop: '-0.2rem',
  marginLeft: '-0.3rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const name = css({
  textAlign: 'center',
  fontSize: '1.4rem',
});
