let task4 = {
  str: '',
  upper: function(){
    this.str = this.str.toUpperCase()
    return this;
  },
  reverse: function(){
    this.str = this.str.split('').reverse().join('')
    return this;
  }
}
