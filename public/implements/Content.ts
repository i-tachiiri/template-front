import type { IComponent } from "../interfaces/IComponent";
import type { IUserConfig } from "../interfaces/IUserConfig";
import { UserConfig } from "./UserConfig.js";

export class Content implements IComponent {
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
    this.StyleSheet = "/style/Content.css";
    this.Script = "/Component/Content.js";
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



