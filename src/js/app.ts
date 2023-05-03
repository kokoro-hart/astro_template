import { changeMetaViewport } from "./changeMetaViewport";
import { hamburgerMenu } from "./hamburgerMenu";
import { hashScroll } from "./hashScroll";
import { transitionClass } from "./transitionClass";

function App() {
  changeMetaViewport();
  hamburgerMenu();
  hashScroll();
  transitionClass();
}

export default App();
