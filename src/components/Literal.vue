<template>
    <div id="border">
      {{word}}
    </div>
</template>

<script>
export default {
  props: ['word']
}
</script>

<style scoped>
  #border{
    border: 1px black solid;
    font-size: 50px;
    width: 50px;
    height: 60px;
    margin-right: 5px;
  }
</style>
