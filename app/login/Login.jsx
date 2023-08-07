"use  client";

import React, { useCallback, useState } from "react";

import { createClient } from "@supabase/supabase-js";
import { snapshot, useSnapshot } from "valtio";
import state, { add, setLogedIn } from "@/store";
import { useRouter } from "next/navigation";

const Login = () => {
  const [Login, setLogin] = useState(false);
  const [inputs, setinputs] = useState({});
  const snap =  useSnapshot(state);
  const router = useRouter();

  const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const SUPBASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  const client = createClient(SUPABASE_URL, SUPBASE_ANON_KEY);

  const getinputs = (data) => {
    const { value, name } = data.target;
    const input = { [name]: value };
    setinputs({ ...inputs, ...input });
  };

  const Register = async () => {
    if (inputs.ConfirmPassword != inputs.password) {
      return;
    }

    let { data, error } = await client.auth.signUp({
      email: inputs.email,
      password: inputs.password,
    });

    router.push("/pets");
  };

  const Signin = async () => {
    let { data, error } = await client.auth.signInWithPassword({
      email: inputs.email,
      password: inputs.password,
    });


    router.push("/pets");
  };

  return (
    <div class="w-fit xl:w-3/4 lg:w-11/12 flex">
      <img
        src="https://images.unsplash.com/photo-1625316708582-7c38734be31d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        class="bg-gray-400 hidden w-[500px] h-[600px] lg:block lg:w-5/12 bg-cover rounded-l-lg"
      />
      {!Login
        ? (
          <div class="w-full drop-shadow-2xl lg:w-7/12 bg-white border  p-5 rounded-lg lg:rounded-l-none">
            <h3 class="pt-4 text-2xl text-center">Create an Account!</h3>
            <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
              <div class="mb-4">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="email"
                >
                  Email
                </label>
                <input
                  class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  name="email"
                  onChange={getinputs}
                  placeholder="Email"
                />
              </div>
              <div class="mb-4">
                <div class="mb-4 md:mr-2 md:mb-0">
                  <label
                    class="block mb-2 text-sm font-bold text-gray-700"
                    for="password"
                  >
                    Password
                  </label>
                  <input
                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="password"
                    name="password"
                    onChange={getinputs}
                    type="password"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div class="mb-4">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="ConfirmPassword"
                >
                  Confirm Password
                </label>
                <input
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="ConfirmPassword"
                  type="password"
                  name="ConfirmPassword"
                  onChange={getinputs}
                  placeholder="Confirm Password"
                />
              </div>
              <div class="mb-6 text-center">
                <button
                  class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={Register}
                >
                  Register Account
                </button>
              </div>
              <hr class="mb-6 border-t" />
              <div class="text-center">
                <a
                  class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  onClick={() => setLogin(true)}
                >
                  Already have an account? Login!
                </a>
              </div>
            </form>
          </div>
        )
        : (
          <div class="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
            <h3 class="pt-4 text-2xl text-center">Welcome Back!</h3>
            <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
              <div class="mb-4">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="email"
                >
                  Email
                </label>
                <input
                  class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="email"
                  type="text"
                  name="email"
                  onChange={getinputs}
                  placeholder="Email"
                />
              </div>
              <div class="mb-4">
                <label
                  class="block mb-2 text-sm font-bold text-gray-700"
                  for="password"
                >
                  Password
                </label>
                <input
                  class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  name="password"
                  onChange={getinputs}
                  placeholder="******************"
                />
              </div>
              <div class="mb-6 text-center">
                <button
                  class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={Signin}
                >
                  Sign In
                </button>
              </div>
              <hr class="mb-6 border-t" />
              <div class="text-center">
                <a
                  class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  onClick={() => setLogin(false)}
                >
                  Create an Account!
                </a>
              </div>
            </form>
          </div>
        )}
    </div>
  );
};

export default Login;
