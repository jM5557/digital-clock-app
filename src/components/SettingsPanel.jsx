import React from 'react'
import ToggleSwitch from './ToggleSwitch'
import Dropdown from './Dropdown'
import UploadButton from './UploadButton'
import OpacitySlider from './OverlaySlider/index.jsx' // <-- import the new slider
import BackgroundSelect from './BackgroundSelect/index.jsx'

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
  setOverlayOpacity,
  closePanel
}) {
  const handleReset = () => {
    setIs24Hour(true)
    setFont('inter')
    setBg('')
    setOverlayOpacity(25) // reset opacity to default
    localStorage.removeItem('clockSettings')
  }

  return (
    <div className='controls-panel absolute w-[90%] md:w-auto overflow-y-auto height-[90%] top-5 right-5 bottom-5 p-4 md:p-12 rounded-xl text-neon text-sm space-y-5'style={{ zIndex: 2 }}>
      <button
        onClick={closePanel}
        className='text-neon bg-gray-800 py-2 px-8 rounded-full transition md:absolute md:top-2 md:right-2 w-full md:w-auto'
      >
        Close
      </button>

      <ToggleSwitch label='24 Hour' checked={is24Hour} onChange={() => setIs24Hour(!is24Hour)} />

      <BackgroundSelect bg={bg} setBg={setBg} bgOptions={bgOptions} /> 

      <UploadButton label='Upload Background' inputRef={fileInputRef} onChange={handleFileChange} />

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
        label='Font Size'
        options={[
          { label: 'Small', value: 'sm' },
          { label: 'Medium', value: 'md' },
          { label: 'Large', value: 'lg' },
          { label: 'Extra Large', value: 'xl' },
        ]}
        value={fontSize}
        onChange={(e) => setFontSize(e.target.value)}
      />

      {/* New Opacity Slider */}
      <OpacitySlider overlayOpacity={overlayOpacity} setOverlayOpacity={setOverlayOpacity} />

      <button
        onClick={handleReset}
        className='w-full mt-8 text-red-400 py-1 rounded-md transition'
      >
        Reset to Defaults
      
      </button>
    </div>
  )
}
