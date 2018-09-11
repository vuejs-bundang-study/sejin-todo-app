<template>
    <div class="checkbox">
      <v-layout justify-center>
        <v-flex xs6>
          <v-card color="blue-grey" class="white--text">
            <v-flex text-xs-right>
              <v-btn
                small color = "blue-grey darken-2"
                class="white--text"
                v-on:click="removeItem">
                <v-icon>clear</v-icon>
              </v-btn>
            </v-flex>
            <p class = "headline text-xs-center">{{item.text}}</p>
            <v-card color="white">
              <pomodoro-component></pomodoro-component>
            </v-card>
          </v-card>
        </v-flex>
      </v-layout>
    </div>
</template>

<script>
import PomodoroComponent from './PomodoroComponent'

export default {
  components: {
    PomodoroComponent
  },
  props: ['item'],
  methods: {
    removeItem: function () {
      this.$emit('remove')
    }
  }
}
</script>

<style>

</style>
