import Image from "next/image";

const clothingItems = {
  tops: [
    { id: "top1", src: "/tops/top1.webp", alt: "Striped Shirt" },
    { id: "top2", src: "/tops/top2.jpg", alt: "White T-shirt" },
    { id: "top3", src: "/tops/top3.jpg", alt: "Smiley Pattern T-shirt" },
    { id: "top4", src: "/tops/top4.png", alt: "Blue Pattern T-shirt" },
    { id: "top5", src: "/tops/top5.png", alt: "White Sleeveless Top" },
  ],
  bottoms: [
    { id: "bottom1", src: "/bottoms/bottom1.webp", alt: "Sample Bottom 1" },
    { id: "bottom2", src: "/bottoms/bottom2.webp", alt: "Sample Bottom 2" },
    { id: "bottom3", src: "/bottoms/bottom3.jpg", alt: "Sample Bottom 3" },
    { id: "bottom4", src: "/bottoms/bottom4.png", alt: "Sample Bottom 4" },
    { id: "bottom5", src: "/bottoms/bottom5.png", alt: "Sample Bottom 5" },
  ],
  shoes: [
    { id: "shoe1", src: "/shoes/shoes1.webp", alt: "Sample Shoe 1" },
    { id: "shoe2", src: "/shoes/shoes2.webp", alt: "Sample Shoe 2" },
    { id: "shoe3", src: "/shoes/shoes3.jpg", alt: "Sample Shoe 3" },
    { id: "shoe4", src: "/shoes/shoes4.jpg", alt: "Sample Shoe 4" },
    { id: "shoe5", src: "/shoes/shoes5.png", alt: "Sample Shoe 5" },
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <header className="border-b bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-16">
            <h1 className="text-3xl font-bold text-gray-800">Outfit Builder</h1>
          </div>
        </div>
      </header>

      {/* Using a larger padding-bottom on main to prevent content being hidden by the new, taller mobile footer */}
      <main className="flex-1 pb-48 md:pb-0">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row gap-8">
            <aside className="w-full md:w-80 lg:w-96">
              <div className="bg-white p-4 rounded-lg shadow-sm border space-y-8">
                {/* Tops Section */}
                <div>
                  <h2 className="text-lg font-semibold text-gray-700 mb-4">
                    Tops
                  </h2>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 gap-4">
                    {clothingItems.tops.map((item) => (
                      <div
                        key={item.id}
                        className="border rounded-lg p-2 hover:shadow-lg transition-shadow cursor-pointer md:cursor-grab"
                      >
                        <Image
                          src={item.src}
                          alt={item.alt}
                          width={100}
                          height={100}
                          className="object-contain w-full h-full"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                {/* Bottoms Section */}
                <div>
                  <h2 className="text-lg font-semibold text-gray-700 mb-4">
                    Bottoms
                  </h2>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 gap-4">
                    {clothingItems.bottoms.map((item) => (
                      <div
                        key={item.id}
                        className="border rounded-lg p-2 hover:shadow-lg transition-shadow cursor-pointer md:cursor-grab"
                      >
                        <Image
                          src={item.src}
                          alt={item.alt}
                          width={100}
                          height={100}
                          className="object-contain w-full h-full"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                {/* Shoes Section */}
                <div>
                  <h2 className="text-lg font-semibold text-gray-700 mb-4">
                    Shoes
                  </h2>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 gap-4">
                    {clothingItems.shoes.map((item) => (
                      <div
                        key={item.id}
                        className="border rounded-lg p-2 hover:shadow-lg transition-shadow cursor-pointer md:cursor-grab"
                      >
                        <Image
                          src={item.src}
                          alt={item.alt}
                          width={100}
                          height={100}
                          className="object-contain w-full h-full"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Right Column: Canvas and Actions */}
            <div className="flex-1 flex flex-col gap-8">
              {/* Main Canvas */}
              <section className="flex-1">
                <div className="w-full h-full min-h-[60vh] md:min-h-full bg-white rounded-lg shadow-sm border flex items-center justify-center p-4">
                  <div className="text-center text-gray-400">
                    <p className="text-lg font-medium">Full Outfit Preview</p>
                  </div>
                </div>
              </section>
              {/* Desktop-Only Action Buttons */}
              <footer className="hidden md:block bg-white rounded-lg shadow-sm border p-4">
                <div className="flex items-center justify-between gap-4">
                  <button className="border border-gray-300 rounded-md px-6 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
                    Reset
                  </button>
                  <div className="flex items-center gap-4">
                    <button className="border border-gray-300 rounded-md px-6 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
                      Save Outfit
                    </button>
                    <button className="bg-black text-white rounded-md px-6 py-2 text-sm font-medium hover:bg-gray-800 flex items-center justify-center gap-2">
                      <span>🛒</span> Add to Cart
                    </button>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </main>

      {/* STICKY FOOTER / MINI-CANVAS & ACTIONS FOR MOBILE ONLY */}
      <div className="sticky bottom-0 left-0 right-0 bg-white border-t p-2 space-y-2 md:hidden">
        {/* Mini-Canvas Area */}
        <div className="grid grid-cols-3 gap-2 h-20">
          {/* Top Slot */}
          <div className="border rounded-md flex items-center justify-center bg-gray-50">
            <p className="text-xs text-gray-400">Top</p>
          </div>
          {/* Bottom Slot */}
          <div className="border rounded-md flex items-center justify-center bg-gray-50">
            <p className="text-xs text-gray-400">Bottom</p>
          </div>
          {/* Shoes Slot */}
          <div className="border rounded-md flex items-center justify-center bg-gray-50">
            <p className="text-xs text-gray-400">Shoes</p>
          </div>
        </div>
        {/* Mobile Action Buttons Area */}
        <div className="flex items-center gap-2">
          <button className="w-full border border-gray-300 rounded-md p-2 text-sm text-center hover:bg-gray-100">
            Reset
          </button>
          <button className="w-full border border-gray-300 rounded-md p-2 text-sm text-center hover:bg-gray-100">
            Save Outfit
          </button>
        </div>
        <button className="w-full bg-black text-white rounded-md p-3 text-sm font-semibold hover:bg-gray-800 flex items-center justify-center gap-2">
          <span>🛒</span> Add to Cart
        </button>
      </div>
    </div>
  );
}
