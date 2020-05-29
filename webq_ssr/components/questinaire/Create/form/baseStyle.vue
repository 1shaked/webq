<template>
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
      <v-avatar left @click="ToggleBasaeStyle('underline', 'text-decoration')">
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
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  props: {
    index: {
      type: Number,
      default: 0,
      reqired: true
    }
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters('Questinaire', [
      'questinaireContentByIndex'
    ])
  },
  methods: {
    ...mapMutations('Questinaire', [
      'ADD_STYLE_TO_QUESTION'
    ]),
    ToggleBasaeStyle (action, parameter, replaceWith = '') {
      const style = this.questinaireContentByIndex(this.index).style[parameter]
      const addedAction = style ? style.replace(action, replaceWith) : action
      this.ADD_STYLE_TO_QUESTION({
        questionIndex: this.index,
        styleObj: {
          key: parameter,
          value: addedAction
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
