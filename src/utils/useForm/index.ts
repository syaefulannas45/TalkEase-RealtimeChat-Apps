import {useState} from 'react';

export const useForm = <T>(initialValue: T) => {
  const [values, setValues] = useState<T>(initialValue);

  const resetValues = () => {
    setValues(initialValue);
  };

  const setFormValue = (formType: keyof T, formValue: T[keyof T]) => {
    setValues({...values, [formType]: formValue});
  };

  return [values, setFormValue, resetValues] as const;
};
