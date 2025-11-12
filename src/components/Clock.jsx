import React, { useEffect, useState } from 'react'

export default function Clock({ is24Hour, fontSize="xl" }) {
  const [now, setNow] = useState(new Date())

  const fontSizeMetric = {
    sm: 'md:text-[65pt] sm:text-4xl text-xl',   // ~50% of xl
    md: 'md:text-[85pt] sm:text-5xl text-2xl',  // ~70% of xl
    lg: 'md:text-[105pt] sm:text-6xl text-3xl', // ~85% of xl
    xl: 'md:text-[125pt] sm:text-8xl text-4xl', // baseline
  }

  const midFontSizeMetric = {
    sm: 'sm:text-2xl text-xl',   // ~55% of xl
    md: 'sm:text-3xl text-2xl',  // ~70% of xl
    lg: 'sm:text-3xl text-2xl',  // ~85% of xl (close to xl)
    xl: 'sm:text-4xl text-3xl',  // baseline
  }


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
      <div id='clock' className={`neon ${ fontSizeMetric[fontSize] } font-semibold tracking-wider`}>{timeString}</div>
      <div id='date' className={`mt-2 ${ midFontSizeMetric[fontSize] }`}>{dateString}</div>
    </div>
  )
}
