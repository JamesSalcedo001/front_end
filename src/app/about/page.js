export default function About() {
  return (
    <main>
      <h2>About Us</h2>
    </main>
  )
}

"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const [open, setOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [filter, setFilter] = useState("All");

  const cards = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: i % 2 === 0 ? "Sandy Zhang" : "Alex Johnson",
    role: i % 2 === 0 ? "Backend Developer" : "Frontend Developer",
    category: i % 2 === 0 ? "Backend" : "Frontend",
    description: "I am a passionate software developer with a strong background in backend and frontend development. I specialize in building scalable and efficient applications using modern frameworks.",
    email: "Email",
    github: "GitHub",
    linkedin: "LinkedIn"
  }));

  const filteredCards = filter === "All" ? cards : cards.filter(card => card.category === filter);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Image src="/robot-logo.png" alt="Robot Logo" width={32} height={32} className="h-8 w-8" />
          <span className="text-xl font-semibold">About Page</span>
        </div>
        <div className="flex space-x-6">
          <Link href="#" className="text-gray-700 hover:text-blue-500">Home</Link>
          <Link href="#" className="text-gray-700 hover:text-blue-500">Contribute</Link>
          <Link href="#" className="text-gray-700 hover:text-blue-500">About Us</Link>
        </div>
      </nav>

      {/* Title and Description */}
      <div className="text-center p-10">
        <h1 className="text-3xl font-bold">Robot Takes Over</h1>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          A diverse group of aspiring developers unites to launch a groundbreaking project—a digital space where every pixel tells a story of the AI revolution. Inspired by The Million Dollar Homepage, they create a pixel-based advertising platform, but with a futuristic twist: robots are taking over. Each pixel on the site represents a robotic entity, an AI-driven ad space where companies, creators, and tech enthusiasts can buy, customize, and immortalize their brand as part of the grand robotic uprising. With a blend of cutting-edge JavaScript frameworks, dynamic Ruby on Rails back-end functionality, and blockchain integration, this team turns their project into a living, evolving web canvas of artificial intelligence dominance.
        </p>
        <h2 className="text-2xl font-bold mt-8">Meet the Team</h2>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center space-x-4 mb-6">
        <Button onClick={() => setFilter("All")} className={filter === "All" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}>All</Button>
        <Button onClick={() => setFilter("Frontend")} className={filter === "Frontend" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}>Frontend</Button>
        <Button onClick={() => setFilter("Backend")} className={filter === "Backend" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}>Backend</Button>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-3 gap-6 p-8">
        {filteredCards.map((card) => (
          <Card key={card.id} className="p-6 cursor-pointer hover:shadow-lg text-center bg-white rounded-lg border" onClick={() => { setSelectedCard(card); setOpen(true); }}>
            <CardContent className="flex flex-col items-center">
              <Image src="/profile-placeholder.png" alt="Profile" width={80} height={80} className="h-16 w-16 rounded-full mb-2" />
              <h2 className="text-lg font-semibold">{card.title}</h2>
              <p className="text-gray-600">{card.role}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Popup Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-bold">{selectedCard?.title}</DialogTitle>
            <p className="text-center text-gray-600">{selectedCard?.role}</p>
          </DialogHeader>
          <div className="text-center">
            <h3 className="text-lg font-bold mt-4">About Me</h3>
            <p className="text-gray-700 mt-2">{selectedCard?.description}</p>
            <div className="mt-4 space-y-2">
              <p className="text-blue-500 cursor-pointer">{selectedCard?.email}</p>
              <p className="text-blue-500 cursor-pointer">{selectedCard?.github}</p>
              <p className="text-blue-500 cursor-pointer">{selectedCard?.linkedin}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
