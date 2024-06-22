<script setup lang="ts">

</script>

<template>
<div class="login_form">
  <label>Авторизация</label>
  <input class="login_input" placeholder="Логин" required><br>
  <input class="login_input" placeholder="Пароль" required><br>
  <button class="confirm">Зарегистрироваться</button>
</div>
</template>

<style scoped>
.login_form{
  width: 800px;
  height: 800px;
  border-radius: 30px;
  margin: 100px 100px 100px 650px;
  padding: 30px 30px 30px 30px;
  background-color: lightgrey;
}
.login_input{
  width: 45% ;
  height: 30px;
  border-radius: 30px;
  margin: 30px 0 0 200px;
  padding: 15px;

  font-size: 24px;
}
.confirm{
  width: 45%;
  height: 65px;
  border-radius: 30px;
  margin: 200px;
  padding: 15px;

  font-size: 28px;
}

label{
  margin: 100px 100px 100px 250px;

  font-size: 48px;
}
</style>