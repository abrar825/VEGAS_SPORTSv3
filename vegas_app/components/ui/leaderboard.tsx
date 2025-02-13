"use client";

import React from "react";
import { ArrowUp, ArrowDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";

const LeaderboardRow = ({
  rank,
  playerName,
  playerImage,
  schoolLogo,
  rankChange,
  colors,
  stats
}) => {
  return (
    <div className="relative flex items-center w-full min-h-[6rem] text-white mb-4 transform transition-all duration-300 hover:scale-[1.02] group px-2 md:px-0">
      <style jsx>{`
        .glow-${rank} {
          border-top: 1px solid ${colors.main}40;
          border-bottom: 5px solid ${colors.main};
          box-shadow: 
            inset 0 -4px 12px -6px ${colors.main},
            0 4px 12px -2px ${colors.main},
            0 6px 16px -3px ${colors.main}80;
          transition: all 0.3s ease;
        }

        .group:hover .glow-${rank} {
          box-shadow: 
            inset 0 -4px 16px -6px ${colors.main},
            0 8px 20px -2px ${colors.main},
            0 12px 24px -3px ${colors.main};
        }
      `}</style>

      {/* Background with borders and glow */}
      <div className={`absolute inset-0 bg-transparent rounded-lg glow-${rank}`} />

      {/* Rank number */}
      <span className="absolute -left-4 md:-left-12 text-2xl md:text-4xl audiowide z-10"
        style={{
          textShadow: `0 0 8px ${colors.main}40`,
        }}>
        {rank}
      </span>

      {/* Content */}
      <div className="flex items-center w-full z-10 px-4 md:px-8">
        {/* Combined logo and player image container */}
        <div className="relative w-16 md:w-32 h-16 md:h-24 flex-shrink-0">
          {/* School logo */}
          <div className="h-12 md:h-20 w-12 md:w-20 flex-shrink-0">
            <img
              src={schoolLogo}
              alt="School logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Player info and stats */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between flex-1 min-w-0">
          {/* Player name */}
          <span className="audiowide text-lg md:text-xl truncate">
            {playerName.toUpperCase()}
          </span>

          {/* Stats - Only show on tablet and up */}
          <div className="hidden md:flex gap-6 text-sm">
            <div className="text-center">
              <div className="text-[#D0B36F]">TDs</div>
              <div>{stats.touchdowns}</div>
            </div>
            <div className="text-center">
              <div className="text-[#D0B36F]">YDS</div>
              <div>{stats.yards}</div>
            </div>
            <div className="text-center">
              <div className="text-[#D0B36F]">INT</div>
              <div>{stats.interceptions}</div>
            </div>
          </div>

          {/* Condensed stats for mobile */}
          <div className="md:hidden text-xs flex gap-3 mt-1">
            <span className="text-[#D0B36F]">{stats.touchdowns} TD</span>
            <span className="text-[#D0B36F]">{stats.yards} YD</span>
          </div>
        </div>

        {/* Ranking movement indicator */}
        <div className="flex items-center justify-center w-8 flex-shrink-0 ml-2">
          {rankChange > 0 ? (
            <ArrowUp className="w-5 h-5 text-green-400" />
          ) : rankChange < 0 ? (
            <ArrowDown className="w-5 h-5 text-red-400" />
          ) : null}
        </div>
      </div>
    </div>
  );
};

const LeaderboardHeader = ({ weekNumber, onWeekChange }) => {
  const weeks = Array.from({ length: 18 }, (_, i) => i + 1);

  return (
    <div className="flex flex-col items-center mb-12 px-4">
      {/* Title */}
      <h1 className="power-rankings-title text-3xl md:text-5xl lg:text-6xl text-center mb-8">
        POWER RANKINGS
      </h1>

      {/* Week selector and navigation */}
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-[#D0B36F] text-[#D0B36F] hover:bg-[#D0B36F] hover:text-black"
          onClick={() => onWeekChange(weekNumber - 1)}
          disabled={weekNumber <= 1}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="min-w-[120px] rounded-full border-[#D0B36F] bg-black text-[#D0B36F] hover:bg-[#D0B36F] hover:text-black transition-all duration-300"
            >
              Week {weekNumber}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-black border-[#D0B36F]">
            {weeks.map((week) => (
              <DropdownMenuItem
                key={week}
                className="text-[#D0B36F] hover:text-black hover:bg-[#D0B36F] cursor-pointer"
                onClick={() => onWeekChange(week)}
              >
                Week {week}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-[#D0B36F] text-[#D0B36F] hover:bg-[#D0B36F] hover:text-black"
          onClick={() => onWeekChange(weekNumber + 1)}
          disabled={weekNumber >= 18}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

const Leaderboard = ({ players }) => {
  const [weekNumber, setWeekNumber] = React.useState(15);

  return (
    <div className="w-full max-w-3xl mx-auto px-4 md:px-8 py-6">
      {/* Header */}
      <LeaderboardHeader
        weekNumber={weekNumber}
        onWeekChange={setWeekNumber}
      />
      
      {/* Rankings list */}
      <div className="space-y-2 pl-6 md:pl-16">
        {players.map((player, index) => (
          <LeaderboardRow
            key={player.id}
            rank={index + 1}
            playerName={player.name}
            playerImage={player.profileImage}
            schoolLogo={player.schoolLogo}
            rankChange={player.rankChange}
            colors={player.colors}
            stats={player.stats}
          />
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;