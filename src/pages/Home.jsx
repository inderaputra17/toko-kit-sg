export default function Home() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 mb-16 bg-[#E0D0C3] p-10 rounded-xl">
        <div>
          <h1 className="text-4xl font-bold mb-4">Your all in one solution</h1>
          <p className="text-lg">Toko Kit SG</p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1593642532973-d31b6557fa68"
          alt="Business"
          className="rounded-lg shadow-lg"
        />
      </section>

      {/* Who We Are */}
      <section className="text-center mb-16">
        <h2 className="text-2xl font-bold mb-3">Who We Are</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          We are your digital launchpad—built for Singapore’s home-based
          businesses to shine. From showcasing your products to streamlining
          admin, marketing, and accounting, we help you grow with clarity,
          confidence, and connection.
        </p>
      </section>

      {/* What We Do */}
      <section className="bg-[#E0D0C3] p-10 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-6">What We Do</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white shadow rounded-lg">
            <h3 className="font-bold text-lg mb-2">Business Marketing</h3>
            <p className="text-sm text-gray-600">
              Amplifying your message with purpose and engagement.
            </p>
          </div>
          <div className="p-6 bg-white shadow rounded-lg">
            <h3 className="font-bold text-lg mb-2">Administration</h3>
            <p className="text-sm text-gray-600">
              Supporting every detail so your business runs smoothly.
            </p>
          </div>
          <div className="p-6 bg-white shadow rounded-lg">
            <h3 className="font-bold text-lg mb-2">Internal Accounting</h3>
            <p className="text-sm text-gray-600">
              Structuring the financial clarity your business needs to grow.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
