<script setup lang='ts'>

let Service_name = '';
let Service_annotation = '';
let Service_price = 0;
</script>

<template>
  <div class='input_form'>
    <label>Название услуги</label>
    <p>{{ Service_name}}</p>
    <label>Описание услуги</label>
    <p>{{Service_annotation}}</p>
    <label>Цена услуги</label>
    <p>{{Service_price}}</p>
  </div>
</template>

<style scoped>
.input_form{
  margin: 140px;
  padding: 100px;
  background-color: lightgrey;
  border-radius: 30px;
}
label{
  padding: 10px 10px 10px 10px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background-color: grey;

  font-size: 28px;
}
p{
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  padding: 10px 10px 10px 10px;
  margin-bottom: 30px;
  background-color: darkgray;

  font-size: 24px;
}
</style>