import { useState } from "react";

export default function LoginForm() {

    const handleLogin = ()=>{
        console.log(email);
        console.log(password)
    }
    const [email,setEmail] = useState<string>("")
    const [password,setPassword] = useState<string>("")

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-6">
            <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-lg p-8 space-y-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-semibold text-gray-800">Welcome back</h2>
                    <div className="text-sm text-gray-500">Sign in to continue</div>
                </div>

                <div className="space-y-4">
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
                onClick={handleLogin}
                    className="w-full py-2 px-4 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-1 transition-colors"
                >
                    Login
                </button>
            </div>
        </div>
    );
}
