import { UserConfig } from "./UserConfig.js";
export class DatePicker {
    constructor(iUserConfig) {
        this.StyleSheet = "../style/DatePicker.css";
        this.Script = "../Component/DatePicker.js";
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
        input.type = 'date';
        input.name = this.ClassName;
        input.setAttribute("autocomplete", "bday"); //bdayはtsのバグで認識されない
        input.required = this.Required;
        var parent = document.getElementById(this.ParentId);
        if (parent) {
            parent.appendChild(label);
            parent.appendChild(input);
        }
    }
}
