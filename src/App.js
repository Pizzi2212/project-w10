import MyNav from './components/MyNav'
import 'bootstrap/dist/css/bootstrap.min.css'
import MainComponent from './components/MainComponent'
import LeftBar from './components/LeftBar'

function App() {
  return (
    <div>
      <header>
        <MyNav />
      </header>
      <main>
        <div style={{ backgroundColor: '#252526' }}>
          <LeftBar />
        </div>

        <MainComponent />
      </main>
    </div>
  )
}

export default App
