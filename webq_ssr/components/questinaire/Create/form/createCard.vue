<template>
  <div>
    <v-card
      class="mx-auto my-12"
      max-width="374"
    >
      <v-card-title>
        <v-select
          v-model="contentType"
          :items="contentTypes"
          label="סוג קומפוננטה"
        />
      </v-card-title>
      {{ contentType }}
      <v-card-text>
        <v-container>
          <v-row>
            <v-col v-show="contentType.type == 'question'" cols="12">
              <v-text-field
                label="שם השאלה"
                placeholder="שאלה לדוגמא"
                outlined
              />
            </v-col>
          </v-row>
        </v-container>
        <v-row
          align="center"
          class="mx-0"
        />

        <div class="my-4 subtitle-1">
          $ • Italian, Cafe
        </div>
        <content-maneger :index="0" />
        <div>
          Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.
        </div>
      </v-card-text>

      <v-divider class="mx-4" />

      <v-card-title>Tonight's availability</v-card-title>

      <v-card-text>
        <v-chip-group
          active-class="deep-purple accent-4 white--text"
          column
        >
          <v-chip>
            <v-avatar>
              <B>
                B
              </B>
            </v-avatar>
          </v-chip>

          <v-chip>
            <v-avatar left>
              <U>U</U>
              <!-- <v-icon>mdi-checkbox-marked-circle</v-icon> -->
            </v-avatar>
          </v-chip>

          <v-chip>
            <v-avatar left>
              <I>I</I>
              <!-- <v-icon>mdi-checkbox-marked-circle</v-icon> -->
            </v-avatar>
          </v-chip>
        </v-chip-group>
      </v-card-text>

      <v-card-actions>
        <v-row cols="12" md="3">
          <v-col>
            <v-btn fab>
              <v-icon>mdi-delete-circle</v-icon>
            </v-btn>
          </v-col>
          <v-col>
            <v-btn fab>
              <v-icon>mdi-content-copy</v-icon>
            </v-btn>
          </v-col>
          <v-col>
            <v-btn class="mx-2" fab>
              <v-icon dark>
                mdi-plus
              </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
const contentManeger = () => import('./contentManeger')
export default {
  components: {
    'content-maneger': contentManeger
  },
  data: () => {
    return {
      contentType: ''
    }
  },
  computed: {
    ...mapGetters('Questinaire', [
      'contentTypes'
    ])
  }
}
</script>

<style lang="scss" scoped>

</style>
