import Billings from "@/components/Billing";

export default function Accounts() {
  return (
    <div>
      <div className="min-h-screen max-w-screen bg-white">
        <div className="flex-1 px-8 py-6">
          <h1 className="text-2xl font-semibold">Accounts</h1>
          <p className="text-gray-500 mb-6">  Manage your accounts, track balances, and review transactions all in one place.</p>

          <div className="flex flex-wrap justify-between pb-6 border-b gap-2 border-gray-200">
            <div className="flex flex-wrap gap-2">
              <div className="bg-white p-2 px-4 rounded-sm border border-gray-200 cursor-pointer text-gray-500 hover:bg-gray-100">
                Cancel
              </div>
              <div className="bg-indigo-400 p-2 px-4 rounded-sm border border-gray-200 cursor-pointer text-white hover:bg-indigo-500">
                Save
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition">
              <p className="text-sm text-gray-500">Total Balance</p>
              <h2 className="text-xl font-bold mt-2">$12,450</h2>
              <p className="text-xs text-green-600 mt-1">+12% from last month</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition">
              <p className="text-sm text-gray-500">Active Accounts</p>
              <h2 className="text-xl font-bold mt-2">3</h2>
              <p className="text-xs text-gray-500 mt-1">Visa, Mastercard</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition">
              <p className="text-sm text-gray-500">Upcoming Payments</p>
              <h2 className="text-xl font-bold mt-2">$320</h2>
              <p className="text-xs text-red-600 mt-1">Due in next 5 days</p>
            </div>
          </div>

          <div className="mt-8 bg-gray-50 rounded-lg border border-gray-200 p-4">
            <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
            <ul className="divide-y divide-gray-200 text-sm">
              <li className="flex justify-between py-3">
                <span className="text-gray-700">Salary Payment</span>
                <span className="text-green-600 font-semibold">+$2000</span>
              </li>
              <li className="flex justify-between py-3">
                <span className="text-gray-700">Netflix Subscription</span>
                <span className="text-red-600 font-semibold">-$12</span>
              </li>
              <li className="flex justify-between py-3">
                <span className="text-gray-700">Groceries</span>
                <span className="text-red-600 font-semibold">-$150</span>
              </li>
            </ul>
          </div>

          <div className="mt-8">
            <Billings />
          </div>
        </div>
      </div>
    </div>
  );
}