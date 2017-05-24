<template>
  <div class="site">
  <my-header></my-header>
  <my-main></my-main>
  <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from './components/Header'
import MyFooter from './components/Footer'
import MyMain from './components/Main'

export default {
  name: 'app',
  components: {
    MyHeader,
    MyFooter,
    MyMain
  }
}
</script>

<style>
</style>
