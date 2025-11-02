import React, { useState } from "react";
import { User, Shield, Bell, Box, CreditCard, Users } from "lucide-react";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="min-h-screen bg-egg">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-48 bg-tea border-r border-green/20 p-6 min-h-screen">
          <nav className="space-y-2">
            <SidebarItem
              icon={User}
              label="General"
              active={activeTab === "general"}
              onClick={() => setActiveTab("general")}
            />
            <SidebarItem
              icon={Shield}
              label="Security"
              active={activeTab === "security"}
              onClick={() => setActiveTab("security")}
            />
            <SidebarItem
              icon={CreditCard}
              label="Billing"
              active={activeTab === "billing"}
              onClick={() => setActiveTab("billing")}
            />
            <SidebarItem
              icon={Bell}
              label="Notifications"
              active={activeTab === "notifications"}
              onClick={() => setActiveTab("notifications")}
            />
            <SidebarItem
              icon={Users}
              label="Privacy"
              active={activeTab === "privacy"}
              onClick={() => setActiveTab("privacy")}
            />
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 p-8 bg-egg">
          <section className="mb-12">
            <h1 className="font-display text-3xl font-bold text-green mb-2">
              Profile
            </h1>
            <p className="font-sans text-sm text-teal mb-8">Woof woof.</p>

            <div className="space-y-6">
              <SettingRow label="Full name" value="Hoosky" />
              <SettingRow label="Email address" value="h.dog@northeastern.edu" />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

function SettingRow({ label, value }) {
  return (
    <div className="flex items-center justify-between py-4 border-b border-tea">
      <div className="flex-1">
        <div className="font-sans text-sm font-medium text-green">{label}</div>
        {value && (
          <div className="font-sans text-sm text-teal/70 mt-1">{value}</div>
        )}
      </div>
      <button className="text-blue hover:text-teal font-sans text-sm font-semibold transition-colors">
        Update
      </button>
    </div>
  );
}

function SidebarItem({ icon: Icon, label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors font-sans ${
        active ? "bg-blue text-white" : "text-green hover:bg-green/10"
      }`}
    >
      <Icon className="w-5 h-5" />
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}
