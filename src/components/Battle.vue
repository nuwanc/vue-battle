<template>
<div>
<div class='row'>
  <player-input id="playerOne" label="Player One" :onSubmit="handleSumbit" v-if="!playerOneName"/>
  <player-preview :avatar="playerOneImage" :username="playerOneName" v-if="playerOneImage !== null">
  <button class='reset' v-on:click="handleReset('playerOne')">Reset</button>
  </player-preview>
  <player-input id="playerTwo" label="Player Two" :onSubmit="handleSumbit" v-if="!playerTwoName"/>
  <player-preview :avatar="playerTwoImage" :username="playerTwoName"  v-if="playerTwoImage !== null">
  <button class='reset' v-on:click="handleReset('playerTwo')">Reset</button>
  </player-preview>
</div>
<div class='row'>
  <router-link :to="queryString" class="button" v-if="playerOneImage !== null && playerTwoImage!== null">
    Battle
  </router-link>
</div>
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
  computed: { 
    queryString : function () {
      return '/battle/results?playerOneName='+this.playerOneName+'&playerTwoName='+this.playerTwoName;
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
