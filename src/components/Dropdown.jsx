import React from 'react'

export default function Dropdown({ label, options, value, onChange }) {
  return (
    <div className='flex flex-col space-y-1'>
      <label className='text-xs uppercase tracking-wide text-slate-400'>{label}</label>
      <select
        value={value}
        onChange={onChange}
        className='bg-gray-800 text-white rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-neon'
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  )
}
