'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export default function AboutPage() {
  const [open, setOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<any>(null);
  const [filter, setFilter] = useState("All");

  const cards = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: i % 2 === 0 ? "Sandy Zhang" : "Alex Johnson",
    role: i % 2 === 0 ? "Backend Developer" : "Frontend Developer",
    category: i % 2 === 0 ? "Backend" : "Frontend",
    location: i % 2 === 0 ? "San Francisco, CA" : "New York, NY",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    skills: ["JavaScript", "CSS", "React", "Firebase"],
    contribution: "I did this and that on this project and also thought about xyz",
    lookingFor: "Start up working in AI doing xyz",
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
          <Image src="/robot-logo.png" alt="Robot Logo" width={32} height={32} />
          <span className="text-xl font-semibold">About Page</span>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-blue-500">Home</a>
          <a href="#" className="text-gray-700 hover:text-blue-500">Contribute</a>
          <a href="#" className="text-gray-700 hover:text-blue-500">About Us</a>
        </div>
      </nav>

      {/* Title and Description */}
      <div className="text-center p-10">
        <h1 className="text-3xl font-bold">Robot Takes Over</h1>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          A diverse group of aspiring developers unites to launch a groundbreaking project...
        </p>
        <h2 className="text-2xl font-bold mt-8">Meet the Team</h2>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center space-x-4 mb-6">
        {["All", "Frontend", "Backend"].map((cat) => (
          <Button
            key={cat}
            onClick={() => setFilter(cat)}
            className={filter === cat ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
        {filteredCards.map((card) => (
          <Card
            key={card.id}
            className="p-6 cursor-pointer hover:shadow-lg text-center bg-white rounded-lg border"
            onClick={() => { setSelectedCard(card); setOpen(true); }}
          >
            <CardContent className="flex flex-col items-center">
              <Image src="/profile-placeholder.png" alt="Profile" width={64} height={64} className="rounded-full mb-2" />
              <h2 className="text-lg font-semibold">{card.title}</h2>
              <p className="text-gray-600">{card.role}</p>
              <p className="text-gray-500 text-sm">{card.location}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Popup Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader className="text-center">
            <DialogTitle className="text-2xl font-bold">{selectedCard?.title}</DialogTitle>
            <p className="text-gray-600">{selectedCard?.role}</p>
            <p className="flex justify-center items-center gap-2 text-gray-500">📍{selectedCard?.location}</p>
          </DialogHeader>
          <div className="text-center">
            <h3 className="text-lg font-bold mt-4">About Me</h3>
            <p className="text-gray-700 mt-2">{selectedCard?.description}</p>

            <h3 className="text-lg font-bold mt-4">Skills</h3>
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              {selectedCard?.skills?.map(skill => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full text-sm text-white"
                  style={{
                    backgroundColor:
                      skill === 'JavaScript' ? '#facc15' :
                      skill === 'CSS' ? '#3b82f6' :
                      skill === 'React' ? '#38bdf8' : '#f97316'
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>

            <h3 className="text-lg font-bold mt-4">Contribution</h3>
            <p className="text-gray-700 mt-2">{selectedCard?.contribution}</p>

            <h3 className="text-lg font-bold mt-4">I am looking for</h3>
            <p className="text-gray-700 mt-2">{selectedCard?.lookingFor}</p>

            <h3 className="text-lg font-bold mt-4">Connect</h3>
            <div className="flex justify-center gap-8 mt-3 text-blue-500">
              <a href={`mailto:${selectedCard?.email}`}>{selectedCard?.email}</a>
              <a href="#" target="_blank" rel="noopener noreferrer">{selectedCard?.github}</a>
              <a href="#" target="_blank" rel="noopener noreferrer">{selectedCard?.linkedin}</a>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
