<script setup>
import { useCartStore } from '../stores/cart'

import CartItem from '../components/CartItem.vue'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
const store = useCartStore()

const total = computed(() => {
  let t = 0

  store.items.forEach((item) => {
    t += Math.round(item.price * item.qty * 100) / 100
  })

  return t
})

const router = useRouter()

const removeAllandGo = () => {
  store.removeAll()
  router.push('/')
}

const showAndGo = () => {
  console.log(JSON.stringify(store.items))
  router.push('/')
}
</script>

<template>
  <div class="cart__head">
    <h3>Наименование</h3>
    <h3>Цена</h3>
    <h3>Количество</h3>
    <h3>Стоимость</h3>
  </div>

  <div class="cart__items">
    <CartItem
      v-for="(item, index) in store.items"
      :key="item.name"
      :name-product="item.name"
      :price-product="item.price"
      :qty-product="item.qty"
      :index-product="index"
    ></CartItem>
  </div>
  <!-- {{ JSON.stringify(store.items) }} -->
  <div class="cart__total">
    <p>Итого</p>
    <p>{{ total }}</p>
  </div>
  <div class="cart__button">
    <button @click="showAndGo">Берем!</button>
    <button @click="removeAllandGo">Пожалуй, откажусь</button>
  </div>
</template>

<style>
.cart__head {
  display: grid;
  grid-template-columns: 2fr repeat(2, 1fr) 2fr;
  grid-template-rows: 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 0px;
}

.cart__total {
  display: flex;
  margin: 20px 115px 50px 345px;
  justify-content: space-between;
  border-top: 1px solid #fff;
}

.cart__button {
  margin-right: 50px;
  margin-bottom: 20px;
  display: flex;
  gap: 20px;
  justify-content: flex-end;
}

.cart__button button {
  color: #00bd7e;
  background: none;
  padding: 10px 40px;
  border: 1px solid #00bd7e;
  cursor: pointer;
}

.cart__button button:hover {
  color: #181818;
  background: #00bd7e;
  border: 1px solid #00bd7e;
  cursor: pointer;
}
</style>
