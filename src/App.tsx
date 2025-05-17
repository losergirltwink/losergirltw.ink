import Taskbar from './components/taskbar/Taskbar.tsx';
import Window from './components/window/Window.tsx';
import '98.css';

function App() {
  return (
    <>
      <Window/>
      <footer>
        <Taskbar/>
      </footer>
    </>
  )
}

export default App
