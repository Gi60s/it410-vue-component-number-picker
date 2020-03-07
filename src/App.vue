<template>
  <div id="app">
    <!-- 5. Add a number picker component with no minimum or maximum. This value ties to the "min" value -->

    <!-- 4. Add a number picker component with minimum and maximum set from the other two pickers. This value ties to the "value" value -->

    <!-- 6. Add a number picker component with no minimum or maximum. This value ties to the "max" value -->
  </div>
</template>

<script>
// 1. Import the number picker component

export default {
  name: 'app',

  components: {
    // 2. Add the number-picker component as a dependency here
  }

  // 3. Create a data object with "min" = 0, "max" = 10, and "value" = 0
}
</script>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
