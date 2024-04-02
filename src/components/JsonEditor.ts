import { defineComponent, watchEffect, onMounted, ref, h, nextTick } from "vue";
import JsonEditor from "jsoneditor";
export default defineComponent({
  name: "JsonEditor",
  props: {
    modelValue: {
        type: String,
    },
    height: {
        type: String,
        required: false,
    },
    width: {
        type: String,
        required: false,
    },
    option: {
      type: Object,
      required: false,
    },
  },
  emits: ["update:modelValue", "change"],
  setup(props, { emit }) {
    const jsonDom = ref(null);
    let internal = false
    const validate = (res: any, editor: any) => {
      try {
        if (res.length === 0 && typeof editor.get() !== "number") {
            props?.option?.onChange && props?.option?.onChange(editor.get())
            emit("update:modelValue", editor.getText());
            internal = true
            nextTick(()=>{
                internal = false
            })
        }
      } catch (error) {
        console.error(error);
      }
    };
    onMounted(() => {
        const options = {
            mode: "tree",
            modes: ["tree", "code", "form", "text", "view"],
        }
        const onChange = ()=>{
            editor.validate().then((res: any) => validate(res, editor))
        }
        const editor = new JsonEditor(jsonDom.value, Object.assign(options, props.option, { onChange }))
        watchEffect(() => {
           !internal && editor.setText(props.modelValue)
        })
        
    });
    return () =>
      h(
        "div",
        {
          ref: jsonDom,
          style: {
            height: props.height ||"100%",
            width: props.width ||"100%",
          }
        }
      );
  },
});
