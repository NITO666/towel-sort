
// You should implement your task here.
module.exports = function towelSort (matrix) {
  let result = []
    if(typeof(matrix) == 'undefined'){
      return result
    }else if(matrix.length == 0 ){
      return result
    }else{
      function fun(arr){
        if(typeof(arr[0][0])=='object'){
            for(let i in arr){
                fun(arr[i])
            }
        }else if(typeof(arr[0])=='object'){
            result = arr.reduce((p,c,i)=>{
                !(i%2 == 0)? c.reverse().map(e=>p.push(e)): c.map(e=>p.push(e))
                return p
            })
            return result
        }else{
            for(let i in arr){
                result.push(arr[i])
            }
            return result
        }
        }
      result = fun(matrix)
      return result
    }
}

