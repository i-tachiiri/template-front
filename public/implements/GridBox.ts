import type { IComponent } from "../interfaces/IComponent";
import { UserConfig } from "./UserConfig.js";
import type { IUserConfig } from "../interfaces/IUserConfig";

export class GridBox implements IComponent {
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
    this.StyleSheet = "/style/GridBox.css";
    this.Script = "/Component/GridBox.js";
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
    const div = document.createElement('div');
    div.className = this.ClassName;
    div.id = this.SelfId;
    const parent = document.getElementById(this.ParentId);
    if (parent) {
      parent.appendChild(div);
    }  
  }
}



