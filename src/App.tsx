import './App.css'
import StudentList from './components/custom/StudentList'
import StudentsForm from './components/custom/StudentsForm'
import { useAppSelector } from './redux/store'

const App = () => {
  const students = useAppSelector((state) => state.studentsInfo.students)

  console.log(students)

  return (
    <div className="p-10 flex">
      <div className="w-1/3 border border-slate-400 rounded-lg mr-2">
        <StudentsForm />
      </div>
      <div className="w-2/3 border border-slate-400 rounded-lg">
        <StudentList students={students} />
      </div>
    </div>
  )
}

export default App
