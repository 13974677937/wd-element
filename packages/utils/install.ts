import type { App, Plugin } from "vue";
import { each } from "lodash-es";

type SFCWithInstall<T> = T & Plugin;

/**
 * 创建一个插件安装器，用于批量安装多个插件。
 *
 * @param {Plugin[]} comments - 要安装的插件数组。
 * @returns {Plugin} - 返回一个插件，该插件可以被 Vue 应用安装。
 */
export function makeInstaller(comments: Plugin[]): Plugin {
  const install = (app: App) => {
    // 遍历插件数组，逐个安装
    each(comments, (comment) => {
      app.use(comment);
    });
  };

  return install as Plugin;
}

/**
 * 为给定的组件添加一个安装方法，用于将组件注册到 Vue 应用中。
 *
 * @template T 组件的类型。
 * @param {T} component 要添加安装方法的组件。
 * @returns {SFCWithInstall<T>} 返回一个新的组件，该组件包含一个 install 方法。
 */
export const withInstall = <T>(component: T): SFCWithInstall<T> => {
  // 将组件转换为 SFCWithInstall<T> 类型，并添加 install 方法
  (component as SFCWithInstall<T>).install = (app: App) => {
    // 获取组件的名称
    const name = (component as any).name;
    // 将组件注册到 Vue 应用中
    app.component(name, component as Plugin);
  };
  // 返回添加了 install 方法的组件
  return component as SFCWithInstall<T>;
};
