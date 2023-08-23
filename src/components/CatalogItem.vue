<script setup>
import { ref } from 'vue'
import IconCalc from './icons/IconCalc.vue'
import IconCart from './icons/IconCart.vue'
import { useCartStore } from '../stores/cart'

const props = defineProps({
  nameProduct: {
    type: String,
    required: true
  },
  priceProduct: {
    type: Number,
    required: true
  }
  // showModal: {
  //   type: Boolean,
  //   required: true
  // }
})
const showModal = ref(false)
const qty = ref(0)

const store = useCartStore()

const addMe = () => {
  store.add({
    name: props.nameProduct,
    price: props.priceProduct,
    qty: qty.value
  })
  qty.value = 0
}
</script>

<template>
  <div class="catalog__item">
    <div class="name-price">
      <div>{{ nameProduct }}</div>
      <div>{{ priceProduct }}</div>
    </div>
    <div class="action">
      <button class="action__calc">
        <IconCalc @click="showModal = true" class="icon"></IconCalc>
        <div class="action__calc__keyboard" v-if="showModal" @close="showModal = false">
          <button class="keyboard_del" @click="showModal = false">delete</button>
          <button @click="qty += 7">7</button>
          <button @click="qty += 8">8</button>
          <button @click="qty += 9">9</button>
          <button @click="qty += 4">4</button>
          <button @click="qty += 5">5</button>
          <button @click="qty += 6">6</button>
          <button @click="qty += 1">1</button>
          <button @click="qty += 2">2</button>
          <button @click="qty += 3">3</button>
        </div>
      </button>
      <input type="number" v-model="qty" />
      <button @click="qty++">+</button>
      <button @click="qty--">-</button>
      <button :disabled="qty <= 0" @click="addMe">
        <IconCart class="icon"></IconCart>
      </button>
    </div>
  </div>
</template>

<style scoped>
.catalog__item {
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-column-gap: 40px;
  grid-row-gap: 50px;
}

.name-price {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 40px;
}
.action {
  display: flex;
  justify-content: flex-start;
}

.action__calc {
  position: relative;
}

.action__calc__keyboard {
  position: absolute;
  background: #00bd7e;
  padding: 15px;
  z-index: 1000;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
}

.action__calc__keyboard button {
  font-size: 30px;
  padding: 10px;
  cursor: pointer;
}
.keyboard_del {
  grid-area: 4 / 1 / 5 / 4;
}

.action input {
  max-width: 50px;
}

.icon {
  width: 20px;
}
</style>
