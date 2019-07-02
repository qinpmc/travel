<template>
    <ul class="list" >
        <li class="item" v-for="(value) of letters" :key="value"  :ref="value"
            @click = "handleLetterClick"
            @touchstart = "handleTouchStart"
            @touchmove = "handleTouchMove"
            @touchend = "handleTouchEnd" 
        >{{value}}</li>
    </ul>
</template>
<script>
export default {
    name:"Alphabet",
    props:["cities"],
    data(){
        return{
            touchStatus:false
        }
    },
    computed:{
        letters(){
            const letters = [];
            for(let i in this.cities){
                letters.push(i);
            }
            return letters;
        }
    },
    methods:{
        handleLetterClick(e){
            this.$emit("letterChange",e.target.innerText)
        },
        handleTouchStart(e){
            this.touchStatus = true;
        },
        handleTouchMove(e){
            if(this.touchStatus){
                let startY = this.$refs["A"][0].offsetTop; //67
                let touchY = e.touches[0].clientY -79;
                let index = Math.floor((touchY - startY)/20);
                if(index>=0 && index<this.letters.length){
                    this.$emit("letterChange",this.letters[index]);
                }
                
            }
        },
        handleTouchEnd(e){
            this.touchStatus = false;
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
 
