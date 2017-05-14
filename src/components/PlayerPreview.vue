<template>
    <div>
        <div class='column'>
            <img class='avatar' v-bind:src="avatar" v-bind:alt="'Avatar for '+username"/>
            <h2>@{{username}}</h2>
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
  name : 'player-preview',
  props : {
      avatar : {
          type : String,
          required : true
      },
      username : {
          type : String,
          required : true
      }
  }
}
</script>
<style scoped>
.avatar {
    width: 150px;
    border-radius: 50%;
}

</style>
