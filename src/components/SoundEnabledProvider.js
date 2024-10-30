"use client";
import React from "react";

const SoundEnabledContext = React.createContext();

function SoundEnabledProvider({children}) {
  const [soundEnabled, setSoundEnabled] = React.useState(true);

  return (
    <SoundEnabledContext.Provider value={{soundEnabled, setSoundEnabled}}>
      {children}
    </SoundEnabledContext.Provider>
  );
}

export default SoundEnabledProvider;

export function useSoundEnabled() {
  const data = React.useContext(SoundEnabledContext);
  if (!data) {
    throw new Error("WRONG HOOK");
  }
  return data;
}
