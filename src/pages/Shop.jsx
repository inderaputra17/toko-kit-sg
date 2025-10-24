export default function Shop() {
  const sampleProducts = [
    { id: 1, name: "Sample Product 1", price: "$12" },
    { id: 2, name: "Sample Product 2", price: "$18" },
    { id: 3, name: "Sample Product 3", price: "$25" },
    { id: 4, name: "Sample Product 4", price: "$32" },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Shop Local Products & Services</h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sampleProducts.map((product) => (
          <div key={product.id} className="bg-white p-6 rounded-xl shadow">
            <div className="h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-500 text-sm">Product Image</span>
            </div>
            <h2 className="font-semibold text-lg mb-1">{product.name}</h2>
            <p className="text-gray-700">{product.price}</p>

            <button className="mt-3 w-full bg-black text-white py-2 rounded-lg hover:opacity-90 transition">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
