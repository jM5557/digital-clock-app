import React from 'react'

export default function ToggleSwitch({ label, checked, onChange }) {
  return (
    <label className='flex items-center justify-between cursor-pointer'>
      <span>{label}</span>
      <div className='relative'>
        <input type='checkbox' checked={checked} onChange={onChange} className='sr-only' />
        <div className={`block w-10 h-5 rounded-full ${checked ? 'bg-neon' : 'bg-gray-400'}`}></div>
        <div className={`dot absolute left-1 top-1 bg-white w-3 h-3 rounded-full transition ${checked ? 'translate-x-5' : ''}`}></div>
      </div>
    </label>
  )
}
