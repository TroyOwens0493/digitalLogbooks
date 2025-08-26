// components/Settings.jsx
import { User, Bell, Monitor, Shield, Save } from "lucide-react";

export default function Settings() {
    return (
        <div className="p-6 flex-1">
            <h1 className="text-2xl font-bold mb-4">Settings</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* User Profile Settings */}
                <div className="bg-white p-6 rounded-2xl shadow">
                    <div className="flex items-center gap-3 mb-4">
                        <User size={24} className="text-gray-700" />
                        <h2 className="text-lg font-semibold">User Profile</h2>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Full Name
                            </label>
                            <input
                                type="text"
                                defaultValue="John Doe"
                                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                defaultValue="john.doe@example.com"
                                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Pilot License Number
                            </label>
                            <input
                                type="text"
                                defaultValue="123456789"
                                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                    </div>
                </div>

                {/* Notification Settings */}
                <div className="bg-white p-6 rounded-2xl shadow">
                    <div className="flex items-center gap-3 mb-4">
                        <Bell size={24} className="text-gray-700" />
                        <h2 className="text-lg font-semibold">Notifications</h2>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium text-gray-700">Flight Reminders</p>
                                <p className="text-sm text-gray-500">Get notified about upcoming flights</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" defaultChecked className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium text-gray-700">Maintenance Alerts</p>
                                <p className="text-sm text-gray-500">Aircraft maintenance notifications</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" defaultChecked className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium text-gray-700">Squawk Reports</p>
                                <p className="text-sm text-gray-500">New aircraft issues reported</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                        </div>
                    </div>
                </div>

                {/* Display Preferences */}
                <div className="bg-white p-6 rounded-2xl shadow">
                    <div className="flex items-center gap-3 mb-4">
                        <Monitor size={24} className="text-gray-700" />
                        <h2 className="text-lg font-semibold">Display Preferences</h2>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Theme
                            </label>
                            <select className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                <option value="light">Light</option>
                                <option value="dark">Dark</option>
                                <option value="auto">Auto</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Time Format
                            </label>
                            <select className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                <option value="12h">12 Hour</option>
                                <option value="24h">24 Hour</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Date Format
                            </label>
                            <select className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                <option value="mm/dd/yyyy">MM/DD/YYYY</option>
                                <option value="dd/mm/yyyy">DD/MM/YYYY</option>
                                <option value="yyyy-mm-dd">YYYY-MM-DD</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Privacy & Security */}
                <div className="bg-white p-6 rounded-2xl shadow">
                    <div className="flex items-center gap-3 mb-4">
                        <Shield size={24} className="text-gray-700" />
                        <h2 className="text-lg font-semibold">Privacy & Security</h2>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium text-gray-700">Two-Factor Authentication</p>
                                <p className="text-sm text-gray-500">Add extra security to your account</p>
                            </div>
                            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                Enable
                            </button>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium text-gray-700">Session Timeout</p>
                                <p className="text-sm text-gray-500">Automatically log out after inactivity</p>
                            </div>
                            <select className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                <option value="30">30 minutes</option>
                                <option value="60">1 hour</option>
                                <option value="120">2 hours</option>
                                <option value="never">Never</option>
                            </select>
                        </div>
                        <button className="w-full p-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors">
                            Change Password
                        </button>
                    </div>
                </div>
            </div>

            {/* Save Button */}
            <div className="mt-6 flex justify-end">
                <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <Save size={20} />
                    Save Changes
                </button>
            </div>
        </div>
    );
}