export class UserConfig {
    constructor(config, ParentId = "Body") {
        this.ParentId = ParentId;
        this.SelfId = config.SelfId ?? crypto.randomUUID();
        this.Type = config.Type ?? "component";
        this.ClassName = config.ClassName ?? "empty";
        this.LabelName = config.LabelName ?? "empty";
        this.Required = config.Required ?? false;
        this.Placeholder = config.Placeholder ?? "empty";
        this.TextContent = config.TextContent ?? "empty";
        this.Children = (config.Children ?? []).map((child) => new UserConfig(child, this.SelfId));
        console.log(`Creating: Class=${config.ClassName}, Parent=${ParentId}`);
    }
}
