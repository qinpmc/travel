<template>
    <div>
        <div class="title">周末推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item in weekendList" :key="item.title">
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
    data:function(){
        return {
            weekendList:[
                {
                    src:"http://img1.qunarzz.com/sight/source/1505/d5/abe8a48a6ef8bf.jpg_r_640x214_7c41cc81.jpg",
                    title:"大连圣亚海洋",
                    desc:"浪漫大连首战，浪漫的海洋主题乐园浪漫大连首战，浪漫的海洋主题乐园"
                },
                {
                    src:"http://img1.qunarzz.com/sight/source/1507/e0/4aae49007c8a64.jpg_r_640x214_65a42783.jpg",
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
