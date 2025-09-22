import { useState } from "react";

export default function SignupForm() {
    const [firstName,setFirstName] = useState<string>("")
    const [lastName,setLastName] = useState<string>("")
    const [email,setEmail] = useState<string>("")
    const [password,setPassword] = useState<string>("")
    const handleSignup = ()=>{
        console.log(firstName);
        console.log(lastName);
        console.log(email)
        console.log(password)
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-lg p-8 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-800">Create an account</h2>
          <div className="text-sm text-gray-500">Sign up to get started</div>
        </div>

        <div className="space-y-4">
          <label className="block">
            <span className="text-sm font-medium text-gray-700">First Name</span>
            <div className="mt-1 relative">
              <input
                type="text"
                className="block w-full rounded-lg border border-gray-200 px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-shadow"
                placeholder="John"
                onChange={(e)=>{setFirstName(e.target.value)}}
              />
            </div>
          </label>

          <label className="block">
            <span className="text-sm font-medium text-gray-700">Last Name</span>
            <div className="mt-1 relative">
              <input
                type="text"
                className="block w-full rounded-lg border border-gray-200 px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-shadow"
                placeholder="Doe"
                onChange={(e)=>{setLastName(e.target.value)}}

              />
            </div>
          </label>

          <label className="block">
            <span className="text-sm font-medium text-gray-700">Email</span>
            <div className="mt-1 relative">
              <input
                type="email"
                className="block w-full rounded-lg border border-gray-200 px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-shadow"
                placeholder="you@example.com"
                onChange={(e)=>{setEmail(e.target.value)}}

              />
            </div>
          </label>

          <label className="block">
            <span className="text-sm font-medium text-gray-700">Password</span>
            <div className="mt-1 relative">
              <input
                type="password"
                className="block w-full rounded-lg border border-gray-200 px-4 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-shadow"
                placeholder="••••••••"
                onChange={(e)=>{setPassword(e.target.value)}}

              />
            </div>
          </label>
        </div>

        <button
          onClick={handleSignup}
          className="w-full py-2 px-4 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-1 transition-colors"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
