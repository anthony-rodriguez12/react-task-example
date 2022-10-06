import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

function App() {
  
  return (
    <main className='bg-zinc-900 h-screen'>
      <div className='container mx-auto'> 
        <h1 className='grid justify-center font-semibold text-white p-4 text-3xl'>Usando VITE + REACT</h1>
        <TaskForm />
        <TaskList />
      </div>
    </main>
  )
}

export default App
