import { HTMLInputTypeAttribute } from 'react';

export interface IInputTypes {
  onChange?: (
    e?: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  placeholder?: string;
  inputType?: string;
  type: HTMLInputTypeAttribute;
  name: string;
  value: string | number | any;
}

export type IInputArrayTypes<T> = {
  name: keyof T;
  type: string;
  inputType: string;
  placeholder: string;
}[];
