<script setup>
import { ref } from 'vue';
import IconCalc from './icons/IconCalc.vue';
import IconCart from './icons/IconCart.vue';
import { useCartStore } from '../stores/cart';


const props = defineProps({
  nameProduct: {
    type: String,
    required: true

  },
  priceProduct: {
    type: Number,
    required: true

  }
})

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
        <IconCalc class="icon"></IconCalc>
        <div class="action__calc__keyboard">
          <button class="keyboard_del">delete</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
        </div>
      </button>
      <input type="number" :value="qty"/>
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
  background: #00BD7E;
  padding: 5px;
  
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(4, 1fr);
grid-column-gap: 5px;
grid-row-gap: 5px;
}

.keyboard_del { grid-area: 4 / 1 / 5 / 4; }

.action input {
  max-width: 50px;
}

.icon {
  width: 20px;
}

</style>
