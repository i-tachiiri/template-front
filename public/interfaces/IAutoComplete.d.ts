import { IComponent } from "./IComponent";
export interface IAutoComplete extends IComponent{
  Placeholder: string;
  LabelName: string;
  Required: boolean;
  fetchSuggestions():void;
}