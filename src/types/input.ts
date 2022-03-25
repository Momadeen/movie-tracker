import { HTMLInputTypeAttribute } from "react";
import { IFormTypes } from "./form";

export interface IInputTypes {
  onChange?: (e: any) => void;
  placeholder?: string;
  inputType?: string;
  type: HTMLInputTypeAttribute;
  name: string;
  value: string | number | any;
}

export type IInputArrayTypes = {
  name: keyof IFormTypes;
  type: string;
  inputType: string;
  placeholder: string;
}[];
