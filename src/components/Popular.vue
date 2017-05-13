<template>
<div>
  <select-language :selectedLanguage="selectedLanguage" :onSelect="updateLanguage"/>
  <template v-if="repos">
  <repo-grid :repos="repos"></repo-grid>
  </template>
  <template v-else>
  <div>Loading....</div>
  </template>
</div>
</template>

<script>
import SelectLanguage from '@/components/SelectLanguage'
import RepoGrid from '@/components/RepoGrid'
import * as api from '@/utils/api'

export default {
  name: 'popular',
  data () {
    return {
      selectedLanguage : 'All',
      repos : null
    }
  },
  methods: {
    updateLanguage : function(language,event) {
      this.selectedLanguage = language;
      this.repos = null;
      api.fetchPopularRepos(language).then((repos)=>{
          this.repos = repos;
      })
    }
  },
  components : {
    SelectLanguage,
    RepoGrid
  },
  mounted: function () {
    this.updateLanguage(this.selectedLanguage);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
