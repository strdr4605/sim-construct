<template lang="html">
  <div class="products">
    <ul>
      <li v-for="product in getProductsGetter">
        <my-product :apiUrl="apiUrlGetter" :productInfo="product"></my-product>
      </li>
    </ul>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import MyProduct from './Product'

export default {
  computed: mapGetters([
    'apiUrlGetter',
    'getProductsGetter'
  ]),
  methods: mapActions([
    'getAllProductsAction'
  ]),
  mounted () {
    this.getAllProductsAction()
  },
  components: {
    MyProduct
  }

}
</script>

<style lang="css">
</style>
