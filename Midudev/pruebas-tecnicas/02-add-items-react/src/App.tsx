import { useState } from 'react'
import './App.css'

interface Item {
  id: `${string}-${string}-${string}-${string}-${string}`
  timestamp: number
  text: string
}

const INITIAL_STATE: Item[] = [
  {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    text: 'Videojuegos',

  },
  {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    text: 'Libros',
  },
  {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    text: 'Comics',
  }
]

function App() {

  const [ items, setItems ] = useState(INITIAL_STATE)
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const { elements } = event.currentTarget

    const input = elements.namedItem('item')

    const isInput = input instanceof HTMLInputElement

    if (!isInput || input == null) return
    
    const newItem: Item = {
      id: crypto.randomUUID(),
      timestamp: Date.now(),
      text: input.value,
    }

    setItems((prevItems) => {
      return [...prevItems, newItem]
    })

    input.value = ''

  }


  return (
    <>
      <main>
        <aside>
          <h1>Prueba técnica de React</h1>
          <h2>Añadir y eliminar elementos a una lista</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Elemento a introducir
              <input name='item' type='text' required placeholder='Videojuegos '/>
            </label>
            <button>
              Añadir elemento a la lista
            </button>
          </form>
        </aside>
        <section>
          <h2>Lista de elementos</h2>
          <ul>
            {
              items.map( (item) => {
                return (
                  <li key={item.id}>
                    {item.text}
                    <button onClick={() => {
                      setItems((prevItems) => {
                        return  prevItems.filter((currentItem) => currentItem.id !== item.id)
                      })
                    }
                    }>
                    Eliminar elemento</button>
                  </li>
                )
              })
            }
          </ul>
        </section>
      </main>
    </>
  )
}

export default App
