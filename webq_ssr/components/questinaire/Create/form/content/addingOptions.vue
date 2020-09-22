<template>
  <div>
    <v-container>
      <h2>Adding options</h2>
      <v-btn @click="ADD_OPTION_TO_QUESTION(index)">
        <v-icon>
          mdi-plus
        </v-icon>
      </v-btn>
      <v-row v-for="(option, i) in questinaireContent[index].options" :key="i">
        <v-col cols="12" lg="6">
          <v-text-field
            v-model="text"
            label="טקסט לבחירה"
            @change="SET_QUESTION_OPTION_BY_INDEX({ questionIndex: index, optionIndex: i, text: text, value: value})"
          />
        </v-col>
        <v-col cols="12" lg="6">
          <v-text-field
            v-model="value"
            label="תוכן התשובה"
            @change="SET_QUESTION_OPTION_BY_INDEX({ questionIndex: index, optionIndex: i, text: text, value: value})"
          />
        </v-col>
        <!-- <v-col cols="4" 4="6">
          <v-icon
            >fa-plus-square</v-icon>
        </v-col> -->
        <v-col cols="12" md="8" lg="6">
          <v-btn>
            מחק את {{ i }}
            <v-icon>
              mdi-delete
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  props: {
    index: {
      type: Number,
      required: true,
      default: 0
    }
  },
  data: () => {
    return {
      text: '',
      value: ''
    }
  },
  computed: {
    ...mapGetters('Questinaire', [
      'questinaireContent'
    ])
  },
  methods: {
    ...mapMutations('Questinaire', [
      'ADD_OPTION_TO_QUESTION',
      'SET_QUESTION_OPTION_BY_INDEX'
    ])
  }
}
</script>

<style lang="scss">

</style>
