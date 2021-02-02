<template>
  <div class="h-screen flex flex-row justify-center items-center">
    <h1 class="text-4xl text-blue-500">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
