import { css } from '../../../styled-system/css';
import Dot from '../base/Dot';

const MallNameGroup = () => {
  const malls = [
    ['쿠팡', 'G마켓', '옥션', '11번가'],
    ['SSG닷컴', '올리브영', 'CJ온스타일', '위메프'],
    ['GS SHOP', '하프클럽', '패션플러스'],
  ];

  return (
    <div className={conatiner}>
      {malls.map((data) => {
        return (
          <div className={box}>
            {data.map((item, index) => (
              <>
                <div className={row}>
                  {['11번가', 'SSG닷컴', 'GS SHOP'].includes(item) ? (
                    <strong className={name}>{item}</strong>
                  ) : (
                    <span className={name}>{item}</span>
                  )}
                </div>
                {index < data.length - 1 && <Dot />}
              </>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default MallNameGroup;

const conatiner = css({
  width: '24.8rem',
  height: '8.8rem',
  padding: '0.9rem 1.1rem 0.4rem',
  border: '0.1rem solid rgba(0,0,0,0.05)',
  backgroundColor: 'rgba(245,248,251,0.6)',
});

const row = css({
  paddingBottom: '0.5rem',
  display: 'flex',
  flexDirection: 'row',
});

const box = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const name = css({
  fontSize: '1.3rem',
  letterSpacing: '-0.06rem',
});
