import { IUserConfig } from "./IUserConfig";

export interface IComponent{
  ParentId: string;
  SelfId: string;
  Type: string;
  ClassName: string;
  StyleSheet: string;
  Script: string;
  Children: IUserConfig[];
  Render(): void;
}
