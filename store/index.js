import { proxy } from "valtio";

const state = proxy({
  isLogedIn: false,
});

export default state;
