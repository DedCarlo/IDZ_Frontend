<script setup lang='ts'>

import AvatarComponent from '@/components/avatarComponent.vue'

defineProps(['service_name', 'service_annotation'])
</script>

<template>
  <div class='order'>
    <avatar-component/>
    <h1>{{service_name}}</h1>
    <p></p>
    <p>{{service_annotation}}</p>
  </div>
</template>

<style scoped>
.order{
  width: 1075px;
  height: 120px;
  background-color: gray;
  border-radius: 45px;
  border: 1px gray solid;
  grid-template-columns: 140px 935px;
  grid-template-rows: 60px 60px;
  display: grid;
  margin-top: 30px;
}

h1{
  font-size: 45px;
}

p{
  margin-top: -10px
}


.avatar{
  margin-left: 30px;
  margin-top: 20px;
  height: 80px;
  width: 80px;
}
</style>