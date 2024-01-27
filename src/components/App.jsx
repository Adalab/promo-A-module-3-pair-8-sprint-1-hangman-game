import '../scss/App.scss'
import Header from './Header'
import ListadoTareas from './Listado de tareas'
import SectionTips from './Sección de tips'

function App() {
  return (
    <div>
      <Header />
    <main className="main">
        <section className="container add ">
            <form className="task-form-add">
                <input type="text" className="task-input js-text-task-add" placeholder="Nueva tarea" />
                <button className="add-task-btn js-btn-add">Agregar</button>
            </form>
        </section>

        <section className="container">
            <form className="task-form">
                <input type="text" className="task-input js-text-task-filter" placeholder="Ejemplo: gim" />
                <button className="add-task-btn js-btn-filter">Buscar</button>
            </form>
            <ListadoTareas />
        </section>

        <SectionTips />

    </main>
    </div>
  )
}

export default App
