import React from 'react'
import ToggleSwitch from './ToggleSwitch'
import Dropdown from './Dropdown'
import UploadButton from './UploadButton'

export default function SettingsPanel({
  is24Hour,
  setIs24Hour,
  font,
  setFont,
  bg,
  setBg,
  bgOptions,
  fileInputRef,
  handleFileChange,
}) {
  const handleReset = () => {
    setIs24Hour(true)
    setFont('inter')
    setBg('')
    localStorage.removeItem('clockSettings')
  }

  return (
    <div className='controls-panel absolute top-20 right-5 p-4 rounded-xl text-neon text-sm space-y-3 w-60'>
      <ToggleSwitch label='24 Hour' checked={is24Hour} onChange={() => setIs24Hour(!is24Hour)} />

      <UploadButton label='Upload Background' inputRef={fileInputRef} onChange={handleFileChange} />

      <Dropdown label='Preset Background' options={bgOptions} value={bg} onChange={(e) => setBg(e.target.value)} />

      <Dropdown
        label='Font'
        options={[
          { label: 'Inter', value: 'inter' },
          { label: 'Roboto', value: 'roboto' },
          { label: 'Open Sans', value: 'open-sans' },
          { label: 'Lato', value: 'lato' },
          { label: 'Montserrat', value: 'montserrat' },
          { label: 'Elms Sans', value: 'elms sans' },
        ]}
        value={font}
        onChange={(e) => setFont(e.target.value)}
      />

      <button
        onClick={handleReset}
        className='w-full mt-2 bg-red-600/70 hover:bg-red-700/80 text-white py-1 rounded-md transition'
      >
        Reset to Defaults
      </button>
    </div>
  )
}
