import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-2xl p-8">
        <h1 className="text-5xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          React + Vite + Tailwind CSS 4
        </h1>
        
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Counter Test</h2>
            <div className="flex items-center justify-center gap-4">
              <button 
                onClick={() => setCount(count - 1)}
                className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95"
              >
                -
              </button>
              <span className="text-4xl font-bold text-gray-800 min-w-[80px] text-center">
                {count}
              </span>
              <button 
                onClick={() => setCount(count + 1)}
                className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 active:scale-95"
              >
                +
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-purple-100 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-purple-800 mb-2">⚡ Vite</h3>
              <p className="text-gray-700">Lightning fast build tool</p>
            </div>
            <div className="bg-blue-100 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">⚛️ React</h3>
              <p className="text-gray-700">Modern UI library</p>
            </div>
            <div className="bg-pink-100 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-pink-800 mb-2">🎨 Tailwind CSS 4</h3>
              <p className="text-gray-700">Utility-first CSS framework</p>
            </div>
            <div className="bg-green-100 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-green-800 mb-2">✨ Ready</h3>
              <p className="text-gray-700">Start building now!</p>
            </div>
          </div>

          <div className="text-center pt-4">
            <p className="text-gray-600">
              Edit <code className="bg-gray-200 px-2 py-1 rounded text-sm">src/App.jsx</code> to get started
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
