<script setup lang='ts'>


const orders_list = [{
  id: 1,
  order_name: 'Заказ...',
  order_annotation: 'Описание ...'
},
{
  id: 2,
  order_name: 'Заказ...',
  order_annotation: 'Описание ...'
},
{
  id: 3,
  order_name: 'Заказ...',
  order_annotation: 'Описание ...'
},
{
  id: 4,
  order_name: 'Заказ...',
  order_annotation: 'Описание ...'
}]



import router from '@/router'
import OrderInstance from "@/components/orderInstance.vue";
</script>

<template>

    <div class='order_view_container'>
      <div class='orders_list'>
        <order-instance v-for='(order, index) of orders_list' @click="router.push({path: '/OrderInstanceView'}); "
        :key='order.id'
        :class='{active : index === 0}'
        :order_name='order.order_name'
        :order_annotation='order.order_annotation'/>
      </div>
      <div class='orders_search_menu'>
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
.order_view_container{
  margin-left: 150px;
  margin-top: 220px;
  display: grid;
  grid-template-columns: 1075px 430px;
}

.active{
  margin-top: 0;
}

.orders_search_menu{
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

