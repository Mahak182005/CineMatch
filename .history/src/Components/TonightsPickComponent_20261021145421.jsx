
import React, { useState } from 'react';
import { fatchData } from '../Data/api'; // अपने फ़ाइल पाथ के हिसाब से चेंज करें

export function TonightsPickComponent() {
  // select की गई कैटेगरी को स्टोर करने के लिए state
  const [selectedCategory, setSelectedCategory] = useState('All');

  // डेटा को 'watchWith' एरे के आधार पर फ़िल्टर करने का लॉजिक
  const filteredMovies = selectedCategory === 'All'
    ? fatchData
    : fatchData.filter(movie => movie.watchWith && movie.watchWith.includes(selectedCategory));

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#141414', color: '#fff', minHeight: '100vh' }}>
      <h2 style={{ textAlign: 'center', color: '#e50914' }}>🎬 Movie Matchmaker</h2>
      
      {/* Dropdown Filter */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px', gap: '10px', alignItems: 'center' }}>
        <label htmlFor="watchWithSelect" style={{ fontSize: '18px' }}>Who are you watching with?</label>
        <select 
          id="watchWithSelect"
          value={selectedCategory} 
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{ padding: '10px 15px', fontSize: '16px', borderRadius: '5px', backgroundColor: '#333', color: '#fff', border: '1px solid #555', cursor: 'pointer' }}
        >
          <option value="All">Everyone / All Movies</option>
          <option value="Friends">Friends</option>
          <option value="Family">Family</option>
          <option value="Partner">Partner</option>
          <option value="Alone">Alone</option>
        </select>
      </div>

      {/* Movies Grid List */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px', padding: '0 10px' }}>
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <div key={movie.id} style={{ backgroundColor: '#222', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0,0,0,0.5)', display: 'flex', flexDirection: 'column' }}>
              <img 
                src={movie.poster} 
                alt={movie.title} 
                style={{ width: '100%', height: '350px', objectFit: 'cover' }} 
              />
              <div style={{ padding: '15px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ margin: '0 0 5px 0', fontSize: '20px' }}>{movie.title} ({movie.year})</h3>
                <p style={{ color: '#aaa', margin: '0 0 10px 0', fontSize: '14px' }}>⭐ {movie.rating} | {movie.runtime} min</p>
                <p style={{ fontSize: '14px', color: '#ddd', flexGrow: 1, lineHeight: '1.4' }}>{movie.description}</p>
                <div style={{ marginTop: '10px' }}>
                  {movie.genre.map((g, idx) => (
                    <span key={idx} style={{ display: 'inline-block', backgroundColor: '#e50914', color: '#fff', padding: '3px 8px', borderRadius: '4px', fontSize: '12px', marginRight: '5px', marginBottom: '5px' }}>
                      {g}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: 'center', gridColumn: '1/-1', color: '#aaa' }}>No movies found for this option.</p>
        )}
      </div>
    </div>
  );
}
