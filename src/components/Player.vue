<template>
 <div>
    <h1 class='header'>{{label}}</h1>
    <h3 v-bind:style="{textAlign: 'center'}">{{score}}</h3>
    <profile :info="profile" />
</div> 
</template>

<script>
import Profile from '@/components/Profile'

export default {
    name : 'player',
    props : {
        label : {
            type : String,
            required : true
        },
        score : {
            type : Number,
            required: true
        },
        profile : {
            type : Object,
            required : true
        }
    },
    components : {
        Profile
    }
}
</script>

<style>

</style>
