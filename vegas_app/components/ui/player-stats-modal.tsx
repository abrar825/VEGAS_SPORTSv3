"use client";

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

interface PlayerStats {
  week: string;
  fantasy: {
    fpts: number;
    gp: number;
    qbGp: number;
  };
  receiving: {
    tar: number;
    rec: number;
    yd: number;
    yac: number;
    td: number;
    pt1: number;
    pt2: number;
    fum: number;
  };
  passing: {
    att: number;
    cmp: number;
    cmpPerc: number;
    yd: number;
    td: number;
    pt1: number;
    pt2: number;
    int: number;
    pick6: number;
  };
  defense: {
    tkl: number;
    pbu: number;
    sack: number;
    ff: number;
    fr: number;
    int: number;
    td: number;
    pt1: number;
    pt2: number;
  };
}

interface PlayerStatsModalProps {
  isOpen: boolean;
  onClose: () => void;
  player: {
    name: string;
    title: string;
    image: string;
    schoolLogo: string;
  };
  stats: PlayerStats[];
}

const PlayerStatsModal = ({ isOpen, onClose, player, stats }: PlayerStatsModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] w-[1200px] p-0 gap-0 bg-[#0F0B2B] border-[#D0B36F]">
        <DialogHeader className="sticky top-0 z-50 bg-[#0F0B2B] border-b border-[#D0B36F]/20 p-6">
          <DialogTitle className="sr-only">Player Stats</DialogTitle>
          <VisuallyHidden>Player Stats for {player.name}</VisuallyHidden>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#D0B36F]">
              <img
                src={player.image}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold audiowide text-[#D0B36F]">
                {player.name.toUpperCase()}
              </h2>
              <p className="text-[#D0B36F]/80">{player.title}</p>
            </div>
            <div className="w-12 h-12 ml-auto">
              <img
                src={player.schoolLogo}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </DialogHeader>

        <div className="p-6">
          <ScrollArea className="h-[60vh] w-full rounded-md">
            <div className="min-w-[1400px]"> {/* Force minimum width for horizontal scroll */}
              <table className="w-full border-collapse">
                <thead className="sticky top-0 bg-[#0F0B2B] z-10">
                  <tr className="text-left border-b border-[#D0B36F]/20">
                    <th className="p-2 text-[#D0B36F] font-semibold" colSpan={3}>FANTASY</th>
                    <th className="p-2 text-[#D0B36F] font-semibold" colSpan={8}>RECEIVING</th>
                    <th className="p-2 text-[#D0B36F] font-semibold" colSpan={9}>PASSING</th>
                    <th className="p-2 text-[#D0B36F] font-semibold" colSpan={9}>DEFENSE</th>
                  </tr>
                  <tr className="text-left border-b border-[#D0B36F]/20">
                    <th className="p-2 text-[#D0B36F]/80">WEEK</th>
                    <th className="p-2 text-[#D0B36F]/80">FPTS</th>
                    <th className="p-2 text-[#D0B36F]/80">GP</th>
                    {/* Receiving */}
                    <th className="p-2 text-[#D0B36F]/80">TAR</th>
                    <th className="p-2 text-[#D0B36F]/80">REC</th>
                    <th className="p-2 text-[#D0B36F]/80">YD</th>
                    <th className="p-2 text-[#D0B36F]/80">YAC</th>
                    <th className="p-2 text-[#D0B36F]/80">TD</th>
                    <th className="p-2 text-[#D0B36F]/80">1PT</th>
                    <th className="p-2 text-[#D0B36F]/80">2PT</th>
                    <th className="p-2 text-[#D0B36F]/80">FUM</th>
                    {/* Passing */}
                    <th className="p-2 text-[#D0B36F]/80">ATT</th>
                    <th className="p-2 text-[#D0B36F]/80">CMP</th>
                    <th className="p-2 text-[#D0B36F]/80">CMP%</th>
                    <th className="p-2 text-[#D0B36F]/80">YD</th>
                    <th className="p-2 text-[#D0B36F]/80">TD</th>
                    <th className="p-2 text-[#D0B36F]/80">1PT</th>
                    <th className="p-2 text-[#D0B36F]/80">2PT</th>
                    <th className="p-2 text-[#D0B36F]/80">INT</th>
                    <th className="p-2 text-[#D0B36F]/80">PICK6</th>
                    {/* Defense */}
                    <th className="p-2 text-[#D0B36F]/80">TKL</th>
                    <th className="p-2 text-[#D0B36F]/80">PBU</th>
                    <th className="p-2 text-[#D0B36F]/80">SACK</th>
                    <th className="p-2 text-[#D0B36F]/80">FF</th>
                    <th className="p-2 text-[#D0B36F]/80">FR</th>
                    <th className="p-2 text-[#D0B36F]/80">INT</th>
                    <th className="p-2 text-[#D0B36F]/80">TD</th>
                    <th className="p-2 text-[#D0B36F]/80">1PT</th>
                    <th className="p-2 text-[#D0B36F]/80">2PT</th>
                  </tr>
                </thead>
                <tbody>
                  {stats.map((stat, index) => (
                    <tr 
                      key={index}
                      className="border-b border-[#D0B36F]/10 hover:bg-[#D0B36F]/5"
                    >
                      <td className="p-2 text-[#D0B36F]/90">{stat.week}</td>
                      <td className="p-2 text-[#D0B36F]/90">{stat.fantasy.fpts}</td>
                      <td className="p-2 text-[#D0B36F]/90">{stat.fantasy.gp}</td>
                      {/* Receiving */}
                      <td className="p-2 text-[#D0B36F]/90">{stat.receiving.tar}</td>
                      <td className="p-2 text-[#D0B36F]/90">{stat.receiving.rec}</td>
                      <td className="p-2 text-[#D0B36F]/90">{stat.receiving.yd}</td>
                      <td className="p-2 text-[#D0B36F]/90">{stat.receiving.yac}</td>
                      <td className="p-2 text-[#D0B36F]/90">{stat.receiving.td}</td>
                      <td className="p-2 text-[#D0B36F]/90">{stat.receiving.pt1}</td>
                      <td className="p-2 text-[#D0B36F]/90">{stat.receiving.pt2}</td>
                      <td className="p-2 text-[#D0B36F]/90">{stat.receiving.fum}</td>
                      {/* Passing */}
                      <td className="p-2 text-[#D0B36F]/90">{stat.passing.att}</td>
                      <td className="p-2 text-[#D0B36F]/90">{stat.passing.cmp}</td>
                      <td className="p-2 text-[#D0B36F]/90">{stat.passing.cmpPerc}</td>
                      <td className="p-2 text-[#D0B36F]/90">{stat.passing.yd}</td>
                      <td className="p-2 text-[#D0B36F]/90">{stat.passing.td}</td>
                      <td className="p-2 text-[#D0B36F]/90">{stat.passing.pt1}</td>
                      <td className="p-2 text-[#D0B36F]/90">{stat.passing.pt2}</td>
                      <td className="p-2 text-[#D0B36F]/90">{stat.passing.int}</td>
                      <td className="p-2 text-[#D0B36F]/90">{stat.passing.pick6}</td>
                      {/* Defense */}
                      <td className="p-2 text-[#D0B36F]/90">{stat.defense.tkl}</td>
                      <td className="p-2 text-[#D0B36F]/90">{stat.defense.pbu}</td>
                      <td className="p-2 text-[#D0B36F]/90">{stat.defense.sack}</td>
                      <td className="p-2 text-[#D0B36F]/90">{stat.defense.ff}</td>
                      <td className="p-2 text-[#D0B36F]/90">{stat.defense.fr}</td>
                      <td className="p-2 text-[#D0B36F]/90">{stat.defense.int}</td>
                      <td className="p-2 text-[#D0B36F]/90">{stat.defense.td}</td>
                      <td className="p-2 text-[#D0B36F]/90">{stat.defense.pt1}</td>
                      <td className="p-2 text-[#D0B36F]/90">{stat.defense.pt2}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PlayerStatsModal;