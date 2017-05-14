<template>
<player-preview :username="info.login" :avatar="info.avatar_url">
<ul className='space-list-items'>
    <li v-show="info.name !== null">{{info.name}}</li>
    <li v-show="info.location !== null">{{info.location}}</li>
    <li v-show="info.company !== null">{{info.company}}</li>
    <li>Followers: {{info.followers}}</li>
    <li>Following: {{info.following}}</li>
    <li>Public Repos: {{info.public_repos}}</li>
    <li v-show="info.blog !== null"><a :href="info.blog">{{info.blog}}</a></li> 
</ul> 
</player-preview>
</template>

<script>
import PlayerPreview from '@/components/PlayerPreview'

export default {
    name : 'profile',
    props : {
        info : {
            type : Object,
            required : true
        }
    },
    components : {
        PlayerPreview
    }
}
</script>

<style>

</style>
