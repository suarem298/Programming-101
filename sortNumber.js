//Your goal is make a function that finds the difference between two arrays
//and only return the unique ones
function arrayDiff(a, b) {
    let holder=[];
   
      for(let x=0;x<a.length;x++)
    {
      if(!b.includes(a[x]))
        {
            holder.push(a[x]);
        }
    }
    
   return holder;
 }
 console.log(arrayDiff(([1,8,2], [])));
