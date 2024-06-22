<script setup lang="ts">

</script>

<template>
  <header>
    <router-link to='/' class = logo>IDZ</router-link>
    <router-link to='/Orders' class = 'route'>Заказы</router-link>
    <router-link to='/Services' class = 'route'>Услуги</router-link>
    <router-link to="/Tutors" class = 'route'>Репетиторы</router-link>
    <router-link to='/ProfileView' class= personal_account @click='changeBodyColor("white")'></router-link>
  </header>


  <body>
    <router-view/>
  </body>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

.logo{
  margin-left: 150px;
  margin-right: 800px;
  font-size: 48px;
  color: black;
  text-decoration: none;
}

.route{
  margin-left: 100px;
  font-size: 32px;
  margin-top: 15px;
  color: black;
  text-decoration: none;
  &:hover{
    color: grey;
  }
}

.personal_account{
  width: 50px;
  height: 50px;
  background-color: black;
  border-radius: 45px;
  margin: 5px 10px 5px 100px;
}



header{
  border-bottom: 10px solid rgba(230, 230, 230, 1);
  background-color: lightgray;
  width: 100%;
  height: 60px;
  display: grid;
  grid-auto-flow: column;
  position: relative;
  left: 0;
  top: 0;
}

p{
  font-size: 32px;
  margin-top: 20px;
}

</style>

