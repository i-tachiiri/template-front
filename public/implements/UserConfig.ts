import type {IUserConfig} from "../interfaces/IUserConfig";
export class UserConfig implements IUserConfig {  
  ParentId: string;
  SelfId: string;
  Type: string;
  ClassName: string;
  LabelName: string;
  Required: boolean;
  Placeholder: string;
  TextContent: string;
  Children: IUserConfig[];

  constructor(config: Partial<IUserConfig>, ParentId: string = "Body") {
    this.ParentId = ParentId;
    this.SelfId = config.SelfId ?? crypto.randomUUID();
    this.Type = config.Type ?? "component";
    this.ClassName = config.ClassName ?? "empty";
    this.LabelName = config.LabelName ?? "empty";
    this.Required = config.Required ?? false;
    this.Placeholder = config.Placeholder ?? "empty"
    this.TextContent = config.TextContent ?? "empty"
    this.Children = (config.Children ?? []).map(
      (child: Partial<IUserConfig>) => new UserConfig(child,this.SelfId)
    );
    console.log(`Creating: Class=${config.ClassName}, Parent=${ParentId}`);

  }
}
