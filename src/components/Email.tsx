import { Bell, Mail, Shield, KeyRound, AlertTriangle, Users, Newspaper, Calendar, Globe, Megaphone, MessageSquare, Building2, Wifi } from "lucide-react";

export default function Email() {
  return (
    <div className="space-y-10 pt-4">
      <div>
        <h2 className="text-sm font-semibold mb-1 flex items-center gap-2">
          <Mail size={13} className="text-gray-500" /> Email Preferences
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Choose what notifications and updates you’d like to receive via email.
        </p>
        <div className="border border-gray-200 rounded-lg p-6 space-y-4">
          <label className="flex items-center gap-2 text-sm">
            <Bell size={13} className="text-gray-500" /> <input type="checkbox" defaultChecked /> Receive activity notifications
          </label>
          <label className="flex items-center gap-2 text-sm">
            <Newspaper size={13} className="text-gray-500" /> <input type="checkbox" defaultChecked /> Receive weekly project summaries
          </label>
          <label className="flex items-center gap-2 text-sm">
            <Megaphone size={13} className="text-gray-500" /> <input type="checkbox" /> Receive marketing and product updates
          </label>
          <label className="flex items-center gap-2 text-sm">
            <Shield size={13} className="text-gray-500" /> <input type="checkbox" /> Receive security alerts
          </label>
        </div>
      </div>

      <div>
        <h2 className="text-sm font-semibold mb-1 flex items-center gap-2">
          <Calendar size={13} className="text-gray-500" /> Subscription Settings
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Manage how often you receive newsletters and announcements.
        </p>
        <div className="border border-gray-200 rounded-lg p-6 space-y-4">
          <label className="flex items-center gap-2 text-sm">
            <Newspaper size={13} className="text-gray-500" /> <input type="checkbox" defaultChecked /> Monthly newsletter
          </label>
          <label className="flex items-center gap-2 text-sm">
            <Globe size={13} className="text-gray-500" /> <input type="checkbox" /> Product release announcements
          </label>
          <label className="flex items-center gap-2 text-sm">
            <Calendar size={13} className="text-gray-500" /> <input type="checkbox" /> Event invitations and webinars
          </label>
        </div>
      </div>

      <div>
        <h2 className="text-sm font-semibold mb-1 flex items-center gap-2">
          <Users size={13} className="text-gray-500" /> Sender Preferences
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Choose which senders you want to receive emails from.
        </p>
        <div className="border border-gray-200 rounded-lg p-6 space-y-4">
          <div className="flex justify-between items-center text-sm">
            <span className="flex items-center gap-1"><Building2 size={13} className="text-gray-500" /> Company Updates</span>
            <span className="text-gray-500 text-xs">Enabled</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="flex items-center gap-1"><MessageSquare size={13} className="text-gray-500" /> Team Messages</span>
            <span className="text-gray-500 text-xs">Enabled</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="flex items-center gap-1"><Megaphone size={13} className="text-gray-500" /> Third-Party Offers</span>
            <span className="text-gray-500 text-xs">Disabled</span>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-sm font-semibold mb-1 flex items-center gap-2">
          <Shield size={13} className="text-gray-500" /> Security Notifications
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Stay informed about security events on your account.
        </p>
        <div className="border border-gray-200 rounded-lg p-6 space-y-4">
          <div className="flex justify-between items-center text-sm">
            <span className="flex items-center gap-1"><Wifi size={13} className="text-gray-500" /> Login from new device</span>
            <span className="text-gray-500 text-xs">Enabled</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="flex items-center gap-1"><KeyRound size={13} className="text-gray-500" /> Password changes</span>
            <span className="text-gray-500 text-xs">Enabled</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="flex items-center gap-1"><AlertTriangle size={13} className="text-gray-500" /> Suspicious activity alerts</span>
            <span className="text-gray-500 text-xs">Enabled</span>
          </div>
        </div>
      </div>
    </div>
  );
}
