<template lang="html">
  <div class="products">
    <ul>
      <li v-for="n in 10">
        <my-product></my-product>
      </li>
    </ul>
  </div>
</template>

<script>
import MyProduct from './Product'

export default {
  components: {
    MyProduct
  }
}
</script>

<style lang="css">
</style>
