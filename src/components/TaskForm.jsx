import {useState, useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const {createTask} = useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description
    });
    setTitle('');
    setDescription('');
  };

  return(
    <div className='max-w-md mx-auto'>
      <form className='bg-slate-800 p-10 mb-4' onSubmit={handleSubmit}>
        <h2 className='text-2xl font-bold text-white mb-3'></h2>
        <input type="text" placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
          className='bg-slate-300 p-3 w-full mb-2'
        />
        <textarea onChange={ e => setDescription(e.target.value) } placeholder='Esta es la Descripción' value={description} className='bg-slate-300 p-3 w-full mb-2'
        ></textarea>
        <button className='bg-indigo-800 px-3 py-1 text-white hover:bg-indigo-500'> Guardar </button>
      </form>
    </div>
  );
}

export default TaskForm