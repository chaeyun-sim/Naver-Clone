import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getHoliday } from '../../../api/service';
import { css } from '../../../../styled-system/css';
import classNames from 'classnames';

type Holiday = {
  dateKind: string;
  dateName: string;
  isHoliday: string;
  kst: string;
  locdate: number;
  seq: number;
  sunLongitude: number;
};

const CalendarWidget = () => {
  const week = ['일', '월', '화', '수', '목', '금', '토'];
  const [currentHoliday, setCurrentHoliday] = useState<Holiday[]>([]);
  const [lock, setLock] = useState<boolean>(false);
  const [calendarData, setCalendarData] = useState<number[][]>([]);

  const currentDate = () => new Date().toISOString().split('T')[0];

  useQuery(['get-holiday', currentDate()], async () => getHoliday(), {
    onSuccess: (data) => {
      if (data) {
        const today = currentDate().replace(/-/g, '');
        const newData = data.filter((el) => el.locdate === Number(today));
        setCurrentHoliday(newData);
      }
    },
  });

  useEffect(() => {
    setCalendarData(generateCalendar());
  }, []);

  const generateCalendar = () => {
    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;

    const firstDay = new Date(year, month - 1, 1);
    const lastDay = new Date(year, month, 0);
    const firstWeekday = firstDay.getDay();
    const lastDate = lastDay.getDate();

    const calendarData = [];
    let week = [];

    for (let i = 0; i < firstWeekday; i++) {
      week.push(0);
    }

    for (let day = 1; day <= lastDate; day++) {
      week.push(day);
      if (week.length === 7) {
        calendarData.push(week);
        week = [];
      }
    }

    if (week.length) {
      while (week.length < 7) {
        week.push(0);
      }
      calendarData.push(week);
    }

    return calendarData;
  };

  const getLastMonthLastWeek = () => {
    const today = new Date();
    const lastDay = new Date(today.getFullYear(), today.getMonth(), 0);
    const day = lastDay.getDay();
    const date = lastDay.getDate();

    const lastMonthLastWeek = [];

    for (let i = 0; i <= day; i++) {
      lastMonthLastWeek.push(date - i);
    }

    return lastMonthLastWeek.reverse();
  };

  return (
    <div className={calendar}>
      <div className={calendarInfo}>
        <a className={infoTitle}>캘린더</a>
        <div className={infoBox}>
          <a className={infoDate} href={`https://m.calendar.naver.com/#events/${currentDate()}`}>
            {currentDate().split('-').slice(1).map(Number).join('.')}
            <span className={day}>{week[new Date().getDay()]}</span>
          </a>
          <a
            className={linkInfoList}
            href={`https://m.calendar.naver.com/#events/${currentDate()}`}
          >
            <ul className={infoList}>
              {currentHoliday.slice(0, 2).map((day) => (
                <li key={day.seq} className={holiday}>
                  <span className={itemText}>
                    <span className={itemTag(true)}></span>
                    {day.dateName}
                  </span>
                </li>
              ))}
              {!currentHoliday.length && (
                <li className={infoItem}>
                  <span className={infoItemText}>일정이 없습니다.</span>
                </li>
              )}
              {lock && (
                <li className={holiday}>
                  <span className={itemText}>
                    <span className={itemTag(false)}></span>
                    일정
                  </span>
                  <span className={itemNumber}>0</span>
                </li>
              )}
            </ul>
          </a>
        </div>
      </div>
      <div className={calendarTable}>
        <button type="button" className={btnTable} onClick={() => setLock(!lock)}>
          <i className={tableLock(lock)}></i>
        </button>
        <a href="https://m.calendar.naver.com/#monthly" className={linkTableInfo}>
          <table className={table}>
            <thead className={classNames(head, tableCommon)}>
              <tr className={classNames(row, tableCommon)}>
                {week.map((day) => (
                  <th key={day} className={days(day === '일')}>
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className={classNames(body, tableCommon)}>
              <tr className={row}>
                {calendarData[0]?.map((day, index) => {
                  if (day === 0) {
                    return (
                      <td key={index} className={date(index === 0, true)}>
                        {getLastMonthLastWeek()[index]}
                      </td>
                    );
                  } else {
                    return (
                      <td key={index} className={date(index === 0, false)}>
                        {day}
                      </td>
                    );
                  }
                })}
              </tr>
              <tr className={row}>
                {calendarData[1]?.map((day, index) => (
                  <td key={index} className={date(index === 0, day === 0)}>
                    {day}
                  </td>
                ))}
              </tr>
              <tr className={row}>
                {calendarData[2]?.map((day, index) => (
                  <td key={index} className={date(index === 0, day === 0)}>
                    {day}
                  </td>
                ))}
              </tr>
              <tr className={row}>
                {calendarData[3]?.map((day, index) => (
                  <td key={index} className={date(index === 0, day === 0)}>
                    {day}
                  </td>
                ))}
              </tr>
              {calendarData[4] && (
                <tr className={row}>
                  {calendarData[4]?.map((day, index) => {
                    if (calendarData[5][index]) {
                      return (
                        <td
                          key={index}
                          className={classNames(date(index === 0, day === 0), divider)}
                        >
                          <span className={upperDate}>{day}</span>
                          <span className={lowerDate}>{calendarData[5][index]}</span>
                        </td>
                      );
                    } else {
                      return (
                        <td key={index} className={date(index === 0, day === 0)}>
                          {day}
                        </td>
                      );
                    }
                  })}
                </tr>
              )}
            </tbody>
          </table>
        </a>
      </div>
    </div>
  );
};

export default CalendarWidget;

const calendar = css({
  display: 'flex',
  padding: '0.9rem 0.7rem',
});

const calendarInfo = css({
  position: 'relative',
  flex: 1,
  minWidth: 0,
});

const infoTitle = css({
  color: '#080808',
  display: 'block',
  paddingLeft: '1.1rem',
  fontSize: '1.5rem',
  lineHeight: '3.4rem',
  fontWeight: '800',
  cursor: 'pointer',
});

const infoBox = css({
  height: '13.2rem',
  paddingLeft: '1.1rem',
  textDecoration: 'none!important',
});

const infoDate = css({
  display: 'block',
  margin: '0.8rem 0 0 -0.1rem',
  fontSize: '3.9rem',
  lineHeight: '3.6rem',
  letterSpacing: '-0.2rem',
  textDecoration: 'none!important',
});

const day = css({
  display: 'inline-block',
  margin: '1.6rem 0 0 0.9rem',
  fontSize: '1.3rem',
  lineHeight: '2rem',
  verticalAlign: 'top',
});

const linkInfoList = css({
  display: 'block',
  textDecoration: 'none!important',
  color: 'inherit',
});

const infoList = css({
  marginTop: '1.9rem',
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem',
});

const holiday = css({
  display: 'flex',
  lineHeight: '2rem',
});

const itemText = css({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  listStyle: 'none',
  fontSize: '1.45rem',
});

const itemTag = (isHoliday: boolean) =>
  css({
    backgroundColor: isHoliday ? '#EB5B5B' : '#705af9',
    width: '0.3rem',
    height: '1.3rem',
    margin: '0.3rem 0.8rem 0 0',
    display: 'inline-block',
    borderRadius: '0.2rem',
    verticalAlign: 'top',
  });

const itemNumber = css({
  paddingLeft: '0.4rem',
  fontWeight: 'bold',
  color: '#9155E5',
});

const infoItem = css({
  display: 'flex',
  lineHeight: '2rem',
});

const infoItemText = css({
  color: '#606060',
  textDecoration: 'none!important',
});

const calendarTable = css({
  position: 'relative',
  flex: 1,
});

const btnTable = css({
  position: 'absolute',
  top: 0,
  right: '0.1rem',
  width: '4rem',
  height: '3.4rem',
});

const tableLock = (isLocked: boolean) =>
  css({
    width: '2.8rem',
    height: '2.8rem',
    position: 'relative',
    display: 'inline-block',
    borderRadius: '50%',
    backgroundColor: isLocked ? '#e0e0e0' : '#dfdafc',
    verticalAlign: 'top',
    cursor: 'pointer',
    '&::before': {
      content: '""',
      display: 'block',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: 'url(https://pm.pstatic.net/resources/asset/sp_main.ae81c9d5.png)',
      backgroundSize: '44.4rem 43.4rem',
      backgroundPosition: isLocked ? '0 -38.4rem' : '-23.9rem -29.9rem',
      backgroundRepeat: 'no-repeat',
      width: '2rem',
      height: '2rem',
      margin: 'auto',
    },
  });

const linkTableInfo = css({
  display: 'block',
  width: '16.8rem',
  paddingLeft: '0.9rem',
  marginTop: '4rem',
  textDecoration: 'none!important',
});

const table = css({
  width: '100%',
  tableLayout: 'fixed',
  borderCollapse: 'collapse',
  fontSize: '1.4rem',
  lineHeight: '1.7rem',
});

const head = css({
  display: 'table-header-group',
});

const body = css({
  display: 'table-row-group',
});

const row = css({
  display: 'table-row',
});

const tableCommon = css({
  verticalAlign: 'middle',
  borderColor: 'inherit',
});

const days = (isSunday: boolean) =>
  css({
    color: isSunday ? '#EB5B5B' : '#101010',
    fontSize: '1.25rem',
    textAlign: 'center',
    width: '2.4rem',
    height: '2.7rem',
    fontWeight: '700',
  });

const date = (isSunday: boolean, isLastMonth?: boolean) =>
  css({
    width: '2.4rem',
    height: '2rem',
    position: 'relative',
    color: isSunday ? '#EB5B5B' : '#101010',
    opacity: isLastMonth ? 0.6 : 1,
    textAlign: 'center',
    fontSize: '1.2rem',
  });

const divider = css({
  '&::after': {
    content: '""',
    display: 'block',
    pos: 'absolute',
    top: '1rem',
    left: '0.6rem',
    width: '1.1rem',
    height: '0.05rem',
    backgroundColor: '#D3D5D7',
    transform: 'rotate(-60deg)',
  },
});

const upperDate = css({
  position: 'absolute',
  top: 0,
  left: '0.1rem',
  transform: 'scale(0.8)',
  fontSize: '1rem',
  lineHeight: '1.4rem',
  fontWeight: '500',
});

const lowerDate = css({
  color: '#606060',
  opacity: 0.6,
  position: 'absolute',
  top: '0.5rem',
  bottom: '0.1rem',
  left: '1rem',
  transform: 'scale(0.8)',
  fontSize: '1rem',
  lineHeight: '1.4rem',
  fontWeight: '500',
});
