import { createStore } from "redux"

const counterReducer = (state = 0, action)=> {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state
  }
}
const store = createStore(counterReducer)
  
export default store