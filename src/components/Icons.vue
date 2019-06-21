<template>
    <div class="icons">
        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="">
            </div>
            <p class="icon-desc">热门景点</p>
        </div>
        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png" alt="">
            </div>
            <p class="icon-desc">一日游</p>
        </div>
        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png" alt="">
            </div>
            <p class="icon-desc">武汉必游</p>
        </div>
         <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png" alt="">
            </div>
            <p class="icon-desc">亲子游</p>
        </div>
        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1803/75/eca3ce656c886502.png" alt="">
            </div>
            <p class="icon-desc">木兰天池</p>
        </div>
          <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png" alt="">
            </div>
            <p class="icon-desc">动植物园</p>
        </div>
        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png" alt="">
            </div>
            <p class="icon-desc">水上玩乐</p>
        </div>
        <div class="icon">
            <div class="icon-img">
                <img class="icon-img-content" src="http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png" alt="">
            </div>
            <p class="icon-desc">欢乐谷</p>
        </div>
    </div>
</template>

<script>
export default {
    name:"HomeIcons"
}
</script>
<style lang="stylus" scoped>
    .icons
        overflow:hidden
        height :0
        padding-bottom :50%
 
        .icon
            position:relative
            float: left
            overflow :hidden
            width :25%
            height :0
            padding-bottom :25%
 
            .icon-img
                position :absolute
                top:0
                left :0
                right:0
                bottom .44rem
 
                box-sizing:border-box
                padding:.1rem
                .icon-img-content
                    display:block
                    margin:0 auto
                    height :100%
            .icon-desc
                position :absolute;
                left :0
                right :0
                bottom :0
                height :.44rem
                line-height :.44rem
                color:#333
                text-align:center


</style> 
