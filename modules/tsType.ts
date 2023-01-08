
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

// type can be use as computed properties
type keys = 'color' | 'name';
type Shape = {
  [key in keys]: string;
}

const Circle: Shape = {
  name: 'circle',
  color: 'res'
}

const simplePerson: Person = { name: "sam", age: 23, isActive: true }

const personWithoutAge: Person2 = { name: "sam torento", isActive: true }
