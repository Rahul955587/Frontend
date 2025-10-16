function cal(a, b, ...rest) {
    let res = b;
    for (let i of rest) {
        if (a == "add") {
            res = res + i;
        } 
        else if (a == "sub") {
            res = res - i;
        }
        else if(a=="mul"){
            res=res*i;
        }
        else if(a=="div"){
            res=res/i;
        }
    }
    return res;
}
console.log(cal("add", 1, 2, 3, 4,5));

