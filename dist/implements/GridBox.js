import { UserConfig } from "./UserConfig.js";
export class GridBox {
    constructor(iUserConfig) {
        this.StyleSheet = "/style/GridBox.css";
        this.Script = "/Component/GridBox.js";
        this.ParentId = iUserConfig.ParentId;
        this.SelfId = iUserConfig.SelfId;
        this.Type = iUserConfig.Type;
        this.ClassName = iUserConfig.ClassName;
        this.LabelName = iUserConfig.LabelName;
        this.Placeholder = iUserConfig.Placeholder;
        this.Required = iUserConfig.Required;
        this.Children = (iUserConfig.Children ?? []).map((child) => new UserConfig(child, this.SelfId));
    }
    Render() {
        const div = document.createElement('div');
        div.className = this.ClassName;
        div.id = this.SelfId;
        const parent = document.getElementById(this.ParentId);
        if (parent) {
            parent.appendChild(div);
        }
    }
}
