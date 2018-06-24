<template>
  <div>
    <div>
      <h3>Задача 1, 2</h3>
    </div>
    <div class="task1">
      <div v-for="item of msg" :key="item.id">
        <app-literal :word="item"></app-literal>
      </div>
    </div>
    <div>
      <h3>Задача 3</h3>
    </div>
    <div class="task2">
      <div @click="onClick1">
        <h4>1</h4>
        <app-literal :word="liter1"></app-literal>
      </div>
      <div @click="onClick2">
        <h4>2</h4>
        <app-literal :word="liter2"></app-literal>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: [],
      count: -1,
      liter1: '',
      liter2: ''
    }
  },
  mounted: function () {
    this.msg = this.parse(this.$route.query.word)
  },
  methods: {
    parse (word) {
      return word.split([''])
    },
    onClick1 () {
      this.count++
      this.liter1 = this.msg[this.count]
      console.log(this.liter1)
    },
    onClick2 () {
      this.count++
      this.liter2 = this.msg[this.count]
      console.log(this.liter2)
    }
  },
  watch: {
    word: function () {
      console.log(this.word)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.task1, .task2{
  display: flex;
  justify-content: center;
  align-content: center;
}
.task2{
  margin-top: 15px;
}
.task2 h4{
 color: gray;
}
</style>
