<template>
  <div>
    <!-- 6. Replace the standard "Picker" label a slot that allows you to place a label. The slot should have a default value of "Picker" -->
    <div>
      <slot>Picker</slot>
    </div>

    <!-- 5. Have the buttons increment and decrement the value -->
    <div>
      <button @click="decrement()">-</button>
      {{value}}
      <button @click="increment()">+</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'number-picker',
  // 1. Add "props" to accept "value" attribute (it must be a number and defaults to zero)
  // 2. Add "props" to accept "min" attribute (it must be a number)
  // 3. Add "props" to accept "max" attribute (it must be a number)
  props: {
    min: Number,
    max: Number,
    value: {
      type: Number,
      default: 0
    }
  },

  // 4. Add methods to increment and decrement the value so long as the value stays within the max and min defined values
  methods: {
    decrement () {
      let num = this.value - 1
      if (this.min !== undefined && num < this.min) num = this.min
      if (this.max !== undefined && num > this.max) num = this.max
      this.value = num

      this.$emit('change', this.value)
    },
    increment () {
      let num = this.value + 1
      if (this.min !== undefined && num < this.min) num = this.min
      if (this.max !== undefined && num > this.max) num = this.max
      this.value = num

      this.$emit('change', this.value)
    }
  }

}
</script>

<style scoped lang="stylus">

</style>
