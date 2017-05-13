<template>
    <div>
        <div class='column'>
            <img class='avatar' v-bind:src="avatar" v-bind:alt="'Avatar for '+username"/>
            <h2 class='username'>@{{username}}</h2>
            <button class='reset' v-on:click="reset(id)">Reset</button>
        </div>
    </div>
</template>
<script>
export default {
  name : 'player-preview',
  data () {
    return {

    }
  },
  methods: {
    reset : function (id) {
        this.onReset(id);
    }
  },
  props : {
      avatar : {
          type : String,
          required : true
      },
      username : {
          type : String,
          required : true
      },
      id : {
          type : String,
          required : true
      },
      onReset : {
          type : Function,
          required : true
      }
  }
}
</script>
<style scoped>

</style>
