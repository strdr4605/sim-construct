<template lang="html">
  <div class="product">
    <div class="product-image">
      <span class="helper"></span><img :src="apiUrl + productInfo.imageUrl" alt="">
    </div>
    <div class="product-info">
      <div class="product-price">
        {{ productInfo.nameRo }} {{ productInfo.price }} lei
      </div>
      <div class="product-description">
        <ul>
          <li>{{ productInfo.descriptionRo }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'apiUrl',
    'productInfo'
  ]
}
</script>

<style lang="css">
</style>
