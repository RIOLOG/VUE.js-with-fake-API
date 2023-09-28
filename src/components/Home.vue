<template>
<HeadeR/>
<h1>Hello {{name}}, Welcome to Home Page</h1>

<table border="1">

<tr>
<td>ID</td>
<td>Name</td>
<td>Address</td>
<td>Contact</td>
<td>Actions</td>
</tr>

<tr v-for="item in resturants" :key="item.id">
<td>{{item.id}}</td>
<td>{{item.name}}</td>
<td>{{item.address}}</td>
<td>{{item.contact}}</td>
<td>
    <router-link :to="'/update/' + item.id">Update</router-link>
    <button v-on:click=" deleteRes(item.id)">Delete</button>
</td>
</tr>

</table>

</template>

<script>
import axios from 'axios';
import HeadeR from './Header.vue'
export default{
    name:'HomE',
    data(){
        return {
            name:'',
            resturants:[]
        }
    },
    components:{
        HeadeR
    },
    methods:{
        async deleteRes(id)
        {
            let result = await axios.get("http://localhost:3000/resturant/"+id);
            if (result.status===200)
            {
                this.load()
            }
        },
        async load()
        {
            let user = localStorage.getItem('user-info');
            this.name = JSON.parse(user).name
            if (!user)
            {
                this.$router.push({name:'SignUp'})
            }
            let result = await axios.get("http://localhost:3000/resturant");
            console.log(result);
            this.resturants = result.data
        }
    },
    async mounted()
    {
        this.load(); 
    }
};

</script>


<style>
td{
    width: 200px;
    height: 50px;
}
</style>