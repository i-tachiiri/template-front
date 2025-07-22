
import type { IUserConfig } from "../interfaces/IUserConfig";
import type { IComponent } from "../interfaces/IComponent";  
const loadedStyles = new Set();
const loadedScripts = new Set();

export async function main(){
  console.log("test2");
  const config = await getUiConfig();
  for (const component of config) {
    await renderComponent(component);
  }
}
export async function getUiConfig(): Promise<IUserConfig[]> {
  const response = await fetch("../UiConfig.json");
  if (!response.ok) {
    throw new Error(`UiConfig の取得に失敗しました: ${response.status}`);
  }
  const config: Partial<IUserConfig>[] = await response.json();
  const { UserConfig } = await import("../implements/UserConfig.js");
  const userConfig: IUserConfig[] = config.map(element => new UserConfig(element));
  return userConfig;
}

async function renderComponent(element:IUserConfig) {
  const module = await import(`../implements/${element.ClassName}.js`);
  const ComponentClass = module[element.ClassName];
  const component = new ComponentClass(element); 
  
  await loadStylesheet(component);
  loadedStyles.add(component.StyleSheet);

  await executeScript(component);
  loadedScripts.add(component);

  for (const children of component.Children) {
    await renderComponent(children);
  }
}

function loadStylesheet(component: IComponent) {
  return new Promise<void>((resolve, reject) => {
    if (loadedStyles.has(component.StyleSheet)) return resolve();
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = component.StyleSheet;
    link.onload = () => resolve();
    link.onerror = () => reject(new Error(`Failed to load: ${component.StyleSheet}`));
    document.head.appendChild(link);
  });
}
async function executeScript(component: IComponent) {
  component.Render();
  return;
}

