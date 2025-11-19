import React from 'react'
import ToggleSwitch from './../ToggleSwitch'
import Dropdown from './../Dropdown'
import UploadButton from './../UploadButton'
import OpacitySlider from './../OverlaySlider/index.jsx'
import BackgroundSelect from './../BackgroundSelect/index.jsx'
import './main.css'
import { fonts, fontSizes, dateFormats } from './settings.js'

export default function SettingsPanel({
  isOpen,
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
  closePanel,
  dateFormat,
  setDateFormat
}) {
  const handleReset = () => {
    setIs24Hour(true)
    setFont('inter')
    setBg('')
    setOverlayOpacity(25)
    localStorage.removeItem('clockSettings')
  }

  // Conditionally render only when open
  if (!isOpen) return null

  return (
    <div
      className={`
        controls-panel absolute top-5 right-5
        w-[90%] md:w-auto h-[90%]
        overflow-y-auto p-4 md:p-12 rounded-xl
        text-neon text-sm space-y-5
        bg-gray-900 shadow-2xl
        transform-gpu origin-top-right
        animate-in
      `}
      style={{ zIndex: 2 }}
    >
      <button
        onClick={closePanel}
        className='
          text-neon bg-gray-800 py-2 px-8
          rounded-full transition md:absolute
          md:top-2 md:right-2 w-full md:w-auto'
      >
        Close
      </button>

      <ToggleSwitch
        label='24 Hour'
        checked={is24Hour}
        onChange={() => setIs24Hour(!is24Hour)}
      />

      <BackgroundSelect
        bg={bg}
        setBg={setBg}
        bgOptions={bgOptions}
      />

      <UploadButton
        label='Upload Background'
        inputRef={fileInputRef}
        onChange={handleFileChange}
      />

      <Dropdown
        label='Font'
        options={fonts}
        value={font}
        onChange={(e) => setFont(e.target.value)}
      />

      <Dropdown
        label='Font Size'
        options={fontSizes}
        value={fontSize}
        onChange={(e) => setFontSize(e.target.value)}
      />

      <Dropdown
        label='Date Format'
        options={dateFormats}
        value={dateFormat}
        onChange={(e) => setDateFormat(e.target.value)}
      />

      <OpacitySlider
        overlayOpacity={overlayOpacity}
        setOverlayOpacity={setOverlayOpacity}
      />

      <button
        onClick={handleReset}
        className='w-full mt-8 text-red-400 py-1 rounded-md transition'
      >
        Reset to Defaults
      </button>
    </div>
  )
}