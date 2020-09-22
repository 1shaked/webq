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
          :label="questinaireContent[content].type.text || 'סוג קומפוננטה'"
          @change="ChangeQuestionType"
        />
      </v-card-title>
      <v-card-text>
        <question-base v-show="questinaireContent[content].type.type == 'question'" :index="content" />
        <v-row
          align="center"
          class="mx-0"
        />
        {{ content }}
        <content-maneger :index="content" />
        <div>
          The content type is {{ questinaireContent[content].type.name }}
        </div>
      </v-card-text>

      <v-divider class="mx-4" />

      <v-card-title>Tonight's availability</v-card-title>

      <v-card-text>
        <base-style :index="content" />
      </v-card-text>

      <v-card-actions>
        <main-actions :index="content" />
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
      'contentTypes',
      'questinaireContent'
    ])
  },
  methods: {
    ...mapMutations('Questinaire', [
      'CHANGE_CONTENT_PARAMETER'
    ]),
    ChangeQuestionType () {
      console.log(this.contentType)
      this.CHANGE_CONTENT_PARAMETER({ index: this.content, contentParameters: this.contentType })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
