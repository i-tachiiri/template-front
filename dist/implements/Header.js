import { UserConfig } from "./UserConfig.js";
export class Header {
    constructor(iUserConfig) {
        this.StyleSheet = "../style/Header.css";
        this.Script = "../Component/Header.js";
        this.ParentId = iUserConfig.ParentId;
        this.SelfId = iUserConfig.SelfId;
        this.Type = iUserConfig.Type;
        this.ClassName = iUserConfig.ClassName ?? "header";
        this.TextContent = iUserConfig.TextContent ?? "";
        this.Children = (iUserConfig.Children ?? []).map((child) => new UserConfig(child, this.SelfId));
    }
    Render() {
        const header = document.createElement("header");
        header.className = this.ClassName;
        header.id = this.SelfId;
        if (this.TextContent) {
            const textNode = document.createElement("div");
            textNode.textContent = this.TextContent;
            textNode.className = `${this.ClassName}__text`;
            header.appendChild(textNode);
        }
        const parent = document.getElementById(this.ParentId);
        if (parent) {
            parent.appendChild(header);
        }
        else {
            console.warn(`Parent ${this.ParentId} not found`);
        }
    }
}
