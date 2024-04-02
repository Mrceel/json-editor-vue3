<script setup lang="ts">
import { ref } from 'vue'
// import HelloWorld from './components/JsonEditor.vue'
import HelloWorld from './components/JsonEditor'

const c = ref(`{"abd":121212123,"abc":1999999998}`)


const op = {
  mode: 'code',
  onChange: (v: string) => {
    console.log(v)
  },
}
</script>

<template>
  
  <HelloWorld height="500px" v-model="c" :option="op" />


  {{ c }}

  <input type="text" v-model="c" />
</template>

