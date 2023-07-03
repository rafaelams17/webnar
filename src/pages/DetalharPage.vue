<template>
  <q-page class="container">
    {{ texto }}
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DetalharPage',
  // eslint-disable-next-line space-before-function-paren,
  props: {
    texto: {
      type: String
    }
  }
})
</script>
