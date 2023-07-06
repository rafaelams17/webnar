<template>
  <q-page class="container">
    <p class="text-h3 text-center q-mt-md">Aplicação multiplataforma com Quasar Framework</p>

    <div class="row q-pa-md q-col-gutter-md">
      <div class="col-md-3 col-sm-4" v-for="(post, index) in posts" :key="index">
        <q-card class="my-card" style="min-height: 23rem;">
          <img :src="post.jetpack_featured_media_url" style="max-height: 200px;">

          <q-card-section>
            <div class="text-h6">{{ post.title.rendered }}</div>
          </q-card-section>

          <div class="absolute-bottom">
            <q-btn color="secondary" class="full-width" @click="detalhar(post.content.rendered)">Detalhar</q-btn>
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { mapActions, mapState } from 'vuex'

export default defineComponent({
  name: 'IndexPage',
  // eslint-disable-next-line space-before-function-paren
  mounted() {
    this.setPosts()
  },
  computed: {
    ...mapState('Posts', ['posts'])
  },
  methods: {
    ...mapActions('Posts', ['setPosts']),
    // eslint-disable-next-line space-before-function-paren
    detalhar(conteudo) {
      this.$router.push({ name: 'detalhar', query: { texto: conteudo } })
    }
  }
})
</script>
