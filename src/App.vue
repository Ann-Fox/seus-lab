<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useCartStore } from './stores/cart';

const store = useCartStore()
</script>

<template>

  <section class="main">
    <div class="main__nav">
      <RouterLink to="/">Каталог</RouterLink>
      <RouterLink to="/cart">Корзина ({{ store.items.length }})</RouterLink>
    </div>
    <div class="main__products">
      <RouterView />
    </div>
  </section>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!!!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->

</template>

<style scoped>

header {
  margin-bottom: 50px;
}

.main {
display: grid;
grid-template-columns: 1fr 4fr;
grid-column-gap: 50px;
}

.main__nav {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.main__products {
  border: 1px solid snow;
  padding: 20px;
}

</style> 
