<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
        <alphabet :cities="cities" @letterChange="handleLetterChange"></alphabet>
    </div>
</template>
    
    
<script>
import axios from 'axios'
import CityHeader from '../components/city/CityHeader'
import CitySearch from '../components/city/CitySearch'
import CityList from '../components/city/CityList'
import Alphabet from '../components/city/Alphabet'

export default {
    name:"City",
    data:function(){
        return {
            cities:null,
            hotCities:null,
            letter:""
        }
    },
    components: {
        CityHeader,
        CitySearch,
        CityList,
        Alphabet
    },
    methods:{
        getCities(){
            axios.get("http://localhost:8080/city.json").then(this.handleCities)
        },
        handleCities(res){
            console.log(res.data)
            if(res.data.ret){
                this.cities = res.data.data.cities;
                this.hotCities = res.data.data.hotCities;
            }
        },
        handleLetterChange(letter){
            this.letter = letter;
        }
    },
    mounted(){
        this.getCities()
    }
    
}
</script>

<style <style lang="stylus" scoped>

</style> 
