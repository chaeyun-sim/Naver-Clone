import { css } from '../../../styled-system/css';

interface Props {
  icon: () => JSX.Element;
  name: string;
}

const ServiceBox = ({ icon, name }: Props) => {
  return (
    <button className={container}>
      <div className={circle}>{icon()}</div>
      {name !== '없음' ? (
        <span className={serviceName}>{name}</span>
      ) : (
        <span className={noServiceName} />
      )}
    </button>
  );
};

export default ServiceBox;

const container = css({
  width: '6.13rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '0.4rem',
  position: 'relative',
  cursor: 'pointer',
});

const circle = css({
  width: '11.3rem',
  height: '11rem',
  background: `url(https://pm.pstatic.net/resources/asset/sp_main.ae81c9d5.png) no-repeat 3px -252px`,
  zoom: 0.5,
  marginTop: '-0.7rem',
  marginLeft: '-0.3rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: '1.1rem',
});

const serviceName = css({
  textAlign: 'center',
  fontSize: '1.45rem',
});

const noServiceName = css({
  marginTop: '2.2rem',
});
