export class InputDate {
    constructor(ParentId) {
        this.ParentId = ParentId;
        this.ClassName = "InputDate";
        this.StyleSheet = "../style/InputDate.css";
        this.Script = "../Component/InputDate.js";
        this.Required = false;
        this.SelfId = crypto.randomUUID();
        this.Children = [];
    }
    Render() {
        const label = document.createElement('label');
        label.setAttribute('for', this.ClassName);
        label.className = this.ClassName;
        label.textContent = this.ClassName;
        const input = document.createElement('input');
        input.className = this.ClassName;
        input.type = 'date';
        input.name = this.ClassName;
        input.required = this.Required;
        var parent = document.getElementById(this.ParentId);
        if (parent) {
            parent.appendChild(label);
            parent.appendChild(input);
        }
    }
}
