function hash(input: string): number {
    var hashed: number = 0
    var limit: number = 100000
    var digit: number = 1
    for(var i = input.length - 1; i >= 0; i--){
        hashed += (input.charCodeAt(i) * digit) % limit
        digit *= 26
    }
    return hashed
}

var input: string = "ABCDEFG"
var hashed: number = hash(input)
console.log(hashed)
console.log(hash("ABCDEFG"))

if (hashed != hash("ABCDEFG")) {
    console.log("같은 입력값의 해시는 항상 같아야 합니다.")
}