<script setup lang="ts">
import { ref } from 'vue'
// import HelloWorld from './components/JsonEditor.vue'
import JsonEditor from './components/JsonEditor'
// import JsonEditor from 'ceel-json-editor-vue3'


const c = ref(`{"abd":121212123,"abc":1999999998}`)


const op = {
  mode: 'code',
  onChange: (v: string) => {
    console.log(v)
  },
}
</script>

<template>
  
  <JsonEditor height="500px" v-model="c" :option="op" />


  {{ c }}

  <input type="text" v-model="c" />
</template>

