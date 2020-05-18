<template>
  <v-app>
    <v-container>
      <NavBar></NavBar>
      <CreateQuestions></CreateQuestions>
    </v-container>
  </v-app>
</template>
<script>
import CreateQuestions from '@/components/CreateQuestions'
import NavBar from '../components//NavBar'

export default {
  components : {
    CreateQuestions,
    NavBar
  }
}
</script>
<style lang="stylus" scoped>

</style>
