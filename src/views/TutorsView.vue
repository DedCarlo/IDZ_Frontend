<script setup lang="ts">


const tutors_list=[{
  id: 1,
  tutor_name: 'Репетитор',
  tutor_annotation: 'Описание ...'
},
{
  id: 2,
  tutor_name: 'Репетитор',
  tutor_annotation: 'Описание ...'
},
{
  id: 3,
  tutor_name: 'Репетитор',
  tutor_annotation: 'Описание ...'
},
{
  id: 4,
  tutor_name: 'Репетитор',
  tutor_annotation: 'Описание ...'
}]



import router from '@/router'
import TutorInstance from "@/components/tutorInstance.vue";
</script>

<template>

    <div class='tutor_view_container'>
      <div class='tutors_list'>
        <tutor-instance v-for='(tutor, index) of tutors_list' @click="router.push({path: '/tutorsInstanceView'}); "
        :key='tutor.id'
        :class='{active : index === 0}'
        :tutor_name='tutor.tutor_name'
        :tutor_annotation='tutor.tutor_annotation'/>
      </div>
      <div class='tutors_search_menu'>
        <p>Поиск</p>
        <input type='search' class='custom-search'>
        <input type='search' class='custom-search'>
        <p>Поиск</p>
        <input type='search' class='custom-search'>
        <input type='search' class='custom-search'>
        <p>Поиск</p>
        <input type='checkbox' class='custom-checkbox'>
        <input type='checkbox' class='custom-checkbox'>
        <input type='checkbox' class='custom-checkbox'>
      </div>
    </div>

</template>

<style scoped>
.tutor_view_container{
  margin-left: 150px;
  margin-top: 220px;
  display: grid;
  grid-template-columns: 1075px 430px;
}

.active{
  margin-top: 0;
}

.tutors_search_menu{
  width: 430px;
  height: 600px;
  border-radius: 30px;
  display: grid;
  margin-left: 115px;
  background-color: lightgray;
  grid-template-rows: 70px 60px 60px 70px 60px 60px 70px  50px 50px 50px;
}

.custom-checkbox{
  height: 32px;
  width: 32px;
  margin-left: 40px;
}

.custom-search{
  height: 32px;
  width: 370px;
  border-radius: 12px;
  margin-left: 30px;
  margin-right: 30px;
}

p{
  margin-left: 30px;
}

</style>