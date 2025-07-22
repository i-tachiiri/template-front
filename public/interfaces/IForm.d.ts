import { IComponent } from "./IComponent";
export interface IForm extends IComponent{
  Placeholder: string;
  LabelName: string,
  Required: boolean,
}