import { UserConfig } from "./UserConfig.js";
export class PlainText {
    constructor(iUserConfig) {
        this.StyleSheet = "../style/PlainText.css";
        this.Script = "../Component/PlainText.js";
        this.ParentId = iUserConfig.ParentId;
        this.SelfId = iUserConfig.SelfId;
        this.Type = iUserConfig.Type;
        this.ClassName = iUserConfig.ClassName;
        this.TextContent = iUserConfig.TextContent;
        this.Children = (iUserConfig.Children ?? []).map((child) => new UserConfig(child, this.SelfId));
    }
    Render() {
        const plainText = document.createElement('p');
        plainText.className = this.ClassName;
        plainText.textContent = this.TextContent;
        var parent = document.getElementById(this.ParentId);
        if (parent) {
            parent.appendChild(plainText);
        }
    }
}
