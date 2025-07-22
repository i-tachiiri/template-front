export class Content {
    constructor(ParentId) {
        this.ParentId = ParentId;
        this.ClassName = "Content";
        this.StyleSheet = "/style/Content.css";
        this.Script = "/Component/Content.js";
        this.Required = false;
        this.SelfId = crypto.randomUUID();
        this.Children = [];
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
