export default function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-4 text-black">Welcome to Our App!</h1>
        <p className="text-lg text-gray-700 mb-6">We are glad to have you here.</p>
        <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            Get Started
        </button>
    </div>
  );
}