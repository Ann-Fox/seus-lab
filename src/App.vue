<script setup>
import { RouterLink, RouterView } from 'vue-router'

import { reactive } from 'vue'

const myProducts = reactive({
  name: 'Продукт 1',
  price: '333.33',
},
{
  name: 'Продукт 2',
  price: '444.44',
},
{
  name: 'Продукт 3',
  price: '555.55',
},
{
  name: 'Продукт 4',
  price: '222.22',
},
{
  name: 'Продукт 5',
  price: '111.11',
},
)
</script>

<template>

  <section class="main">
    <div class="main__nav">
      <RouterLink to="/">Каталог</RouterLink>
      <RouterLink to="/cart">Корзина ({{ count }})</RouterLink>
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
.main__nav button {
  width: 80%;
    height: 40px;
}
.main__products {
  border: 1px solid snow;
}

</style> 
