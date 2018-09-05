<template>
  <div class = "container">
    <h2>{{title}}</h2>
    <add-item-component v-on:add = 'addItem' :items = "items"></add-item-component>
    <items-component :items="items"></items-component>
  </div>
</template>

<script>

import AddItemComponent from './components/AddItemComponent'
import ItemsComponent from './components/ItemsComponent'

export default {
  name: 'App',
  components: {
    AddItemComponent,
    ItemsComponent
  },
  data () {
    return {
      items: [
        {text: '운동하기', checked: true},
        {text: 'Vue.js 공부하기', checked: false},
        {text: '자소서 쓰기', checked: false}
      ],
      title: 'Todo List'
    }
  },
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
