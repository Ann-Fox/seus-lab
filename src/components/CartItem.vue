<script setup>

defineProps({
  nameProduct: {
    type: String,
    required: true

  },
  priceProduct: {
    type: Number,
    required: true

  },

  qtyProduct: {
    type: Number,
    required: true

  }
})
</script>

<template>
    <div class="cart__item" >
        <div>{{ nameProduct }}</div> 
        <div>{{ priceProduct }}</div>
        <div>{{ qtyProduct }}</div>
        <div>{{ priceProduct*qtyProduct }} 
            <button>&times;</button>
        </div>
    </div>
      
   
  </template>

<style>
.cart__item {
display: grid;
grid-template-columns: 2fr repeat(2, 1fr) 2fr;
grid-template-rows: 1fr;
grid-column-gap: 40px;
grid-row-gap: 0px;
}
</style>