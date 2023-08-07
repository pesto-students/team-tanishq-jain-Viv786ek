function minInRoatedArray(arr){
    let lengthOfArray = arr.length();
    let start = 0, end = lengthOfArray-1;
    while(start <= end){
        let mid = end - (start+end)/2;
        let next = (mid + 1) % lengthOfArray;
        let prev = (mid + lengthOfArray -1) % lengthOfArray;
        if(arr[mid] <= arr[next] && arr[mid] <= arr[prev]) return arr[mid];

        if(arr[start] <= arr[mid]) start = mid+1;
        else if(arr[end] <= arr[mid]) end = mid-1;
    }
    return -1;
}