<template>
    <v-app dark>
        <v-container class="jumbotron text-xs-center">
            <h1 class="display-3">תודה שענית על השאלון</h1>
            <p class="lead"><strong>תשובותיך נרשמו במערכת</strong></p>
        </v-container>
    </v-app>
</template>
<script>
export default {
    mounted()
    {
      setTimeout(function(){
          window.close();
        } , 7000);
    }
}
</script>
<style>

</style>
