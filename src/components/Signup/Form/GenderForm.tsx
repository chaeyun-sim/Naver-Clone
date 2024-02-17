import classNames from 'classnames';
import { formItem, gender, genderList, radioItem } from '../../../pages/Signup/SignupForm.style';

interface Props {
  selectGender: string;
  onSetGender: (gender: string) => void;
}

const GenderForm = ({ selectGender, onSetGender }: Props) => {
  return (
    <div className={classNames(formItem(false, false, false))} style={{ padding: '0 1rem' }}>
      <ul className={genderList}>
        <li className={radioItem(1)}>
          <label className={gender(selectGender === 'M')} onClick={() => onSetGender('M')}>
            남자
          </label>
        </li>
        <li className={radioItem(2)}>
          <label className={gender(selectGender === 'F')} onClick={() => onSetGender('F')}>
            여자
          </label>
        </li>
        <li className={radioItem(3)}>
          <label className={gender(selectGender === 'None')} onClick={() => onSetGender('None')}>
            선택안함
          </label>
        </li>
      </ul>
    </div>
  );
};

export default GenderForm;
