import { useState, useEffect, useRef } from 'react'

import bg1 from './assets/bg1.png'
import bg2 from './assets/bg2.png'
import bg3 from './assets/bg3.png'


import Clock from './components/Clock'
import SettingsPanel from './components/SettingsPanel/index'
import { Settings, Maximize2 } from 'lucide-react'
import { dateFormats } from './components/SettingsPanel/settings'

// Background options
const BG_OPTIONS = [
  { label: 'No Background', value: '' },
  { label: 'Background 1', value: bg1 },
  { label: 'Background 2', value: bg2 },
  { label: 'Background 3', value: bg3 },
]

export default function App() {
  const [is24Hour, setIs24Hour] = useState(true)
  const [font, setFont] = useState('inter')
  const [fontSize, setFontSize] = useState('xl')
  const [bg, setBg] = useState('')
  const [showSettings, setShowSettings] = useState(false)
  const [overlayOpacity, setOverlayOpacity] = useState(25);
  const [showHUD, setShowHUD] = useState(true);
  const [dateFormat, setDateFormat] = useState(dateFormats[0].value);
  const fileInputRef = useRef(null);

  // Load saved settings on mount
useEffect(() => {
  const saved = localStorage.getItem('clockSettings');
  console.log('Loaded saved settings:', saved);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);

      setIs24Hour(parsed.is24Hour ?? true);
      setFont(parsed.font ?? 'inter');
      setBg(parsed.bg ?? '');
      setFontSize(parsed.fontSize ?? 'xl');
      setOverlayOpacity(parsed.overlayOpacity ?? 25);
      setDateFormat(parsed.dateFormat ?? dateFormats[0].value);
    } catch (err) {
      console.error('Failed to parse saved settings', err);
    }
  }
}, []);



  // Save to localStorage whenever settings change
  useEffect(() => {
    localStorage.setItem(
      'clockSettings',
      JSON.stringify({ 
        is24Hour, 
        font, 
        bg, 
        fontSize, 
        overlayOpacity,
        dateFormat
      })
    )
  }, [is24Hour, font, fontSize, bg, overlayOpacity, dateFormat])

  // Handle user-uploaded images
  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onload = (ev) => setBg(ev.target.result)
      reader.readAsDataURL(file)
    }
  }

  const handleFullscreenToggle = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
    } else {
      document.exitFullscreen()
    }
  }

  const handleShowHUDToggle = () => {
    setShowHUD(!showHUD);
  };

  return (
    <div
      className="flex flex-col justify-center items-center h-screen w-full transition-all duration-300"
      style={{
        backgroundImage: bg
          ? `url(${bg})`
          : 'linear-gradient(135deg,#1a1a2e,#2f2f4f)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        fontFamily: `'${font}', sans-serif`,
      }}
    >
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: `rgba(0, 0, 0, ${(overlayOpacity) / 100})`,
        pointerEvents: 'none',
        transition: 'background-color 0.3s ease',
        zIndex: 0
      }}></div>

      { showHUD && (  
        <button
          onClick={() => setShowSettings(!showSettings)}
          className="absolute top-5 right-5 text-neon text-3xl"
        >
          <Settings className="w-8 h-8" />
        </button>
      )}

        <SettingsPanel
          is24Hour={is24Hour}
          setIs24Hour={setIs24Hour}
          font={font}
          setFont={setFont}
          fontSize={fontSize}
          setFontSize={setFontSize}
          bg={bg}
          setBg={setBg}
          bgOptions={BG_OPTIONS}
          fileInputRef={fileInputRef}
          handleFileChange={handleFileChange}
          overlayOpacity={overlayOpacity}
          setOverlayOpacity={setOverlayOpacity}
          isOpen={showSettings}
          closePanel={() => setShowSettings(false)}
          dateFormat={dateFormat}
          setDateFormat={setDateFormat}
        />

      <Clock 
        dateFormat={dateFormat} 
        is24Hour={is24Hour} 
        fontSize={fontSize} 
        onClick={handleShowHUDToggle} 
      />

      { showHUD && (
        <button
          onClick={handleFullscreenToggle}
          className="fixed right-4 bottom-4 bg-black/60 text-white px-3 py-1 rounded-lg text-sm hover:bg-black/80 flex items-center gap-2"
        >
          <Maximize2 className="w-4 h-4" /> Fullscreen
        </button>
      )}
    </div>
  )
}
