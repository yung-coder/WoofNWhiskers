import { proxy } from "valtio";

const state = proxy({
  isLogedIn: false,
  setLogin(state)  {
    state.isLogedIn = state;
  },
});


export const add = (des) => {
  state.isLogedIn = des;
}


export default state;
