<template>
  <div>
    <template v-if="loading">
      <loading/>
    </template>
    <template v-else>
      <template v-if="error != null">
        <div>
          <p>{{error}}</p>
          <router-link to='/battle' class='reset'>Reset</router-link>
        </div>
      </template>
      <div class='row'>
        <player label="Winner" :score="winner.score" :profile="winner.profile" />
        <Player label="Looser" :score="looser.score" :profile="looser.profile" />
      </div>
    </template>
  </div>
</template>

<script>
import PlayerPreview from '@/components/PlayerPreview'
import * as api from '@/utils/api'
import Loading from '@/components/Loading'
import Player from '@/components/Player'

export default {
  name: 'results',
  data () {
    return {
      winner : null,
      looser : null,
      error : null,
      loading : true
    }
  },
  mounted : function() {
    let playerOneName = this.$route.query.playerOneName;
    let playerTwoName = this.$route.query.playerTwoName;

    api.battle([
            playerOneName,
            playerTwoName
        ]).then((results) => {
            if (results === null) {
                this.error = "There was an error, check that both users are in github";
                this.loading = false;
            }
            this.winner = results[0];
            this.looser = results[1];
            this.error = null;
            this.loading = false;
        })
  },
  components : {
    PlayerPreview,
    Loading,
    Player
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
