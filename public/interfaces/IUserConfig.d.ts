export interface IUserConfig{
  ParentId: string;
  SelfId: string;
  Type: string;
  ClassName: string;
  Placeholder: string;
  Required: boolean;
  LabelName: string;
  TextContent: string;
  Children: IUserConfig[]
}