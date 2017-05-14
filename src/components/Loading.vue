<template>
  <p v-bind:style="content">
     {{text}}
  </p>
</template>

<script>
export default {
    name : 'loading',
    data() {
        return {
            text : 'Loading',
            interval : null,
            content : {
                textAlign: 'center',
                fontSize: '35px'
            }
        }
    } ,
    mounted : function () {
        let stopper = this.label + '...';
        this.interval = window.setInterval(() => {
            if (this.text === stopper) {
                this.text =  this.label;
            } else {
                this.text = this.text + '.';
            }
        }, this.speed);
    },
    destroyed : function () {
        window.clearInterval(this.interval);
    },
    props : {
        label : {
            type : String,
            default : 'Loading'
        },
        speed : {
            type : Number,
            default : 300
        }
    }
}
</script>

<style>

</style>
