import { errorText } from '../../../pages/Signup/SignupForm.style';
import { SignupFormType } from '../../../types/Signup';

interface Props {
  errors: SignupFormType;
  errorFields: { key: string; label: string }[];
}

const ErrorFields = ({ errors, errorFields }: Props) => {
  return (
    <>
      {errorFields.map(({ key, label }) => (
        <div
          key={key}
          className={errorText(
            errors[key as keyof SignupFormType].length > 0,
            errorFields
              .filter(({ key: otherKey }) => otherKey !== key)
              .every(({ key: otherKey }) => !errors[otherKey as keyof SignupFormType]) &&
              errors[key as keyof SignupFormType].length > 0,
          )}
        >
          {`${label}: ${errors[key as keyof SignupFormType]}`}
        </div>
      ))}
    </>
  );
};

export default ErrorFields;
