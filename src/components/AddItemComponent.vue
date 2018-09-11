<template>
  <div class="input-group">
    <v-layout justify-center>
      <v-flex xs7 pl-5>
        <v-text-field
          @keyup.enter="addItem"
          v-model="newItem"
          placeholder="할 일을 입력하세요."
          type="text"
          class="form-control"
        ></v-text-field>
      </v-flex>
      <v-flex xs1>
        <v-btn color = "blue-grey darken-4"
          class="white--text font-weight-bold title"
          @click="addItem"
          type="button">Add!
        </v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default{
  data: function () {
    return {
      newItem: ''
    }
  },
  methods: {
    addItem: function () {
      var text

      text = this.newItem.trim()
      if (text) {
        this.$emit('add', this.newItem)
        this.newItem = ''
      }
    }
  }
}
</script>
