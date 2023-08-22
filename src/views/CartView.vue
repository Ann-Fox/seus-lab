<script setup>
import { useCartStore } from '../stores/cart';

import CartItem from '../components/CartItem.vue';
import { computed } from 'vue';
const store = useCartStore()

const total = computed(() => {
  let t = 0

  store.items.forEach((item) => {
    t += Math.round(item.price * item.qty * 100) / 100
  })

  return t
})

</script>

<template>
    <div class="cart__head">
    <h3>Наименование</h3>
    <h3>Цена</h3>
    <h3>Количество</h3>
    <h3>Стоимость</h3>
  </div>

  <div class="cart__items">
    <CartItem v-for="(item,index) in store.items" :key="item.name" :name-product="item.name" :price-product="item.price" :qty-product="item.qty" :index-product="index"></CartItem>
  </div>
  <!-- {{ JSON.stringify(store.items) }} -->
  <div>{{ total }}</div>
</template>

<style>
.cart__head {
display: grid;
grid-template-columns: 2fr repeat(2, 1fr) 2fr;
grid-template-rows: 1fr;
grid-column-gap: 40px;
grid-row-gap: 0px;
}
</style>
