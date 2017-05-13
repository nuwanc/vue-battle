<template>
<div class='row'>
  <player-input id="playerOne" label="Player One" :onSubmit="handleSumbit" v-if="!playerOneName"/>
  <player-preview id="playerOne" :avatar="playerOneImage" :username="playerOneName" :onReset="handleReset" v-if="playerOneImage !== null"/>
  <player-input id="playerTwo" label="Player Two" :onSubmit="handleSumbit" v-if="!playerTwoName"/>
  <player-preview id="playerTwo" :avatar="playerTwoImage" :username="playerTwoName" :onReset="handleReset" v-if="playerTwoImage !== null"/>
</div>
</template>

<script>
import PlayerInput from '@/components/PlayerInput'
import PlayerPreview from '@/components/PlayerPreview'

export default {
  name: 'battle',
  data () {
    return {
      playerOneName : '',
      playerTwoName : '',
      playerOneImage : null,
      playerTwoImage : null
    }
  },
  methods : {
    handleSumbit : function (id,username) {
      if (id === "playerOne") {
        this.playerOneName = username;
        this.playerOneImage = 'https://github.com/'+username + '.png?size=200'; 
      } else if (id === "playerTwo") {
        this.playerTwoName = username;
        this.playerTwoImage = 'https://github.com/'+username + '.png?size=200';
      }
    },
    handleReset : function (id) {
      if (id === "playerOne") {
        this.playerOneName = '';
        this.playerOneImage = null; 
      } else if (id === "playerTwo") {
        this.playerTwoName = '';
        this.playerTwoImage = null;
      }
    }
  },
  components : {
    PlayerInput,
    PlayerPreview
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
