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
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-amber-600 bg-amber-50 hover:bg-amber-100 hover:text-amber-700"
            :class="{ 'shadow-sm border border-amber-200 transform scale-105': $route.path === '/admin/settings' }"
          >
            <SettingsIcon class="w-5 h-5" />
            <span>System Settings</span>
          </router-link>

          <router-link 
            to="/admin/security" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-red-600 bg-red-50 shadow-sm border border-red-200 transform scale-105"
            :class="{ 'hover:bg-red-100 hover:text-red-700': $route.path !== '/admin/security' }"
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
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-amber-600 bg-amber-50"
            :class="{ 'shadow-sm border border-amber-200': $route.path === '/admin/settings' }"
            @click="mobileSidebarOpen = false"
          >
            <SettingsIcon class="w-5 h-5" />
            <span>System Settings</span>
          </router-link>

          <router-link 
            to="/admin/security" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-red-600 bg-red-50 shadow-sm border border-red-200"
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
              <h1 class="text-2xl font-bold text-gray-900">Security Settings</h1>
              <p class="text-gray-600">Manage your account security and authentication settings</p>
            </div>
            <div class="flex items-center gap-4">
              <div class="hidden md:flex items-center gap-2 text-gray-700">
                <CalendarIcon class="w-5 h-5 text-red-500" />
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
          <!-- Security Settings Grid -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <!-- Password & Authentication -->
            <div class="lg:col-span-2 space-y-6">
              <!-- Change Password -->
              <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 p-6">
                <div class="flex items-center gap-3 mb-6">
                  <div class="p-3 rounded-xl shadow-lg bg-gradient-to-br from-red-400 via-pink-500 to-rose-600 transform hover:scale-110 transition-transform duration-200">
                    <KeyIcon class="w-6 h-6 text-white" />
                  </div>
                  <h2 class="text-xl font-bold text-gray-900">Change Password</h2>
                </div>
                <form @submit.prevent="changePassword" class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                    <input 
                      type="password"
                      v-model="passwordForm.current"
                      required
                      class="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500"
                      placeholder="Enter current password"
                    />
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                    <input 
                      type="password"
                      v-model="passwordForm.new"
                      required
                      class="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500"
                      placeholder="Enter new password"
                    />
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                    <input 
                      type="password"
                      v-model="passwordForm.confirm"
                      required
                      class="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500"
                      placeholder="Confirm new password"
                    />
                  </div>

                  <div class="flex justify-end pt-4">
                    <button 
                      type="submit"
                      class="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center gap-2"
                    >
                      <KeyIcon class="w-5 h-5" />
                      Update Password
                    </button>
                  </div>
                </form>
              </div>

              <!-- Two-Factor Authentication -->
              <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 p-6">
                <div class="flex items-center justify-between mb-6">
                  <div class="flex items-center gap-3">
                    <div class="p-3 rounded-xl shadow-lg bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600 transform hover:scale-110 transition-transform duration-200">
                      <ShieldCheckIcon class="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 class="text-xl font-bold text-gray-900">Two-Factor Authentication</h2>
                      <p class="text-sm text-gray-600">Add an extra layer of security to your account</p>
                    </div>
                  </div>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox"
                      v-model="security.twoFactor"
                      class="sr-only peer"
                    />
                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                  </label>
                </div>
                <div v-if="security.twoFactor" class="space-y-4">
                  <div class="p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-lg border border-green-200">
                    <p class="text-sm text-gray-700 mb-4 font-medium">Scan this QR code with your authenticator app</p>
                    <div class="w-40 h-40 bg-white rounded-lg flex items-center justify-center mx-auto shadow-lg border border-gray-200">
                      <QrCodeIcon class="w-32 h-32 text-gray-400" />
                    </div>
                    <p class="text-xs text-gray-600 mt-4 text-center">
                      Can't scan the QR code? Use this code instead: <span class="font-mono text-gray-900 bg-white px-2 py-1 rounded border">ABCD-EFGH-IJKL</span>
                    </p>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Verification Code</label>
                    <div class="flex gap-3">
                      <input 
                        type="text"
                        v-model="twoFactorCode"
                        maxlength="6"
                        class="w-32 px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white text-gray-900 text-center text-xl tracking-wider font-mono"
                        placeholder="000000"
                      />
                      <button 
                        @click="verifyTwoFactor"
                        class="px-6 py-2 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                      >
                        Verify
                      </button>
                    </div>
                  </div>
                </div>
                <div v-else class="p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg border border-amber-200 mt-4">
                  <div class="flex items-start gap-3">
                    <div class="p-2 bg-amber-100 rounded-lg mt-1">
                      <AlertTriangleIcon class="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <p class="text-gray-900 font-medium">Enhance your account security</p>
                      <p class="text-sm text-gray-700 mt-1">
                        Two-factor authentication adds an extra layer of security to your account by requiring a verification code in addition to your password.
                      </p>
                      <p class="text-sm text-gray-700 mt-2">
                        We recommend enabling this feature to protect your account from unauthorized access.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Login History -->
              <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 p-6">
                <div class="flex items-center justify-between mb-6">
                  <div class="flex items-center gap-3">
                    <div class="p-3 rounded-xl shadow-lg bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-600 transform hover:scale-110 transition-transform duration-200">
                      <ClockIcon class="w-6 h-6 text-white" />
                    </div>
                    <h2 class="text-xl font-bold text-gray-900">Login History</h2>
                  </div>
                  <button class="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1 px-3 py-1 rounded-lg hover:bg-gray-100 transition-colors">
                    <ExternalLinkIcon class="w-4 h-4" />
                    View All
                  </button>
                </div>
                <div class="space-y-4">
                  <div v-for="(login, index) in loginHistory" :key="index" class="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200">
                    <div class="flex items-center justify-between">
                      <div class="flex items-center gap-3">
                        <div class="p-2 bg-white rounded-lg shadow-sm border border-gray-200">
                          <component :is="login.icon" class="w-5 h-5 text-gray-600" />
                        </div>
                        <div>
                          <p class="text-sm font-medium text-gray-900">{{ login.device }}</p>
                          <p class="text-xs text-gray-600">{{ login.location }}</p>
                        </div>
                      </div>
                      <p class="text-xs text-gray-500">{{ login.time }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Security Status -->
            <div class="space-y-6">
              <!-- Account Security -->
              <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 p-6">
                <div class="flex items-center gap-3 mb-6">
                  <div class="p-3 rounded-xl shadow-lg bg-gradient-to-br from-blue-400 via-cyan-500 to-indigo-600 transform hover:scale-110 transition-transform duration-200">
                    <ShieldCheckIcon class="w-6 h-6 text-white" />
                  </div>
                  <h2 class="text-xl font-bold text-gray-900">Security Status</h2>
                </div>
                <div class="space-y-4">
                  <div class="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                    <div>
                      <p class="font-medium text-gray-900">Password Strength</p>
                      <p class="text-sm text-gray-600">Your password is strong</p>
                    </div>
                    <div class="p-2 bg-green-100 rounded-lg">
                      <ShieldCheckIcon class="w-5 h-5 text-green-600" />
                    </div>
                  </div>

                  <div class="flex items-center justify-between p-3 bg-amber-50 rounded-lg border border-amber-200">
                    <div>
                      <p class="font-medium text-gray-900">Last Password Change</p>
                      <p class="text-sm text-gray-600">30 days ago</p>
                    </div>
                    <div class="p-2 bg-amber-100 rounded-lg">
                      <ClockIcon class="w-5 h-5 text-amber-600" />
                    </div>
                  </div>

                  <div class="flex items-center justify-between p-3 rounded-lg border" :class="security.twoFactor ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'">
                    <div>
                      <p class="font-medium text-gray-900">Two-Factor Auth</p>
                      <p class="text-sm text-gray-600">
                        {{ security.twoFactor ? 'Enabled' : 'Disabled' }}
                      </p>
                    </div>
                    <div 
                      class="p-2 rounded-lg"
                      :class="security.twoFactor ? 'bg-green-100' : 'bg-red-100'"
                    >
                      <component 
                        :is="security.twoFactor ? ShieldCheckIcon : ShieldOffIcon"
                        class="w-5 h-5"
                        :class="security.twoFactor ? 'text-green-600' : 'text-red-600'"
                      />
                    </div>
                  </div>

                  <div class="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                    <div>
                      <p class="font-medium text-gray-900">Account Recovery</p>
                      <p class="text-sm text-gray-600">Email verified</p>
                    </div>
                    <div class="p-2 bg-green-100 rounded-lg">
                      <MailCheckIcon class="w-5 h-5 text-green-600" />
                    </div>
                  </div>
                </div>
              </div>

              <!-- Recent Activity -->
              <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 p-6">
                <div class="flex items-center gap-3 mb-6">
                  <div class="p-3 rounded-xl shadow-lg bg-gradient-to-br from-orange-400 via-amber-500 to-yellow-500 transform hover:scale-110 transition-transform duration-200">
                    <ActivityIcon class="w-6 h-6 text-white" />
                  </div>
                  <h2 class="text-xl font-bold text-gray-900">Recent Activity</h2>
                </div>
                <div class="space-y-4">
                  <div v-for="activity in recentActivity" :key="activity.id" class="flex gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <div class="p-2 rounded-lg" :class="activityIconBg(activity.type)">
                      <component :is="activity.icon" class="w-4 h-4" :class="activityIconColor(activity.type)" />
                    </div>
                    <div>
                      <p class="text-sm font-medium text-gray-900">{{ activity.action }}</p>
                      <p class="text-xs text-gray-600">{{ activity.time }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Active Sessions -->
              <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 p-6">
                <div class="flex items-center gap-3 mb-6">
                  <div class="p-3 rounded-xl shadow-lg bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-600 transform hover:scale-110 transition-transform duration-200">
                    <MonitorIcon class="w-6 h-6 text-white" />
                  </div>
                  <h2 class="text-xl font-bold text-gray-900">Active Sessions</h2>
                </div>
                <div class="space-y-4">
                  <div v-for="session in activeSessions" :key="session.id" class="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div class="flex items-center justify-between">
                      <div class="flex items-center gap-3">
                        <div class="p-2 bg-white rounded-lg shadow-sm border border-gray-200">
                          <component :is="session.icon" class="w-5 h-5 text-gray-600" />
                        </div>
                        <div>
                          <p class="text-sm font-medium text-gray-900">{{ session.device }}</p>
                          <p class="text-xs text-gray-600">{{ session.location }}</p>
                        </div>
                      </div>
                      <button 
                        @click="terminateSession(session.id)"
                        class="px-3 py-1 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 text-xs font-medium transition-colors border border-red-200"
                      >
                        Terminate
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Security Recommendations -->
              <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 p-6">
                <div class="flex items-center gap-3 mb-6">
                  <div class="p-3 rounded-xl shadow-lg bg-gradient-to-br from-violet-400 via-purple-500 to-fuchsia-600 transform hover:scale-110 transition-transform duration-200">
                    <LightbulbIcon class="w-6 h-6 text-white" />
                  </div>
                  <h2 class="text-xl font-bold text-gray-900">Security Recommendations</h2>
                </div>
                <div class="space-y-3">
                  <div v-for="(recommendation, index) in securityRecommendations" :key="index" class="flex gap-3 items-start p-3 rounded-lg border" :class="recommendation.completed ? 'bg-green-50 border-green-200' : 'bg-amber-50 border-amber-200'">
                    <div class="p-1.5 rounded-lg" :class="recommendation.completed ? 'bg-green-100' : 'bg-amber-100'">
                      <component 
                        :is="recommendation.completed ? CheckIcon : AlertTriangleIcon" 
                        class="w-4 h-4" 
                        :class="recommendation.completed ? 'text-green-600' : 'text-amber-600'" 
                      />
                    </div>
                    <div class="flex-1">
                      <p class="text-sm font-medium text-gray-900">{{ recommendation.text }}</p>
                      <div v-if="!recommendation.completed" class="mt-1">
                        <button 
                          @click="completeRecommendation(index)"
                          class="text-xs text-blue-600 hover:text-blue-800 font-medium"
                        >
                          {{ recommendation.actionText }}
                        </button>
                      </div>
                    </div>
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
  ShieldCheck as ShieldCheckIcon,
  ShieldOff as ShieldOffIcon,
  Clock as ClockIcon,
  QrCode as QrCodeIcon,
  Smartphone as SmartphoneIcon,
  Laptop as LaptopIcon,
  LogIn as LogInIcon,
  Key as KeyIcon,
  AlertTriangle as AlertTriangleIcon,
  Check as CheckIcon,
  ExternalLink as ExternalLinkIcon,
  Calendar as CalendarIcon,
  Bell as BellIcon,
  MailCheck as MailCheckIcon,
  Chrome as ChromeIcon,
  Monitor as MonitorIcon,
  Activity as ActivityIcon,
  Lightbulb as LightbulbIcon
} from 'lucide-vue-next'

const router = useRouter()
const mobileSidebarOpen = ref(false)
const showToast = ref(false)
const toastMessage = ref('')
const notificationType = ref('success')
const userDisplayName = ref('')
const userEmail = ref('')

// Current date
const currentDate = new Date().toLocaleDateString('en-US', { 
  weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' 
})

// Form states - all reset to empty
const passwordForm = ref({
  current: '',
  new: '',
  confirm: ''
})

const security = ref({
  twoFactor: false
})

const twoFactorCode = ref('')

// Recent activity
const recentActivity = ref([
  {
    id: 1,
    action: 'Password changed',
    time: '2 hours ago',
    icon: KeyIcon,
    type: 'security'
  },
  {
    id: 2,
    action: 'New login from Chrome',
    time: '5 hours ago',
    icon: LogInIcon,
    type: 'login'
  },
  {
    id: 3,
    action: 'Two-factor authentication enabled',
    time: '1 day ago',
    icon: ShieldCheckIcon,
    type: 'security'
  }
])

// Active sessions
const activeSessions = ref([
  {
    id: 1,
    device: 'Chrome on Windows',
    location: 'Manila, Philippines',
    icon: LaptopIcon
  },
  {
    id: 2,
    device: 'Safari on iPhone',
    location: 'Mindoro, Philippines',
    icon: SmartphoneIcon
  }
])

// Login history
const loginHistory = ref([
  {
    device: 'Chrome on Windows',
    location: 'Manila, Philippines',
    time: 'Just now',
    icon: ChromeIcon
  },
  {
    device: 'Safari on iPhone',
    location: 'Mindoro, Philippines',
    time: 'Yesterday, 3:45 PM',
    icon: SmartphoneIcon
  },
  {
    device: 'Firefox on MacOS',
    location: 'Quezon City, Philippines',
    time: 'Mar 10, 2025, 10:30 AM',
    icon: LaptopIcon
  }
])

// Security recommendations
const securityRecommendations = ref([
  {
    text: 'Enable two-factor authentication',
    completed: false,
    actionText: 'Enable now'
  },
  {
    text: 'Update your password regularly',
    completed: true,
    actionText: ''
  },
  {
    text: 'Verify your recovery email',
    completed: true,
    actionText: ''
  },
  {
    text: 'Review active sessions',
    completed: false,
    actionText: 'Review now'
  }
])

// Methods
const changePassword = async () => {
  if (passwordForm.value.new !== passwordForm.value.confirm) {
    toastMessage.value = 'New passwords do not match!'
    notificationType.value = 'error'
    showToast.value = true
    setTimeout(() => {
      showToast.value = false
    }, 3000)
    return
  }
  
  try {
    // Implement password change logic
    console.log('Changing password...')
    
    // Reset form
    passwordForm.value = {
      current: '',
      new: '',
      confirm: ''
    }
    
    // Show success toast
    toastMessage.value = 'Password updated successfully!'
    notificationType.value = 'success'
    showToast.value = true
    setTimeout(() => {
      showToast.value = false
    }, 3000)
  } catch (error) {
    console.error('Error changing password:', error)
    toastMessage.value = 'Error changing password'
    notificationType.value = 'error'
    showToast.value = true
    setTimeout(() => {
      showToast.value = false
    }, 3000)
  }
}

const verifyTwoFactor = async () => {
  try {
    // Implement 2FA verification logic
    console.log('Verifying 2FA code:', twoFactorCode.value)
    
    // Reset code
    twoFactorCode.value = ''
    
    // Show success toast
    toastMessage.value = 'Two-factor authentication enabled successfully!'
    notificationType.value = 'success'
    showToast.value = true
    setTimeout(() => {
      showToast.value = false
    }, 3000)
  } catch (error) {
    console.error('Error verifying 2FA:', error)
    toastMessage.value = 'Error verifying code'
    notificationType.value = 'error'
    showToast.value = true
    setTimeout(() => {
      showToast.value = false
    }, 3000)
  }
}

const terminateSession = async (sessionId) => {
  try {
    // Implement session termination logic
    console.log('Terminating session:', sessionId)
    
    // Remove session from list
    activeSessions.value = activeSessions.value.filter(session => session.id !== sessionId)
    
    // Show success toast
    toastMessage.value = 'Session terminated successfully!'
    notificationType.value = 'success'
    showToast.value = true
    setTimeout(() => {
      showToast.value = false
    }, 3000)
  } catch (error) {
    console.error('Error terminating session:', error)
    toastMessage.value = 'Error terminating session'
    notificationType.value = 'error'
    showToast.value = true
    setTimeout(() => {
      showToast.value = false
    }, 3000)
  }
}

const completeRecommendation = (index) => {
  if (securityRecommendations.value[index].text.includes('two-factor')) {
    security.value.twoFactor = true
  } else if (securityRecommendations.value[index].text.includes('active sessions')) {
    // Scroll to active sessions section
    const element = document.querySelector('h2')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
  
  securityRecommendations.value[index].completed = true
  
  // Show success toast
  toastMessage.value = 'Security recommendation completed!'
  notificationType.value = 'success'
  showToast.value = true
  setTimeout(() => {
    showToast.value = false
  }, 3000)
}

const activityIconBg = (type) => {
  switch (type) {
    case 'security':
      return 'bg-green-100'
    case 'login':
      return 'bg-blue-100'
    default:
      return 'bg-gray-100'
  }
}

const activityIconColor = (type) => {
  switch (type) {
    case 'security':
      return 'text-green-600'
    case 'login':
      return 'text-blue-600'
    default:
      return 'text-gray-600'
  }
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