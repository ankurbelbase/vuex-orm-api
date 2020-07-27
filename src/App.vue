<template>
  <v-app>
    <!-- <v-app-bar
      app
      color="primary"
      dark
    >
      <v-spacer class="text-lg-center">Bicycle Promotion Cologne</v-spacer>
    </v-app-bar>
    <v-main>
      <loadData/>
    </v-main> -->

    <v-toolbar dark>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Bicycle Promotion Cologne</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-adn-dowm">
        <v-btn flat to="/">Home</v-btn>
        <v-btn flat to="/map">Map</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <!-- <loadData/> -->
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
// import loadData from './components/loadData';
export default {
  name: 'App',
   mounted(){
    this.$store.dispatch('loadAPIData');
  },
  components: {
    // loadData,
  },

  data: () => ({
    //
  }),
};
</script>
