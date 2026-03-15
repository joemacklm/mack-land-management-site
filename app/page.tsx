export default function Home() {
  const email = "joe.mack@macklandmgmt.com";
  const phoneDisplay = "(856)-364-2392";
  const phoneLink = "8563642392";

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
    "Quote Request"
  )}&body=${encodeURIComponent(
    "Name:\nPhone:\nEmail:\nProperty Location:\nService Needed:\nProject Details:"
  )}`;

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-bold tracking-tight text-white">
            Mack Land Works
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            <a href="#services" className="text-sm text-white/80 hover:text-white">
              Services
            </a>
            <a href="#about" className="text-sm text-white/80 hover:text-white">
              Why Us
            </a>
            <a href="#contact" className="text-sm text-white/80 hover:text-white">
              Contact
            </a>
            <a
              href={`tel:${phoneLink}`}
              className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black transition hover:opacity-90"
            >
              Call Now
            </a>
          </nav>
        </div>
      </header>

      <section
        className="relative overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.72), rgba(0,0,0,0.62)), url('https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/80">
            Mack Land Works
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
              href={mailtoLink}
              className="rounded-xl border border-white px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Email for a Quote
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

      <section id="about" className="bg-neutral-900 text-white">
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
                Reach out by phone or email and we’ll help you get to the next
                step.
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
                href={mailtoLink}
                className="rounded-xl bg-black px-6 py-3 font-semibold text-white transition hover:opacity-90"
              >
                Email for a Quote
              </a>
              <a
                href={`tel:${phoneLink}`}
                className="rounded-xl border border-black px-6 py-3 font-semibold text-black transition hover:bg-white"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-neutral-500">
              Request a Quote
            </p>
            <h2 className="mt-3 text-3xl font-bold">Get in Touch</h2>
            <p className="mt-4 max-w-xl text-neutral-600">
              The quickest way to get started is to call or email with your job
              details, property location, and timeline.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="space-y-4 text-neutral-700">
              <p>
                <span className="font-semibold text-neutral-900">Email:</span>{" "}
                {email}
              </p>
              <p>
                <span className="font-semibold text-neutral-900">Phone:</span>{" "}
                {phoneDisplay}
              </p>
              <p>
                <span className="font-semibold text-neutral-900">
                  Service Area:
                </span>{" "}
                New Jersey
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={mailtoLink}
                className="rounded-xl bg-black px-6 py-3 font-semibold text-white transition hover:opacity-90"
              >
                Email for a Quote
              </a>

              <a
                href={`tel:${phoneLink}`}
                className="rounded-xl border border-black px-6 py-3 font-semibold text-black transition hover:bg-neutral-100"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <a
        href={`tel:${phoneLink}`}
        className="fixed bottom-5 right-5 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:opacity-90"
      >
        Call Now
      </a>
    </main>
  );
}