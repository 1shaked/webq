<template>
  <div>
    <component :is="componentName" />
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
      const componentName = this.questinaireContent[this.index].type
      // eslint-disable-next-line
      // const componentToRender = () => import(`./content/${fileName}`)
      return componentName
    }
  }
  // render (h) {
  //   const component = () => import('./content/text')
  //   return h('h1', {}, [
  //     `testttt 1 + ${this.index} ${this.questinaireName}`,
  //     h(component)
  //   ])
  //   // return createElement(component)
  // }
}
</script>

<style lang="scss" scoped>

</style>
