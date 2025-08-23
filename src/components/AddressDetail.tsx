export default function AddressDetail() {
  return (
    <div className="p-6 w-full">
      <div className="bg-white border border-gray-100 shadow-sm p-6 w-full rounded-2xl">
        
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-3 items-center">
            <div className="text-indigo-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7m0 9.5a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5"/>
              </svg>
            </div>
            <div className="text-gray-700 font-semibold text-lg">
              Delivery Address
            </div>
          </div>
          <div className="text-indigo-400 text-sm font-medium cursor-pointer hover:underline pl-2">
            Change
          </div>
        </div>

        <div className="space-y-2 text-sm text-gray-600">
          <div className="font-medium text-gray-800">John Doe</div>
          <div>123 Main Street, Apt 45</div>
          <div>New York, NY 10001</div>
          <div className="text-gray-500">+1 234 567 890</div>
        </div>
        <div className="mt-6">
          <button className="w-full px-4 py-2 rounded-xl border border-indigo-300 text-indigo-400 font-semibold hover:bg-indigo-50 transition duration-300 ease-in-out">
            + Add New Address
          </button>
        </div>
      </div>
    </div>
  );
}
