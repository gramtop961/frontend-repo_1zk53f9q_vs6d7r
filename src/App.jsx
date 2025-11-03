import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="relative py-20 bg-gradient-to-b from-black to-zinc-950">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                <div>
                  <p className="text-sm uppercase tracking-widest text-white/60">About</p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight">Built for the modern media era</h2>
                </div>
                <div className="md:col-span-2 text-white/80 leading-relaxed">
                  Switch Media is a digital-first studio blending strategy, production, and technology.
                  We partner with brands and creators to deliver standout content, high-uptime streams,
                  and performant web experiences — from first spark to final delivery.
                </div>
              </div>
            </div>
          </div>
        </section>
        <Solutions />
      </main>
      <Footer />
    </div>
  );
}

export default App;
