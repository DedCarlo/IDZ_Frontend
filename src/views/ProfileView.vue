<script setup lang="ts">
let Username = ''
let Description = ''
</script>

<template>
  <div class="profile_background">
    <div class="user_description">
      <div class="image"></div>
      <p class="username">{{Username}}DedCarlo</p>
      <p class="about_me">О себе</p>
      <label class="about_me_description">{{Description}}Пример текста, я не знаю что сюда написать просто пишу что то для наличия и так далее тому подобное </label>
    </div>
    <div class="user_services_and_orders">
      <p class="services_and_orders">Ваши заказы и услуги</p>
    </div>
  </div>
</template>

<style scoped>
.profile_background{
  margin: 150px 250px 250px 250px;
  padding: 30px;
  background-color: lightgrey;
  border-radius: 30px;
  width: 1600px;
  height: 2000px;
}
.user_description{
  padding: 30px;
  width: 1540px;
  height: 400px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background-color: rgba(196, 196, 196, 1);
}
.image{
  margin: 40px 0 0 40px;
  width: 312px;
  height: 312px;
  border-radius: 10px;
  background-color: black;
}
.username{
  position: relative;
  left: 450px;
  bottom: 312px;
  display: inline-block;
  border-radius: 10px;
  background-color: #f5f5f5;
  font-size: 48px;
}
.about_me{
  margin: 50px 0 0 0;
  position: relative;
  left: 450px;
  bottom: 312px;

  font-size: 32px;
  text-decoration: underline;
}
.about_me_description{
  width: 1030px;
  height: 175px;
  display: grid;
  position: relative;
  left: 450px;
  bottom: 312px;

  font-size: 28px;
  overflow-wrap: break-word;
}
.user_services_and_orders{
  height: 300px;
  width: 1600px;
  border-top: 4px solid #646464;
  background-color: rgba(196, 196, 196, 1);
}
.services_and_orders{
  margin: 30px;

  text-decoration: underline;
}
</style>