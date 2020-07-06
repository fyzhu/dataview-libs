<template>
  <div class="test2">
    <div>{{message}}</div>
  </div>
</template>

<script>
  export default {
    name: 'TestComponent2',
    setup() {
      const message = 'hello world2!'
      return {
        message
      }
    }
  }
</script>

<style lang="scss" scoped>
.test2 {
  color: blue;
}
</style>