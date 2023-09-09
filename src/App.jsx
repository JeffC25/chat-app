import { useState } from 'react'
import Layout from './components/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout>
      Hello world
    </Layout>
  )
}

export default App
