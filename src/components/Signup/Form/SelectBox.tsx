import classNames from 'classnames';
import { useState } from 'react';
import {
  formItem,
  globalIcon,
  select,
  selectBox,
  selectItem,
} from '../../../pages/Signup/SignupForm.style';
import { useQuery } from 'react-query';
import { getCountries } from '../../../api/service';

interface Props {
  isError: boolean;
  onSetCountry: (country: string) => void;
}

const SelectBox = ({ isError, onSetCountry }: Props) => {
  const [countriesData, setCountriesData] = useState([]);

  const { refetch } = useQuery(['countries-data'], getCountries, {
    onSuccess: (data) => {
      if (data) {
        setCountriesData(data);
      } else {
        refetch();
      }
    },
  });

  return (
    <div className={classNames(formItem(false, isError), globalIcon)}>
      <div className={selectBox}>
        <select className={select} defaultValue={'South Korea'}>
          {countriesData.map((el) => (
            <option
              key={el[0]}
              className={selectItem}
              value={el[0]}
              selected={el[2] === '대한민국'}
              onClick={() => onSetCountry(el[2])}
            >{`${el[2]} ${el[1]}`}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectBox;
