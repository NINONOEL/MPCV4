<template>
    <div class="min-h-screen bg-gray-50">
      <div class="flex h-screen">
        <!-- Sidebar - Copied exactly from Dashboard -->
        <aside class="w-64 bg-white border-r border-gray-200 hidden md:block">
          <!-- Logo/Brand -->
          <div class="p-6 border-b border-gray-200">
            <h1 class="text-xl font-bold text-gray-900">Mindoro Paint Center</h1>
          </div>
    
          <!-- Navigation -->
          <nav class="p-4 space-y-2">
            <router-link 
              v-for="item in navigationItems" 
              :key="item.path"
              :to="item.path"
              class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              :class="{ 'bg-gray-100': $route.path === item.path }"
            >
              <component :is="item.icon" class="w-5 h-5" />
              <span>{{ item.name }}</span>
            </router-link>
          </nav>
    
          <!-- User Menu -->
          <div class="absolute bottom-0 w-64 p-4 border-t border-gray-200 bg-white">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <UserIcon class="w-5 h-5 text-gray-600" />
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900 truncate">Admin User</p>
                <p class="text-xs text-gray-500 truncate">admin@example.com</p>
              </div>
              <button 
                @click="handleLogout"
                class="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                title="Logout"
              >
                <LogOutIcon class="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </aside>
    
        <!-- Mobile Sidebar Toggle -->
        <div class="fixed top-4 left-4 z-30 md:hidden">
          <button 
            @click="toggleMobileSidebar"
            class="p-2 bg-white border border-gray-200 rounded-lg shadow-sm"
          >
            <MenuIcon v-if="!mobileSidebarOpen" class="w-6 h-6 text-gray-600" />
            <XIcon v-else class="w-6 h-6 text-gray-600" />
          </button>
        </div>
    
        <!-- Mobile Sidebar -->
        <div 
          v-if="mobileSidebarOpen" 
          class="fixed inset-0 bg-black/20 z-20 md:hidden"
          @click="mobileSidebarOpen = false"
        ></div>
        
        <aside 
          v-if="mobileSidebarOpen"
          class="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 z-20 md:hidden"
        >
          <!-- Same content as desktop sidebar -->
          <div class="p-6 border-b border-gray-200">
            <h1 class="text-xl font-bold text-gray-900">Mindoro Paint Center</h1>
          </div>
    
          <nav class="p-4 space-y-2">
            <router-link 
              v-for="item in navigationItems" 
              :key="item.path"
              :to="item.path"
              class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              :class="{ 'bg-gray-100': $route.path === item.path }"
              @click="mobileSidebarOpen = false"
            >
              <component :is="item.icon" class="w-5 h-5" />
              <span>{{ item.name }}</span>
            </router-link>
          </nav>
    
          <div class="absolute bottom-0 w-64 p-4 border-t border-gray-200 bg-white">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <UserIcon class="w-5 h-5 text-gray-600" />
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900 truncate">Admin User</p>
                <p class="text-xs text-gray-500 truncate">admin@example.com</p>
              </div>
              <button 
                @click="handleLogout"
                class="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                title="Logout"
              >
                <LogOutIcon class="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </aside>
    
        <!-- Main Content -->
        <main class="flex-1 overflow-auto">
          <div class="p-4 md:p-6 lg:p-8">
            <!-- Header Section -->
            <div class="mb-6">
              <h1 class="text-2xl font-bold text-navy mb-2">Security Settings</h1>
              <p class="text-navy/60">Manage your account security and authentication settings</p>
            </div>
    
            <!-- Security Settings Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <!-- Password & Authentication -->
              <div class="lg:col-span-2 space-y-6">
                <!-- Change Password -->
                <div class="bg-white rounded-xl shadow-sm p-6">
                  <h2 class="text-lg font-semibold text-navy mb-4">Change Password</h2>
                  <form @submit.prevent="changePassword" class="space-y-4">
                    <div>
                      <label class="block text-sm font-medium text-navy mb-1">Current Password</label>
                      <input 
                        type="password"
                        v-model="passwordForm.current"
                        required
                        class="w-full px-3 py-2 rounded-lg border border-navy/10 focus:outline-none focus:ring-2 focus:ring-navy/20 bg-white"
                      />
                    </div>
    
                    <div>
                      <label class="block text-sm font-medium text-navy mb-1">New Password</label>
                      <input 
                        type="password"
                        v-model="passwordForm.new"
                        required
                        class="w-full px-3 py-2 rounded-lg border border-navy/10 focus:outline-none focus:ring-2 focus:ring-navy/20 bg-white"
                      />
                    </div>
    
                    <div>
                      <label class="block text-sm font-medium text-navy mb-1">Confirm New Password</label>
                      <input 
                        type="password"
                        v-model="passwordForm.confirm"
                        required
                        class="w-full px-3 py-2 rounded-lg border border-navy/10 focus:outline-none focus:ring-2 focus:ring-navy/20 bg-white"
                      />
                    </div>
    
                    <div class="flex justify-end">
                      <button 
                        type="submit"
                        class="px-4 py-2 bg-navy text-white rounded-lg hover:bg-navy/90 transition-colors"
                      >
                        Update Password
                      </button>
                    </div>
                  </form>
                </div>
    
                <!-- Two-Factor Authentication -->
                <div class="bg-white rounded-xl shadow-sm p-6">
                  <div class="flex items-center justify-between mb-4">
                    <div>
                      <h2 class="text-lg font-semibold text-navy">Two-Factor Authentication</h2>
                      <p class="text-sm text-navy/60">Add an extra layer of security to your account</p>
                    </div>
                    <label class="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox"
                        v-model="security.twoFactor"
                        class="sr-only peer"
                      />
                      <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-navy/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-navy"></div>
                    </label>
                  </div>
                  <div v-if="security.twoFactor" class="space-y-4">
                    <div class="p-4 bg-navy/5 rounded-lg">
                      <p class="text-sm text-navy">Scan this QR code with your authenticator app</p>
                      <div class="w-40 h-40 bg-white mt-2 rounded-lg flex items-center justify-center">
                        <QrCodeIcon class="w-32 h-32 text-navy/40" />
                      </div>
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-navy mb-1">Verification Code</label>
                      <div class="flex gap-2">
                        <input 
                          type="text"
                          v-model="twoFactorCode"
                          maxlength="6"
                          class="w-32 px-3 py-2 rounded-lg border border-navy/10 focus:outline-none focus:ring-2 focus:ring-navy/20 bg-white text-center text-xl tracking-wider"
                        />
                        <button 
                          @click="verifyTwoFactor"
                          class="px-4 py-2 bg-navy text-white rounded-lg hover:bg-navy/90 transition-colors"
                        >
                          Verify
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    
              <!-- Security Status -->
              <div class="space-y-6">
                <!-- Account Security -->
                <div class="bg-white rounded-xl shadow-sm p-6">
                  <h2 class="text-lg font-semibold text-navy mb-4">Security Status</h2>
                  <div class="space-y-4">
                    <div class="flex items-center justify-between">
                      <div>
                        <p class="font-medium text-navy">Password Strength</p>
                        <p class="text-sm text-navy/60">Your password is strong</p>
                      </div>
                      <div class="p-2 bg-green-50 rounded-lg">
                        <ShieldCheckIcon class="w-5 h-5 text-green-600" />
                      </div>
                    </div>
    
                    <div class="flex items-center justify-between">
                      <div>
                        <p class="font-medium text-navy">Last Password Change</p>
                        <p class="text-sm text-navy/60">30 days ago</p>
                      </div>
                      <div class="p-2 bg-yellow-50 rounded-lg">
                        <ClockIcon class="w-5 h-5 text-yellow-600" />
                      </div>
                    </div>
    
                    <div class="flex items-center justify-between">
                      <div>
                        <p class="font-medium text-navy">Two-Factor Auth</p>
                        <p class="text-sm text-navy/60">
                          {{ security.twoFactor ? 'Enabled' : 'Disabled' }}
                        </p>
                      </div>
                      <div 
                        class="p-2 rounded-lg"
                        :class="security.twoFactor ? 'bg-green-50' : 'bg-red-50'"
                      >
                        <component 
                          :is="security.twoFactor ? ShieldCheckIcon : ShieldOffIcon"
                          class="w-5 h-5"
                          :class="security.twoFactor ? 'text-green-600' : 'text-red-600'"
                        />
                      </div>
                    </div>
                  </div>
                </div>
    
                <!-- Recent Activity -->
                <div class="bg-white rounded-xl shadow-sm p-6">
                  <h2 class="text-lg font-semibold text-navy mb-4">Recent Activity</h2>
                  <div class="space-y-4">
                    <div v-for="activity in recentActivity" :key="activity.id" class="flex gap-3">
                      <div class="p-2 rounded-lg bg-navy/5">
                        <component :is="activity.icon" class="w-4 h-4 text-navy" />
                      </div>
                      <div>
                        <p class="text-sm font-medium text-navy">{{ activity.action }}</p>
                        <p class="text-xs text-navy/60">{{ activity.time }}</p>
                      </div>
                    </div>
                  </div>
                </div>
    
                <!-- Active Sessions -->
                <div class="bg-white rounded-xl shadow-sm p-6">
                  <h2 class="text-lg font-semibold text-navy mb-4">Active Sessions</h2>
                  <div class="space-y-4">
                    <div v-for="session in activeSessions" :key="session.id" class="flex items-center justify-between">
                      <div class="flex items-center gap-3">
                        <div class="p-2 rounded-lg bg-navy/5">
                          <component :is="session.icon" class="w-4 h-4 text-navy" />
                        </div>
                        <div>
                          <p class="text-sm font-medium text-navy">{{ session.device }}</p>
                          <p class="text-xs text-navy/60">{{ session.location }}</p>
                        </div>
                      </div>
                      <button 
                        @click="terminateSession(session.id)"
                        class="text-red-600 hover:text-red-700 text-sm"
                      >
                        Terminate
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    </template>
    
    <script setup>
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'
    import {
      LayoutDashboard,
      Users,
      Package,
      Home,
      Palette,
      TrendingUp,
      Clipboard,
      Settings,
      Shield,
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
    } from 'lucide-vue-next'
    
    const router = useRouter()
    const mobileSidebarOpen = ref(false)
    
    // Navigation items
    const navigationItems = [
      { name: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
      { name: 'Staff Management', path: '/admin/staff', icon: Users },
      { name: 'Inventory', path: '/admin/inventory', icon: Package },
      { name: 'House Paint Recommender', path: '/admin/house-paint', icon: Home },
      { name: 'Paint Mixing', path: '/admin/paint-mixing', icon: Palette },
      { name: 'Sales Analytics', path: '/admin/sales-analytics', icon: TrendingUp },
      { name: 'Reports', path: '/admin/reports', icon: Clipboard },
      { name: 'System Settings', path: '/admin/settings', icon: Settings },
      { name: 'Security', path: '/admin/security', icon: Shield },
    ]
    
    // Form states
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
        icon: KeyIcon
      },
      {
        id: 2,
        action: 'New login from Chrome',
        time: '5 hours ago',
        icon: LogInIcon
      },
      {
        id: 3,
        action: 'Two-factor authentication enabled',
        time: '1 day ago',
        icon: ShieldCheckIcon
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
        
        alert('Password updated successfully')
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
        
        alert('Two-factor authentication enabled successfully')
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
        
        alert('Session terminated successfully')
      } catch (error) {
        console.error('Error terminating session:', error)
        alert('Error terminating session')
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
    .router-link-active {
      background-color: #f9fafb;
      font-weight: 500;
    }
    
    :root {
      --navy: #1e3a8a;
    }
    </style>
    
    