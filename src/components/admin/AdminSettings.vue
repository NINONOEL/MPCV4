<template>
  <div class="min-h-screen bg-[#001333] relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0">
      <div class="absolute top-0 right-0 w-96 h-96 bg-[#0A3573] opacity-10 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-[#0A3573] opacity-10 rounded-full filter blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
    </div>
  
    <div class="relative z-10 flex h-screen">
      <!-- Sidebar -->
      <aside class="w-64 bg-[#0A2159]/90 backdrop-blur-sm border-r border-white/10 hidden md:block">
        <!-- Logo/Brand -->
        <div class="p-6 border-b border-white/10">
          <h1 class="text-xl font-bold text-white">Mindoro Paint Center</h1>
        </div>
  
        <!-- Navigation -->
        <nav class="p-4 space-y-2 overflow-y-auto max-h-[calc(100vh-10rem)]">
          <router-link 
            to="/admin/dashboard" 
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
            :class="{ 'bg-white/10': $route.path === '/admin/dashboard' }"
          >
            <LayoutDashboardIcon class="w-5 h-5" />
            <span>Dashboard</span>
          </router-link>
  
          <router-link 
            to="/admin/staff" 
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
            :class="{ 'bg-white/10': $route.path === '/admin/staff' }"
          >
            <UsersIcon class="w-5 h-5" />
            <span>Staff Management</span>
          </router-link>
  
          <router-link 
            to="/admin/inventory" 
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
            :class="{ 'bg-white/10': $route.path === '/admin/inventory' }"
          >
            <PackageIcon class="w-5 h-5" />
            <span>Inventory</span>
          </router-link>
  
          <router-link 
            to="/admin/house-paint-recommender" 
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
            :class="{ 'bg-white/10': $route.path === '/admin/house-paint-recommender' }"
          >
            <HomeIcon class="w-5 h-5" />
            <span>House Paint Recommender</span>
          </router-link>
  
          <router-link 
            to="/admin/paint-mixing" 
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
            :class="{ 'bg-white/10': $route.path === '/admin/paint-mixing' }"
          >
            <PaletteIcon class="w-5 h-5" />
            <span>Paint Mixing</span>
          </router-link>
  
          <router-link 
            to="/admin/sales-analytics" 
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
            :class="{ 'bg-white/10': $route.path === '/admin/sales-analytics' }"
          >
            <TrendingUpIcon class="w-5 h-5" />
            <span>Sales Analytics</span>
          </router-link>
  
          <router-link 
            to="/admin/reports" 
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
            :class="{ 'bg-white/10': $route.path === '/admin/reports' }"
          >
            <ClipboardIcon class="w-5 h-5" />
            <span>Reports</span>
          </router-link>
  
          <router-link 
            to="/admin/settings" 
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
            :class="{ 'bg-white/10': $route.path === '/admin/settings' }"
          >
            <SettingsIcon class="w-5 h-5" />
            <span>System Settings</span>
          </router-link>
  
          <router-link 
            to="/admin/security" 
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
            :class="{ 'bg-white/10': $route.path === '/admin/security' }"
          >
            <ShieldIcon class="w-5 h-5" />
            <span>Security</span>
          </router-link>
        </nav>
  
        <!-- User Menu -->
        <div class="absolute bottom-0 w-64 p-4 border-t border-white/10 bg-[#0A2159]/90 backdrop-blur-sm">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <UserIcon class="w-5 h-5 text-white" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-white truncate">Admin User</p>
              <p class="text-xs text-white/60 truncate">admin@example.com</p>
            </div>
            <button 
              @click="handleLogout"
              class="p-2 rounded-lg hover:bg-white/10 text-white transition-colors"
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
          class="p-2 bg-[#0A2159]/90 backdrop-blur-sm border border-white/10 rounded-lg shadow-sm"
          aria-label="Toggle navigation menu"
        >
          <MenuIcon v-if="!mobileSidebarOpen" class="w-6 h-6 text-white" />
          <XIcon v-else class="w-6 h-6 text-white" />
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
        class="fixed left-0 top-0 h-full w-64 bg-[#0A2159]/90 backdrop-blur-sm border-r border-white/10 z-20 md:hidden"
      >
        <!-- Same content as desktop sidebar -->
        <div class="p-6 border-b border-white/10">
          <h1 class="text-xl font-bold text-white">Mindoro Paint Center</h1>
        </div>
  
        <nav class="p-4 space-y-2">
          <router-link 
            to="/admin/dashboard" 
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
            :class="{ 'bg-white/10': $route.path === '/admin/dashboard' }"
            @click="mobileSidebarOpen = false"
          >
            <LayoutDashboardIcon class="w-5 h-5" />
            <span>Dashboard</span>
          </router-link>
  
          <router-link 
            to="/admin/staff" 
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
            :class="{ 'bg-white/10': $route.path === '/admin/staff' }"
            @click="mobileSidebarOpen = false"
          >
            <UsersIcon class="w-5 h-5" />
            <span>Staff Management</span>
          </router-link>
  
          <router-link 
            to="/admin/inventory" 
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
            :class="{ 'bg-white/10': $route.path === '/admin/inventory' }"
            @click="mobileSidebarOpen = false"
          >
            <PackageIcon class="w-5 h-5" />
            <span>Inventory</span>
          </router-link>
  
          <router-link 
            to="/admin/house-paint-recommender" 
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
            :class="{ 'bg-white/10': $route.path === '/admin/house-paint-recommender' }"
            @click="mobileSidebarOpen = false"
          >
            <HomeIcon class="w-5 h-5" />
            <span>House Paint Recommender</span>
          </router-link>
  
          <router-link 
            to="/admin/paint-mixing" 
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
            :class="{ 'bg-white/10': $route.path === '/admin/paint-mixing' }"
            @click="mobileSidebarOpen = false"
          >
            <PaletteIcon class="w-5 h-5" />
            <span>Paint Mixing</span>
          </router-link>
  
          <router-link 
            to="/admin/sales-analytics" 
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
            :class="{ 'bg-white/10': $route.path === '/admin/sales-analytics' }"
            @click="mobileSidebarOpen = false"
          >
            <TrendingUpIcon class="w-5 h-5" />
            <span>Sales Analytics</span>
          </router-link>
  
          <router-link 
            to="/admin/reports" 
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
            :class="{ 'bg-white/10': $route.path === '/admin/reports' }"
            @click="mobileSidebarOpen = false"
          >
            <ClipboardIcon class="w-5 h-5" />
            <span>Reports</span>
          </router-link>
  
          <router-link 
            to="/admin/settings" 
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
            :class="{ 'bg-white/10': $route.path === '/admin/settings' }"
            @click="mobileSidebarOpen = false"
          >
            <SettingsIcon class="w-5 h-5" />
            <span>System Settings</span>
          </router-link>
  
          <router-link 
            to="/admin/security" 
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
            :class="{ 'bg-white/10': $route.path === '/admin/security' }"
            @click="mobileSidebarOpen = false"
          >
            <ShieldIcon class="w-5 h-5" />
            <span>Security</span>
          </router-link>
        </nav>
  
        <div class="absolute bottom-0 w-64 p-4 border-t border-white/10 bg-[#0A2159]/90 backdrop-blur-sm">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <UserIcon class="w-5 h-5 text-white" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-white truncate">Admin User</p>
              <p class="text-xs text-white/60 truncate">admin@example.com</p>
            </div>
            <button 
              @click="handleLogout"
              class="p-2 rounded-lg hover:bg-white/10 text-white transition-colors"
            >
              <LogOutIcon class="w-5 h-5" />
            </button>
          </div>
        </div>
      </aside>
  
      <!-- Main Content -->
      <main class="flex-1 overflow-auto">
        <!-- Header -->
        <header class="bg-[#0A2159]/80 backdrop-blur-sm border-b border-white/10 px-8 py-4 shadow-md">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 class="text-2xl font-bold text-white">System Settings</h1>
              <p class="text-white/60">Configure your system preferences and settings</p>
            </div>
            <div class="flex items-center gap-4">
              <div class="hidden md:flex items-center gap-2 text-white/80">
                <CalendarIcon class="w-5 h-5" />
                <span>{{ currentDate }}</span>
              </div>
              <div class="hidden md:block h-6 w-px bg-white/20"></div>
              <div class="flex items-center gap-3">
                <span class="text-white">Welcome, Admin</span>
                <div class="relative">
                  <BellIcon class="w-5 h-5 text-white cursor-pointer hover:text-white/70" />
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
              <div class="bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-xl shadow-lg p-6 border border-white/10">
                <h2 class="text-lg font-semibold text-white mb-4">General Settings</h2>
                <form @submit.prevent="saveGeneralSettings" class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-white/80 mb-1">Store Name</label>
                    <input 
                      type="text"
                      v-model="settings.general.storeName"
                      class="w-full px-3 py-2 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 bg-white/5 text-white placeholder-white/40"
                    />
                  </div>
  
                  <div>
                    <label class="block text-sm font-medium text-white/80 mb-1">Store Address</label>
                    <textarea 
                      v-model="settings.general.address"
                      rows="3"
                      class="w-full px-3 py-2 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 bg-white/5 text-white placeholder-white/40"
                    ></textarea>
                  </div>
  
                  <div>
                    <label class="block text-sm font-medium text-white/80 mb-1">Contact Email</label>
                    <input 
                      type="email"
                      v-model="settings.general.email"
                      class="w-full px-3 py-2 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 bg-white/5 text-white placeholder-white/40"
                    />
                  </div>
  
                  <div>
                    <label class="block text-sm font-medium text-white/80 mb-1">Contact Phone</label>
                    <input 
                      type="tel"
                      v-model="settings.general.phone"
                      class="w-full px-3 py-2 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 bg-white/5 text-white placeholder-white/40"
                    />
                  </div>
  
                  <div class="flex justify-end">
                    <button 
                      type="submit"
                      class="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:opacity-90 transition-colors shadow-lg flex items-center gap-2"
                    >
                      <SaveIcon class="w-5 h-5" />
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
  
              <!-- Notification Settings -->
              <div class="bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-xl shadow-lg p-6 border border-white/10">
                <h2 class="text-lg font-semibold text-white mb-4">Notification Settings</h2>
                <div class="space-y-4">
                  <div class="flex items-center justify-between">
                    <div>
                      <p class="font-medium text-white">Email Notifications</p>
                      <p class="text-sm text-white/60">Receive updates via email</p>
                    </div>
                    <label class="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox"
                        v-model="settings.notifications.email"
                        class="sr-only peer"
                      />
                      <div class="w-11 h-6 bg-white/10 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-500/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-white/10 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
  
                  <div class="flex items-center justify-between">
                    <div>
                      <p class="font-medium text-white">Low Stock Alerts</p>
                      <p class="text-sm text-white/60">Get notified when inventory is low</p>
                    </div>
                    <label class="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox"
                        v-model="settings.notifications.lowStock"
                        class="sr-only peer"
                      />
                      <div class="w-11 h-6 bg-white/10 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-500/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-white/10 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
  
                  <div class="flex items-center justify-between">
                    <div>
                      <p class="font-medium text-white">Order Updates</p>
                      <p class="text-sm text-white/60">Notifications for new orders</p>
                    </div>
                    <label class="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox"
                        v-model="settings.notifications.orders"
                        class="sr-only peer"
                      />
                      <div class="w-11 h-6 bg-white/10 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-500/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-white/10 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </div>
  
              <!-- Security Settings -->
              <div class="bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-xl shadow-lg p-6 border border-white/10">
                <h2 class="text-lg font-semibold text-white mb-4">Security Settings</h2>
                <div class="space-y-4">
                  <div class="flex items-center justify-between">
                    <div>
                      <p class="font-medium text-white">Two-Factor Authentication</p>
                      <p class="text-sm text-white/60">Add an extra layer of security</p>
                    </div>
                    <label class="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox"
                        v-model="settings.security.twoFactor"
                        class="sr-only peer"
                      />
                      <div class="w-11 h-6 bg-white/10 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-500/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-white/10 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
  
                  <div class="flex items-center justify-between">
                    <div>
                      <p class="font-medium text-white">Login Notifications</p>
                      <p class="text-sm text-white/60">Get alerted about new logins</p>
                    </div>
                    <label class="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox"
                        v-model="settings.security.loginAlerts"
                        class="sr-only peer"
                      />
                      <div class="w-11 h-6 bg-white/10 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-500/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-white/10 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
  
                  <div class="pt-2">
                    <button 
                      @click="changePassword"
                      class="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors flex items-center gap-2"
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
              <div class="bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-xl shadow-lg p-6 border border-white/10">
                <h2 class="text-lg font-semibold text-white mb-4">System Status</h2>
                <div class="space-y-4">
                  <div>
                    <p class="text-sm text-white/60">Version</p>
                    <p class="font-medium text-white">1.0.0</p>
                  </div>
                  <div>
                    <p class="text-sm text-white/60">Last Updated</p>
                    <p class="font-medium text-white">March 5, 2025</p>
                  </div>
                  <div>
                    <p class="text-sm text-white/60">Database Status</p>
                    <div class="flex items-center gap-2">
                      <div class="w-2 h-2 rounded-full bg-green-500"></div>
                      <p class="font-medium text-white">Connected</p>
                    </div>
                  </div>
                  <div>
                    <p class="text-sm text-white/60">Server Status</p>
                    <div class="flex items-center gap-2">
                      <div class="w-2 h-2 rounded-full bg-green-500"></div>
                      <p class="font-medium text-white">Online</p>
                    </div>
                  </div>
                </div>
              </div>
  
              <!-- Storage Usage -->
              <div class="bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-xl shadow-lg p-6 border border-white/10">
                <h2 class="text-lg font-semibold text-white mb-4">Storage Usage</h2>
                <div class="space-y-4">
                  <div>
                    <div class="flex justify-between items-center mb-1">
                      <p class="text-sm text-white/60">Database Storage</p>
                      <p class="text-sm font-medium text-white">75%</p>
                    </div>
                    <div class="w-full bg-white/10 rounded-full h-2">
                      <div class="bg-blue-600 h-2 rounded-full" style="width: 75%"></div>
                    </div>
                  </div>
  
                  <div>
                    <div class="flex justify-between items-center mb-1">
                      <p class="text-sm text-white/60">File Storage</p>
                      <p class="text-sm font-medium text-white">45%</p>
                    </div>
                    <div class="w-full bg-white/10 rounded-full h-2">
                      <div class="bg-green-500 h-2 rounded-full" style="width: 45%"></div>
                    </div>
                  </div>
  
                  <div>
                    <div class="flex justify-between items-center mb-1">
                      <p class="text-sm text-white/60">Backup Storage</p>
                      <p class="text-sm font-medium text-white">30%</p>
                    </div>
                    <div class="w-full bg-white/10 rounded-full h-2">
                      <div class="bg-purple-500 h-2 rounded-full" style="width: 30%"></div>
                    </div>
                  </div>
                </div>
              </div>
  
              <!-- Quick Actions -->
              <div class="bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-xl shadow-lg p-6 border border-white/10">
                <h2 class="text-lg font-semibold text-white mb-4">Quick Actions</h2>
                <div class="space-y-3">
                  <button 
                    @click="clearCache"
                    class="w-full flex items-center gap-2 px-4 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <RefreshCwIcon class="w-5 h-5" />
                    <span>Clear Cache</span>
                  </button>
                  <button 
                    @click="backupData"
                    class="w-full flex items-center gap-2 px-4 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <DatabaseIcon class="w-5 h-5" />
                    <span>Backup Data</span>
                  </button>
                  <button 
                    @click="checkUpdates"
                    class="w-full flex items-center gap-2 px-4 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <DownloadIcon class="w-5 h-5" />
                    <span>Check for Updates</span>
                  </button>
                  <button 
                    @click="optimizeDatabase"
                    class="w-full flex items-center gap-2 px-4 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <ZapIcon class="w-5 h-5" />
                    <span>Optimize Database</span>
                  </button>
                </div>
              </div>
  
              <!-- System Logs -->
              <div class="bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-xl shadow-lg p-6 border border-white/10">
                <div class="flex items-center justify-between mb-4">
                  <h2 class="text-lg font-semibold text-white">System Logs</h2>
                  <button 
                    @click="viewAllLogs"
                    class="text-sm text-white/80 hover:text-white flex items-center gap-1"
                  >
                    <ExternalLinkIcon class="w-4 h-4" />
                    View All
                  </button>
                </div>
                <div class="space-y-3 max-h-60 overflow-y-auto">
                  <div v-for="log in recentLogs" :key="log.id" class="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <div class="flex items-center gap-2 mb-1">
                      <span 
                        class="px-2 py-0.5 text-xs rounded-full"
                        :class="{
                          'bg-green-500/20 text-green-400': log.type === 'info',
                          'bg-yellow-500/20 text-yellow-400': log.type === 'warning',
                          'bg-red-500/20 text-red-400': log.type === 'error'
                        }"
                      >
                        {{ log.type.toUpperCase() }}
                      </span>
                      <span class="text-xs text-white/60">{{ formatDate(log.timestamp) }}</span>
                    </div>
                    <p class="text-sm text-white">{{ log.message }}</p>
                  </div>
                  
                  <div v-if="recentLogs.length === 0" class="text-center py-4">
                    <p class="text-white/60">No recent logs</p>
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
      class="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 animate-fade-in"
    >
      <CheckIcon class="w-5 h-5" />
      <span>{{ toastMessage }}</span>
    </div>
  
    <!-- Change Password Modal -->
    <div v-if="showPasswordModal" class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div class="bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-xl w-full max-w-md border border-white/10 shadow-2xl">
        <div class="p-6 border-b border-white/10">
          <h3 class="text-xl font-bold text-white">Change Password</h3>
        </div>
        
        <form @submit.prevent="updatePassword" class="p-6 space-y-4">
          <div>
            <label class="block text-sm text-white/80 mb-1">Current Password</label>
            <input 
              type="password"
              v-model="passwordForm.current"
              required
              class="w-full px-3 py-2 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 bg-white/5 text-white"
            />
          </div>
          
          <div>
            <label class="block text-sm text-white/80 mb-1">New Password</label>
            <input 
              type="password"
              v-model="passwordForm.new"
              required
              class="w-full px-3 py-2 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 bg-white/5 text-white"
            />
          </div>
          
          <div>
            <label class="block text-sm text-white/80 mb-1">Confirm New Password</label>
            <input 
              type="password"
              v-model="passwordForm.confirm"
              required
              class="w-full px-3 py-2 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 bg-white/5 text-white"
            />
          </div>
  
          <div class="flex justify-end gap-3 mt-6">
            <button 
              type="button"
              @click="showPasswordModal = false"
              class="px-4 py-2 border border-white/10 rounded-lg text-white hover:bg-white/10 transition-colors"
            >
              Cancel
            </button>
            <button 
              type="submit"
              class="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:opacity-90 transition-colors shadow-lg"
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
    Bell as BellIcon
  } from 'lucide-vue-next'
  
  const router = useRouter()
  const mobileSidebarOpen = ref(false)
  const showToast = ref(false)
  const toastMessage = ref('')
  const showPasswordModal = ref(false)
  
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
      alert('New passwords do not match!')
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
  
  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.2);
  }
  
  /* Modal transition */
  .modal-enter-active,
  .modal-leave-active {
    transition: opacity 0.3s ease;
  }
  
  .modal-enter-from,
  .modal-leave-to {
    opacity: 0;
  }
  </style>