<template>
    <div>
        <div class="search">
            <input type="text" name="" id="" placeholder="请输入城市名称" class="search-input">
        </div>
        <div class="search-content">

        </div>
    </div>

</template>
<script>
export default {
    name:"CitySearch"    
}
</script>

<style lang="stylus" scoped> 
    @import '~@/assets/styles/varibles.styl'
    .search
        height :.72rem
        padding:0 .1rem
        background:$bgColor
        .search-input
            box-sizing:border-box
            width:100%
            height:0.62rem
            padding: 0 .1rem
            line-height :.62rem
            text-align:center
            border radius 0.06rem
            color:#666
    .search-content
        z-index:1
        overflow: hidden
        position:absolute
        top:1.58rem
        left:0
        right:0
        bottom:0
        background:green

</style>
 
