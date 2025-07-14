import { withInstaller } from "@clone-element-plus/utils";
import components from "./components";
import "@clone-element-plus/theme/index.css";

const installer = withInstaller(components);

export default installer; // 默认导出：用于全量安装
export * from "./components"; // 重新导出：用于按需导入
