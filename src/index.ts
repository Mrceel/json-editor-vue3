import JsonEditorVue from "./components/JsonEditor";

export default JsonEditorVue;

JsonEditorVue.install = function install(Vue: any) {
  Vue.component(JsonEditorVue.name, JsonEditorVue);
};

declare global {
    interface Window {
      Vue: any; // 这里的 any 类型可以根据实际情况进行调整
    }
  }


if (typeof window !== "undefined" && window.Vue) {
  window.Vue.component(JsonEditorVue.name, JsonEditorVue);
}
