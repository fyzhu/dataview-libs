<template>
  <div class="test3">
    <div>{{message}}</div>
  </div>
</template>

<script>
  export default {
    name: 'TestComponent3',
    setup() {
      const message = 'hello world3!'
      return {
        message
      }
    }
  }
</script>

<style lang="scss" scoped>
.test3 {
  color: green;
}
</style>