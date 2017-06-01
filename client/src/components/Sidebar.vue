<template lang="html">
  <div id="sidebar">
    <div class="list-group categories">
      <div class="list-group-item title">
        <div id="menu-icon">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div id="title">
          Categorii
        </div>
      </div>
      <div class="list-group-item category">Instrumente</div>
      <div v-for="category in getAllCategoriesGetter" class="list-group-item category" @click="findProductsByCategoryIdAction(category._id)"> {{ category.nameRo }} </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {

  computed: mapGetters([
    'getAllCategoriesGetter'
  ]),
  methods: mapActions([
    'getAllCategoriesAction',
    'findProductsByCategoryIdAction'
  ]),
  mounted () {
    this.getAllCategoriesAction()
  }

}
</script>

<style lang="css">
</style>
