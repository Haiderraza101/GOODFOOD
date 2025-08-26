"use client";
import { useState } from "react";
import MyDetails from "@/components/MyDetails";
import Password from "@/components/Password";
import Billings from "@/components/Billing";
import Plan from "@/components/Plan";
import Notifications from "@/components/Notification";
import Email from "@/components/Email";

const tabs = [
  "My details",
  "Password",
  "Plan",
  "Email",
  "Notifications",
];

export default function Settings() {
  const [activeTab, setActiveTab] = useState("My details");

  const renderTab = () => {
    switch (activeTab) {
      case "My details":
        return <MyDetails />;
      case "Password":
        return <Password />;
      case "Plan":
        return <Plan />;
      case "Email":
        return <Email />;
      case "Notifications":
        return <Notifications />;
      default:
        return <Billings />;
    }
  };

  return (
    <div className="min-h-screen max-w-screen  bg-white">
     
      <div className="flex-1 px-8 py-6">
        <h1 className="text-2xl font-semibold">Settings</h1>
        <p className="text-gray-500 mb-6">
          Manage your account settings and preferences.
        </p>
        <div className="flex flex-wrap justify-between pb-6 border-b  gap-2 border-gray-200">
        <div className="flex flex-wrap  gap-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`pb-2 text-sm font-medium ${
                activeTab === tab
                  ? " bg-gray-100 p-2 px-4 rounded-sm border border-gray-200 text-gray-700"
                  : "bg-gray-50 p-2 px-4 rounded-sm border border-gray-200 cursor-pointer text-gray-500 hover:bg-gray-100"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">

          <div className="bg-gray-50 p-2 px-4 rounded-sm border border-gray-200 cursor-pointer text-gray-500 hover:bg-gray-100">
            Cancel
          </div>
          <div className="bg-indigo-400 p-2 px-4 rounded-sm border border-gray-200 cursor-pointer text-white hover:bg-indigo-500">
            Save
          </div>

        </div>
        </div>
        <div>{renderTab()}</div>
      </div>
    </div>
  );
}
