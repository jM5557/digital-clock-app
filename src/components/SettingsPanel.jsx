import React from 'react'
import ToggleSwitch from './ToggleSwitch'
import Dropdown from './Dropdown'
import UploadButton from './UploadButton'
import OpacitySlider from './OverlaySlider/index.jsx' // <-- import the new slider

export default function SettingsPanel({
  is24Hour,
  setIs24Hour,
  font,
  setFont,
  fontSize,
  setFontSize,
  bg,
  setBg,
  bgOptions,
  fileInputRef,
  handleFileChange,
  overlayOpacity,
  setOverlayOpacity,   // <-- new props
}) {
  const handleReset = () => {
    setIs24Hour(true)
    setFont('inter')
    setBg('')
    setOverlayOpacity(25) // reset opacity to default
    localStorage.removeItem('clockSettings')
  }

  return (
    <div className='controls-panel absolute top-20 right-5 p-4 rounded-xl text-neon text-sm space-y-3 w-60'style={{ zIndex: 2 }}>
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

      <Dropdown
        label='FontSize'
        options={[
          { label: 'SM', value: 'sm' },
          { label: 'MD', value: 'md' },
          { label: 'LG', value: 'lg' },
          { label: 'XL', value: 'xl' },
        ]}
        value={fontSize}
        onChange={(e) => setFontSize(e.target.value)}
      />

      {/* New Opacity Slider */}
      <OpacitySlider overlayOpacity={overlayOpacity} setOverlayOpacity={setOverlayOpacity} />

      <button
        onClick={handleReset}
        className='w-full mt-4 bg-red-600/70 hover:bg-red-700/80 text-white py-1 rounded-md transition'
      >
        Reset to Defaults
      </button>
    </div>
  )
}
