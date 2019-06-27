<template>
    <div>
        <div class="title">周末推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item in weekends" :key="item.title">
                <div class="item-img-wrapper">
                    <img :src=item.src alt="" class="item-img">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>

</template>
<script>
export default {
    name:"HomeWeekend",
    props:["weekends"],
    data:function(){
        return {
 
        }
    }
}
</script>

<style lang="stylus" scoped>
    .title
        margin-top:.2rem
        line-height :.8rem
        background:#eee
        text-indent:.2rem
    .item-img-wrapper 
        overflow :hidden
        height:0
        padding-bottom:33.9% 
        .item-img
            width: 100%
    .item-info  
        padding: .1rem
        .item-title
            line-height :.54rem
            font-size:.32rem
        .item-desc
            line-height :.4rem
            color:#ccc
            width :270px
            overflow: hidden
            text-overflow:ellipsis
            white-space: nowrap
</style>
