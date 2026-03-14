export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-bold tracking-tight text-white">
            Mack Land Management
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            <a href="#services" className="text-sm text-white/80 hover:text-white">
              Services
            </a>
            <a href="#gallery" className="text-sm text-white/80 hover:text-white">
              Gallery
            </a>
            <a href="#why-us" className="text-sm text-white/80 hover:text-white">
              Why Us
            </a>
            <a href="#contact" className="text-sm text-white/80 hover:text-white">
              Contact
            </a>
            <a
              href="tel:8563642392"
              className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black transition hover:opacity-90"
            >
              Call Now
            </a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[linear-gradient(to_bottom,rgba(0,0,0,0.72),rgba(0,0,0,0.62)),url('https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/80">
            Mack Land Management
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-bold tracking-tight text-white md:text-6xl">
            Land clearing, brush cutting, and stump grinding done right.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-white/85">
            Reliable land management services for homeowners, builders, farms,
            and commercial properties. Clean work, strong communication, and
            results you can see.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#services"
              className="rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:opacity-90"
            >
              Explore Services
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-white px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-12 md:grid-cols-3">
          <div>
            <p className="text-3xl font-bold">Fast</p>
            <p className="mt-2 text-neutral-600">
              Quick response times and straightforward communication.
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold">Professional</p>
            <p className="mt-2 text-neutral-600">
              Dependable work with attention to detail from start to finish.
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold">Local</p>
            <p className="mt-2 text-neutral-600">
              Proudly serving property owners who need real land work done.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-neutral-500">
            Services
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Work built around your property’s needs
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Whether you need overgrowth removed, stumps ground out, or land
            cleaned up for the next phase of a project, we help make your
            property more usable.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="text-3xl">🌲</div>
            <h3 className="mt-4 text-xl font-semibold">Land Clearing</h3>
            <p className="mt-3 text-neutral-600">
              Remove unwanted growth, open up usable space, and prepare land for
              construction, access, or cleanup.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="text-3xl">🪵</div>
            <h3 className="mt-4 text-xl font-semibold">Brush Cutting</h3>
            <p className="mt-3 text-neutral-600">
              Cut back heavy brush and reclaim property lines, trails, lot
              edges, and overgrown areas.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="text-3xl">⚙️</div>
            <h3 className="mt-4 text-xl font-semibold">Stump Grinding</h3>
            <p className="mt-3 text-neutral-600">
              Remove old stumps safely and efficiently so your property looks
              cleaner and is easier to use.
            </p>
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-neutral-100">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-neutral-500">
              Gallery
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              The kind of work we’re built for
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Add your own job photos here later. For now, this section gives
              your homepage a stronger contractor-style layout.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="overflow-hidden rounded-2xl bg-neutral-300">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80"
                alt="Heavy equipment on a work site"
                className="h-72 w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-2xl bg-neutral-300">
              <img
                src="https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1000&q=80"
                alt="Open land and tree line"
                className="h-72 w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded-2xl bg-neutral-300">
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80"
                alt="Outdoor property work area"
                className="h-72 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="why-us" className="bg-neutral-900 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
              Why Choose Us
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Clear communication. Clean results. No nonsense.
            </h2>
            <p className="mt-5 max-w-xl text-white/80">
              We focus on dependable service, strong work ethic, and finished
              results that improve the value and usability of your property.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-semibold">Dependable Scheduling</h3>
              <p className="mt-2 text-white/75">
                We respect your time and keep your project moving.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-semibold">Property-Focused Work</h3>
              <p className="mt-2 text-white/75">
                Every job is approached with care for the land and the final
                appearance.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-lg font-semibold">Straightforward Quotes</h3>
              <p className="mt-2 text-white/75">
                Tell us what you need and we’ll help you get to the next step.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl bg-neutral-100 p-8 md:p-12">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-neutral-500">
                Ready to Start?
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Let’s talk about your property.
              </h2>
              <p className="mt-4 max-w-xl text-neutral-600">
                From cleanup and reclaiming space to removing stumps and brush,
                we’re ready to help you move your project forward.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 md:justify-end">
              <a
                href="#contact"
                className="rounded-xl bg-black px-6 py-3 font-semibold text-white transition hover:opacity-90"
              >
                Request a Quote
              </a>
              <a
                href="tel:8563642392"
                className="rounded-xl border border-black px-6 py-3 font-semibold text-black transition hover:bg-white"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 pb-24">
  <div className="grid gap-10 md:grid-cols-2">
    
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-neutral-500">
        Request a Quote
      </p>

      <h2 className="mt-3 text-3xl font-bold">
        Tell us about your project
      </h2>

      <p className="mt-4 text-neutral-600 max-w-xl">
        Fill out the form and we’ll reach out to discuss your property,
        timeline, and pricing.
      </p>

      <div className="mt-6 space-y-2 text-neutral-700">
        <p><strong>Phone:</strong> (PUT YOUR REAL NUMBER)</p>
        <p><strong>Email:</strong> (PUT YOUR REAL EMAIL)</p>
        <p><strong>Service Area:</strong> New Jersey</p>
      </div>
    </div>

    <form className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm space-y-4">
      
      <input
        type="text"
        placeholder="Full Name"
        className="w-full rounded-lg border px-4 py-3"
        required
      />

      <input
        type="tel"
        placeholder="Phone Number"
        className="w-full rounded-lg border px-4 py-3"
        required
      />

      <input
        type="email"
        placeholder="Email Address"
        className="w-full rounded-lg border px-4 py-3"
      />

      <input
        type="text"
        placeholder="Property Location / Town"
        className="w-full rounded-lg border px-4 py-3"
      />

      <select className="w-full rounded-lg border px-4 py-3">
        <option>Select Service</option>
        <option>Land Clearing</option>
        <option>Stump Grinding</option>
        <option>Brush Cutting</option>
        <option>Other</option>
      </select>

      <textarea
        placeholder="Tell us about the job (acreage, number of stumps, access, timeline, etc)"
        rows={4}
        className="w-full rounded-lg border px-4 py-3"
      />

      <button
        type="submit"
        className="w-full rounded-xl bg-black py-3 font-semibold text-white hover:opacity-90"
      >
        Request Quote
      </button>

    </form>

  </div>
</section>

      <a
        href="tel:8563642392"
        className="fixed bottom-5 right-5 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:opacity-90"
      >
        Call Now
      </a>
    </main>
  );
}