<template>
  <form class='column' v-on:submit.prevent="submit(id,username)">
    <label class='header' html-for='username'>
      {{label}}
    </label>
    <input id='username' placeholder='github username' type='text' autoComplete='off' v-model="username"/>
    <button class='button' type='submit' v-bind:disabled="!username">
      Submit
    </button>
  </form>
</template>

<script>
export default {
  name: 'player-input',
  data() {
    return {
      username: ''
    }
  },
  methods : {
    submit : function (id,username) {
      this.onSubmit(id,username);
    }
  },
  props : {
    label : {
      type: String,
      required : true
    },
    id : {
      type : String,
      required : true,
    },
    onSubmit : {
      type: Function,
      required : true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
