<template>
    <HeadeR/>
    <h1>Hello User, Welcome to Add Page</h1>
    <form class="add">
        <input type="text" placeholder="Enter Your Name" v-model="resturant.name" name="name"/>
        <input type="text" placeholder="Enter Your Address" v-model="resturant.address" name="address"/>
        <input type="text" placeholder="Enter Your Contact" v-model="resturant.contact" name="contact"/>
        <button type="button" v-on:click="addRes">Add New Resturant</button>
    </form>
    </template>
    
    <script>
    import HeadeR from './Header.vue'
    import axios from 'axios';
    export default{
        name:'AdD',
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
            async addRes()
            {
                console.log(this.resturant);
                const result = await axios.post("http://localhost:3000/resturant",{
                    name:this.resturant.name,
                    address:this.resturant.address,
                    contact:this.resturant.contact,

                });
                if (result.status==201)
                {
                    this.$router.push({name:'Home'});
                }

            }
        },
        mounted()
        {
            let user = localStorage.getItem('user-info');
            if (!user)
            {
                this.$router.push({name:'SignUp'})
            }
        }
    };
    
    </script>