'use client' // Error boundaries must be Client Components
 
import { useEffect } from 'react'
// wx@2WS`$` 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className='w-full h-screen flex flex-col gap-3 justify-center items-center bg-slate-800 text-white text-2xl'>
      <h2 className='text-3xl'>Something went wrong!</h2>
      <button
        onClick={
       
          () => reset()
        }
        className='rounded-xl font-semibold px-4 py-2 bg-orange-300 text-black'
      >
        Try again
      </button>
    </div>
  )
}