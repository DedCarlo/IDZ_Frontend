<script setup lang='ts'>

import AvatarComponent from '@/components/avatarComponent.vue'

defineProps(['name', 'message'])

</script>

<template>
  <div class=dialogue_list_container>
    <avatar-component/>
    <p>{{name}}</p>
    <p/>
    <p>{{message}}</p>
  </div>
</template>

<style scoped>

.dialogue_list_container{
  width: 810px;
  height: 150px;
  display: grid;
  grid-template-columns:  210px 600px;
  grid-template-rows: 40px 110px;
  transition: 0.7s;
  &:hover{
      background: rgb(147, 137, 137);
  }
}


.avatar{
  margin-top: 25px;
  margin-left: 70px;
  margin-bottom: 25px;
}





</style>