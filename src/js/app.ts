import { changeMetaViewport } from "./changeMetaViewport"
import { hashScroll } from "./hashScroll"
import { transitionClass } from "./transitionClass"

function App() {
  changeMetaViewport()
  hashScroll()
  transitionClass()
}

export default App()
