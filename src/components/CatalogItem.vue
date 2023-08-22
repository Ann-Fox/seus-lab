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

const add = () => {
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
      <button>
        <IconCalc class="icon"></IconCalc>
      </button>
      <input type="number" :value="qty"/>
      <button @click="qty++">+</button>
      <button @click="qty--">-</button>
      <button :disabled="qty <= 0" @click="add">
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
    justify-content: space-between;
}

.icon {
  width: 20px;
}

</style>
