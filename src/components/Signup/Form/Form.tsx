import classNames from 'classnames';
import { formItem, input } from '../../../pages/Signup/SignupForm.style';

interface Props {
  placeholder: string;
  isFocused: boolean;
  isError: boolean;
  isLastItem?: boolean;
  noOutline?: boolean;
  icon: () => string;
  value: string;
  onChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: () => void;
  onBlur: () => void;
  endAdornment: () => JSX.Element;
  type?: string;
  style?: React.CSSProperties;
}

const Form = ({
  placeholder,
  isFocused,
  isError,
  isLastItem,
  noOutline,
  icon,
  value,
  onChangeValue,
  onFocus,
  onBlur,
  endAdornment,
  type = 'text',
  style,
}: Props) => {
  return (
    <div className={classNames(formItem(isFocused, isError, isLastItem, noOutline), icon())}>
      <input
        type={type}
        className={input(isError)}
        placeholder={placeholder}
        value={value}
        onChange={onChangeValue}
        maxLength={20}
        autoCapitalize="off"
        onFocus={onFocus}
        onBlur={onBlur}
        style={style}
      />
      {endAdornment()}
    </div>
  );
};

export default Form;
