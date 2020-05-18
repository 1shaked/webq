<template>
    <v-container>
        <h2>{{ archive_files}}</h2>
        
    </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
    computed: {
        ...mapState([
            'archive_files'
        ])
    }
}
</script>

<style>

</style>
