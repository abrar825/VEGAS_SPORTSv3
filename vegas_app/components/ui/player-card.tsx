"use client";

import React from 'react';
import { Trophy } from 'lucide-react';

interface PlayerStats {
  touchdowns: number;
  yards: number;
  interceptions: number;
  record: string;
}

interface PlayerColors {
  main: string;
  accent: string;
}

interface PlayerCardProps {
  player: {
    name: string;
    title: string;
    image: string;
    schoolLogo: string;
    stats: PlayerStats;
    awards: string[];
    colors: PlayerColors;
  };
}

const PlayerCard = ({ player }: PlayerCardProps) => {
  return (
    <div className="group relative">
      {/* Gold border frame */}
      <div className="absolute inset-0 rounded-lg border-2 border-[#D0B36F] bg-black">
        <div className="absolute inset-0 opacity-20 bg-gradient-to-b from-[#D0B36F] to-transparent" />
      </div>

      <div className="relative overflow-hidden rounded-lg">
        {/* Player Image Section */}
        <div className="relative h-[400px]">
          <img
            src={player.image}
            alt={player.name}
            className="w-full h-full object-cover"
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
        </div>

        {/* Title Bar - Gold background */}
        <div className="relative bg-[#D0B36F] py-2 px-4">
          <h3 className="text-black text-xl font-bold text-center uppercase">
            {player.title}
          </h3>
        </div>

        {/* Player Name Section - Black background */}
        <div className="relative bg-black px-4 py-6">
          <div className="flex items-center gap-4">
            {/* Trophy or Award Icon */}
            <Trophy className="w-12 h-12 text-[#D0B36F]" />
            
            {/* Name */}
            <div>
              <h2 className="audiowide text-3xl text-white mb-1">
                {player.name.toUpperCase()}
              </h2>
              <div className="flex gap-2">
                {player.awards.map((award, index) => (
                  <span key={index} className="text-2xl">{award}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats - Gold text */}
          <div className="mt-4 text-[#D0B36F]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-lg">Touchdowns:</span>
              <span className="text-2xl font-bold">{player.stats.touchdowns}</span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-lg">Total Yards:</span>
              <span className="text-2xl font-bold">{player.stats.yards}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-lg">Record:</span>
              <span className="text-2xl font-bold">{player.stats.record}</span>
            </div>
          </div>

          {/* School Logo - Small overlay */}
          <div className="absolute top-4 right-4 w-12 h-12 opacity-80">
            <img
              src={player.schoolLogo}
              alt="School Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Hover effect - Gold glow */}
      <div 
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          boxShadow: `
            0 0 20px rgba(208, 179, 111, 0.2),
            0 0 40px rgba(208, 179, 111, 0.1)
          `
        }}
      />
    </div>
  );
};

export default PlayerCard;