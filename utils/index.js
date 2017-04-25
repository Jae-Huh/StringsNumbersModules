module.exports = {
  countIf: function (testFunc, arr) {
    var ans = 0
    for (var i = 0; i < arr.length; i++){
      if(testFunc(arr[i])) {
        ans++
      }
    }
    return ans
  },
  filter: function (func, arr) {
    var emailArr = []
    for (var i = 0; i < arr.length; i++) {
      if (func(arr[i])) {
        emailArr.push(arr[i])
      }
    }
    return emailArr
  },
  map: function (func, arr) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
      newArr.push(func(arr[i]))
    }
    return newArr
  }
}
