<template>
<router-view/>
</template>

<script>


export default {
  name: 'App',
  }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
body{
  padding: 0;
  margin: 0;
}

.logo{
    width: 150px;
}

.register input, .login input, .add input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid rgb(47, 64, 248);
}

.register button, .login button, .add button{
    width: 320px;
    height: 40px;
    border: 1px solid black;
    color: #fff;
    background-color: rgb(32, 16, 208);
    cursor: pointer;
}

</style>
