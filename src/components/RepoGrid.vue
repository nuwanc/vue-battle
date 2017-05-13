<template>
<ul class="popular-list">
    <li v-for="(repo,index) in repos" class='popular-item'>
        <div className='popular-rank'>#{{index + 1}}</div>
            <ul className='space-list-item'>
                <li>
                    <img
                        class='avatar' 
                        v-bind:src="repo.owner.avatar_url"
                        v-bind:alt="'Aavatar for '+repo.owner.login" />
                </li>
                <li><a v-bind:href="repo.html_url">{{repo.name}}</a></li>
                <li>@{{repo.owner.login}}</li>
                <li>{{repo.stargazers_count}} stars</li>
            </ul>
    </li>
</ul>
</template>

<script>
export default {
  name: 'repo-grid',
  data () {
    return {
      msg: 'Github Battle:Battle your friends and Stuff...'
    }
  },
  props : {
      repos : {
          type : Array,
          required : true
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.popular-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.popular-item {
    margin: 20px;
    text-align: center;
}

.space-list-item {
    margin-bottom: 7px;

}

.avatar {
    width: 150px;
    border-radius: 50%;
}

.popular-rank {
    font-size: 20px;
    margin: 10px;
}

</style>
