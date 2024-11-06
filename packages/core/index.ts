import {makeInstaller} from "@wd-element/utils";
import components from "./components.ts";

const installer = makeInstaller(components);

export * from "@wd-element/components";

export default installer;