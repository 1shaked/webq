<template>
  <div>
    <v-container>
      <v-card
        class="mx-auto my-12"
        max-width="374"
      >
        <v-card-title>Cafe Badilico</v-card-title>

        <v-card-text>
          <v-row
            align="center"
            class="mx-0"
          >
            <v-rating
              :value="4.5"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            />

            <div class="grey--text ml-4">
              4.5 (413)
            </div>
          </v-row>

          <div class="my-4 subtitle-1">
            $ • Italian, Cafe
          </div>

          <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
        </v-card-text>

        <v-divider class="mx-4" />

        <v-card-title>Tonight's availability</v-card-title>

        <v-card-text>
          <v-chip-group
            active-class="deep-purple accent-4 white--text"
            column
          >
            <v-chip>5:30PM</v-chip>

            <v-chip>7:30PM</v-chip>

            <v-chip>8:00PM</v-chip>

            <v-chip>9:00PM</v-chip>
          </v-chip-group>
        </v-card-text>

        <v-card-actions>
          <v-btn
            color="deep-purple lighten-2"
            text
          >
            Reserve
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
    <div class="card">
      <div class="title">
        Standard
      </div>

      <div class="features">
        <ul>
          <li>
            <span>
              {{ questinaire.questions[0].name }}
            </span>
          </li>
          <li>
            {{ questinaire.questions[0].content }}
          </li>
          <li><span>3</span> Pages</li>
          <li><span>1</span> Hour free support</li>
        </ul>
      </div><!--/features-->

      <a href="#" class="btn">Check it out</a>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('Questinaire', [
      'questinaire'
    ])
  }
}
</script>
<style lang="scss" scoped>
@import '~/style/card.scss';
</style>
