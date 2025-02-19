import React from "react";

function Register() {
  return (
    <div className="w-sreen max-w-[1500px] mx-auto bg-brown h-full flex justify-center align-middle dark:bg-second ">
      <div className="my-20 w-screen md:w-[550px] px-5 bg-brown-orange rounded-md py-6 dark:bg-real">
        <h1 className="text-4xl text-white">Create an accout</h1>
        <h2 className="text-white">Already have an account? <span className="text-yellow">log in</span></h2>
        <form action="">
          <div className="block md:flex justify-between">
            <input
              type="text"
              name=""
              id=""
              placeholder="FirstName"
              className=" w-full md:w-[250px] h-10 px-3 py-6 placeholder:text-gray-dark/8 placeholder:italic outline-none border-2 focus:border-second mt-10 rounded-md"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="LastName"
              className=" w-full md:w-[250px] h-10 px-3 py-6 placeholder:text-gray-dark/8 placeholder:italic outline-none border-2 focus:border-second mt-10 rounded-md"
            />
          </div>
          <input
            type="email"
            name=""
            id=""
            placeholder="Email"
            className="w-full h-10 px-3 py-6 placeholder:text-gray-dark/8 placeholder:italic outline-none border-2 focus:border-second mt-5 rounded-md"
          />
          <div>
            <input
              type="password"
              name=""
              id=""
              placeholder="Enter your password"
              className="mt-5 w-full h-10 px-3 py-6 placeholder:text-gray-dark/8 placeholder:italic outline-none border-2 focus:border-second rounded-md"
            />
            <input
              type="password"
              name=""
              id=""
              placeholder="Confirm Password"
              className="mt-5 w-full h-10 px-3 py-6 placeholder:text-gray-dark/8 placeholder:italic outline-none border-2 focus:border-second rounded-md"
            />
          </div>
          <div className="mt-3 mb-9 flex justify-between ">
            <label htmlFor="" className="pr-6 text-white/80 text-lg cursor-pointer">
              <input type="checkbox" name="" id="" className="pr-2" />
              Remember me
            </label>
            <p className="text-white/80 cursor-pointer">Forget Password</p>
          </div>
          <div className="flex justify-center mt-4">
            <button className="p-3 bg-brown text-white rounded-md w-full dark:bg-second ">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
