<template>
  <div>
    <!-- 6. Replace the standard "Picker" label a slot that allows you to place a label. The slot should have a default value of "Picker" -->
    <div>
      Picker
    </div>

    <!-- 5. Have the buttons increment and decrement the value -->
    <div>
      <button>-</button>
      {{value}}
      <button>+</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'number-picker'
  // 1. Add "props" to accept "value" attribute (it must be a number and defaults to zero)

  // 2. Add "props" to accept "min" attribute (it must be a number)

  // 3. Add "props" to accept "max" attribute (it must be a number)

  // 4. Add methods to increment and decrement the value so long as the value stays within the max and min defined values

}
</script>

<style scoped lang="stylus">

</style>
