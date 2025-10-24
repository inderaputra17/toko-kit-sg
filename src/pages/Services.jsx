export default function Services() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Page Title */}
      <section className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">Services</h1>
        <p className="text-gray-700">
          Compare our Admin + Service Plans to find the right fit for your business.
        </p>
      </section>

      {/* Pricing Table */}
      <section className="bg-[#E0D0C3] p-8 rounded-xl shadow">
        <table className="w-full border-collapse text-center">
          <thead className="font-bold bg-[#D1C0B2]">
            <tr>
              <th className="p-3 border">Feature</th>
              <th className="p-3 border">Starter $30/month</th>
              <th className="p-3 border">Pro $60/month</th>
              <th className="p-3 border">Premium $80/month</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border font-semibold">Social Media Setup</td>
              <td className="p-3 border">✅</td>
              <td className="p-3 border">✅</td>
              <td className="p-3 border">✅</td>
            </tr>
            <tr>
              <td className="p-3 border font-semibold">Courier Coordination</td>
              <td className="p-3 border">❌</td>
              <td className="p-3 border">✅</td>
              <td className="p-3 border">✅</td>
            </tr>
            <tr>
              <td className="p-3 border font-semibold">Admin Support</td>
              <td className="p-3 border">❌</td>
              <td className="p-3 border">❌</td>
              <td className="p-3 border">✅</td>
            </tr>
            <tr>
              <td className="p-3 border font-semibold">Monthly Reporting & Insights</td>
              <td className="p-3 border">❌</td>
              <td className="p-3 border">✅</td>
              <td className="p-3 border">✅</td>
            </tr>
          </tbody>
        </table>

        {/* CTA Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 text-center">
          <button className="bg-black text-white py-2 rounded-lg">Start with Starter</button>
          <button className="bg-black text-white py-2 rounded-lg">Try Pro Free for 2 Months</button>
          <button className="bg-black text-white py-2 rounded-lg">Upgrade to Premium</button>
        </div>
      </section>
    </div>
  );
}
