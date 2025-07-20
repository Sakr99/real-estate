const Cards = () => {
  return (
    <section className="px-4 py-10 max-w-screen-xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <a
            key={index}
            href="#"
            className="block rounded-lg p-4 shadow-md shadow-indigo-100 border border-gray-100 hover:shadow-lg transition-all bg-white"
          >
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&w=1770&q=80"
              className="h-56 w-full rounded-md object-cover"
            />

            <div className="mt-4 space-y-2">
              <dl>
                <div>
                  <dt className="sr-only">Price</dt>
                  <dd className="text-sm text-gray-500">$240,000</dd>
                </div>
                <div>
                  <dt className="sr-only">Address</dt>
                  <dd className="font-medium text-base">
                    123 Wallaby Avenue, Park Road
                  </dd>
                </div>
              </dl>

              <div className="mt-6 flex flex-wrap items-start gap-6 text-xs">
                {/* Parking */}
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-indigo-700"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                    />
                  </svg>
                  <div>
                    <p className="text-gray-500">Parking</p>
                    <p className="font-medium">2 spaces</p>
                  </div>
                </div>

                {/* Bathroom */}
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-indigo-700"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                  <div>
                    <p className="text-gray-500">Bathroom</p>
                    <p className="font-medium">2 rooms</p>
                  </div>
                </div>

                {/* Bedroom */}
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-indigo-700"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                  <div>
                    <p className="text-gray-500">Bedroom</p>
                    <p className="font-medium">4 rooms</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Cards;
