export enum DaycareClasses {
  LIONS = 'Lions',
  TIGERS = 'Tigers',
  KOALAS = 'Koalas',
  PANDAS = 'Pandas',
  MONKEYS = 'Monkeys',
  ELEPHANTS = 'Elephants',
}

export interface IStudents {
  firstName: string
  lastName: string
  parentEmail: string
  age: number
  enrolledClass?: DaycareClasses
}
