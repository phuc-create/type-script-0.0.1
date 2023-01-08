// Types anotation

const numberType: number = 2

const stringType: string = "hello sam"

const boolType: boolean = true

const objectType: { name: string, age: number } = { name: "sam", age: 23 }

const arrayType: (number | string | undefined)[] = [1, 2, 3]
const arrayType2: Array<number | string | undefined> = [1, 2, 3]

const anyType: any = "anything you want" // to prevent any type use: `noImplicitAny: true` in tsconfig.json

