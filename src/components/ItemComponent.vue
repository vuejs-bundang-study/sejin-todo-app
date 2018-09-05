<template>
  <li :class="{ 'removed': item.checked}">
    <div class="checkbox">
      <label>
        <input type="checkbox" v-model="item.checked"> {{item.text}}
        <remove-item-component :item="item"></remove-item-component>
        <pomodoro-component></pomodoro-component>
      </label>
    </div>
  </li>
</template>

<script>
import RemoveItemComponent from './RemoveItemComponent'
import PomodoroComponent from './PomodoroComponent'

export default {
  components: {
    RemoveItemComponent,
    PomodoroComponent
  },
  props: ['item']
}
</script>

<style>
  .container {
    width: 50%;
    margin: 20px auto 0px auto;
  }
  .removed {
    color: gray;
  }
  .removed label {
    text-decoration: line-through;
  }
  /* ul li {
    list-style-type: none;
  } */
</style>
