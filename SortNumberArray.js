function SortNumberArray(nums){
  if(nums==null)
  {
    return [];
  }
  let len=nums.length;

    for(let x=0;x<=len;x++)
    { 
      for(let y=x;y<=len;y++)
      {
        if(parseInt(nums[y])>parseInt(nums[y+1]))
        {
          let temp=nums[y];
          nums[y]=nums[y+1];
          nums[y+1]=temp;
          
        }
      }
    }
  return nums;
}