<template>
    <ul class="list" >
        <li class="item" v-for="(value,key) of cities" :key="value.id"
            @click = "handleLetterClick"
        >{{key}}</li>
    </ul>
</template>
<script>
export default {
    name:"Alphabet",
    props:["cities"],
    methods:{
        handleLetterClick(e){
            this.$emit("letterChange",e.target.innerText)
        }
    }
}
</script>

<style lang="stylus" scoped> 
    @import '~@/assets/styles/varibles.styl'
    .list
        display: flex
        justify-content:center
        flex-direction :column
        position :absolute
        top:1.58rem
        right:0
        bottom:0
        width:.4rem
        .item
            line-height :.4rem
            text-align:center
            color:$bgColor
</style>
 
