# JsonEditor
Vue3 JSON online editor developed based on JSONeditor.
基于 jsoneditor 开发的 vue3 json在线编辑器。

1. Fully compatible with all functions of JSONEDITOR, and supports Vue3 syntax.

    完全兼容 jsoneditor 所有功能，并且支持 vue3 语法。

2. Support all configurations of JSONEDITOR, simple 
    
    支持  jsoneditor 的所有配置， 简单的配置方式。

3. More flexible, support custom configuration.
    
    更加灵活， 支持自定义配置。

## Install

```bash
    npm install ceel-json-editor
    # or
    yarn add ceel-json-editor
    # or
    pnpm add ceel-json-editor
```

[JsonEditor API文档](https://github.com/josdejong/jsoneditor/blob/master/docs/api.md#configuration-options)

## Use

### Global import
```
import Vue from 'vue'
import JsonEditorVue from 'ceel-json-editor'

Vue.use(JsonEditorVue)
```

### Local introduction
```
    import JsonEditor from 'ceel-json-editor'

```
## Parameter description
|Attributes| Type | Default Value | Description |
| --- | --- | --- | --- |
| v-model | - | - | - |
| height | string | 100% | height |
| width | string | 100% | width |
| option | object | - | options |

## Configuration item
|Attributes| Type | Default Value | Description |
| --- | --- | --- | --- |
| mode | string | 'code' | Edit mode, optional value：'code'、'tree'、'form' |
| onChange | function | - | Value change event |
....

[JsonEditor API文档](https://github.com/josdejong/jsoneditor/blob/master/docs/api.md#configuration-options)



## Example
```js
<script setup lang="ts">
import { ref } from 'vue'

import JsonEditor from 'ceel-json-editor'

// Set default value 
const c = ref(`{"abd":121212123,"abc":1999999998}`)

/**
* For all configuration items, see： 
* 请查看 api 文档
* https://github.com/josdejong/jsoneditor/blob/master/docs/api.md#configuration-options
 */
const option = {
  mode: 'code', // Override default configuration
  onChange: (v: string) => { // Add change event
    console.log(v)
  },
}
</script>

<template>
  
  <JsonEditor height="500px" v-model="c" :option="option" />

</template>

```


## Donate 捐赠

[paypalme](https://paypal.me/cyq521?country.x=C2&locale.x=zh_XC)

