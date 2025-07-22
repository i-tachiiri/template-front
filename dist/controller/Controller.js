const loadedStyles = new Set();
const loadedScripts = new Set();
export async function main() {
    console.log("test2");
    const config = await getUiConfig();
    for (const component of config) {
        await renderComponent(component);
    }
}
export async function getUiConfig() {
    const response = await fetch("../UiConfig.json");
    if (!response.ok) {
        throw new Error(`UiConfig の取得に失敗しました: ${response.status}`);
    }
    const config = await response.json();
    const { UserConfig } = await import("../implements/UserConfig.js");
    const userConfig = config.map(element => new UserConfig(element));
    return userConfig;
}
async function renderComponent(element) {
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
function loadStylesheet(component) {
    return new Promise((resolve, reject) => {
        if (loadedStyles.has(component.StyleSheet))
            return resolve();
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = component.StyleSheet;
        link.onload = () => resolve();
        link.onerror = () => reject(new Error(`Failed to load: ${component.StyleSheet}`));
        document.head.appendChild(link);
    });
}
async function executeScript(component) {
    component.Render();
    return;
}
