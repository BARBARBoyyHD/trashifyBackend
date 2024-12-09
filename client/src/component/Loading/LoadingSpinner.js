import React from 'react'

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-16 h-16 border-4 border-t-4 border-gray-300 rounded-full animate-spin border-t-lime-500"></div>
    </div>
  )
}

export default LoadingSpinner
