import { UserConfig } from "./UserConfig.js";
export class TimePicker {
    constructor(iUserConfig) {
        this.StyleSheet = "../style/TimePicker.css";
        this.Script = "../Component/TimePicker.js";
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
