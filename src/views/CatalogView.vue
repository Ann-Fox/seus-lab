<script setup>
import CatalogItem from '../components/CatalogItem.vue';

const items = [
  {
    name: 'Продукт 1',
    price: 333.33,
  },
  {
    name: 'Продукт 2',
    price: 444.44,
  },
  {
    name: 'Продукт 3',
    price: 555.55,
  },
  {
    name: 'Продукт 4',
    price: 222.22,
  },
  {
    name: 'Продукт 5',
    price: 111.11,
  },
]
</script>

<template>
  <div class="catalog__head">
    <h3>Наименование</h3>
    <h3>Цена</h3>
    <h3>Действие</h3>

  </div>
  <div class="catalog__items">
    <CatalogItem v-for="item in items" :key="item.name" :name-product="item.name" :price-product="item.price"></CatalogItem>
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
