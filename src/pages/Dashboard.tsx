import { useEffect, useState } from 'react'
import useAxiosPrivate from '../hooks/useAxiosPrivate'

const Dashboard = () => {
  const [todos, setTodos] = useState()
  const clientPrivate = useAxiosPrivate()

  useEffect(() => {
    const getTodos = async () => {
      const res = await clientPrivate.get('/todos')

      setTodos(res.data)
    }

    getTodos()
  }, [])

  console.log(todos)

  return (
    <div className='bg-slate-500 text-white '>
      <div className='container mx-auto'>
        <ul>
          {todos?.map(todo => (
            <li key={todo._id}>{todo.title}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Dashboard
