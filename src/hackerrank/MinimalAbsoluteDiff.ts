
// Complete the minimumAbsoluteDifference function below.
export function minimumAbsoluteDifference(arr: []) {
    let ret = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < arr.length - 1; i++) { 
        for (let j = i + 1; j < arr.length; j++) { 
            if (Math.abs(arr[i] - arr[j]) < ret) { 
                ret = Math.abs(arr[i] - arr[j]);
                //console.log(ret);
                
            }
        }
    }

    return ret;

}