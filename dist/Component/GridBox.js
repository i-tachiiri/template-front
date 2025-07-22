export class GridBox {
    constructor(ParentId) {
        this.ParentId = ParentId;
        this.ClassName = "GridBox";
        this.StyleSheet = "/style/GridBox.css";
        this.Script = "/Component/GridBox.js";
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
