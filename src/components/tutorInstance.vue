<script setup lang="ts">

import AvatarComponent from '@/components/avatarComponent.vue'

defineProps(['tutor_name', 'tutor_annotation'])
</script>

<template>
  <div class='tutor'>
    <avatar-component/>
    <h1>{{tutor_name}}</h1>
    <p></p>
    <p>{{tutor_annotation}}</p>
  </div>
</template>

<style scoped>
.tutor{
  width: 1075px;
  height: 120px;
  background-color: grey;
  border-radius: 45px;
  border: 1px grey solid;
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