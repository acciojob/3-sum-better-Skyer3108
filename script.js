function threeSum(arr, target) {
// write your code here
	let sum=0;
  for(let i=0; i<arr.length; i++){
              sum+=arr[i];
	
  }
	if(sum==target){
		console.log(sum)
	}
}

module.exports = threeSum;
