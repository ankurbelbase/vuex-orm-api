<template>
  <v-container fluid>
    <v-item-group>
      <v-row>
        <v-col
          v-for="post in apiData"
          :key="post.OBJECTID"
          cols="12"
          md="4"
          outlined
          tile
        >
          <v-item v-slot:default="{}">
            <v-card
              class="d-flex align-center"
              dark
              height="200"
              style="background:rgb(7 64 58);color:white"
            >
              <v-scroll-y-transition>
                <div
                  class="display-1 flex-grow-1 text-center"
                >
                  Name: {{ post.MASSNAHME }}
                  Address: {{ post.WO }}
                   <v-card-actions class="d-flex align-center">
                  <a :href=post.LINK_KOMPL><v-btn color="green" outlined text>Visit Website</v-btn></a>
                  </v-card-actions>
                </div>
              </v-scroll-y-transition>
            </v-card>
          </v-item>
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
    ...mapState(['apiData']),
  },
}
</script>