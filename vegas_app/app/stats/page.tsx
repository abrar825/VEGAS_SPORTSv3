"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import PlayerCard from '@/components/ui/player-card';

const StatsPage = () => {
  const router = useRouter();

  const players = [
    {
      id: 1,
      name: "Arnan Chowdhury",
      title: "League MVP",
      image: "/default.png",
      schoolLogo: "/ChattLogoGold.png",
      stats: {
        touchdowns: 24,
        yards: 2187,
        interceptions: 8,
        record: "13-4"
      },
      awards: ["🏆", "⭐"],
      colors: {
        main: "#D0B36F",
        accent: "#443174"
      }
    },
    {
      id: 2,
      name: "Abrar Chowdhury",
      title: "Offensive Player of the Year",
      image: "/default.png",
      schoolLogo: "/bulldawg.png",
      stats: {
        touchdowns: 21,
        yards: 1987,
        interceptions: 6,
        record: "12-5"
      },
      awards: ["🏈"],
      colors: {
        main: "#D0B36F",
        accent: "#443174"
      }
    },
    {
      id: 3,
      name: "Arib Ahmed",
      title: "Defensive Player of the Year",
      image: "/default.png",
      schoolLogo: "/ggclogo.png",
      stats: {
        touchdowns: 18,
        yards: 1756,
        interceptions: 12,
        record: "11-6"
      },
      awards: ["🛡️"],
      colors: {
        main: "#D0B36F",
        accent: "#443174"
      }
    }
  ];

  const handlePlayerClick = (player) => {
    router.push(`/stats/${player.id}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="power-rankings-title text-4xl md:text-5xl text-center mb-12">
        PLAYER STATS
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {players.map((player) => (
          <div key={player.id} onClick={() => handlePlayerClick(player)} className="cursor-pointer">
            <PlayerCard player={player} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsPage;