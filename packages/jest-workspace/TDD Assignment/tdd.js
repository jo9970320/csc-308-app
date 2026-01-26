function average_sum(array){
    if (!array){
        return []
    }
    let total = 0;
    let size = array.length;
    for (let i = 0; i < size; i++ ){
        total += array[i];
    }
    return return_average(total, size)
}
function return_average(total, size){
    return total = total / size;
}

exports.average_sum = average_sum;
