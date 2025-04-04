"use client"

export default function Home() {
  return (
    <main>
      <section id="home" className="min-h-screen bg-white">
        <div className="h-full pt-[60px]">
          <h1>Carousel Section</h1>
        </div>
      </section>

      <section id="tribute" className="min-h-screen bg-gray-100">
        <div className="h-full">
          <h1>Tribute Section</h1>
        </div>
      </section>

      <section id="about" className="min-h-screen bg-white">
        <div className="h-full">
          <h1>About Section</h1>
        </div>
      </section>

      <section id="footer" className="bg-gray-200 py-20">
        <div className="h-full">
          <h1>Footer Section</h1>
        </div>
      </section>

    </main>
  );
}
