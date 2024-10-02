export enum DaycareClasses {
  LIONS = 'Lions',
  TIGERS = 'Tigers',
  KOALAS = 'Koalas',
  PANDAS = 'Pandas',
  MONKEYS = 'Monkeys',
  ELEPHANTS = 'Elephants',
}

export interface IStudent {
  firstName?: string
  lastName: string
  parentEmail: string
  age: number
  enrolledClass?: DaycareClasses
  birthDate?: Date
  pinCode?: number
}

export interface IStudentSliceState {
  students: IStudent[]
}
