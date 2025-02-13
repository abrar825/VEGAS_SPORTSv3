import React from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Trophy, Medal, Star } from 'lucide-react';
import { players } from '@/lib/data';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return Object.keys(players).map((id) => ({
    id: id
  }));
}

const PlayerStatsPage = ({ params }: { params: { id: string } }) => {
  const playerData = players[params.id];

  if (!playerData) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0F0B2B]">
      {/* Hero Section */}
      <div className="relative bg-[#0F0B2B]">
        {/* School color stripe */}
        <div 
          className="absolute top-0 left-0 w-full h-2"
          style={{ backgroundColor: playerData.colors.main }}
        />

        <div className="container mx-auto px-4">
          <div className="relative pt-8 pb-6">
            {/* Player Header Card */}
            <div className="bg-[#1A1535] rounded-lg overflow-hidden shadow-xl">
              {/* Top Bar with School Logo */}
              <div 
                className="h-16 relative flex items-center px-6"
                style={{ backgroundColor: playerData.colors.main }}
              >
                <div className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full p-2">
                  <img
                    src={playerData.schoolLogo}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Player Info Section */}
              <div className="px-6 py-6">
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                  {/* Player Image */}
                  <div className="relative">
                    <div className="w-40 h-40 md:w-48 md:h-48 rounded-lg overflow-hidden border-4" style={{ borderColor: playerData.colors.main }}>
                      <img
                        src={playerData.image}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Player Details */}
                  <div className="flex-grow text-center md:text-left">
                    {/* Name and Title */}
                    <div className="space-y-2">
                      <h1 className="text-4xl md:text-5xl font-bold orbitron tracking-wider">
                        <span className="text-white">{playerData.name}</span>
                      </h1>
                      <div 
                        className="inline-block px-4 py-1 rounded-full text-sm font-semibold"
                        style={{ 
                          backgroundColor: `${playerData.colors.main}20`,
                          color: playerData.colors.main
                        }}
                      >
                        {playerData.title}
                      </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-4 mt-6">
                      <div 
                        className="relative overflow-hidden rounded-lg p-4"
                        style={{ backgroundColor: `${playerData.colors.main}10` }}
                      >
                        <div className="relative z-10">
                          <div className="text-2xl font-bold" style={{ color: playerData.colors.main }}>
                            {playerData.stats.touchdowns}
                          </div>
                          <div className="text-sm text-white/60 uppercase tracking-wider">Touchdowns</div>
                        </div>
                        <Trophy 
                          className="absolute -right-2 -bottom-2 w-12 h-12 opacity-10"
                          style={{ color: playerData.colors.main }}
                        />
                      </div>
                      <div 
                        className="relative overflow-hidden rounded-lg p-4"
                        style={{ backgroundColor: `${playerData.colors.main}10` }}
                      >
                        <div className="relative z-10">
                          <div className="text-2xl font-bold" style={{ color: playerData.colors.main }}>
                            {playerData.stats.yards}
                          </div>
                          <div className="text-sm text-white/60 uppercase tracking-wider">Total Yards</div>
                        </div>
                        <Medal 
                          className="absolute -right-2 -bottom-2 w-12 h-12 opacity-10"
                          style={{ color: playerData.colors.main }}
                        />
                      </div>
                      <div 
                        className="relative overflow-hidden rounded-lg p-4"
                        style={{ backgroundColor: `${playerData.colors.main}10` }}
                      >
                        <div className="relative z-10">
                          <div className="text-2xl font-bold" style={{ color: playerData.colors.main }}>
                            {playerData.stats.record}
                          </div>
                          <div className="text-sm text-white/60 uppercase tracking-wider">Record</div>
                        </div>
                        <Star 
                          className="absolute -right-2 -bottom-2 w-12 h-12 opacity-10"
                          style={{ color: playerData.colors.main }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-[#1A1535] rounded-lg border border-white/10 overflow-hidden">
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-white/10">
                  <thead className="bg-[#0F0B2B]">
                    <tr>
                      <th scope="col" className="sticky left-0 z-10 bg-[#0F0B2B] px-4 py-3 text-left text-white font-semibold uppercase tracking-wider" colSpan={3}>
                        FANTASY
                      </th>
                      <th scope="col" className="px-4 py-3 text-left text-white font-semibold uppercase tracking-wider" colSpan={8}>
                        RECEIVING
                      </th>
                      <th scope="col" className="px-4 py-3 text-left text-white font-semibold uppercase tracking-wider" colSpan={9}>
                        PASSING
                      </th>
                      <th scope="col" className="px-4 py-3 text-left text-white font-semibold uppercase tracking-wider" colSpan={9}>
                        DEFENSE
                      </th>
                    </tr>
                    <tr>
                      <th scope="col" className="sticky left-0 z-10 bg-[#0F0B2B] px-4 py-3 text-left text-sm font-semibold text-white/80">
                        WEEK
                      </th>
                      <th scope="col" className="sticky left-[100px] z-10 bg-[#0F0B2B] px-4 py-3 text-left text-sm font-semibold text-white/80">
                        FPTS
                      </th>
                      <th scope="col" className="sticky left-[200px] z-10 bg-[#0F0B2B] px-4 py-3 text-left text-sm font-semibold text-white/80">
                        GP
                      </th>
                      {/* Receiving */}
                      <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-white/80">TAR</th>
                      <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-white/80">REC</th>
                      <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-white/80">YD</th>
                      <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-white/80">YAC</th>
                      <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-white/80">TD</th>
                      <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-white/80">1PT</th>
                      <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-white/80">2PT</th>
                      <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-white/80">FUM</th>
                      {/* Passing */}
                      <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-white/80">ATT</th>
                      <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-white/80">CMP</th>
                      <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-white/80">CMP%</th>
                      <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-white/80">YD</th>
                      <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-white/80">TD</th>
                      <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-white/80">1PT</th>
                      <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-white/80">2PT</th>
                      <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-white/80">INT</th>
                      <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-white/80">PICK6</th>
                      {/* Defense */}
                      <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-white/80">TKL</th>
                      <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-white/80">PBU</th>
                      <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-white/80">SACK</th>
                      <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-white/80">FF</th>
                      <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-white/80">FR</th>
                      <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-white/80">INT</th>
                      <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-white/80">TD</th>
                      <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-white/80">1PT</th>
                      <th scope="col" className="px-4 py-3 text-left text-sm font-semibold text-white/80">2PT</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {playerData.weeklyStats.map((stat, index) => (
                      <tr key={index} className="hover:bg-white/5">
                        <td className="sticky left-0 z-10 bg-[#0F0B2B] whitespace-nowrap px-4 py-3 text-sm text-white/90">
                          {stat.week}
                        </td>
                        <td className="sticky left-[100px] z-10 bg-[#0F0B2B] whitespace-nowrap px-4 py-3 text-sm text-white/90">
                          {stat.fantasy.fpts}
                        </td>
                        <td className="sticky left-[200px] z-10 bg-[#0F0B2B] whitespace-nowrap px-4 py-3 text-sm text-white/90">
                          {stat.fantasy.gp}
                        </td>
                        {/* Receiving */}
                        <td className="whitespace-nowrap px-4 py-3 text-sm text-white/90">{stat.receiving.tar}</td>
                        <td className="whitespace-nowrap px-4 py-3 text-sm text-white/90">{stat.receiving.rec}</td>
                        <td className="whitespace-nowrap px-4 py-3 text-sm text-white/90">{stat.receiving.yd}</td>
                        <td className="whitespace-nowrap px-4 py-3 text-sm text-white/90">{stat.receiving.yac}</td>
                        <td className="whitespace-nowrap px-4 py-3 text-sm text-white/90">{stat.receiving.td}</td>
                        <td className="whitespace-nowrap px-4 py-3 text-sm text-white/90">{stat.receiving.pt1}</td>
                        <td className="whitespace-nowrap px-4 py-3 text-sm text-white/90">{stat.receiving.pt2}</td>
                        <td className="whitespace-nowrap px-4 py-3 text-sm text-white/90">{stat.receiving.fum}</td>
                        {/* Passing */}
                        <td className="whitespace-nowrap px-4 py-3 text-sm text-white/90">{stat.passing.att}</td>
                        <td className="whitespace-nowrap px-4 py-3 text-sm text-white/90">{stat.passing.cmp}</td>
                        <td className="whitespace-nowrap px-4 py-3 text-sm text-white/90">{stat.passing.cmpPerc}</td>
                        <td className="whitespace-nowrap px-4 py-3 text-sm text-white/90">{stat.passing.yd}</td>
                        <td className="whitespace-nowrap px-4 py-3 text-sm text-white/90">{stat.passing.td}</td>
                        <td className="whitespace-nowrap px-4 py-3 text-sm text-white/90">{stat.passing.pt1}</td>
                        <td className="whitespace-nowrap px-4 py-3 text-sm text-white/90">{stat.passing.pt2}</td>
                        <td className="whitespace-nowrap px-4 py-3 text-sm text-white/90">{stat.passing.int}</td>
                        <td className="whitespace-nowrap px-4 py-3 text-sm text-white/90">{stat.passing.pick6}</td>
                        {/* Defense */}
                        <td className="whitespace-nowrap px-4 py-3 text-sm text-white/90">{stat.defense.tkl}</td>
                        <td className="whitespace-nowrap px-4 py-3 text-sm text-white/90">{stat.defense.pbu}</td>
                        <td className="whitespace-nowrap px-4 py-3 text-sm text-white/90">{stat.defense.sack}</td>
                        <td className="whitespace-nowrap px-4 py-3 text-sm text-white/90">{stat.defense.ff}</td>
                        <td className="whitespace-nowrap px-4 py-3 text-sm text-white/90">{stat.defense.fr}</td>
                        <td className="whitespace-nowrap px-4 py-3 text-sm text-white/90">{stat.defense.int}</td>
                        <td className="whitespace-nowrap px-4 py-3 text-sm text-white/90">{stat.defense.td}</td>
                        <td className="whitespace-nowrap px-4 py-3 text-sm text-white/90">{stat.defense.pt1}</td>
                        <td className="whitespace-nowrap px-4 py-3 text-sm text-white/90">{stat.defense.pt2}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerStatsPage;