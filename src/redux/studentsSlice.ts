import {
  DaycareClasses,
  type IStudent,
  type IStudentSliceState,
} from '@/types/types'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState: IStudentSliceState = {
  students: [
    {
      firstName: 'Ilkhom',
      lastName: 'Abdullaev',
      parentEmail: 'ilkhom@gmail.com',
      age: 25,
      enrolledClass: DaycareClasses.PANDAS,
    },
  ],
}

const generatePin = (birthDate?: Date) => {
  const [month, day, year] = birthDate?.toString().split('/') || ''
  return Number(`${month}${day}${year.slice(-2)}`)
}

export const studentsSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    addStudent: (state, action: PayloadAction<IStudent>) => {
      const pinCode = generatePin(action.payload.birthDate)
      state.students.push({ ...action.payload, pinCode })
    },
  },
})

// Action creators are generated for each case reducer function
export const { addStudent } = studentsSlice.actions

export default studentsSlice.reducer
