import { Lock, KeyRound, ShieldCheck, Mail, Phone, Activity, Bell, Smartphone } from "lucide-react";

export default function Password() {
  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-sm font-semibold mb-1 flex items-center gap-2 pt-4">
          <Lock size={14} className="text-gray-500" /> Change Password
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Update your password regularly to keep your account secure.
        </p>

        <div className="border border-gray-200 rounded-lg p-6 space-y-6">
          <div>
            <label className="text-sm text-gray-600 flex items-center gap-1">
              <KeyRound size={14} className="text-gray-500" /> Current Password
            </label>
            <input
              type="password"
              className="border border-gray-200 rounded-md px-3 py-2 w-full text-sm"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600 flex items-center gap-1">
              <KeyRound size={14} className="text-gray-500" /> New Password
            </label>
            <input
              type="password"
              className="border border-gray-200 rounded-md px-3 py-2 w-full text-sm"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600 flex items-center gap-1">
              <KeyRound size={14} className="text-gray-500" /> Confirm New Password
            </label>
            <input
              type="password"
              className="border border-gray-200 rounded-md px-3 py-2 w-full text-sm"
            />
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-sm font-semibold mb-1 flex items-center gap-2">
          <ShieldCheck size={14} className="text-gray-500" /> Password Requirements
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Strong passwords help prevent unauthorized access.
        </p>

        <div className="border border-gray-200 rounded-lg p-6 space-y-2 text-sm text-gray-600">
          <p>• Minimum 8 characters long</p>
          <p>• At least one uppercase and one lowercase letter</p>
          <p>• Include at least one number</p>
          <p>• Use at least one special character (e.g., @, #, $)</p>
        </div>
      </div>

      <div>
        <h2 className="text-sm font-semibold mb-1 flex items-center gap-2">
          <Mail size={14} className="text-gray-500" /> Recovery Options
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          These options help you regain access to your account if you forget your password.
        </p>

        <div className="border border-gray-200 rounded-lg p-6 space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm flex items-center gap-1">
              <Mail size={14} className="text-gray-500" /> Recovery Email
            </span>
            <span className="text-gray-500 text-xs">haiderraza7516@gmail.com</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm flex items-center gap-1">
              <Phone size={14} className="text-gray-500" /> Recovery Phone
            </span>
            <span className="text-gray-500 text-xs">+92 336 7407516</span>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-sm font-semibold mb-1 flex items-center gap-2">
          <Activity size={14} className="text-gray-500" /> Recent Security Activity
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Track recent password and login activities.
        </p>

        <div className="border border-gray-200 rounded-lg p-6 space-y-4">
          <div className="flex justify-between text-sm">
            <span>Password changed</span>
            <span className="text-gray-500 text-xs">Jul 30, 2025 - 02:11 PM</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Login from new device (Lahore, Pakistan)</span>
            <span className="text-gray-500 text-xs">Aug 20, 2025 - 11:32 AM</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Two-Factor Authentication enabled</span>
            <span className="text-gray-500 text-xs">Aug 10, 2025 - 04:00 PM</span>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-sm font-semibold mb-1 flex items-center gap-2">
          <ShieldCheck size={14} className="text-gray-500" /> Extra Security
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Add an additional layer of protection to your account.
        </p>

        <div className="border border-gray-200 rounded-lg p-6 space-y-4 text-sm">
          <div className="flex justify-between items-center">
            <span className="flex items-center gap-1">
              <ShieldCheck size={14} className="text-gray-500" /> Two-Factor Authentication
            </span>
            <span className="text-gray-500 text-xs">Enabled</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="flex items-center gap-1">
              <Bell size={14} className="text-gray-500" /> Login Alerts
            </span>
            <span className="text-gray-500 text-xs">On</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="flex items-center gap-1">
              <Smartphone size={14} className="text-gray-500" /> Device Verification
            </span>
            <span className="text-gray-500 text-xs">5 devices linked</span>
          </div>
        </div>
      </div>
    </div>
  );
}
