"use client"

export default function Preloaders() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-gray-100">

      {/* Loader 1: Diagonal Dots */}
      <div className="shadow-lg p-8 bg-white flex justify-center items-center min-h-[200px]">
        <div className="relative w-32 h-32">
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-blue-500 rounded-full"
              style={{
                left: `${i * 15}%`,
                top: `${i * 15}%`,
                animation: "pulseDot 1s ease-in-out infinite",
                animationDelay: `${i * 0.15}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Loader 2: Growing Bars */}
      <div className="shadow-lg p-8 bg-white flex justify-center items-center min-h-[200px]">
        <div className="flex items-end gap-1">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="w-2 bg-blue-500"
              style={{
                height: "40px",
                animation: "growBar 1s ease-in-out infinite",
                animationDelay: `${i * 0.1}s`,
                transformOrigin: "bottom",
              }}
            />
          ))}
        </div>
      </div>

      {/* Loader 3: Triangle Pattern */}
      <div className="shadow-lg p-8 bg-white flex justify-center items-center min-h-[200px]">
        <div className="grid grid-cols-4 gap-4">
          {[...Array(16)].map((_, i) => (
            <div
              key={i}
              style={{
                width: "0",
                height: "0",
                borderLeft: "10px solid transparent",
                borderRight: "10px solid transparent",
                borderBottom: "20px solid #3b82f6",
                animation: "rotateTriangle 2s infinite",
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Loader 4: Spinning Squares */}
      <div className="shadow-lg p-8 bg-white flex justify-center items-center min-h-[200px]">
        <div className="relative w-24 h-24">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 border-4 border-blue-500"
              style={{
                animation: "spinSquare 3s infinite",
                animationDelay: `${i * 0.75}s`,
                transform: `rotate(${i * 45}deg)`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Loader 5: Signal Waves */}
      <div className="shadow-lg p-8 bg-white flex justify-center items-center min-h-[200px]">
        <div className="flex gap-8">
          <div className="relative w-12 h-12">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute left-0 w-full h-full"
                style={{
                  borderLeft: "3px solid #3b82f6",
                  borderRadius: "50% 0 0 50%",
                  animation: "waveSignal 1.5s infinite",
                  animationDelay: `${i * 0.2}s`,
                  transform: `rotate(${-45 + i * 15}deg)`,
                }}
              />
            ))}
          </div>
          <div className="relative w-12 h-12">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute right-0 w-full h-full"
                style={{
                  borderRight: "3px solid #3b82f6",
                  borderRadius: "0 50% 50% 0",
                  animation: "waveSignal 1.5s infinite",
                  animationDelay: `${i * 0.2}s`,
                  transform: `rotate(${45 + i * 15}deg)`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Loader 6: Dots Grid */}
      <div className="shadow-lg p-8 bg-white flex justify-center items-center min-h-[200px]">
        <div className="grid grid-cols-3 gap-2">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 bg-blue-500 rounded-full"
              style={{
                animation: "pulseGrid 0.8s infinite",
                animationDelay: `${i * 0.1}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Loader 7: Staggered Squares */}
      <div className="shadow-lg p-8 bg-white flex justify-center items-center min-h-[200px]">
        <div className="relative w-32 h-32">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-8 h-8 bg-blue-500"
              style={{
                left: `${i * 20}%`,
                top: `${i * 20}%`,
                animation: "staggerSquare 2s infinite",
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Loader 8: 3D Rotating Box */}
      <div className="shadow-lg p-8 bg-white flex justify-center items-center min-h-[200px]">
        <div className="relative w-24 h-24 [transform-style:preserve-3d]">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 border-2 border-blue-500"
              style={{
                animation: "rotate3DBox 3s infinite linear",
                transform: `rotateX(${i * 60}deg) rotateY(${i * 60}deg)`,
              }}
            />
          ))}
        </div>
      </div>

      {/* New Loader 9: Spinning Circle */}
      <div className="shadow-lg p-8 bg-white flex justify-center items-center min-h-[200px]">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-blue-200 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
        </div>
      </div>

      {/* New Loader 10: Rotating Squares */}
      <div className="shadow-lg p-8 bg-white flex justify-center items-center min-h-[200px]">
        <div className="relative w-16 h-16">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute w-8 h-8 border-2 border-blue-500"
              style={{
                animation: `rotateSquare 1.5s linear infinite`,
                animationDelay: `${i * 0.375}s`,
                transformOrigin: "bottom right",
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* New Loader 11: Bouncing Dots */}
      <div className="shadow-lg p-8 bg-white flex justify-center items-center min-h-[200px]">
        <div className="flex space-x-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 bg-blue-500 rounded-full"
              style={{
                animation: `bounceDot 0.6s infinite alternate`,
                animationDelay: `${i * 0.2}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* New Loader 12: Circular Progress */}
      <div className="shadow-lg p-8 bg-white flex justify-center items-center min-h-[200px]">
        <div className="relative w-16 h-16">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              className="text-gray-200 stroke-current"
              strokeWidth="10"
              cx="50"
              cy="50"
              r="40"
              fill="none"
            ></circle>
            <circle
              className="text-blue-500 stroke-current"
              strokeWidth="10"
              strokeLinecap="round"
              cx="50"
              cy="50"
              r="40"
              fill="none"
              style={{
                strokeDasharray: "251.2",
                strokeDashoffset: "251.2",
                animation: "circularProgress 2s linear infinite",
              }}
            ></circle>
          </svg>
        </div>
      </div>

      <style jsx>{`
        @keyframes rotateDot {
          0% { opacity: 0.3; transform: rotate(0deg) translateY(-150%) scale(0.8); }
          50% { opacity: 1; transform: rotate(180deg) translateY(-150%) scale(1.2); }
          100% { opacity: 0.3; transform: rotate(360deg) translateY(-150%) scale(0.8); }
        }

        @keyframes pulseDot {
          0%, 100% { transform: scale(0.8); opacity: 0.3; }
          50% { transform: scale(1.2); opacity: 1; }
        }

        @keyframes growBar {
          0%, 100% { transform: scaleY(0.3); opacity: 0.3; }
          50% { transform: scaleY(1); opacity: 1; }
        }

        @keyframes rotateTriangle {
          0% { transform: rotate(0deg) scale(0.8); opacity: 0.3; }
          50% { transform: rotate(180deg) scale(1.2); opacity: 1; }
          100% { transform: rotate(360deg) scale(0.8); opacity: 0.3; }
        }

        @keyframes spinSquare {
          0% { transform: rotate(0deg) scale(0.8); opacity: 0.3; }
          50% { transform: rotate(180deg) scale(1.2); opacity: 1; }
          100% { transform: rotate(360deg) scale(0.8); opacity: 0.3; }
        }

        @keyframes waveSignal {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        @keyframes pulseGrid {
          0%, 100% { transform: scale(0.8); opacity: 0.3; }
          50% { transform: scale(1.2); opacity: 1; }
        }

        @keyframes staggerSquare {
          0% { transform: rotate(0deg) scale(0.8); opacity: 0.3; }
          50% { transform: rotate(90deg) scale(1.2); opacity: 1; }
          100% { transform: rotate(180deg) scale(0.8); opacity: 0.3; }
        }

        @keyframes rotate3DBox {
          0% { transform: rotateX(0deg) rotateY(0deg); opacity: 0.3; }
          50% { transform: rotateX(180deg) rotateY(180deg); opacity: 1; }
          100% { transform: rotateX(360deg) rotateY(360deg); opacity: 0.3; }
        }

        @keyframes rotateSquare {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes bounceDot {
          from { transform: translateY(0); }
          to { transform: translateY(-10px); }
        }

        @keyframes circularProgress {
          0% { stroke-dashoffset: 251.2; }
          100% { stroke-dashoffset: 0; }
        }
      `}</style>
    </div>
  )
}