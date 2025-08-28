"use client";

import { useState } from "react";
import { 
  Plus, 
  Search, 
  Filter, 
  Edit, 
  Trash2, 
  Mail, 
  Bell,
  User,
  Wrench,
  GraduationCap
} from "lucide-react";

export default function AdminUsers() {
  const [selectedRole, setSelectedRole] = useState<'all' | 'pilot' | 'mechanic' | 'instructor'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);

  // Sample user data
  const users = [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      role: "instructor",
      status: "active",
      lastLogin: "2025-01-22",
      flightHours: 1250,
      students: 5,
      certifications: ["CFI", "CFII", "MEI"],
      joinDate: "2024-03-15"
    },
    {
      id: 2,
      name: "Sarah Wilson",
      email: "sarah.wilson@example.com",
      role: "pilot",
      status: "active",
      lastLogin: "2025-01-21",
      flightHours: 350,
      students: 0,
      certifications: ["Private", "Instrument"],
      joinDate: "2024-06-20"
    },
    {
      id: 3,
      name: "Bob Wilson",
      email: "bob.wilson@example.com",
      role: "mechanic",
      status: "active",
      lastLogin: "2025-01-22",
      flightHours: 0,
      students: 0,
      certifications: ["A&P", "IA"],
      joinDate: "2024-01-10"
    },
    {
      id: 4,
      name: "Mike Johnson",
      email: "mike.johnson@example.com",
      role: "instructor",
      status: "active",
      lastLogin: "2025-01-20",
      flightHours: 890,
      students: 3,
      certifications: ["CFI", "CFII"],
      joinDate: "2024-05-01"
    },
    {
      id: 5,
      name: "Dave Martinez",
      email: "dave.martinez@example.com",
      role: "mechanic",
      status: "inactive",
      lastLogin: "2025-01-15",
      flightHours: 0,
      students: 0,
      certifications: ["A&P"],
      joinDate: "2024-08-12"
    },
    {
      id: 6,
      name: "Amy Chen",
      email: "amy.chen@example.com",
      role: "pilot",
      status: "active",
      lastLogin: "2025-01-22",
      flightHours: 125,
      students: 0,
      certifications: ["Private"],
      joinDate: "2024-11-05"
    }
  ];

  const notifications = [
    {
      id: 1,
      title: "Medical Certificate Expiring",
      message: "Your medical certificate expires in 30 days. Please schedule a renewal.",
      type: "warning",
      recipients: ["pilot"],
      scheduled: false
    },
    {
      id: 2,
      title: "Currency Requirements",
      message: "Complete your night currency requirements to maintain privileges.",
      type: "info",
      recipients: ["pilot"],
      scheduled: false
    },
    {
      id: 3,
      title: "Maintenance Training",
      message: "New AD compliance training available. Complete by end of month.",
      type: "info",
      recipients: ["mechanic"],
      scheduled: true
    }
  ];

  const filteredUsers = users.filter(user => {
    const matchesRole = selectedRole === 'all' || user.role === selectedRole;
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesRole && matchesSearch;
  });

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'instructor': return <GraduationCap size={16} className="text-blue-500" />;
      case 'pilot': return <User size={16} className="text-green-500" />;
      case 'mechanic': return <Wrench size={16} className="text-orange-500" />;
      default: return <User size={16} className="text-gray-500" />;
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'instructor': return 'bg-blue-100 text-blue-800';
      case 'pilot': return 'bg-green-100 text-green-800';
      case 'mechanic': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    return status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
  };

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">User Management</h1>
        <div className="flex gap-3">
          <button 
            onClick={() => setShowCreateModal(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <Plus size={16} />
            Create Account
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2">
            <Bell size={16} />
            Send Notifications
          </button>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white p-4 rounded-2xl shadow mb-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Search size={20} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 w-64"
            />
          </div>
          
          <div className="flex items-center gap-2">
            <Filter size={20} className="text-gray-400" />
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value as 'all' | 'pilot' | 'mechanic' | 'instructor')}
              className="border border-gray-300 rounded-lg px-3 py-2"
            >
              <option value="all">All Roles</option>
              <option value="pilot">Pilots</option>
              <option value="instructor">Instructors</option>
              <option value="mechanic">Mechanics</option>
            </select>
          </div>

          <div className="ml-auto text-sm text-gray-600">
            Showing {filteredUsers.length} of {users.length} users
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* User List */}
        <div className="col-span-2 bg-white p-6 rounded-2xl shadow">
          <h2 className="text-lg font-semibold mb-4">User Accounts</h2>
          
          <div className="space-y-3">
            {filteredUsers.map((user) => (
              <div key={user.id} className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                      {getRoleIcon(user.role)}
                    </div>
                    <div>
                      <div className="font-semibold text-lg">{user.name}</div>
                      <div className="text-gray-600">{user.email}</div>
                      <div className="flex items-center gap-2 mt-2">
                        <span className={`px-2 py-1 rounded-full text-xs ${getRoleColor(user.role)}`}>
                          {user.role}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(user.status)}`}>
                          {user.status}
                        </span>
                      </div>
                      <div className="mt-2 text-sm text-gray-600">
                        <div>Last login: {user.lastLogin}</div>
                        {user.flightHours > 0 && <div>Flight hours: {user.flightHours}h</div>}
                        {user.students > 0 && <div>Students: {user.students}</div>}
                        <div>Certifications: {user.certifications.join(', ')}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded-lg text-blue-600">
                      <Mail size={16} />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg">
                      <Edit size={16} />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg text-red-600">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Notifications Panel */}
        <div className="space-y-6">
          {/* Quick Stats */}
          <div className="bg-white p-4 rounded-2xl shadow">
            <h3 className="text-lg font-semibold mb-4">User Statistics</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <GraduationCap size={16} className="text-blue-500" />
                  Instructors
                </span>
                <span className="font-semibold">{users.filter(u => u.role === 'instructor').length}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <User size={16} className="text-green-500" />
                  Pilots
                </span>
                <span className="font-semibold">{users.filter(u => u.role === 'pilot').length}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Wrench size={16} className="text-orange-500" />
                  Mechanics
                </span>
                <span className="font-semibold">{users.filter(u => u.role === 'mechanic').length}</span>
              </div>
              <div className="flex items-center justify-between border-t pt-3">
                <span className="text-gray-600">Active Users</span>
                <span className="font-semibold text-green-600">
                  {users.filter(u => u.status === 'active').length}
                </span>
              </div>
            </div>
          </div>

          {/* Notification Center */}
          <div className="bg-white p-4 rounded-2xl shadow">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Bell size={18} />
              Notification Center
            </h3>
            <div className="space-y-3">
              {notifications.map((notification) => (
                <div key={notification.id} className="p-3 border rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <div className="font-medium text-sm">{notification.title}</div>
                    <div className={`px-2 py-1 rounded-full text-xs ${
                      notification.type === 'warning' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {notification.type}
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 mb-2">{notification.message}</div>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">
                      To: {notification.recipients.join(', ')}s
                    </div>
                    <button className={`text-xs px-2 py-1 rounded ${
                      notification.scheduled 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                    }`}>
                      {notification.scheduled ? 'Scheduled' : 'Send Now'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white p-4 rounded-2xl shadow">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full bg-blue-100 text-blue-700 p-3 rounded-lg hover:bg-blue-200 text-sm">
                Bulk Email Users
              </button>
              <button className="w-full bg-green-100 text-green-700 p-3 rounded-lg hover:bg-green-200 text-sm">
                Generate User Report
              </button>
              <button className="w-full bg-orange-100 text-orange-700 p-3 rounded-lg hover:bg-orange-200 text-sm">
                Import Users from CSV
              </button>
              <button className="w-full bg-purple-100 text-purple-700 p-3 rounded-lg hover:bg-purple-200 text-sm">
                Manage Permissions
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Create User Modal (placeholder) */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl w-96">
            <h3 className="text-lg font-semibold mb-4">Create New User Account</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Full Name</label>
                <input type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input type="email" className="w-full border border-gray-300 rounded-lg px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Role</label>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                  <option value="pilot">Pilot</option>
                  <option value="instructor">Instructor</option>
                  <option value="mechanic">Mechanic</option>
                </select>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button 
                onClick={() => setShowCreateModal(false)}
                className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg"
              >
                Cancel
              </button>
              <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg">
                Create Account
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}