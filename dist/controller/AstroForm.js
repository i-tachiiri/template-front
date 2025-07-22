import { Component } from "../class/Components";
const components = [
    new Component({
        ClassName: "GridBox",
        StyleSheet: "../style/GridBox.css",
        Script: "../components/GridBox.js",
        Children: [
            new Component({
                ClassName: "Content",
                StyleSheet: "../style/Content.css",
                Script: "../components/Content.js",
                Children: [
                    new Component({
                        ClassName: "InputDate",
                        StyleSheet: "../style/InputDate.css",
                        Script: "../components/InputDate.js",
                        Children: []
                    }),
                    new Component({
                        ClassName: "InputDate",
                        StyleSheet: "../style/InputDate.css",
                        Script: "../components/InputDate.js",
                        Children: []
                    })
                ]
            })
        ]
    })
];
export default components;
