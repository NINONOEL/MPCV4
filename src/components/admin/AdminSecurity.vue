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
              <h1 class="text-2xl font-bold text-white">Security Settings</h1>
              <p class="text-white/60">Manage your account security and authentication settings</p>
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
          <!-- Security Settings Grid -->
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <!-- Password & Authentication -->
            <div class="lg:col-span-2 space-y-6">
              <!-- Change Password -->
              <div class="bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-xl shadow-lg p-6 border border-white/10">
                <h2 class="text-lg font-semibold text-white mb-4">Change Password</h2>
                <form @submit.prevent="changePassword" class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-white/80 mb-1">Current Password</label>
                    <input 
                      type="password"
                      v-model="passwordForm.current"
                      required
                      class="w-full px-3 py-2 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 bg-white/5 text-white placeholder-white/40"
                    />
                  </div>
  
                  <div>
                    <label class="block text-sm font-medium text-white/80 mb-1">New Password</label>
                    <input 
                      type="password"
                      v-model="passwordForm.new"
                      required
                      class="w-full px-3 py-2 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 bg-white/5 text-white placeholder-white/40"
                    />
                  </div>
  
                  <div>
                    <label class="block text-sm font-medium text-white/80 mb-1">Confirm New Password</label>
                    <input 
                      type="password"
                      v-model="passwordForm.confirm"
                      required
                      class="w-full px-3 py-2 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 bg-white/5 text-white placeholder-white/40"
                    />
                  </div>
  
                  <div class="flex justify-end">
                    <button 
                      type="submit"
                      class="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:opacity-90 transition-colors shadow-lg flex items-center gap-2"
                    >
                      <KeyIcon class="w-5 h-5" />
                      Update Password
                    </button>
                  </div>
                </form>
              </div>
  
              <!-- Two-Factor Authentication -->
              <div class="bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-xl shadow-lg p-6 border border-white/10">
                <div class="flex items-center justify-between mb-4">
                  <div>
                    <h2 class="text-lg font-semibold text-white">Two-Factor Authentication</h2>
                    <p class="text-sm text-white/60">Add an extra layer of security to your account</p>
                  </div>
                  <label class="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox"
                      v-model="security.twoFactor"
                      class="sr-only peer"
                    />
                    <div class="w-11 h-6 bg-white/10 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-500/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-white/10 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>
                <div v-if="security.twoFactor" class="space-y-4">
                  <div class="p-4 bg-white/5 rounded-lg border border-white/10">
                    <p class="text-sm text-white mb-3">Scan this QR code with your authenticator app</p>
                    <div class="w-40 h-40 bg-white/10 rounded-lg flex items-center justify-center mx-auto">
                      <QrCodeIcon class="w-32 h-32 text-white/40" />
                    </div>
                    <p class="text-xs text-white/60 mt-3 text-center">
                      Can't scan the QR code? Use this code instead: <span class="font-mono text-white">ABCD-EFGH-IJKL</span>
                    </p>
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-white/80 mb-1">Verification Code</label>
                    <div class="flex gap-2">
                      <input 
                        type="text"
                        v-model="twoFactorCode"
                        maxlength="6"
                        class="w-32 px-3 py-2 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 bg-white/5 text-white text-center text-xl tracking-wider font-mono"
                        placeholder="000000"
                      />
                      <button 
                        @click="verifyTwoFactor"
                        class="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:opacity-90 transition-colors shadow-lg"
                      >
                        Verify
                      </button>
                    </div>
                  </div>
                </div>
                <div v-else class="p-4 bg-white/5 rounded-lg border border-white/10 mt-4">
                  <div class="flex items-start gap-3">
                    <div class="p-2 bg-yellow-500/20 rounded-lg mt-1">
                      <AlertTriangleIcon class="w-5 h-5 text-yellow-400" />
                    </div>
                    <div>
                      <p class="text-white font-medium">Enhance your account security</p>
                      <p class="text-sm text-white/60 mt-1">
                        Two-factor authentication adds an extra layer of security to your account by requiring a verification code in addition to your password.
                      </p>
                      <p class="text-sm text-white/60 mt-2">
                        We recommend enabling this feature to protect your account from unauthorized access.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
  
              <!-- Login History -->
              <div class="bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-xl shadow-lg p-6 border border-white/10">
                <div class="flex items-center justify-between mb-4">
                  <h2 class="text-lg font-semibold text-white">Login History</h2>
                  <button class="text-sm text-white/80 hover:text-white flex items-center gap-1">
                    <ExternalLinkIcon class="w-4 h-4" />
                    View All
                  </button>
                </div>
                <div class="space-y-4">
                  <div v-for="(login, index) in loginHistory" :key="index" class="p-3 bg-white/5 rounded-lg border border-white/10">
                    <div class="flex items-center justify-between">
                      <div class="flex items-center gap-3">
                        <div class="p-2 bg-white/10 rounded-lg">
                          <component :is="login.icon" class="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p class="text-sm font-medium text-white">{{ login.device }}</p>
                          <p class="text-xs text-white/60">{{ login.location }}</p>
                        </div>
                      </div>
                      <p class="text-xs text-white/60">{{ login.time }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            <!-- Security Status -->
            <div class="space-y-6">
              <!-- Account Security -->
              <div class="bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-xl shadow-lg p-6 border border-white/10">
                <h2 class="text-lg font-semibold text-white mb-4">Security Status</h2>
                <div class="space-y-4">
                  <div class="flex items-center justify-between">
                    <div>
                      <p class="font-medium text-white">Password Strength</p>
                      <p class="text-sm text-white/60">Your password is strong</p>
                    </div>
                    <div class="p-2 bg-green-500/20 rounded-lg">
                      <ShieldCheckIcon class="w-5 h-5 text-green-400" />
                    </div>
                  </div>
  
                  <div class="flex items-center justify-between">
                    <div>
                      <p class="font-medium text-white">Last Password Change</p>
                      <p class="text-sm text-white/60">30 days ago</p>
                    </div>
                    <div class="p-2 bg-yellow-500/20 rounded-lg">
                      <ClockIcon class="w-5 h-5 text-yellow-400" />
                    </div>
                  </div>
  
                  <div class="flex items-center justify-between">
                    <div>
                      <p class="font-medium text-white">Two-Factor Auth</p>
                      <p class="text-sm text-white/60">
                        {{ security.twoFactor ? 'Enabled' : 'Disabled' }}
                      </p>
                    </div>
                    <div 
                      class="p-2 rounded-lg"
                      :class="security.twoFactor ? 'bg-green-500/20' : 'bg-red-500/20'"
                    >
                      <component 
                        :is="security.twoFactor ? ShieldCheckIcon : ShieldOffIcon"
                        class="w-5 h-5"
                        :class="security.twoFactor ? 'text-green-400' : 'text-red-400'"
                      />
                    </div>
                  </div>
  
                  <div class="flex items-center justify-between">
                    <div>
                      <p class="font-medium text-white">Account Recovery</p>
                      <p class="text-sm text-white/60">Email verified</p>
                    </div>
                    <div class="p-2 bg-green-500/20 rounded-lg">
                      <MailCheckIcon class="w-5 h-5 text-green-400" />
                    </div>
                  </div>
                </div>
              </div>
  
              <!-- Recent Activity -->
              <div class="bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-xl shadow-lg p-6 border border-white/10">
                <h2 class="text-lg font-semibold text-white mb-4">Recent Activity</h2>
                <div class="space-y-4">
                  <div v-for="activity in recentActivity" :key="activity.id" class="flex gap-3">
                    <div class="p-2 rounded-lg" :class="activityIconBg(activity.type)">
                      <component :is="activity.icon" class="w-4 h-4" :class="activityIconColor(activity.type)" />
                    </div>
                    <div>
                      <p class="text-sm font-medium text-white">{{ activity.action }}</p>
                      <p class="text-xs text-white/60">{{ activity.time }}</p>
                    </div>
                  </div>
                </div>
              </div>
  
              <!-- Active Sessions -->
              <div class="bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-xl shadow-lg p-6 border border-white/10">
                <h2 class="text-lg font-semibold text-white mb-4">Active Sessions</h2>
                <div class="space-y-4">
                  <div v-for="session in activeSessions" :key="session.id" class="p-3 bg-white/5 rounded-lg border border-white/10">
                    <div class="flex items-center justify-between">
                      <div class="flex items-center gap-3">
                        <div class="p-2 bg-white/10 rounded-lg">
                          <component :is="session.icon" class="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p class="text-sm font-medium text-white">{{ session.device }}</p>
                          <p class="text-xs text-white/60">{{ session.location }}</p>
                        </div>
                      </div>
                      <button 
                        @click="terminateSession(session.id)"
                        class="px-3 py-1 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 text-xs font-medium"
                      >
                        Terminate
                      </button>
                    </div>
                  </div>
                </div>
              </div>
  
              <!-- Security Recommendations -->
              <div class="bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-xl shadow-lg p-6 border border-white/10">
                <h2 class="text-lg font-semibold text-white mb-4">Security Recommendations</h2>
                <div class="space-y-3">
                  <div v-for="(recommendation, index) in securityRecommendations" :key="index" class="flex gap-3 items-start">
                    <div class="p-1.5 rounded-lg" :class="recommendation.completed ? 'bg-green-500/20' : 'bg-yellow-500/20'">
                      <component 
                        :is="recommendation.completed ? CheckIcon : AlertTriangleIcon" 
                        class="w-4 h-4" 
                        :class="recommendation.completed ? 'text-green-400' : 'text-yellow-400'" 
                      />
                    </div>
                    <div>
                      <p class="text-sm font-medium text-white">{{ recommendation.text }}</p>
                      <div v-if="!recommendation.completed" class="mt-1">
                        <button 
                          @click="completeRecommendation(index)"
                          class="text-xs text-blue-400 hover:text-blue-300"
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
      class="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 animate-fade-in"
    >
      <CheckIcon class="w-5 h-5" />
      <span>{{ toastMessage }}</span>
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
    Chrome as ChromeIcon
  } from 'lucide-vue-next'
  
  const router = useRouter()
  const mobileSidebarOpen = ref(false)
  const showToast = ref(false)
  const toastMessage = ref('')
  
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
      alert('New passwords do not match')
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
      showToast.value = true
      setTimeout(() => {
        showToast.value = false
      }, 3000)
    } catch (error) {
      console.error('Error changing password:', error)
      alert('Error changing password')
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
      showToast.value = true
      setTimeout(() => {
        showToast.value = false
      }, 3000)
    } catch (error) {
      console.error('Error verifying 2FA:', error)
      alert('Error verifying code')
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
      showToast.value = true
      setTimeout(() => {
        showToast.value = false
      }, 3000)
    } catch (error) {
      console.error('Error terminating session:', error)
      alert('Error terminating session')
    }
  }
  
  const completeRecommendation = (index) => {
    if (securityRecommendations.value[index].text.includes('two-factor')) {
      security.value.twoFactor = true
    } else if (securityRecommendations.value[index].text.includes('active sessions')) {
      // Scroll to active sessions section
      document.querySelector('h2:contains("Active Sessions")').scrollIntoView({ behavior: 'smooth' })
    }
    
    securityRecommendations.value[index].completed = true
    
    // Show success toast
    toastMessage.value = 'Security recommendation completed!'
    showToast.value = true
    setTimeout(() => {
      showToast.value = false
    }, 3000)
  }
  
  const activityIconBg = (type) => {
    switch (type) {
      case 'security':
        return 'bg-green-500/20'
      case 'login':
        return 'bg-blue-500/20'
      default:
        return 'bg-white/10'
    }
  }
  
  const activityIconColor = (type) => {
    switch (type) {
      case 'security':
        return 'text-green-400'
      case 'login':
        return 'text-blue-400'
      default:
        return 'text-white'
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