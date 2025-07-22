import { Content } from "../Component/Content.js";
import { GridBox } from "../Component/GridBox.js";
import { InputDate } from "../Component/InputDate.js";
export const GetConfig = () => {
    const input1 = new InputDate("InputDate1");
    const input2 = new InputDate("InputDate2");
    const content = new Content("Content1");
    content.Children = [input1, input2];
    const gridBox = new GridBox("GridBox1");
    gridBox.Children = [content];
    return [gridBox];
};
