<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item in recommendList" :key="item.title">
                <img :src=item.src alt="" class="item-img">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>

</template>
<script>
export default {
    name:"HomeRecommed",
    data:function(){
        return {
            recommendList:[
                {
                    src:"https://imgs.qunarzz.com/sight/p0/1504/c6/c6906545521a7472.water.jpg_224x148_a342aeda.jpg",
                    title:"大连圣亚海洋",
                    desc:"浪漫大连首战，浪漫的海洋主题乐园浪漫大连首战，浪漫的海洋主题乐园"
                },
                {
                    src:"https://imgs.qunarzz.com/sight/p0/1503/55/5577ab22b2e205d0.water.jpg_224x148_2f0307b6.jpg",
                    title:"武汉黄鹤楼",
                    desc:"浪漫大连首战，浪漫的海洋主题乐园浪漫大连首战，浪漫的海洋主题乐园"
                }
            ]
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
    .item
        overflow:hidden
        display:flex
        height:1.9rem
        .item-img
            width: 1.7rem
            height: 1.7rem
            padding: 0.1rem
        .item-info  
            flex:1
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
            .item-button
                line-height :.44rem
                margin-top:.16rem
                background: #ff9300
                padding:0 .1rem
                border-radius:0.1rem
                color:#fff


</style>
