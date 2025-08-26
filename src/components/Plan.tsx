import { CreditCard, Calendar, Home, Layers, Users, HardDrive, Star, TrendingUp, Building2, CheckCircle } from "lucide-react";

export default function Plan() {
  return (
    <div className="space-y-10 pt-4">
      <div>
        <h2 className="text-sm font-semibold mb-1 flex items-center gap-2">
          <Star size={14} className="text-gray-500" /> Current Plan
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          You are currently subscribed to the <strong>Pro Plan</strong>.
        </p>
        <div className="border border-gray-200 rounded-lg p-6 space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium flex items-center gap-1">
                <TrendingUp size={14} className="text-gray-500" /> Pro Plan
              </p>
              <p className="text-xs text-gray-500">
                $49/month includes advanced analytics and priority support
              </p>
            </div>
            <button className="px-4 py-2 text-sm bg-indigo-400 text-white rounded-md">
              Upgrade
            </button>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-sm font-semibold mb-1 flex items-center gap-2">
          <CreditCard size={14} className="text-gray-500" /> Billing Information
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Your saved payment method and billing details.
        </p>
        <div className="border border-gray-200 rounded-lg p-6 space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm flex items-center gap-1">
              <CreditCard size={14} className="text-gray-500" /> Payment Method
            </span>
            <span className="text-gray-500 text-xs">Visa •••• 1234</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm flex items-center gap-1">
              <Calendar size={14} className="text-gray-500" /> Next Billing Date
            </span>
            <span className="text-gray-500 text-xs">Sep 15, 2025</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm flex items-center gap-1">
              <Home size={14} className="text-gray-500" /> Billing Address
            </span>
            <span className="text-gray-500 text-xs">456 Clifton Street, Lahore</span>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-sm font-semibold mb-1 flex items-center gap-2">
          <Layers size={14} className="text-gray-500" /> Usage Summary
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Overview of your current plan usage and limits.
        </p>
        <div className="border border-gray-200 rounded-lg p-6 space-y-4">
          <div className="flex justify-between text-sm">
            <span className="flex items-center gap-1">
              <Layers size={14} className="text-gray-500" /> Projects
            </span>
            <span className="text-gray-500 text-xs">12 of 20 used</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="flex items-center gap-1">
              <Users size={14} className="text-gray-500" /> Team Members
            </span>
            <span className="text-gray-500 text-xs">5 of 10 used</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="flex items-center gap-1">
              <HardDrive size={14} className="text-gray-500" /> Storage
            </span>
            <span className="text-gray-500 text-xs">8 GB of 15 GB used</span>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-sm font-semibold mb-1 flex items-center gap-2">
          <Building2 size={14} className="text-gray-500" /> Available Plans
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Explore different subscription plans to fit your needs.
        </p>
        <div className="border border-gray-200 rounded-lg p-6 space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium flex items-center gap-1">
                <CheckCircle size={14} className="text-gray-500" /> Basic Plan
              </p>
              <p className="text-xs text-gray-500">$19/month for individuals</p>
            </div>
            <button className="px-4 py-2 text-sm border border-gray-300 rounded-md">
              Select
            </button>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium flex items-center gap-1">
                <TrendingUp size={14} className="text-gray-500" /> Pro Plan
              </p>
              <p className="text-xs text-gray-500">$49/month for growing teams</p>
            </div>
            <button className="px-4 py-2 text-sm bg-indigo-400 text-white rounded-md">
              Current
            </button>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium flex items-center gap-1">
                <Building2 size={14} className="text-gray-500" /> Enterprise Plan
              </p>
              <p className="text-xs text-gray-500">Custom pricing advanced features and support</p>
            </div>
            <button className="px-4 py-2 text-sm border border-gray-300 rounded-md">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
