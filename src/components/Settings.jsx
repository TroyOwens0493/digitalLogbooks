// components/Settings.jsx
import { User, Bell, Palette, Shield, Database, Plane, Clock, Globe, Lock, Mail } from "lucide-react";

export default function Settings() {
    return (
        <div className="p-6 flex-1 overflow-auto">
            <h1 className="text-2xl font-bold mb-6">Settings</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* User Profile */}
                <div className="bg-white p-6 rounded-2xl shadow">
                    <div className="flex items-center gap-3 mb-4">
                        <User className="text-blue-600" size={24} />
                        <h2 className="text-lg font-semibold">User Profile</h2>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                            <input 
                                type="text" 
                                defaultValue="John Smith"
                                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input 
                                type="email" 
                                defaultValue="john.smith@example.com"
                                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Pilot License Number</label>
                            <input 
                                type="text" 
                                defaultValue="123456789"
                                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                        </div>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                            Update Profile
                        </button>
                    </div>
                </div>

                {/* Notifications */}
                <div className="bg-white p-6 rounded-2xl shadow">
                    <div className="flex items-center gap-3 mb-4">
                        <Bell className="text-orange-600" size={24} />
                        <h2 className="text-lg font-semibold">Notifications</h2>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium">Flight Reminders</p>
                                <p className="text-sm text-gray-600">Get notified before scheduled flights</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" defaultChecked className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium">Maintenance Alerts</p>
                                <p className="text-sm text-gray-600">Aircraft maintenance due notifications</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" defaultChecked className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium">Email Notifications</p>
                                <p className="text-sm text-gray-600">Receive notifications via email</p>
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
                        <Palette className="text-purple-600" size={24} />
                        <h2 className="text-lg font-semibold">Display Preferences</h2>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Theme</label>
                            <select className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                <option value="light">Light Mode</option>
                                <option value="dark">Dark Mode</option>
                                <option value="auto">Auto (System)</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Time Format</label>
                            <select className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                <option value="12">12-hour (AM/PM)</option>
                                <option value="24">24-hour</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Date Format</label>
                            <select className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                <option value="mdy">MM/DD/YYYY</option>
                                <option value="dmy">DD/MM/YYYY</option>
                                <option value="ymd">YYYY-MM-DD</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Aircraft Preferences */}
                <div className="bg-white p-6 rounded-2xl shadow">
                    <div className="flex items-center gap-3 mb-4">
                        <Plane className="text-green-600" size={24} />
                        <h2 className="text-lg font-semibold">Aircraft Preferences</h2>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Default Aircraft</label>
                            <select className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                <option value="">Select Default Aircraft</option>
                                <option value="N12345">N12345 - Cessna 172</option>
                                <option value="A12345">A12345 - Piper Cherokee</option>
                                <option value="B67890">B67890 - Cessna 182</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Fuel Units</label>
                            <select className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                <option value="gallons">Gallons</option>
                                <option value="liters">Liters</option>
                            </select>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium">Auto-save Flight Logs</p>
                                <p className="text-sm text-gray-600">Automatically save flight logs as you type</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" defaultChecked className="sr-only peer" />
                                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                        </div>
                    </div>
                </div>

                {/* Security */}
                <div className="bg-white p-6 rounded-2xl shadow">
                    <div className="flex items-center gap-3 mb-4">
                        <Shield className="text-red-600" size={24} />
                        <h2 className="text-lg font-semibold">Security</h2>
                    </div>
                    <div className="space-y-4">
                        <button className="w-full bg-gray-100 text-gray-700 p-3 rounded-lg hover:bg-gray-200 flex items-center gap-2">
                            <Lock size={16} />
                            Change Password
                        </button>
                        <button className="w-full bg-gray-100 text-gray-700 p-3 rounded-lg hover:bg-gray-200 flex items-center gap-2">
                            <Mail size={16} />
                            Two-Factor Authentication
                        </button>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-medium">Session Timeout</p>
                                <p className="text-sm text-gray-600">Auto-logout after inactivity</p>
                            </div>
                            <select className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                <option value="30">30 minutes</option>
                                <option value="60">1 hour</option>
                                <option value="120">2 hours</option>
                                <option value="never">Never</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Data Management */}
                <div className="bg-white p-6 rounded-2xl shadow">
                    <div className="flex items-center gap-3 mb-4">
                        <Database className="text-indigo-600" size={24} />
                        <h2 className="text-lg font-semibold">Data Management</h2>
                    </div>
                    <div className="space-y-4">
                        <button className="w-full bg-blue-100 text-blue-700 p-3 rounded-lg hover:bg-blue-200 flex items-center gap-2">
                            <Database size={16} />
                            Export All Data
                        </button>
                        <button className="w-full bg-green-100 text-green-700 p-3 rounded-lg hover:bg-green-200 flex items-center gap-2">
                            <Clock size={16} />
                            Backup Settings
                        </button>
                        <button className="w-full bg-orange-100 text-orange-700 p-3 rounded-lg hover:bg-orange-200 flex items-center gap-2">
                            <Globe size={16} />
                            Import Data
                        </button>
                        <div className="border-t pt-4">
                            <p className="text-sm text-gray-600 mb-2">Last backup: March 20, 2024</p>
                            <p className="text-sm text-gray-600">Data size: 2.4 MB</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Actions */}
            <div className="mt-8 pt-6 border-t border-gray-200 flex justify-between">
                <button className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700">
                    Reset to Defaults
                </button>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                    Save All Settings
                </button>
            </div>
        </div>
    );
}