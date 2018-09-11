<template>
  <div class = "container">
    <v-app>
      <v-content>
        <v-container fluid>
          <v-layout justify-center>
            <h1 class = "display-2">{{title}}</h1>
          </v-layout>
          <add-item-component v-on:add = 'addItem' :items = "items"></add-item-component>
          <items-component :items="items"></items-component>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>

import AddItemComponent from './components/AddItemComponent'
import ItemsComponent from './components/ItemsComponent'
import store from './vuex/store'
import {mapGetters} from 'vuex'

export default {
  store,
  name: 'App',
  components: {
    AddItemComponent,
    ItemsComponent
  },
  // data () {
  //   return {
  //     items: [
  //       {text: '운동하기', checked: true},
  //       {text: 'Vue.js 공부하기', checked: false},
  //       {text: '자소서 쓰기', checked: false}
  //     ],
  //     title: 'Todo List'
  //   }
  // },
  computed: mapGetters({
    items: 'getLists',
    title: 'getTitle'

  }),
  methods: {
    addItem: function (text) {
      this.items.push({
        text: text,
        checked: false
      })
    }
  }
}
</script>

<style>
</style>
