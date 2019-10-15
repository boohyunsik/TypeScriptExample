/*
    TypeScript에서 변수를 선언하고, 사용하는 예제입니다.
    변수는 어떤 수나 데이터를 담고 있는 그릇입니다.
    변수는 변수의 타입, 변수의 이름, 그리고 그 변수가 가지고 있는 값으로 이루어집니다.
    아래의 예제를 분석해보면 다음과 같습니다.
    
    변수 타입 : number(숫자)
    변수 이름 : numberVariable
    값 : 1
*/
var numberVariable: number = 1
console.log(numberVariable)     // 이 명령문의 결과로 Terminal에 1이 출력됩니다.

/*
    TypeScript에서 기본적으로 제공하는 변수는 크게 3가지가 있습니다.
    
    number : 숫자를 저장함 (1, 2, 3, -1, -2, 1.234, ...)
    string : 문자열(문장)을 저장함 ("Hi", "Hello", "TypeScript", ...)
    boolean : 참/거짓 여부를 저장함 (true 혹은 false만 지정 가능합니다)
*/
var stringVariable: string = "Hi!"
console.log(stringVariable)     // 이 명령문의 결과로 Terminal에 "Hi!"가 출력됩니다.

var booleanVariable: boolean = true
console.log(booleanVariable)    // 이 명령문의 결과로 Terminal에 true가 출력됩니다.


/*
    변수를 선언하면 다양하게 사용할 수 있는데 가장 대표적인 것은 4칙연산 입니다.
*/
var numberA: number = 100
var numberB: number = 200

var sum: number = numberA + numberB     // + 를 이용하여 numberA와 numberB를 더하여 sum이라는 변수(그릇)에 담습니다.
console.log(sum)        // 이 명령문의 결과로 numberA와 numberB의 합인 300이 출력됩니다.


var diff: number = numberA - numberB    // - 를 이용하여 numberA와 numberB를 빼서 diff라는 변수(그릇)에 담습니다.
console.log(diff)       // 이 명령문의 결과로 numberA와 numberB를 뺀 값인 -100이 출력됩니다.


var mul: number = numberA * numberB     // * 를 이용하여 numberA와 numberB를 곱해서 mul이라는 변수(그릇)에 담습니다.
console.log(mul)        // 이 명령문의 결과로 numberA와 numberB를 곱한 값인 20000이 출력됩니다.


var div: number = numberA / numberB     // / 를 이용하여 nubmerA와 numberB를 나눠서 div라는 변수(그릇)에 담습니다.
console.log(div)        // 이 명령문의 결과로 numberA와 numberB를 나눈 값인 0.5가 출력됩니다.


var mod: number = numberA % numberB     // % 를 이용하여 numberA와 numberB를 나눈 나머지를 mod라는 변수(그릇)에 담습니다.
console.log(mod)        // 이 명령문의 결과로 numberA와 numberB를 나눈 나머지인 100이 출력됩니다.


/*

    Class(클래스)를 이용하여 나만의 변수를 만들 수 있습니다.
    클래스는 "클래스의 이름", "클래스의 변수들" 을 갖습니다.

*/

class Human {   // 이 클래스의 이름은 Human이고, 개발자가 "사람"을 표현하기 위해 만든 변수의 타입입니다. 
    // 클래스에서 변수를 선언할 때는 var 키워드를 사용하지 않습니다.
    height: number      // 이름은 height, 숫자를 값으로 갖는 변수입니다. 아마도 키를 나타낼 것입니다.
    weight: number      // 이름은 weight, 숫자를 값으로 갖는 변수입니다. 아마도 몸무게를 나타낼 것입니다.
    name: string        // 이름은 name, 문자열을 값으로 갖는 변수입니다. 아마도 사람의 이름을 나타낼 것입니다.
}


var hyunsik = new Human      // hyunsik이라는 이름을 갖는, Human타입의 변수를 선언했습니다. 그러나 아직 내부의 height, weight, name은 값이 정해지지 않았습니다.
hyunsik.height = 180    // hyunsik이라는 Human타입을 갖는 변수의 height에 180이라는 숫자를 대입합니다.
hyunsik.weight = 70     // hyunsik이라는 Human타입을 갖는 변수의 weight에 70이라는 숫자를 대입합니다.
hyunsik.name = "Hyunsik"    // hyunsik이라는 Human타입을 갖는 변수의 name에 "Hyunsik"이라는 문자열을 대입합니다.

console.log(hyunsik.height)     // hyunsik의 height인 180이 출력됩니다.
console.log(hyunsik.weight)     // hyunsik의 weight인 70이 출력됩니다.
console.log(hyunsik.name)       // hyunsik의 name인 "Hyunsik"이 출력됩니다.