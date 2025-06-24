<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0">
      <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200 to-purple-200 opacity-20 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-200 to-blue-200 opacity-20 rounded-full filter blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
    </div>

    <div class="relative z-10 flex h-screen">
      <!-- Sidebar -->
      <aside class="w-64 bg-gradient-to-b from-white to-gray-50 backdrop-blur-sm border-r border-gray-200 hidden md:flex md:flex-col shadow-lg">
        <!-- Logo/Brand -->
        <div class="p-6 border-b border-gray-200 flex-shrink-0">
          <div>
            <h1 class="text-lg font-bold text-gray-900 leading-tight">Barcelona Paint Center</h1>
          </div>
          <div class="mt-2 text-xs text-white bg-gradient-to-r from-blue-500 to-purple-600 px-3 py-1 rounded-full inline-flex items-center shadow-sm">
            <ShieldIcon class="h-3 w-3 mr-1" />
            Admin Portal
          </div>
        </div>

        <!-- Navigation - Scrollable Area -->
        <nav class="flex-1 p-4 space-y-2 overflow-y-auto">
          <router-link 
            to="/admin/dashboard" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"
            :class="{ 'shadow-sm border border-blue-200 transform scale-105': $route.path === '/admin/dashboard' }"
          >
            <LayoutDashboardIcon class="w-5 h-5" />
            <span>Dashboard</span>
          </router-link>

          <router-link 
            to="/admin/staff" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-green-600 bg-green-50 hover:bg-green-100 hover:text-green-700"
            :class="{ 'shadow-sm border border-green-200 transform scale-105': $route.path === '/admin/staff' }"
          >
            <UsersIcon class="w-5 h-5" />
            <span>Staff Management</span>
          </router-link>

          <router-link 
            to="/admin/inventory" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-purple-600 bg-purple-50 hover:bg-purple-100 hover:text-purple-700"
            :class="{ 'shadow-sm border border-purple-200 transform scale-105': $route.path === '/admin/inventory' }"
          >
            <PackageIcon class="w-5 h-5" />
            <span>Inventory</span>
          </router-link>

          <router-link 
            to="/admin/house-paint-recommender" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-orange-600 bg-orange-50 hover:bg-orange-100 hover:text-orange-700"
            :class="{ 'shadow-sm border border-orange-200 transform scale-105': $route.path === '/admin/house-paint-recommender' }"
          >
            <HomeIcon class="w-5 h-5" />
            <span>House Paint Recommender</span>
          </router-link>

          <router-link 
            to="/admin/paint-mixing" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-pink-600 bg-pink-50 hover:bg-pink-100 hover:text-pink-700"
            :class="{ 'shadow-sm border border-pink-200 transform scale-105': $route.path === '/admin/paint-mixing' }"
          >
            <PaletteIcon class="w-5 h-5" />
            <span>Paint Mixing</span>
          </router-link>

          <router-link 
            to="/admin/sales-analytics" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-teal-600 bg-teal-50 hover:bg-teal-100 hover:text-teal-700"
            :class="{ 'shadow-sm border border-teal-200 transform scale-105': $route.path === '/admin/sales-analytics' }"
          >
            <TrendingUpIcon class="w-5 h-5" />
            <span>Sales Analytics</span>
          </router-link>

          <router-link 
            to="/admin/reports" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100 hover:text-indigo-700"
            :class="{ 'shadow-sm border border-indigo-200 transform scale-105': $route.path === '/admin/reports' }"
          >
            <ClipboardIcon class="w-5 h-5" />
            <span>Reports</span>
          </router-link>

          <router-link 
            to="/admin/settings" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-amber-600 bg-amber-50 shadow-sm border border-amber-200 transform scale-105"
            :class="{ 'hover:bg-amber-100 hover:text-amber-700': $route.path !== '/admin/settings' }"
          >
            <SettingsIcon class="w-5 h-5" />
            <span>System Settings</span>
          </router-link>

          <router-link 
            to="/admin/security" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-red-600 bg-red-50 hover:bg-red-100 hover:text-red-700"
            :class="{ 'shadow-sm border border-red-200 transform scale-105': $route.path === '/admin/security' }"
          >
            <ShieldIcon class="w-5 h-5" />
            <span>Security</span>
          </router-link>

          <!-- Perfect spacing -->
          <div class="h-4"></div>
        </nav>

        <!-- User Menu - Fixed at bottom -->
        <div class="p-4 border-t border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50 backdrop-blur-sm flex-shrink-0">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
              <UserIcon class="w-5 h-5 text-white" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate">{{ userDisplayName || 'Admin User' }}</p>
              <p class="text-xs text-gray-600 truncate">{{ userEmail || 'admin@example.com' }}</p>
            </div>
            <button 
              @click="handleLogout"
              class="p-2 rounded-lg hover:bg-white/50 text-gray-600 hover:text-gray-900 transition-colors"
              title="Logout"
            >
              <LogOutIcon class="w-5 h-5" />
            </button>
          </div>
        </div>
      </aside>

      <!-- Mobile Sidebar Toggle -->
      <div class="fixed top-4 left-4 z-30 md:hidden">
        <button 
          @click="toggleMobileSidebar"
          class="p-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg shadow-lg"
          aria-label="Toggle navigation menu"
        >
          <MenuIcon v-if="!mobileSidebarOpen" class="w-6 h-6 text-gray-700" />
          <XIcon v-else class="w-6 h-6 text-gray-700" />
        </button>
      </div>

      <!-- Mobile Sidebar -->
      <div 
        v-if="mobileSidebarOpen" 
        class="fixed inset-0 bg-black/20 z-20 md:hidden"
        @click="toggleMobileSidebar"
      ></div>

      <aside 
        v-if="mobileSidebarOpen"
        class="fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-white to-gray-50 backdrop-blur-sm border-r border-gray-200 z-20 md:hidden shadow-xl flex flex-col"
      >
        <!-- Logo/Brand -->
        <div class="p-6 border-b border-gray-200 flex-shrink-0">
          <div>
            <h1 class="text-lg font-bold text-gray-900 leading-tight">Barcelona Paint Center</h1>
          </div>
          <div class="mt-2 text-xs text-white bg-gradient-to-r from-blue-500 to-purple-600 px-3 py-1 rounded-full inline-flex items-center shadow-sm">
            <ShieldIcon class="h-3 w-3 mr-1" />
            Admin Portal
          </div>
        </div>

        <!-- Mobile Navigation - Scrollable -->
        <nav class="flex-1 p-4 space-y-2 overflow-y-auto">
          <router-link 
            to="/admin/dashboard" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-blue-600 bg-blue-50"
            :class="{ 'shadow-sm border border-blue-200': $route.path === '/admin/dashboard' }"
            @click="mobileSidebarOpen = false"
          >
            <LayoutDashboardIcon class="w-5 h-5" />
            <span>Dashboard</span>
          </router-link>

          <router-link 
            to="/admin/staff" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-green-600 bg-green-50"
            :class="{ 'shadow-sm border border-green-200': $route.path === '/admin/staff' }"
            @click="mobileSidebarOpen = false"
          >
            <UsersIcon class="w-5 h-5" />
            <span>Staff Management</span>
          </router-link>

          <router-link 
            to="/admin/inventory" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-purple-600 bg-purple-50"
            :class="{ 'shadow-sm border border-purple-200': $route.path === '/admin/inventory' }"
            @click="mobileSidebarOpen = false"
          >
            <PackageIcon class="w-5 h-5" />
            <span>Inventory</span>
          </router-link>

          <router-link 
            to="/admin/house-paint-recommender" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-orange-600 bg-orange-50"
            :class="{ 'shadow-sm border border-orange-200': $route.path === '/admin/house-paint-recommender' }"
            @click="mobileSidebarOpen = false"
          >
            <HomeIcon class="w-5 h-5" />
            <span>House Paint Recommender</span>
          </router-link>

          <router-link 
            to="/admin/paint-mixing" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-pink-600 bg-pink-50"
            :class="{ 'shadow-sm border border-pink-200': $route.path === '/admin/paint-mixing' }"
            @click="mobileSidebarOpen = false"
          >
            <PaletteIcon class="w-5 h-5" />
            <span>Paint Mixing</span>
          </router-link>

          <router-link 
            to="/admin/sales-analytics" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-teal-600 bg-teal-50"
            :class="{ 'shadow-sm border border-teal-200': $route.path === '/admin/sales-analytics' }"
            @click="mobileSidebarOpen = false"
          >
            <TrendingUpIcon class="w-5 h-5" />
            <span>Sales Analytics</span>
          </router-link>

          <router-link 
            to="/admin/reports" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-indigo-600 bg-indigo-50"
            :class="{ 'shadow-sm border border-indigo-200': $route.path === '/admin/reports' }"
            @click="mobileSidebarOpen = false"
          >
            <ClipboardIcon class="w-5 h-5" />
            <span>Reports</span>
          </router-link>

          <router-link 
            to="/admin/settings" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-amber-600 bg-amber-50 shadow-sm border border-amber-200"
            @click="mobileSidebarOpen = false"
          >
            <SettingsIcon class="w-5 h-5" />
            <span>System Settings</span>
          </router-link>

          <router-link 
            to="/admin/security" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-red-600 bg-red-50"
            :class="{ 'shadow-sm border border-red-200': $route.path === '/admin/security' }"
            @click="mobileSidebarOpen = false"
          >
            <ShieldIcon class="w-5 h-5" />
            <span>Security</span>
          </router-link>

          <!-- Perfect spacing for mobile too -->
          <div class="h-4"></div>
        </nav>

        <!-- Mobile User Menu - Fixed at bottom -->
        <div class="p-4 border-t border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50 backdrop-blur-sm flex-shrink-0">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
              <UserIcon class="w-5 h-5 text-white" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate">{{ userDisplayName || 'Admin User' }}</p>
              <p class="text-xs text-gray-600 truncate">{{ userEmail || 'admin@example.com' }}</p>
            </div>
            <button 
              @click="handleLogout"
              class="p-2 rounded-lg hover:bg-white/50 text-gray-600 hover:text-gray-900 transition-colors"
              title="Logout"
            >
              <LogOutIcon class="w-5 h-5" />
            </button>
          </div>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 overflow-auto">
        <!-- Header -->
        <header class="bg-white/50 backdrop-blur-sm border-b border-gray-200 px-8 py-4 shadow-sm">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 class="text-2xl font-bold text-gray-900">System Settings</h1>
              <p class="text-gray-600">Configure your system preferences and settings</p>
            </div>
            <div class="flex items-center gap-4">
              <div class="hidden md:flex items-center gap-2 text-gray-700">
                <CalendarIcon class="w-5 h-5 text-amber-500" />
                <span>{{ currentDate }}</span>
              </div>
              <div class="hidden md:block h-6 w-px bg-gray-300"></div>
              <div class="flex items-center gap-3">
                <span class="text-gray-900">Welcome, {{ userDisplayName || 'Admin' }}</span>
                <div class="relative">
                  <BellIcon class="w-5 h-5 text-orange-500 cursor-pointer hover:text-orange-600" />
                </div>
              </div>
            </div>
          </div>
        </header>

        <div class="p-6 md:p-8">
          <!-- Settings Grid -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <!-- General Settings -->
            <div class="lg:col-span-2 space-y-6">
              <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 p-6">
                <div class="flex items-center gap-3 mb-6">
                  <div class="p-3 rounded-xl shadow-lg bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 transform hover:scale-110 transition-transform duration-200">
                    <SettingsIcon class="w-6 h-6 text-white" />
                  </div>
                  <h2 class="text-xl font-bold text-gray-900">General Settings</h2>
                </div>
                <form @submit.prevent="saveGeneralSettings" class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Store Name</label>
                    <input 
                      type="text"
                      v-model="settings.general.storeName"
                      class="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500"
                      placeholder="Enter store name"
                    />
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Store Address</label>
                    <textarea 
                      v-model="settings.general.address"
                      rows="3"
                      class="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500"
                      placeholder="Enter store address"
                    ></textarea>
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Contact Email</label>
                    <input 
                      type="email"
                      v-model="settings.general.email"
                      class="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500"
                      placeholder="Enter contact email"
                    />
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Contact Phone</label>
                    <input 
                      type="tel"
                      v-model="settings.general.phone"
                      class="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500"
                      placeholder="Enter contact phone"
                    />
                  </div>

                  <div class="flex justify-end pt-4">
                    <button 
                      type="submit"
                      class="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center gap-2"
                    >
                      <SaveIcon class="w-5 h-5" />
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>

              <!-- Notification Settings -->
              <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 p-6">
                <div class="flex items-center gap-3 mb-6">
                  <div class="p-3 rounded-xl shadow-lg bg-gradient-to-br from-blue-400 via-cyan-500 to-indigo-600 transform hover:scale-110 transition-transform duration-200">
                    <BellIcon class="w-6 h-6 text-white" />
                  </div>
                  <h2 class="text-xl font-bold text-gray-900">Notification Settings</h2>
                </div>
                <div class="space-y-6">
                  <div class="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div>
                      <p class="font-medium text-gray-900">Email Notifications</p>
                      <p class="text-sm text-gray-600">Receive updates via email</p>
                    </div>
                    <label class="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox"
                        v-model="settings.notifications.email"
                        class="sr-only peer"
                      />
                      <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div class="flex items-center justify-between p-4 bg-amber-50 rounded-lg border border-amber-200">
                    <div>
                      <p class="font-medium text-gray-900">Low Stock Alerts</p>
                      <p class="text-sm text-gray-600">Get notified when inventory is low</p>
                    </div>
                    <label class="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox"
                        v-model="settings.notifications.lowStock"
                        class="sr-only peer"
                      />
                      <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-amber-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-600"></div>
                    </label>
                  </div>

                  <div class="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                    <div>
                      <p class="font-medium text-gray-900">Order Updates</p>
                      <p class="text-sm text-gray-600">Notifications for new orders</p>
                    </div>
                    <label class="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox"
                        v-model="settings.notifications.orders"
                        class="sr-only peer"
                      />
                      <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                    </label>
                  </div>
                </div>
              </div>

              <!-- Security Settings -->
              <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 p-6">
                <div class="flex items-center gap-3 mb-6">
                  <div class="p-3 rounded-xl shadow-lg bg-gradient-to-br from-red-400 via-pink-500 to-rose-600 transform hover:scale-110 transition-transform duration-200">
                    <ShieldIcon class="w-6 h-6 text-white" />
                  </div>
                  <h2 class="text-xl font-bold text-gray-900">Security Settings</h2>
                </div>
                <div class="space-y-6">
                  <div class="flex items-center justify-between p-4 bg-red-50 rounded-lg border border-red-200">
                    <div>
                      <p class="font-medium text-gray-900">Two-Factor Authentication</p>
                      <p class="text-sm text-gray-600">Add an extra layer of security</p>
                    </div>
                    <label class="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox"
                        v-model="settings.security.twoFactor"
                        class="sr-only peer"
                      />
                      <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                    </label>
                  </div>

                  <div class="flex items-center justify-between p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <div>
                      <p class="font-medium text-gray-900">Login Notifications</p>
                      <p class="text-sm text-gray-600">Get alerted about new logins</p>
                    </div>
                    <label class="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox"
                        v-model="settings.security.loginAlerts"
                        class="sr-only peer"
                      />
                      <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                    </label>
                  </div>

                  <div class="pt-2">
                    <button 
                      @click="changePassword"
                      class="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center gap-2"
                    >
                      <KeyIcon class="w-5 h-5" />
                      Change Password
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- System Info -->
            <div class="space-y-6">
              <!-- System Status -->
              <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 p-6">
                <div class="flex items-center gap-3 mb-6">
                  <div class="p-3 rounded-xl shadow-lg bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600 transform hover:scale-110 transition-transform duration-200">
                    <ActivityIcon class="w-6 h-6 text-white" />
                  </div>
                  <h2 class="text-xl font-bold text-gray-900">System Status</h2>
                </div>
                <div class="space-y-4">
                  <div class="p-3 bg-gray-50 rounded-lg">
                    <p class="text-sm text-gray-600">Version</p>
                    <p class="font-medium text-gray-900">1.0.0</p>
                  </div>
                  <div class="p-3 bg-gray-50 rounded-lg">
                    <p class="text-sm text-gray-600">Last Updated</p>
                    <p class="font-medium text-gray-900">March 5, 2025</p>
                  </div>
                  <div class="p-3 bg-green-50 rounded-lg border border-green-200">
                    <p class="text-sm text-gray-600">Database Status</p>
                    <div class="flex items-center gap-2">
                      <div class="w-2 h-2 rounded-full bg-green-500"></div>
                      <p class="font-medium text-green-800">Connected</p>
                    </div>
                  </div>
                  <div class="p-3 bg-green-50 rounded-lg border border-green-200">
                    <p class="text-sm text-gray-600">Server Status</p>
                    <div class="flex items-center gap-2">
                      <div class="w-2 h-2 rounded-full bg-green-500"></div>
                      <p class="font-medium text-green-800">Online</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Storage Usage -->
              <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 p-6">
                <div class="flex items-center gap-3 mb-6">
                  <div class="p-3 rounded-xl shadow-lg bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-600 transform hover:scale-110 transition-transform duration-200">
                    <DatabaseIcon class="w-6 h-6 text-white" />
                  </div>
                  <h2 class="text-xl font-bold text-gray-900">Storage Usage</h2>
                </div>
                <div class="space-y-4">
                  <div>
                    <div class="flex justify-between items-center mb-2">
                      <p class="text-sm text-gray-600">Database Storage</p>
                      <p class="text-sm font-medium text-gray-900">75%</p>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-3">
                      <div class="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500" style="width: 75%"></div>
                    </div>
                  </div>

                  <div>
                    <div class="flex justify-between items-center mb-2">
                      <p class="text-sm text-gray-600">File Storage</p>
                      <p class="text-sm font-medium text-gray-900">45%</p>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-3">
                      <div class="bg-gradient-to-r from-green-500 to-teal-600 h-3 rounded-full transition-all duration-500" style="width: 45%"></div>
                    </div>
                  </div>

                  <div>
                    <div class="flex justify-between items-center mb-2">
                      <p class="text-sm text-gray-600">Backup Storage</p>
                      <p class="text-sm font-medium text-gray-900">30%</p>
                    </div>
                    <div class="w-full bg-gray-200 rounded-full h-3">
                      <div class="bg-gradient-to-r from-purple-500 to-pink-600 h-3 rounded-full transition-all duration-500" style="width: 30%"></div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Quick Actions -->
              <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 p-6">
                <div class="flex items-center gap-3 mb-6">
                  <div class="p-3 rounded-xl shadow-lg bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 transform hover:scale-110 transition-transform duration-200">
                    <ZapIcon class="w-6 h-6 text-white" />
                  </div>
                  <h2 class="text-xl font-bold text-gray-900">Quick Actions</h2>
                </div>
                <div class="space-y-3">
                  <button 
                    @click="clearCache"
                    class="w-full flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 border border-blue-200"
                  >
                    <RefreshCwIcon class="w-5 h-5" />
                    <span>Clear Cache</span>
                  </button>
                  <button 
                    @click="backupData"
                    class="w-full flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-green-50 to-teal-50 text-green-700 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 border border-green-200"
                  >
                    <DatabaseIcon class="w-5 h-5" />
                    <span>Backup Data</span>
                  </button>
                  <button 
                    @click="checkUpdates"
                    class="w-full flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 border border-purple-200"
                  >
                    <DownloadIcon class="w-5 h-5" />
                    <span>Check for Updates</span>
                  </button>
                  <button 
                    @click="optimizeDatabase"
                    class="w-full flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-amber-50 to-orange-50 text-amber-700 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 border border-amber-200"
                  >
                    <ZapIcon class="w-5 h-5" />
                    <span>Optimize Database</span>
                  </button>
                </div>
              </div>

              <!-- System Logs -->
              <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 p-6">
                <div class="flex items-center justify-between mb-6">
                  <div class="flex items-center gap-3">
                    <div class="p-3 rounded-xl shadow-lg bg-gradient-to-br from-gray-400 via-slate-500 to-gray-600 transform hover:scale-110 transition-transform duration-200">
                      <FileTextIcon class="w-6 h-6 text-white" />
                    </div>
                    <h2 class="text-xl font-bold text-gray-900">System Logs</h2>
                  </div>
                  <button 
                    @click="viewAllLogs"
                    class="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1 px-3 py-1 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <ExternalLinkIcon class="w-4 h-4" />
                    View All
                  </button>
                </div>
                <div class="space-y-3 max-h-60 overflow-y-auto">
                  <div v-for="log in recentLogs" :key="log.id" class="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200">
                    <div class="flex items-center gap-2 mb-1">
                      <span 
                        class="px-2 py-0.5 text-xs rounded-full font-medium"
                        :class="{
                          'bg-green-100 text-green-800 border border-green-200': log.type === 'info',
                          'bg-yellow-100 text-yellow-800 border border-yellow-200': log.type === 'warning',
                          'bg-red-100 text-red-800 border border-red-200': log.type === 'error'
                        }"
                      >
                        {{ log.type.toUpperCase() }}
                      </span>
                      <span class="text-xs text-gray-500">{{ formatDate(log.timestamp) }}</span>
                    </div>
                    <p class="text-sm text-gray-900">{{ log.message }}</p>
                  </div>
                  
                  <div v-if="recentLogs.length === 0" class="text-center py-8">
                    <div class="w-12 h-12 mx-auto mb-3 rounded-full bg-gray-100 flex items-center justify-center">
                      <FileTextIcon class="w-6 h-6 text-gray-400" />
                    </div>
                    <p class="text-gray-500">No recent logs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>

    <!-- Success Toast -->
    <div 
      v-if="showToast"
      class="fixed top-4 right-4 z-50 max-w-sm bg-white rounded-lg shadow-lg border transition-all duration-300 transform"
      :class="{
        'translate-x-full': !showToast,
        'border-green-200': notificationType === 'success',
        'border-red-200': notificationType === 'error'
      }"
    >
      <div class="p-4 flex items-center gap-3">
        <div 
          class="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
          :class="{
            'bg-green-100': notificationType === 'success',
            'bg-red-100': notificationType === 'error'
          }"
        >
          <CheckIcon v-if="notificationType === 'success'" class="w-6 h-6 text-green-600" />
          <XIcon v-else class="w-6 h-6 text-red-600" />
        </div>
        <div class="flex-1 min-w-0">
          <p 
            class="font-medium"
            :class="{
              'text-green-800': notificationType === 'success',
              'text-red-800': notificationType === 'error'
            }"
          >
            {{ toastMessage }}
          </p>
        </div>
        <button 
          @click="showToast = false"
          class="flex-shrink-0 ml-2 text-gray-400 hover:text-gray-600"
        >
          <XIcon class="w-5 h-5" />
        </button>
      </div>
    </div>

    <!-- Change Password Modal -->
    <div v-if="showPasswordModal" class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-xl w-full max-w-md border border-gray-200 shadow-2xl">
        <div class="p-6 border-b border-gray-200">
          <div class="flex items-center gap-3">
            <div class="p-2 rounded-lg bg-purple-100">
              <KeyIcon class="w-6 h-6 text-purple-600" />
            </div>
            <h3 class="text-xl font-bold text-gray-900">Change Password</h3>
          </div>
        </div>
        
        <form @submit.prevent="updatePassword" class="p-6 space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
            <input 
              type="password"
              v-model="passwordForm.current"
              required
              class="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white text-gray-900"
              placeholder="Enter current password"
            />
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">New Password</label>
            <input 
              type="password"
              v-model="passwordForm.new"
              required
              class="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white text-gray-900"
              placeholder="Enter new password"
            />
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
            <input 
              type="password"
              v-model="passwordForm.confirm"
              required
              class="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white text-gray-900"
              placeholder="Confirm new password"
            />
          </div>

          <div class="flex justify-end gap-3 mt-6">
            <button 
              type="button"
              @click="showPasswordModal = false"
              class="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button 
              type="submit"
              class="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Update Password
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import {
  LayoutDashboard as LayoutDashboardIcon,
  Users as UsersIcon,
  Package as PackageIcon,
  Home as HomeIcon,
  Palette as PaletteIcon,
  TrendingUp as TrendingUpIcon,
  Clipboard as ClipboardIcon,
  Settings as SettingsIcon,
  Shield as ShieldIcon,
  User as UserIcon,
  LogOut as LogOutIcon,
  Menu as MenuIcon,
  X as XIcon,
  RefreshCw as RefreshCwIcon,
  Database as DatabaseIcon,
  Download as DownloadIcon,
  Save as SaveIcon,
  Key as KeyIcon,
  Zap as ZapIcon,
  Check as CheckIcon,
  ExternalLink as ExternalLinkIcon,
  Calendar as CalendarIcon,
  Bell as BellIcon,
  Activity as ActivityIcon,
  FileText as FileTextIcon
} from 'lucide-vue-next'

const router = useRouter()
const mobileSidebarOpen = ref(false)
const showToast = ref(false)
const toastMessage = ref('')
const notificationType = ref('success')
const showPasswordModal = ref(false)
const userDisplayName = ref('')
const userEmail = ref('')

// Current date
const currentDate = new Date().toLocaleDateString('en-US', { 
  weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' 
})

// Settings state - reset to empty values
const settings = ref({
  general: {
    storeName: '',
    address: '',
    email: '',
    phone: ''
  },
  notifications: {
    email: false,
    lowStock: false,
    orders: false
  },
  security: {
    twoFactor: false,
    loginAlerts: false
  }
})

// Password form - reset to empty
const passwordForm = ref({
  current: '',
  new: '',
  confirm: ''
})

// Recent logs
const recentLogs = ref([
  {
    id: 1,
    type: 'info',
    message: 'System backup completed successfully',
    timestamp: new Date(Date.now() - 3600000).toISOString()
  },
  {
    id: 2,
    type: 'warning',
    message: 'Low stock alert: Premium White Paint (10 units remaining)',
    timestamp: new Date(Date.now() - 7200000).toISOString()
  },
  {
    id: 3,
    type: 'error',
    message: 'Failed to connect to payment gateway',
    timestamp: new Date(Date.now() - 86400000).toISOString()
  }
])

// Methods
const saveGeneralSettings = async () => {
  // Implement settings save logic
  console.log('Saving settings:', settings.value)
  
  // Show success toast
  toastMessage.value = 'Settings saved successfully!'
  notificationType.value = 'success'
  showToast.value = true
  setTimeout(() => {
    showToast.value = false
  }, 3000)
}

const clearCache = async () => {
  // Implement cache clearing logic
  console.log('Clearing cache...')
  
  // Show success toast
  toastMessage.value = 'Cache cleared successfully!'
  notificationType.value = 'success'
  showToast.value = true
  setTimeout(() => {
    showToast.value = false
  }, 3000)
}

const backupData = async () => {
  // Implement backup logic
  console.log('Backing up data...')
  
  // Show success toast
  toastMessage.value = 'Data backup completed!'
  notificationType.value = 'success'
  showToast.value = true
  setTimeout(() => {
    showToast.value = false
  }, 3000)
}

const checkUpdates = async () => {
  // Implement update check logic
  console.log('Checking for updates...')
  
  // Show success toast
  toastMessage.value = 'System is up to date!'
  notificationType.value = 'success'
  showToast.value = true
  setTimeout(() => {
    showToast.value = false
  }, 3000)
}

const optimizeDatabase = async () => {
  // Implement database optimization logic
  console.log('Optimizing database...')
  
  // Show success toast
  toastMessage.value = 'Database optimized successfully!'
  notificationType.value = 'success'
  showToast.value = true
  setTimeout(() => {
    showToast.value = false
  }, 3000)
}

const changePassword = () => {
  showPasswordModal.value = true
}

const updatePassword = async () => {
  // Validate passwords
  if (passwordForm.value.new !== passwordForm.value.confirm) {
    toastMessage.value = 'New passwords do not match!'
    notificationType.value = 'error'
    showToast.value = true
    setTimeout(() => {
      showToast.value = false
    }, 3000)
    return
  }
  
  // Implement password update logic
  console.log('Updating password...')
  
  // Reset form and close modal
  passwordForm.value = {
    current: '',
    new: '',
    confirm: ''
  }
  showPasswordModal.value = false
  
  // Show success toast
  toastMessage.value = 'Password updated successfully!'
  notificationType.value = 'success'
  showToast.value = true
  setTimeout(() => {
    showToast.value = false
  }, 3000)
}

const viewAllLogs = () => {
  // Navigate to logs page or show full logs modal
  console.log('Viewing all logs...')
}

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

const toggleMobileSidebar = () => {
  mobileSidebarOpen.value = !mobileSidebarOpen.value
}

const handleLogout = () => {
  router.push('/admin')
}
</script>

<style scoped>
/* Custom scrollbar */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #2563eb, #7c3aed);
}

/* Animation classes */
.animate-fade-in {
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from { 
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>