import React, { useState } from 'react';

export function MovieMatchComponent({ onClose }) {
    // Modal open ya close status track karne ke liye basic state variable
    const [isOpen, setIsOpen] = useState(false);
    
    // Dropdown fields ke entries manage karne ke liye configurations
    const [selectedMood, setSelectedMood] = useState('Any mood');
    const [selectedDuration, setSelectedDuration] = useState('Any duration');

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-zinc-950 via-red-950/40 to-zinc-950 text-white flex flex-col items-center justify-center p-6 relative">
            
            {/* 1. Main Action Launcher Card (Movie Match Option Component) */}
            <div 
                onClick={() => setIsOpen(true)}
                className="w-full max-w-xl flex items-center justify-between p-6 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-red-900/50 cursor-pointer transition-all duration-300 group backdrop-blur-md"
            >
                <div className="flex items-center space-x-4">
                    {/* Pink/Red Floating Heart Shape Element */}
                    <div className="w-12 h-12 bg-red-950/30 border border-red-900/30 rounded-lg flex items-center justify-center text-xl group-hover:scale-105 transition-transform">
                        ❤️
                    </div>
                    <div>
                        <h3 className="font-bold text-zinc-100 group-hover:text-white text-base">Movie Match</h3>
                        <p className="text-zinc-400 text-xs mt-0.5">Mood, genre, time & language</p>
                    </div>
                </div>
                <span className="text-zinc-600 group-hover:text-red-400 transition-colors text-lg font-mono">&gt;</span>
            </div>

            {/* 2. Interactive Dialog Box Overlay Popup Framework (Simulated Screen Modal Viewport) */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fadeIn">
                    
                    {/* Main Dialog Box Card Structure Container */}
                    <div className="w-full max-w-md bg-zinc-950 border border-zinc-800 rounded-xl p-6 shadow-2xl relative">
                        
                        {/* Upper Close Button Cross Icon Action trigger layout handler element */}
                        <button 
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors font-sans text-sm p-1.5 hover:bg-zinc-900 rounded-md"
                        >
                            ✕
                        </button>

                        {/* Title Header Section lines structure block markup element */}
                        <div className="mb-6">
                            <h2 className="text-xl font-bold text-white tracking-tight">Movie Match</h2>
                            <p className="text-zinc-400 text-xs mt-1">What are you in the mood for tonight?</p>
                        </div>

                        {/* Dropdown interactive selection field wrappers matrix stack */}
                        <div className="space-y-4 mb-6">
                            
                            {/* Input Field Item A: Mood Option Node Category List selection wrapper drop-down configuration markup */}
                            <div>
                                <label className="block text-zinc-400 text-xs font-semibold mb-1.5 tracking-wide">Mood</label>
                                <select 
                                    value={selectedMood}
                                    onChange={(e) => setSelectedMood(e.target.value)}
                                    className="w-full bg-zinc-900/60 border border-zinc-800 text-zinc-200 text-xs rounded-lg px-3 py-2.5 outline-none focus:border-zinc-500 transition-colors cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3C/svg%3E')] bg-no-repeat bg-[right_12px_center]"
                                >
                                    <option value="Any mood">Any mood</option>
                                    <option value="Thrilled">Thrilled ⚡</option>
                                    <option value="Happy">Happy 😊</option>
                                    <option value="Sad">Sad 😢</option>
                                    <option value="Romantic">Romantic 💕</option>
                                    <option value="Energetic">Energetic 🔥</option>
                                </select>
                            </div>

                            {/* Input Field Item B: Runtime/Duration option grid framework layouts dropdown element configurations block */}
                            <div>
                                <label className="block text-zinc-400 text-xs font-semibold mb-1.5 tracking-wide">Runtime</label>
                                <select 
                                    value={selectedDuration}
                                    onChange={(e) => setSelectedDuration(e.target.value)}
                                    className="w-full bg-zinc-900/60 border border-zinc-800 text-zinc-200 text-xs rounded-lg px-3 py-2.5 outline-none focus:border-zinc-500 transition-colors cursor-pointer"
                                >
                                    <option value="Any duration">Any duration</option>
                                    <option value="Short (&lt; 90 min)">Short (&lt; 90 min)</option>
                                    <option value="Standard (90-120 min)">Standard (90-120 min)</option>
                                    <option value="Long (&gt; 120 min)">Long (&gt; 120 min)</option>
                                </select>
                            </div>

                        </div>

                        {/* Action CTA Submission Execute Trigger Button container component panel with high contrast amber style */}
                        <button 
                            onClick={() => {
                                alert(`Searching database arrays matching custom preferences parameters:\nMood: ${selectedMood}\nDuration: ${selectedDuration}`);
                                setIsOpen(false); // Task triggered completed - closing layout view node framework handler
                            }}
                            className="w-full bg-amber-500 hover:bg-amber-600 text-zinc-950 font-bold text-xs py-2.5 rounded-lg transition-colors flex items-center justify-center space-x-1 shadow-md shadow-amber-500/10 active:scale-[0.99]"
                        >
                            <span>✨</span>
                            <span>Find my movie</span>
                        </button>

                    </div>
                </div>
            )}
            
        </div>
    );
}
