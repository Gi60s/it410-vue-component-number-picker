<template>
  <div id="app">
    <!-- 5. Add a number picker component with no minimum or maximum. This value ties to the "min" value -->
    <number-picker :value="min" @change="minChange">Min</number-picker>

    <!-- 4. Add a number picker component with minimum and maximum set from the other two pickers. This value ties to the "value" value -->
    <number-picker :value="value" :max="max" :min="min" @change="valueChange"></number-picker>

    <!-- 6. Add a number picker component with no minimum or maximum. This value ties to the "max" value -->
    <number-picker :value="max" @change="maxChange"></number-picker>
  </div>
</template>

<script>
// 1. Import the number picker component
import NumberPicker from './components/NumberPicker.vue'

export default {
  name: 'app',
  
  components: {
    // 2. Add the number-picker component as a dependency here
    NumberPicker
  },

  // 3. Create a data object with "min" = 0, "max" = 10, and "value" = 0 
  data () {
    return {
      min: 0,
      max: 10,
      value: 0
    }
  },

  methods: {
    ensureValidValue () {
      let num = this.value
      if (num < this.min) num = this.min
      if (num > this.max) num = this.max
      this.value = num
    },
    minChange (value) {
      this.min = value
      this.ensureValidValue()
    },
    maxChange (value) {
      this.max = value
      this.ensureValidValue()
    },
    valueChange (value) {
      this.value = value
    }
  }
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
