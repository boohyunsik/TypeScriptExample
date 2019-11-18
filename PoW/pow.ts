var target: number = 500;
var message: string = "tx1) to: hyunsik, from: junbeom, value: 1btc, nonce: ";

var hashed = 999999;
var nonce = 0;
while (hashed > target) {
    var noncedMessage = message + nonce;
    hashed = hash(noncedMessage);
    console.log("message = " + noncedMessage);
    console.log("hashed : " + hashed + ", targer : " + target);
    nonce = nonce + 1;
}

console.log("PoW complete!");

function hash(value: string): number {
    var i: number = 0;
    var hashed: number = 0;
    var digit: number = 1;
    var limit : number = 999999;
    for (i=0; i<value.length; i++) {
        hashed = hashed + value.charAt(i).charCodeAt(0);
        hashed = hashed * digit;
        hashed = hashed % limit;
        digit = digit * 26;
    }

    return hashed;
}