<script setup>
import HelloWorld from '../components/HelloWorld.vue';
</script>

<template>
  <div class="catalog__head">
    <h3>Наименование</h3>
    <h3>Цена</h3>
    <h3>Действие</h3>

  </div>
  <div class="catalog__items">
    <HelloWorld></HelloWorld>
    <HelloWorld></HelloWorld>
    <HelloWorld msg="Another MSG!!!!!!!"></HelloWorld>
    <HelloWorld msg="Это мсг!!!!!"></HelloWorld>
  </div>
</template>

<style>
.catalog__head  {
display: grid;
grid-template-columns: 2fr 1fr 2fr;
grid-template-rows: 1fr;
grid-column-gap: 40px;
grid-row-gap: 0px;
}

/* .catalog__items {
display: grid;
grid-template-columns: 2fr 1fr 2fr;
grid-template-rows: repeat(5, 1fr);
grid-column-gap: 40px;
grid-row-gap: 0px;
} */
</style>
