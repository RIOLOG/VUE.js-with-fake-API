<template>
<HeadeR/>
<h1>Hello User, Welcome to Update Page</h1>
<form class="add">
    <input type="text" placeholder="Enter Your Name" v-model="resturant.name" name="name"/>
    <input type="text" placeholder="Enter Your Address" v-model="resturant.address" name="address"/>
    <input type="text" placeholder="Enter Your Contact" v-model="resturant.contact" name="contact"/>
    <button type="button" v-on:click="updateRes">Update Resturant</button>
</form>
</template>

<script>
import HeadeR from './Header.vue'
import axios from 'axios';

export default{
    name:'UpdatE',
    components:{
        HeadeR
    },
    data()
    {
        return {
            resturant:{
                name:'',
                address:'',
                contact:''
            }
        }
    },
    methods:{
        async updateRes()
        {
            const result = await axios.put("http://localhost:3000/resturant/"+this.$route.params.id,{
                name:this.resturant.name,
                address:this.resturant.address,
                contact:this.resturant.contact,

            });
            if (result.status==200)
            {
                this.$router.push({name:'Home'});
            }
        }
    },
    async mounted()
    {
        let user = localStorage.getItem('user-info');
        if (!user)
        {
            this.$router.push({name:'SignUp'})
        }
        const result = await axios.get("http://localhost:3000/resturant/"+this.$route.params.id);
        // console.log(result);
        this.resturant=result.data;
    }
};

</script>