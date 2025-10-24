export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F1E9E0] p-6">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-center">Welcome Back</h1>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1 text-sm">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1 text-sm">Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm mt-4 text-gray-700">
          Need an account?{" "}
          <span className="underline font-semibold cursor-pointer">Sign up</span>
        </p>
      </div>
    </div>
  );
}
