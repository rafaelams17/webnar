<template>
  <q-page class="container q-ma-md text-center">
    <div v-html="texto"></div>
    <q-page-sticky position="top-right" :offset="[18, 18]">
      <q-btn round color="negative" icon="play_arrow" @click="sintelizarFala()" />
    </q-page-sticky>
    <div>
      <q-btn color="secondary" icon="arrow_back" label="Voltar" @click="voltar()" />
    </div>
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
  },
  methods: {
    // eslint-disable-next-line space-before-function-paren
    sintelizarFala() {
      this.$speechTalk(window.getSelection().toString())
    },
    // eslint-disable-next-line space-before-function-paren
    voltar() {
      this.$router.push('/')
    }
  }
})
</script>
