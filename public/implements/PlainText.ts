import type { IUserConfig } from "../interfaces/IUserConfig";
import { UserConfig } from "./UserConfig.js";
import { IComponent } from "../interfaces/IComponent";
import { IText } from "../interfaces/IText";
export class PlainText implements IComponent,IText {
  StyleSheet: string;
  Script: string;  
  ParentId: string;
  SelfId: string;
  Type: string;
  ClassName: string;
  TextContent: string;
  Children: IUserConfig[];
  constructor(iUserConfig: IUserConfig) {
    this.StyleSheet = "../style/PlainText.css";
    this.Script = "../Component/PlainText.js";    
    this.ParentId = iUserConfig.ParentId;
    this.SelfId = iUserConfig.SelfId;
    this.Type = iUserConfig.Type;
    this.ClassName = iUserConfig.ClassName;
    this.TextContent = iUserConfig.TextContent;
    this.Children = (iUserConfig.Children ?? []).map(
      (child: Partial<IUserConfig>) => new UserConfig(child,this.SelfId)
    );
  }

  Render(): void {
    const plainText = document.createElement('p');
    plainText.className = this.ClassName;
    plainText.textContent = this.TextContent;
    var parent = document.getElementById(this.ParentId);
    if (parent) {
      parent.appendChild(plainText);
    }  
  }
}



