
//Combine the next array element with the previous one until it whole array is one word.
function stringTrain(array){
    let newArray=[];
    let position='';
    newArray.push(array[0]);
    for(let x=1;x<array.length;x++)
    {
     position=newArray[x-1];
     newArray.push(position.concat(array[x]));
    }
   return newArray;
 }