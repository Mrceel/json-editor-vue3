<template>
  <div ref="jsonDom" style="width: 100%; height: 460px"></div>
</template>
<script setup lang="ts">
import { ref, onMounted, watchEffect } from 'vue'
import JsonEditor from 'jsoneditor'
interface validateResult {
  path: Array<string | number>
  message: string
}
const props = defineProps<{
  option: any
  validate?: (val: any) => validateResult
}>()
const emit = defineEmits(['update:modelValue', 'change', 'customValidation'])

const jsonDom = ref(null)
const validate = (res: any, editor: any) => {
  try {
      emit('change', {
          success: res.length === 0 && typeof editor.get() !== 'number',
          json: editor.getText()
      })
  } catch (error) {
      console.log(error)
  }
}
onMounted(() => {
  const options = {
      history: false,
      sortObjectKeys: false,
      mode: 'code',
      modes: ['code', 'text'],
      onChange() {
          editor.validate().then((res: any) => validate(res, editor))
      },
      onBlur() {
          try {
              editor.set(eval(`(${editor.getText()})`))
              editor.validate().then((res: any) => validate(res, editor))
          } catch (error) {
              console.log(error)
          }
      },
      onValidate: props.validate,
      onValidationError: function (errors: any) {
          errors.forEach((error: any) => {
              switch (error.type) {
                  case 'validation': // schema validation error
                      break
                  case 'customValidation': // custom validation error
                      emit('customValidation')
                      break
                  case 'error': // json parse error
                      emit('change', {
                          success: false,
                          json: editor.getText()
                      })
                      break
              }
          })
      }
  }
  const editor = new JsonEditor(jsonDom.value, options)
  watchEffect(() => {
      editor.set(props.option)
      editor.validate().then((res: any) => validate(res, editor))
  })
})
</script>

