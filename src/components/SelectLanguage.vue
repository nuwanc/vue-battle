<template>
  <div>
        <ul class="languages">
          <li v-for="language in languages" 
          v-on:click="onSelect(language,$event)"
          v-bind:style="{ color : (language === selectedLanguage) ? '#d0021b' : null }">
          {{language}}
          </li>
        </ul>
  </div>
</template>

<script>
export default {
  name: 'select-language',
  data () {
    return {
      languages: ['All','JavaScript','Ruby','Java','CSS','Python']
    }
  },
  props : {
      selectedLanguage : {
          type : String,
          required : true
      },
      onSelect : {
          type : Function,
          required : true
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.languages {
    display: flex;
    justify-content: center;
}

.languages li {
    margin: 10px;
    font-weight: bold;
    cursor: pointer;
}
</style>
