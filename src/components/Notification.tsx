import { Bell, AlertCircle, Tag, Megaphone, Mail, Smartphone, MessageSquare, Inbox, Wifi, Calendar, ClipboardList, Users, Building2, Settings } from "lucide-react";

export default function Notifications() {
  return (
    <div className="space-y-10 pt-4">
      <div>
        <h2 className="text-sm font-semibold mb-1 flex items-center gap-2">
          <Bell size={13} className="text-gray-500" /> Notification Settings
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Manage how you get notified inside the app.
        </p>
        <div className="border border-gray-200 rounded-lg p-6 space-y-4">
          <label className="flex items-center gap-2 text-sm">
            <ClipboardList size={13} className="text-gray-500" /> <input type="checkbox" defaultChecked /> Show in-app alerts for project updates
          </label>
          <label className="flex items-center gap-2 text-sm">
            <MessageSquare size={13} className="text-gray-500" /> <input type="checkbox" defaultChecked /> Show in-app alerts for mentions
          </label>
          <label className="flex items-center gap-2 text-sm">
            <Tag size={13} className="text-gray-500" /> <input type="checkbox" /> Show in-app alerts for promotions
          </label>
          <label className="flex items-center gap-2 text-sm">
            <AlertCircle size={13} className="text-gray-500" /> <input type="checkbox" /> Show in-app alerts for system announcements
          </label>
        </div>
      </div>

      <div>
        <h2 className="text-sm font-semibold mb-1 flex items-center gap-2">
          <Inbox size={13} className="text-gray-500" /> Delivery Preferences
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Choose how you want to receive notifications.
        </p>
        <div className="border border-gray-200 rounded-lg p-6 space-y-4">
          <label className="flex items-center gap-2 text-sm">
            <Smartphone size={13} className="text-gray-500" /> <input type="checkbox" defaultChecked /> Push Notifications
          </label>
          <label className="flex items-center gap-2 text-sm">
            <Mail size={13} className="text-gray-500" /> <input type="checkbox" /> Email Notifications
          </label>
          <label className="flex items-center gap-2 text-sm">
            <Wifi size={13} className="text-gray-500" /> <input type="checkbox" /> SMS Alerts
          </label>
          <label className="flex items-center gap-2 text-sm">
            <Bell size={13} className="text-gray-500" /> <input type="checkbox" defaultChecked /> In-App Banner Alerts
          </label>
        </div>
      </div>

      <div>
        <h2 className="text-sm font-semibold mb-1 flex items-center gap-2">
          <Calendar size={13} className="text-gray-500" /> Notification Frequency
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Decide how often you want to be notified.
        </p>
        <div className="border border-gray-200 rounded-lg p-6 space-y-4">
          <div className="flex justify-between items-center text-sm">
            <span className="flex items-center gap-1"><Bell size={13} className="text-gray-500" /> Real-time Updates</span>
            <span className="text-gray-500 text-xs">Enabled</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="flex items-center gap-1"><ClipboardList size={13} className="text-gray-500" /> Daily Digest</span>
            <span className="text-gray-500 text-xs">Disabled</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="flex items-center gap-1"><Calendar size={13} className="text-gray-500" /> Weekly Summary</span>
            <span className="text-gray-500 text-xs">Enabled</span>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-sm font-semibold mb-1 flex items-center gap-2">
          <Settings size={13} className="text-gray-500" /> Notification Categories
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Select which types of notifications you care about.
        </p>
        <div className="border border-gray-200 rounded-lg p-6 space-y-4">
          <label className="flex items-center gap-2 text-sm">
            <ClipboardList size={13} className="text-gray-500" /> <input type="checkbox" defaultChecked /> Project Updates
          </label>
          <label className="flex items-center gap-2 text-sm">
            <Users size={13} className="text-gray-500" /> <input type="checkbox" defaultChecked /> Team Messages
          </label>
          <label className="flex items-center gap-2 text-sm">
            <Building2 size={13} className="text-gray-500" /> <input type="checkbox" /> System Announcements
          </label>
          <label className="flex items-center gap-2 text-sm">
            <Megaphone size={13} className="text-gray-500" /> <input type="checkbox" /> Promotional Offers
          </label>
        </div>
      </div>
    </div>
  );
}
