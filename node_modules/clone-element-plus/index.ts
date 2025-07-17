import components from "./components";
import "@clone-element-plus/theme/index.css";
import { withInstaller } from "@clone-element-plus/utils";
import { fas } from "@fortawesome/free-solid-svg-icons"; // 所有的实心图标
import { library } from "@fortawesome/fontawesome-svg-core"; // 全局图标库管理器

library.add(fas); // 注册图标到全局库

const installer = withInstaller(components);

export default installer; // 默认导出：用于全量安装
export * from "./components"; // 重新导出：用于按需导入
