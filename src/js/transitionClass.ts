import { debounce } from "./utility"

export const transitionClass = () => {
  const addTransitionClass = () => document.body.classList.add("_useTransition")
  const removeTransitionClass = () => document.body.classList.remove("_useTransition")

  window.addEventListener("resize", debounce(500, addTransitionClass, removeTransitionClass))
  addTransitionClass()
}
