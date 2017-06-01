<template lang="html">
  <div id="main" class="container">
        <my-sidebar></my-sidebar>
        <my-content></my-content>
      </div>
</template>

<script>
import MySidebar from './Sidebar'
import MyContent from './Content'

export default {
  components: {
    MySidebar,
    MyContent
  }
}
</script>

<style lang="css">
</style>
