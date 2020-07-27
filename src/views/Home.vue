<template>
  <div class="home">
     <v-content>
      <loadData/>
     </v-content>
  </div>
</template>

<script>
// @ is an alias to /src
import loadData from '@/components/loadData.vue'

export default {
  name: 'Home',
  components: {
    loadData,
  }
}
</script>
