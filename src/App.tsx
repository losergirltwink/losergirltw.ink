import Taskbar from './components/taskbar/Taskbar.tsx';
import Window from './components/window/Window.tsx';
import '98.css';

function App() {
  return (
    <>
      <Window windowName='hi1' windowContent='h2'/>
      <footer>
        <Taskbar/>
      </footer>
    </>
  )
}

export default App
