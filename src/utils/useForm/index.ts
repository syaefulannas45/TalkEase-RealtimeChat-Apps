import {useState} from 'react';

export const useForm = <T>(initialValue: T) => {
  const [values, setValues] = useState<T>(initialValue);

  return [
    values,
    (formType: keyof T, formValue: T[keyof T]) => {
      if (formType === 'reset') {
        return setValues(initialValue);
      }
      return setValues({...values, [formType]: formValue});
    },
  ] as const;
};
