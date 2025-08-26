import Image from "next/image";

export default function Billings() {
  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-sm font-semibold mb-1">Payment Method</h2>
        <p className="text-sm text-gray-500 mb-4">
          Update your billing details and address.
        </p>

        <div className="border border-gray-200 rounded-lg p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm text-gray-600">Name on your Card</label>
              <input
                value="Haider Raza"
                readOnly
                className="border border-gray-200 rounded-md px-3 py-2 w-full text-sm bg-gray-100 cursor-not-allowed"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-600">Expiry</label>
              <input
                value="02 / 2028"
                readOnly
                className="border border-gray-200 rounded-md px-3 py-2 w-full text-sm bg-gray-100 cursor-not-allowed"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2 relative">
              <label className="text-sm text-gray-600">Card Number</label>
              <div className="relative">
                <input
                  value="8269 9620 9292 2538"
                  readOnly
                  className="border border-gray-200 rounded-md pl-12 pr-3 py-2 w-full text-sm bg-gray-100 cursor-not-allowed"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2">
                  <Image
                    src="/creditcardlogo.png"
                    alt="Mastercard"
                    width={24}
                    height={24}
                  />
                </span>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-600">CVV</label>
              <input
                type="password"
                value="123"
                readOnly
                className="border border-gray-200 rounded-md px-3 py-2 w-full text-sm bg-gray-100 cursor-not-allowed"
              />
            </div>
          </div>

          <button className="flex items-center gap-2 text-sm border border-gray-300 rounded-md px-4 py-2 bg-gray-50 hover:bg-gray-100 transition cursor-pointer">
            <span className="text-lg">＋</span> Add another card
          </button>
        </div>
      </div>
      <div>
        <h2 className="text-sm font-semibold mb-1">Contact email</h2>
        <p className="text-sm text-gray-500 mb-3">
          Where should invoices be sent?
        </p>
        <div className="space-y-3">
          <label className="flex items-start gap-2 text-sm cursor-pointer">
            <input type="radio" name="email" defaultChecked className="mt-1" />
            <div>
              <span className="block">Send to the existing email</span>
              <span className="text-gray-500 text-xs">
                mayadahmed@ofspace.co
              </span>
            </div>
          </label>
          <label className="flex items-center gap-2 text-sm cursor-pointer">
            <input type="radio" name="email" className="mt-1" />
            <span>Add another email address</span>
          </label>
        </div>
      </div>
      <div>
        <h2 className="text-sm font-semibold mb-1">Billing History</h2>
        <p className="text-sm text-gray-500 mb-4">See the transaction you made</p>

        <div className="border border-gray-200 rounded-lg overflow-x-auto">
          <table className="w-full text-sm min-w-[600px]">
            <thead className="bg-gray-50 border-b text-gray-600">
              <tr>
                <th className="px-4 py-3 text-left w-10"></th>
                <th className="px-4 py-3 text-left">Invoice</th>
                <th className="px-4 py-3 text-left">Date</th>
                <th className="px-4 py-3 text-left">Amount</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Tracking & Address</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b last:border-0">
                <td className="px-4 py-3">
                  <input type="checkbox" />
                </td>
                <td className="px-4 py-3">Account Sale</td>
                <td className="px-4 py-3">Apr 14, 2004</td>
                <td className="px-4 py-3">$3,050</td>
                <td className="px-4 py-3">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
                    Pending
                  </span>
                </td>
                <td className="px-4 py-3">
                  <a href="#" className="text-blue-600 hover:underline block">
                    LM580405575CN
                  </a>
                  <p className="text-xs text-gray-500">
                    313 Main Road, Sunderland
                  </p>
                </td>
              </tr>

              <tr>
                <td className="px-4 py-3">
                  <input type="checkbox" />
                </td>
                <td className="px-4 py-3">Account Sale</td>
                <td className="px-4 py-3">Jun 24, 2008</td>
                <td className="px-4 py-3">$1,050</td>
                <td className="px-4 py-3">
                  <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs">
                    Cancelled
                  </span>
                </td>
                <td className="px-4 py-3">
                  <a href="#" className="text-blue-600 hover:underline block">
                    AZD8854035US
                  </a>
                  <p className="text-xs text-gray-500">
                    66 Grange Road, Peterborough
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
