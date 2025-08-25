
export default function Checkout() {
  return (
    <div className="p-6 w-full">
      <div className="bg-white border border-gray-100 shadow-sm p-6 w-full rounded-2xl">
        
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-3 items-center">
            <div className="text-indigo-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                <path fill="currentColor" d="M1 7h18v2H1zm4 4h14v2H5z"/>
              </svg>
            </div>
            <div className="text-gray-700 font-semibold text-lg">
              Order Summary
            </div>
          </div>
          <div className="text-gray-400 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="24" viewBox="0 0 12 24">
              <defs>
                <path id="SVG1pzpbdYY" fill="currentColor" d="m7.588 12.43l-1.061 1.06L.748 7.713a.996.996 0 0 1 0-1.413L6.527.52l1.06 1.06l-5.424 5.425z"/>
              </defs>
              <use fillRule="evenodd" href="#SVG1pzpbdYY" transform="rotate(-180 5.02 9.505)"/>
            </svg>
          </div>
        </div>

        <div className="space-y-3 text-sm text-gray-600">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>$29.00</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Fee</span>
            <span>$2.50</span>
          </div>
          <div className="flex justify-between font-semibold text-gray-800">
            <span>Total</span>
            <span>$31.50</span>
          </div>
        </div>

       
        <div className="mt-6">
          <button className="w-full px-4 py-3 rounded-xl bg-indigo-400 text-white font-semibold shadow-md hover:bg-indigo-500 hover:shadow-lg transition duration-300 ease-in-out">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
