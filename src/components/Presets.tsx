import React, { useState, useEffect } from "react";
// import { fetchNui } from "../utils/fetchNui";
// import { useNuiEvent } from "../hooks/useNuiEvent";

interface PresetsProps {
  onPresetLoad?: (presetId: number) => void;
}


interface Preset {
  id: number;
  name: string;
}

const Presets: React.FC<PresetsProps> = ({ onPresetLoad }) => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [presets, setPresets] = useState<Preset[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Use NUI event to trigger fetching presets when the server sends them
  // useNuiEvent("receivePresets", (receivedPresets: Preset[]) => {
  //   setPresets(receivedPresets || []);
  //   setError(null);
  // });

  // Function to handle applying a preset
  const applyPreset = () => {
    if (selectedItem !== null && onPresetLoad) {
      onPresetLoad(selectedItem);
    }
  };

  return (
    <div className="w-full h-full flex-col justify-center items-center px-16 ">
      <div className="text-sm text-white font-bold py-1">Select a Preset:</div>
      <div className="text-sm text-gray-500 py-14">(No Saved Presets)</div>
      {/* Dropdown menu for presets
      <div className="flex justify-center text-center mt-3 w-full">
        <select
          className="hover:bg-primary tab cursor-pointer py-2 px-4 font-bold rounded-md mt-3 bg-fore text-white w-3/4 md:w-2/4"
          onChange={(e) => setSelectedItem(Number(e.target.value))}
          value={selectedItem || ""}
        >
          <option value="" disabled>Select a preset</option>
          {presets.map((preset) => (
            <option key={preset.id} value={preset.id}>
              {preset.name}
            </option>
          ))}
        </select>
      </div> */}

      {/* "Apply Preset" button */}
      <div className="mt-3 w-full flex justify-center text-center">
        <button
          className="flex hover:bg-primary tab cursor-pointer py-2 px-4 font-bold rounded-md mt-3 mb-3 shadow-lg bg-fore text-white"
          onClick={applyPreset}
          disabled={selectedItem === null}
        >
          Apply Preset
        </button>
      </div>
    </div>
  );
};

export default Presets;
