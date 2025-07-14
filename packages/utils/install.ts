import { each } from "lodash-es";
import type { App, Plugin } from "vue";

type SFCWithInstall<T> = T & Plugin;

/**
 * 组件批量注册
 * @param components 需要注册的组件数组
 * @returns 返回一个安装器函数，接收 Vue App 实例作为参数
 */
export function withInstaller(components: Plugin[]) {
  const installer = (app: App) => each(components, (c) => app.use(c));

  return installer as Plugin;
}

/**
 * 组件注册
 * @param compoent 需要注册的组件
 * @returns 返回一个带有 install 方法的组件
 */
export const withInstall = <T>(compoent: T) => {
  (compoent as SFCWithInstall<T>).install = (app: App) => {
    const name = (compoent as any).name;
    app.component(name, compoent as Plugin);
  };

  return compoent as SFCWithInstall<T>;
};
