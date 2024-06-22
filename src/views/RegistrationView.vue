<script setup lang="ts">



</script>

<template>
<div class="registration_form">
  <label>Регистрация</label><br>
  <input class="registration_input" placeholder="Логин" required><br>
  <input class="registration_input" placeholder="Почта" required><br>
  <input class="registration_input" placeholder="Пароль" required><br>
  <input class="registration_input" placeholder="Повторите пароль" required><br>
  <button class="confirm">Зарегистрироваться</button>
</div>
</template>

<style scoped>

.registration_form{
  width: 800px;
  height: 800px;
  border-radius: 30px;
  margin: 100px 100px 100px 650px;
  padding: 30px 30px 30px 30px;
  background-color: lightgrey;

}

.registration_input{
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
  margin: 250px;

  font-size: 48px;
}
</style>