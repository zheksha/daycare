import { Formik, Form } from 'formik'
import { Button, Label, Input } from '../ui' // Assuming Input is your custom component
import type { IStudents } from '@/types/types'
import { useEffect, useState } from 'react'
import { ComboBox } from './ComboBox' // Using your ComboBox component

const StudentsForm = () => {
  const [students, setStudents] = useState<IStudents>()

  const onHandleSubmit = (
    values: IStudents,
    { resetForm }: { resetForm: () => void }
  ) => {
    setStudents(values)
    console.log('Submitted:', values)
    resetForm() // Reset the form after submission
  }

  useEffect(() => {
    console.log('Updated Students: ', students)
  }, [students])

  return (
    <div className="p-10">
      <h1>Enroll Student</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          parentEmail: '',
          age: 0,
          enrolledClass: undefined, // Use undefined for the initial value of the dropdown
        }}
        onSubmit={onHandleSubmit}
      >
        {({ values, handleChange, handleBlur, setFieldValue }) => (
          <Form>
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              className="mb-5"
            />

            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              className="mb-5"
            />

            <Label htmlFor="parentEmail">Email</Label>
            <Input
              id="parentEmail"
              name="parentEmail"
              type="email"
              value={values.parentEmail}
              onChange={handleChange}
              onBlur={handleBlur}
              className="mb-5"
            />

            <Label htmlFor="age">Age</Label>
            <Input
              id="age"
              name="age"
              type="number"
              value={values.age}
              onChange={handleChange}
              onBlur={handleBlur}
              className="mb-5"
            />

            <Label htmlFor="enrolledClass">Enroll to class</Label>
            <ComboBox
              value={values.enrolledClass}
              onChange={
                (selectedValue) => setFieldValue('enrolledClass', selectedValue) // Update the field value in Formik
              }
            />

            <div className="mt-5">
              <Button type="submit">Submit</Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default StudentsForm
