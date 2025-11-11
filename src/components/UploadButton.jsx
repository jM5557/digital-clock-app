import React from 'react'
import { Upload } from 'lucide-react'

export default function UploadButton({ label, inputRef, onChange }) {
  return (
    <div>
      <button
        className='w-full flex items-center justify-center gap-2 bg-gradient-to-br from-slate-800 to-slate-900 rounded-md py-2 text-white font-semibold hover:from-slate-700 hover:to-slate-800 transition'
        onClick={() => inputRef.current.click()}
      >
        <Upload className='w-4 h-4' /> {label}
      </button>
      <input type='file' accept='image/*' ref={inputRef} onChange={onChange} className='hidden' />
    </div>
  )
}
