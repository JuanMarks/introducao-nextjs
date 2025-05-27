export default function About() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-black">About Us</h1>
      <p className="text-lg text-gray-700 mb-6 text-black">
        We are a team dedicated to building amazing applications.
      </p>
      <button className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
        Learn More
      </button>
    </div>
  );
}