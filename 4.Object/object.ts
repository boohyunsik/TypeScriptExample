class Human {
    name: string
    height: number
    age: number

    eat() {
        console.log("냠냠")
    }

    birthday(): string {
        return "1992/11/11"
    }
}

var hyunsik: Human = new Human()
hyunsik.name = "현식"
hyunsik.eat()
var hyunsikBirthday = hyunsik.birthday()
console.log(hyunsik.name + "의 생일은 " + hyunsikBirthday + " 입니다.")