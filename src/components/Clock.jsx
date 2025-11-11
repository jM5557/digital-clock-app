import React, { useEffect, useState } from 'react'

export default function Clock({ is24Hour }) {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  const timeString = now.toLocaleTimeString('en-US', {
    hour12: !is24Hour,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })

  const dateString = now.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className='flex flex-col items-center'>
      <div id='clock' className='neon md:text-8xl sm:text-6xl text-4xl font-semibold tracking-wider'>{timeString}</div>
      <div id='date' className='mt-2 sm:text-3xl text-2xl'>{dateString}</div>
    </div>
  )
}
