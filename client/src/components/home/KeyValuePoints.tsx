export default function KeyValuePoints() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
      {/* Fast Delivery */}
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <div className="text-4xl text-red-600 mb-4">
          <i className="fas fa-bolt"></i>
        </div>
        <h3 className="text-xl font-montserrat font-semibold mb-2">
          Lightning Fast Delivery
        </h3>
        <p>From 3 to 72 hours turnaround</p>
      </div>

      {/* Success Rate */}
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <div className="text-4xl text-red-600 mb-4">
          <i className="fas fa-chart-line"></i>
        </div>
        <h3 className="text-xl font-montserrat font-semibold mb-2">
          Proven Success
        </h3>
        <p>98% interview success rate</p>
      </div>

      {/* Global Reach */}
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <div className="text-4xl text-red-600 mb-4">
          <i className="fas fa-globe-africa"></i>
        </div>
        <h3 className="text-xl font-montserrat font-semibold mb-2">
          Global Reach
        </h3>
        <p>
          Trusted in Kenya, USA, UK, Canada, Qatar, UAE, Ghana, Nigeria & Egypt
        </p>
      </div>
    </div>
  );
}
