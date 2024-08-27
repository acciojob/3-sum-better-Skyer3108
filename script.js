function threeSum(arr, target) {

	arr.sort((a, b) => a - b);

    let closestSum = Infinity;

    for (let i = 0; i < arr.length - 2; i++) {
        let left = i + 1;
        let right = arr.length - 1;

        while (left < right) {
            let currentSum = arr[i] + arr[left] + arr[right];

            // Update closestSum if the current sum is closer to the target
            if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                closestSum = currentSum;
            }

            // Move the pointers based on the comparison of currentSum with the target
            if (currentSum < target) {
                left++;
            } else if (currentSum > target) {
                right--;
            } else {
                // If currentSum is exactly equal to target, return it as it is the closest possible
                return currentSum;
            }
        }
    }

    return closestSum;
//
}

module.exports = threeSum;
