<template>
  <v-container fluid>
     <h1>Here Goes the map (incomplete!)</h1>
    <v-item-group>
      <v-row>
        <v-col
          v-for="position in geometry"
          :key="position.OBJECTID"
          cols="12"
          md="4"
          outlined
          tile
        >
          Lattitude:{{ position.x }}
          Lognitude: {{position.y}}
        </v-col>
      </v-row>
    </v-item-group>
   
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'App',
 
  computed:{
    ...mapState(['geometry']),
  },
  mounted(){
    console.log(this.geometry)
  }
}
</script>