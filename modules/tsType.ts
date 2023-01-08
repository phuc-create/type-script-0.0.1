export type Person = {
  name: string
  age: number
  isActive: boolean
}

// Optional Properties
export type Person2 = {
  name: string
  age?: number
  isActive: boolean
}

const simplePerson: Person = { name: "sam", age: 23, isActive: true }

const personWithoutAge: Person2 = { name: "sam torento", isActive: true }
