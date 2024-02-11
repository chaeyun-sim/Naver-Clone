import { css } from '../../../styled-system/css';

interface Props {
  icon: () => JSX.Element;
  name: string;
}

const ServiceBox = ({ icon, name }: Props) => {
  return (
    <button className={container}>
      <div className={circle}>{icon()}</div>
      {/* {icon()} */}
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
  width: '5.4rem',
  height: '5.4rem',
  background: `url(https://pm.pstatic.net/resources/asset/sp_main.ae81c9d5.png)`,
  backgroundSize: '444px 434px',
  backgroundPosition: '0px -128px',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const serviceName = css({
  textAlign: 'center',
  fontSize: '1.45rem',
});

const noServiceName = css({
  marginTop: '2.2rem',
});
