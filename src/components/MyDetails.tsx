import Image from "next/image";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Home,
  Building,
  Globe,
  Lock,
  ShieldCheck,
  Smartphone,
  Bell,
  Gift,
  Moon,
  KeyRound,
  Github,
  Facebook,
  Chrome,
  Settings,
} from "lucide-react";

export default function MyDetails() {
  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-sm font-semibold mb-1 flex items-center gap-2 pt-4">
          <User size={14} className="text-gray-500" /> Personal Information
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Your basic information and profile details.
        </p>

        <div className="border border-gray-200 rounded-lg p-6 space-y-6">
          <div className="flex items-center gap-4">
            <Image
              src="/johndoe.png"
              alt="Profile Picture"
              width={64}
              height={64}
              className="rounded-full border border-gray-200"
            />
            <div>
              <p className="text-sm font-medium">Haider Raza</p>
              <p className="text-xs text-gray-500">Joined April 2020</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm text-gray-600 flex items-center gap-1">
                <User size={14} className="text-gray-500" /> First Name
              </label>
              <input
                defaultValue="Haider"
                className="border border-gray-200 rounded-md px-3 py-2 w-full text-sm"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600 flex items-center gap-1">
                <User size={14} className="text-gray-500" /> Last Name
              </label>
              <input
                defaultValue="Raza"
                className="border border-gray-200 rounded-md px-3 py-2 w-full text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm text-gray-600 flex items-center gap-1">
                <Mail size={14} className="text-gray-500" /> Email
              </label>
              <input
                defaultValue="haiderraza7516@gmail.com"
                className="border border-gray-200 rounded-md px-3 py-2 w-full text-sm"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600 flex items-center gap-1">
                <Phone size={14} className="text-gray-500" /> Phone Number
              </label>
              <input
                defaultValue="+92 336 7407516"
                className="border border-gray-200 rounded-md px-3 py-2 w-full text-sm"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-sm font-semibold mb-1 flex items-center gap-2">
          <MapPin size={14} className="text-gray-500" /> Address Information
        </h2>
        <p className="text-sm text-gray-500 mb-4">Your current address details.</p>

        <div className="border border-gray-200 rounded-lg p-6 space-y-6">
          <div>
            <label className="text-sm text-gray-600 flex items-center gap-1">
              <Home size={14} className="text-gray-500" /> Street Address
            </label>
            <input
              defaultValue="456 Clifton Street"
              className="border border-gray-200 rounded-md px-3 py-2 w-full text-sm"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="text-sm text-gray-600 flex items-center gap-1">
                <Building size={14} className="text-gray-500" /> City
              </label>
              <input
                defaultValue="Lahore"
                className="border border-gray-200 rounded-md px-3 py-2 w-full text-sm"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600 flex items-center gap-1">
                <Building size={14} className="text-gray-500" /> State
              </label>
              <input
                defaultValue="Punjab"
                className="border border-gray-200 rounded-md px-3 py-2 w-full text-sm"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600 flex items-center gap-1">
                <KeyRound size={14} className="text-gray-500" /> Zip Code
              </label>
              <input
                defaultValue="54000"
                className="border border-gray-200 rounded-md px-3 py-2 w-full text-sm"
              />
            </div>
          </div>
          <div>
            <label className="text-sm text-gray-600 flex items-center gap-1">
              <Globe size={14} className="text-gray-500" /> Country
            </label>
            <input
              defaultValue="Pakistan"
              className="border border-gray-200 rounded-md px-3 py-2 w-full text-sm"
            />
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-sm font-semibold mb-1 flex items-center gap-2">
          <Settings size={14} className="text-gray-500" /> Account Preferences
        </h2>
        <p className="text-sm text-gray-500 mb-4">Customize your experience.</p>

        <div className="border border-gray-200 rounded-lg p-6 space-y-4">
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" defaultChecked />{" "}
            <Bell size={14} className="text-gray-500" /> Receive notifications about updates
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" defaultChecked />{" "}
            <Gift size={14} className="text-gray-500" /> Receive promotional offers
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" /> <Moon size={14} className="text-gray-500" /> Enable dark mode
          </label>
        </div>
      </div>

      <div>
        <h2 className="text-sm font-semibold mb-1 flex items-center gap-2">
          <Lock size={14} className="text-gray-500" /> Security Settings
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Manage your account security and login methods.
        </p>

        <div className="border border-gray-200 rounded-lg p-6 space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm flex items-center gap-1">
              <KeyRound size={14} className="text-gray-500" /> Password
            </span>
            <span className="text-gray-500 text-sm">********</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm flex items-center gap-1">
              <ShieldCheck size={14} className="text-gray-500" /> Two-Factor Authentication
            </span>
            <span className="text-gray-500 text-sm">Enabled</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm flex items-center gap-1">
              <Smartphone size={14} className="text-gray-500" /> Login Devices
            </span>
            <span className="text-gray-500 text-sm">5 devices</span>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-sm font-semibold mb-1 flex items-center gap-2">
          <Globe size={14} className="text-gray-500" /> Connected Accounts
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Manage your linked accounts for faster login.
        </p>

        <div className="border border-gray-200 rounded-lg p-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm flex items-center gap-1">
              <Chrome size={14} className="text-gray-500" /> Google
            </span>
            <span className="text-gray-500 text-xs">Connected</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm flex items-center gap-1">
              <Facebook size={14} className="text-gray-500" /> Facebook
            </span>
            <span className="text-gray-500 text-xs">Not Connected</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm flex items-center gap-1">
              <Github size={14} className="text-gray-500" /> GitHub
            </span>
            <span className="text-gray-500 text-xs">Connected</span>
          </div>
        </div>
      </div>
    </div>
  );
}
