"use client";

import Leaderboard from "@/components/ui/leaderboard";

export default function RankingsPage() {
  const playerData = [
    {
      id: 1,
      name: "Arnan Chowdhury",
      profileImage: "/default.png",
      schoolLogo: "/ChattLogoGold.png",
      colors: {
        main: "#FDDA0D",
        glow: "#FDDA0D",
      },
      isAnimated: true,
      rankChange: 1,
      playerImage: "/default.png",
      stats: {
        touchdowns: 4,
        yards: 387,
        interceptions: 1
      }
    },
    {
      id: 2,
      name: "Abrar Chowdhury",
      profileImage: "/default.png",
      schoolLogo: "/bulldawg.png",
      colors: {
        main: "#EF4444",
        glow: "#EF4444",
      },
      isAnimated: false,
      rankChange: -1,
      playerImage: "/default.png",
      stats: {
        touchdowns: 3,
        yards: 298,
        interceptions: 2
      }
    },
    {
      id: 3,
      name: "Arib Ahmed",
      profileImage: "/default.png",
      schoolLogo: "/ggclogo.png",
      colors: {
        main: "#DE52FD",
        glow: "#DE52FD",
      },
      isAnimated: false,
      playerImage: "/default.png",
      stats: {
        touchdowns: 2,
        yards: 245,
        interceptions: 0
      }
    },
    {
      id: 4,
      name: "Arnan Chowdhury",
      profileImage: "/default.png",
      schoolLogo: "/ChattLogoGold.png",
      colors: {
        main: "#D0B36F",
        glow: "#D0B36F",
      },
      isAnimated: false,
      playerImage: "/default.png",
      stats: {
        touchdowns: 2,
        yards: 198,
        interceptions: 1
      }
    },
    {
      id: 5,
      name: "Omar Kashem",
      profileImage: "/default.png",
      schoolLogo: "/gsu.png",
      colors: {
        main: "#3399ff",
        glow: "#66b2ff",
      },
      isAnimated: false,
      playerImage: "/default.png",
      stats: {
        touchdowns: 1,
        yards: 156,
        interceptions: 2
      }
    },
  ];
  
  return (
    <div className="w-full">
      <Leaderboard players={playerData} />
    </div>
  );
}