<template>
  <div>
    <component :is="componentId" />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
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
    componentId () {
      const fileName = this.questinaireContent[this.index].type
      // eslint-disable-next-line
      const componentToRender = () => import(`./content/${fileName}`)
      return componentToRender
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
