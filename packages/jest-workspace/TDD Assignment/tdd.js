function average_sum(array){
    let total = 0;
    let size = array.length;
    for (let i = 0; i < size; i++ ){
        total += array[i];
    }
    const average = total / size;
    return average
}

exports.average_sum = average_sum;
