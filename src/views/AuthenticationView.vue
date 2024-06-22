<script setup lang="ts">

</script>

<template>
<div class="authentication_form">
  <label>Регистрация</label><br>
  <input class="registration_input" placeholder="Логин" required><br>
  <input class="registration_input" placeholder="Почта" required><br>
  <input class="registration_input" placeholder="Пароль" required><br>
  <input class="registration_input" placeholder="Повторите пароль" required><br>
  <button class="confirm">Зарегистрироваться</button>
</div>
</template>

<style scoped>

.authentication_form{
    width: 800px;
  height: 800px;
  border-radius: 30px;
  margin: 100px 100px 100px 650px;
  padding: 30px 30px 30px 30px;
  background-color: lightgrey;
}
</style>