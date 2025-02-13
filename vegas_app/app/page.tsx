"use client";

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Trophy, Video, BarChart2, Users } from "lucide-react";
import Link from 'next/link';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen hero-gradient">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Welcome to <span className="text-[#D0B36F]">VegasSports</span>
            </h1>
            <p className="text-lg text-gray-400">
              Your premier destination for flag football stats, rankings, and highlights.
            </p>
            <div className="flex gap-4">
              <Link href="/rankings">
                <Button 
                  className="bg-[#D0B36F] hover:bg-[#84714E] text-black font-semibold px-6 py-6"
                >
                  View Rankings
                </Button>
              </Link>
              <Link href="/highlights">
                <Button 
                  variant="outline"
                  className="border-[#D0B36F] text-[#D0B36F] hover:bg-[#D0B36F] hover:text-black px-6 py-6"
                >
                  Watch Highlights
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1566577739112-5180d4bf9390?auto=format&fit=crop&q=80"
              alt="Flag Football"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-24">
          <div className="feature-card">
            <Trophy className="w-8 h-8 text-[#D0B36F]" />
            <h3 className="text-xl font-semibold">Weekly Rankings</h3>
            <p className="text-gray-400">Track player performance and team standings updated weekly.</p>
          </div>
          
          <div className="feature-card">
            <Video className="w-8 h-8 text-[#D0B36F]" />
            <h3 className="text-xl font-semibold">Game Highlights</h3>
            <p className="text-gray-400">Watch the best plays and moments from recent games.</p>
          </div>
          
          <div className="feature-card">
            <BarChart2 className="w-8 h-8 text-[#D0B36F]" />
            <h3 className="text-xl font-semibold">Player Stats</h3>
            <p className="text-gray-400">Detailed statistics and performance metrics for all players.</p>
          </div>
        </div>

        {/* Latest Updates */}
        <div className="mt-24">
          <h2 className="text-2xl font-bold mb-6">Latest Updates</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="gradient-card rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <Trophy className="w-6 h-6 text-[#D0B36F]" />
                <h3 className="text-lg font-semibold">Player of the Week</h3>
              </div>
              <p className="text-gray-400">Check out this week's standout performance and key stats.</p>
            </div>
            
            <div className="gradient-card rounded-xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <Users className="w-6 h-6 text-[#D0B36F]" />
                <h3 className="text-lg font-semibold">Team Rankings</h3>
              </div>
              <p className="text-gray-400">See how your favorite team ranks in the latest standings.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}