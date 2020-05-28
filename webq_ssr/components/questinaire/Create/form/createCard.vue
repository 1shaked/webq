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
          @change="CHANGE_CONTENT_PARAMETER({ index: content, contentParameters: { type: contentType.name } })"
        />
      </v-card-title>
      <v-card-text>
        <question-base v-show="contentType.type == 'question'" :index="content" />
        <v-row
          align="center"
          class="mx-0"
        />

        <!-- <div class="my-4 subtitle-1">
          $ • Italian, Cafe
        </div> -->
        {{ content }}
        <content-maneger :index="content" />
        <div>
          Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.
        </div>
      </v-card-text>

      <v-divider class="mx-4" />

      <v-card-title>Tonight's availability</v-card-title>

      <v-card-text>
        <base-style />
      </v-card-text>

      <v-card-actions>
        <main-actions />
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
const contentManeger = () => import('./contentManeger')
const questionBase = () => import('./questionBase/questionBase')
const baseStyle = () => import('./baseStyle')
const mainActions = () => import('./mainActions')
export default {
  components: {
    'content-maneger': contentManeger,
    'question-base': questionBase,
    'base-style': baseStyle,
    'main-actions': mainActions
  },
  props: {
    content: {
      type: Number,
      default: 0,
      reqired: true
    }
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
  },
  methods: {
    ...mapMutations('Questinaire', [
      'CHANGE_CONTENT_PARAMETER'
    ]),
    ChangeQuestionType () {

    }
  }
}
</script>

<style lang="scss" scoped>

</style>
