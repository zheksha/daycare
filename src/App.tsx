import './App.css'
import { Formik, Form, FormikHelpers } from 'formik'
import { Input } from './components/ui/input'
import { Label } from './components/ui/label'
import { Button } from './components/ui/button'

interface IStudents {
  firstName: string
  lastName: string
  parentEmail: string
  age: number
  enrolledClass: string
}

const App = () => {
  return (
    <div className="p-10">
      <h1>Enroll Student</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          parentEmail: '',
          age: 0,
          enrolledClass: '',
        }}
        onSubmit={(
          values: IStudents,
          { setSubmitting }: FormikHelpers<IStudents>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 500)
        }}
      >
        <Form>
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" name="firstName" className="mb-5" />

          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" name="lastName" className="mb-5" />

          <Label htmlFor="parentEmail">Email</Label>
          <Input
            id="parentEmail"
            name="parentEmail"
            type="email"
            className="mb-5"
          />

          <Label htmlFor="age">Age</Label>
          <Input id="age" name="age" className="mb-5" />

          <Label htmlFor="enrolledClass">Enroll to class</Label>
          <Input id="enrolledClass" name="enrolledClass" className="mb-7" />

          <Button type="submit">Submit</Button>
        </Form>
      </Formik>
    </div>
  )
}

export default App
