<template>
  <button v-on:click="removeItem">X</button>
</template>

<script>
export default{
  methods: {
    removeItem: function () {
      this.items.$emit('remove')
    }
  },
  props: ['items']
}
</script>
