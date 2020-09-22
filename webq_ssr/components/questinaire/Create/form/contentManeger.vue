<template>
  <div>
    <component :is="componentName" :index="index" />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
const selectQuestion = () => import('./content/selectQuestion')
const textQuestion = () => import('./content/textQuestion')
const radioQuestion = () => import('./content/radioQuestion')
const paragraphContent = () => import('./content/paragraphContent')
const headerContent = () => import('./content/headerContent')
export default {
  components: {
    selectQuestion,
    textQuestion,
    radioQuestion,
    paragraphContent,
    headerContent
  },
  props: {
    index: {
      type: Number,
      reqired: true,
      default: 0
    }
  },
  computed: {
    ...mapGetters('Questinaire', [
      'questinaireContent'
    ]),
    componentName () {
      const componentName = this.questinaireContent[this.index].type.name
      return componentName
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
