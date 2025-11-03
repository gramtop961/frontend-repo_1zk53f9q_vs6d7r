export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-white text-xl font-semibold">Let’s switch things up</h3>
            <p className="mt-2 text-white/70">
              Tell us about your goals. We’ll reply within 1–2 business days with next steps.
            </p>
          </div>
          <form className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <input
              type="text"
              name="company"
              placeholder="Company"
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <textarea
              name="message"
              placeholder="What are you looking to create?"
              rows={4}
              className="sm:col-span-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <div className="sm:col-span-3 flex items-center justify-between">
              <p className="text-xs text-white/60">By submitting, you agree to our privacy policy.</p>
              <button type="button" className="rounded-full bg-white text-black px-5 py-3 text-sm font-semibold">
                Send message
              </button>
            </div>
          </form>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Switch Media. All rights reserved.</p>
          <nav className="flex items-center gap-6 text-sm">
            <a href="#about" className="text-white/60 hover:text-white">About</a>
            <a href="#solutions" className="text-white/60 hover:text-white">Solutions</a>
            <a href="#work" className="text-white/60 hover:text-white">Work</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
