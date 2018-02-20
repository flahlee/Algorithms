//ARRAY PROBLEM SET 

//printReverse()
function printReverse(arr){
    for(var i = arr.length-1; i >=0; i--){
        console.log(arr[i]);
    }
}
printReverse([4,6,3,8]);


//isUniform()
function isUniform(arr){
    var first = 0;
    for(var i = 1; i < arr.length; i++){
        if(arr[i] !== first){
            return false;
        }
    }
    return true;
}


//sumArray()
function sumArray(arr){
    var total = 0;
    arr.forEach(function(element){
        total += element;
    });
    return total;
}


//max()
function max(arr){
    var max = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}