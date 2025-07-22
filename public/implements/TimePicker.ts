import type { IUserConfig } from "../interfaces/IUserConfig";
import { UserConfig } from "./UserConfig.js";
import type { IForm } from "../interfaces/IForm";
import { IComponent } from "../interfaces/IComponent";
export class TimePicker implements IComponent,IForm {
  StyleSheet: string;
  Script: string;  
  ParentId: string;
  SelfId: string;
  Type: string;
  ClassName: string;
  LabelName: string;
  Required: boolean;
  Placeholder: string;
  Children: IUserConfig[];
  constructor(iUserConfig: IUserConfig) {
    this.StyleSheet = "../style/TimePicker.css";
    this.Script = "../Component/TimePicker.js";    
    this.ParentId = iUserConfig.ParentId;
    this.SelfId = iUserConfig.SelfId;
    this.Type = iUserConfig.Type;
    this.ClassName = iUserConfig.ClassName;
    this.LabelName = iUserConfig.LabelName;
    this.Placeholder = iUserConfig.Placeholder
    this.Required = iUserConfig.Required;
    this.Children = (iUserConfig.Children ?? []).map(
      (child: Partial<IUserConfig>) => new UserConfig(child,this.SelfId)
    );
  }

  Render(): void {
    const label = document.createElement('label');
    label.setAttribute('for', this.ClassName);
    label.className = this.ClassName;
    label.textContent = this.LabelName;
  
    const input = document.createElement('input');
    input.className = this.ClassName;
    input.type = 'time';
    input.name = this.ClassName;
    input.required = this.Required;
  
    var parent = document.getElementById(this.ParentId);
    if (parent) {
      parent.appendChild(label);
      parent.appendChild(input);    
    }  
  }
}



