"use strict";
/*import type { IUserConfig } from "../interfaces/IUserConfig";
import { UserConfig } from "./UserConfig.js";
import type { IForm } from "../interfaces/IForm";
import { IComponent } from "../interfaces/IComponent";
import type { IAutoComplete } from "../interfaces/IAutoComplete";
export class AutoComplete implements IComponent, IForm, IAutoComplete {
  StyleSheet: string;
  Script: string;
  ParentId: string;
  SelfId: string;
  Type: string;
  ClassName: string;
  LabelName: string;
  Required: boolean;
  Placeholder: string;
  Children: IUserConfig[];
  constructor(iUserConfig: IUserConfig) {
    this.StyleSheet = `../style/${iUserConfig.Type}.css`;
    this.Script = `../ Component/${iUserConfig.Type}.js`;
    this.ParentId = iUserConfig.ParentId;
    this.SelfId = iUserConfig.SelfId;
    this.Type = iUserConfig.Type;
    this.ClassName = iUserConfig.ClassName;
    this.LabelName = iUserConfig.LabelName;
    this.Placeholder = iUserConfig.Placeholder
    this.Required = iUserConfig.Required;
    this.Children = (iUserConfig.Children ?? []).map(
      (child: Partial<IUserConfig>) => new UserConfig(child, this.SelfId)
    );
  }
  private inputEl!: HTMLInputElement;
  private listEl!: HTMLUListElement;

  Render(): void {
    const label = document.createElement('label');
    label.setAttribute('for', this.ClassName);
    label.className = this.ClassName;
    label.textContent = this.LabelName;

    const input = document.createElement('input');
    input.className = this.ClassName;
    input.type = 'date';
    input.name = this.ClassName;
    input.placeholder = this.Placeholder;
    input.required = this.Required;

    const ul = document.createElement('ul');
    ul.className = `${this.ClassName}__list`;

    input.addEventListener("input", this.debounce((e) => {
      const value = (e.target as HTMLInputElement).value;
      this.fetchSuggestions(value);
    }, 200));

    const parent = document.getElementById(this.ParentId);
    if (parent) {
      parent.appendChild(label);
      parent.appendChild(input);
      parent.appendChild(ul);
    }

    this.inputEl = input;
    this.listEl = ul;
  }
  async fetchSuggestions(query: string): Promise<void> {
    if (!query) {
      this.listEl.innerHTML = "";
      return;
    }

    try {
      const res = await fetch(`${this.ApiEndpoint}?q=${encodeURIComponent(query)}`);
      const data: string[] = await res.json();

      this.listEl.innerHTML = "";
      data.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        li.addEventListener("click", () => {
          this.inputEl.value = item;
          this.listEl.innerHTML = "";
        });
        this.listEl.appendChild(li);
      });
    } catch (err) {
      console.error("AutoComplete fetch error:", err);
    }
  }
  private debounce<T extends (...args: any[]) => void>(fn: T, delay: number) {
    let timer: number;
    return (...args: Parameters<T>) => {
      clearTimeout(timer);
      timer = window.setTimeout(() => fn(...args), delay);
    };
  }
}


*/
