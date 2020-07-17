// start your code here
function bubble(arr){
    for(let i=0;i<arr.length-1;i++){
        for(let j=0;j<arr.length-1;j++){
            if(arr[j] > arr[j+1]){
                var temp = arr[j+1];
                arr[j+1] = arr[j]
                arr[j] = temp;
            }
        }
    }
  return arr;
}
console.log(bubble([4,6,1,2,5,3]));

// write the complexity here
