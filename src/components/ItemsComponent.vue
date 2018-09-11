<template>
  <ul>
    <v-container
      fluid
      grid-list-lg>
    <v-list
        is ="item-component"
        v-for="(item, index) in items"
        :key="item.id"
        :item="item"
        v-on:remove="items.splice(index, 1)">
    </v-list>
  </v-container>
  </ul>
</template>

<script>
import ItemComponent from './ItemComponent'

export default{
  components: {
    ItemComponent
  },
  props: ['items']
}
</script>
