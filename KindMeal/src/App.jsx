
import './App.css'
import AllRoutes from './components/AllRoutes'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className="w-100">
      <Header />
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  )
}

export default App
