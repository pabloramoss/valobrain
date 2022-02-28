import { createStore } from "redux"
import {Video} from "../videos/types"

const initalState = {
  videoId: "";
  title: "";
  description: "";
  thumnails: ""; //change to object later
  publishTime: "";
}

const counterReducer = (state: Video = initalState, action)=> {
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