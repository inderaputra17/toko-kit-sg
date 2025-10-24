export default function About() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-16">

      {/* Section 1 — About Us */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p className="text-gray-700 leading-relaxed">
            We’re a digital platform built to elevate Singapore’s home-based businesses.
            From product showcases to streamlined admin, marketing,
            and accounting, we simplify the growth path. Our tools
            are designed to empower entrepreneurs with clarity,
            confidence, and connection—so every homegrown idea can shine.
          </p>
        </div>
        <img
          className="rounded-xl shadow"
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0"
          alt="Teamwork"
        />
      </section>

      {/* Section 2 — Mission */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <img
          className="rounded-xl shadow"
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0"
          alt="Mission"
        />
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            We’re here to make growth simple, meaningful,
            and accessible for Singapore’s home-based
            businesses. Our mission is rooted in clarity,
            confidence, and community—because when small
            businesses thrive, so do the people behind them.
          </p>
        </div>
      </section>

      {/* Section 3 — Story */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-700 leading-relaxed">
            We started with a simple idea: empower local entrepreneurs
            to thrive in a digital-first world. As more businesses
            turned homes into headquarters, we built a launchpad to
            simplify operations and amplify visibility. Today, we help
            a growing community create, connect, and scale.
          </p>
        </div>
        <img
          className="rounded-xl shadow"
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0"
          alt="Story"
        />
      </section>

    </div>
  );
}
