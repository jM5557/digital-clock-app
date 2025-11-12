import React from 'react';
import './main.css'; // custom styles

export default function OverlaySlider({ overlayOpacity, setOverlayOpacity }) {
  return (
    <div className="flex flex-col space-y-2">
      <label
        htmlFor="overlayOpacity"
        className="text-sm font-medium text-slate-400"
      >
        Overlay Opacity ({overlayOpacity}%)
      </label>
      <input
        id="overlayOpacity"
        type="range"
        min="0"
        max="100"
        value={overlayOpacity}
        onChange={(e) => setOverlayOpacity(Number(e.target.value))}
        className="w-full custom-range"
      />
    </div>
  );
}