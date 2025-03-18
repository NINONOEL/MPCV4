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
              <h1 class="text-2xl font-bold text-navy mb-2">System Settings</h1>
              <p class="text-navy/60">Configure your system preferences and settings</p>
            </div>
    
            <!-- Settings Grid -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <!-- General Settings -->
              <div class="lg:col-span-2 space-y-6">
                <div class="bg-white rounded-xl shadow-sm p-6">
                  <h2 class="text-lg font-semibold text-navy mb-4">General Settings</h2>
                  <form @submit.prevent="saveGeneralSettings" class="space-y-4">
                    <div>
                      <label class="block text-sm font-medium text-navy mb-1">Store Name</label>
                      <input 
                        type="text"
                        v-model="settings.general.storeName"
                        class="w-full px-3 py-2 rounded-lg border border-navy/10 focus:outline-none focus:ring-2 focus:ring-navy/20 bg-white"
                      />
                    </div>
    
                    <div>
                      <label class="block text-sm font-medium text-navy mb-1">Store Address</label>
                      <textarea 
                        v-model="settings.general.address"
                        rows="3"
                        class="w-full px-3 py-2 rounded-lg border border-navy/10 focus:outline-none focus:ring-2 focus:ring-navy/20 bg-white"
                      ></textarea>
                    </div>
    
                    <div>
                      <label class="block text-sm font-medium text-navy mb-1">Contact Email</label>
                      <input 
                        type="email"
                        v-model="settings.general.email"
                        class="w-full px-3 py-2 rounded-lg border border-navy/10 focus:outline-none focus:ring-2 focus:ring-navy/20 bg-white"
                      />
                    </div>
    
                    <div>
                      <label class="block text-sm font-medium text-navy mb-1">Contact Phone</label>
                      <input 
                        type="tel"
                        v-model="settings.general.phone"
                        class="w-full px-3 py-2 rounded-lg border border-navy/10 focus:outline-none focus:ring-2 focus:ring-navy/20 bg-white"
                      />
                    </div>
    
                    <div class="flex justify-end">
                      <button 
                        type="submit"
                        class="px-4 py-2 bg-navy text-white rounded-lg hover:bg-navy/90 transition-colors"
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>
    
                <!-- Notification Settings -->
                <div class="bg-white rounded-xl shadow-sm p-6">
                  <h2 class="text-lg font-semibold text-navy mb-4">Notification Settings</h2>
                  <div class="space-y-4">
                    <div class="flex items-center justify-between">
                      <div>
                        <p class="font-medium text-navy">Email Notifications</p>
                        <p class="text-sm text-navy/60">Receive updates via email</p>
                      </div>
                      <label class="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox"
                          v-model="settings.notifications.email"
                          class="sr-only peer"
                        />
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-navy/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-navy"></div>
                      </label>
                    </div>
    
                    <div class="flex items-center justify-between">
                      <div>
                        <p class="font-medium text-navy">Low Stock Alerts</p>
                        <p class="text-sm text-navy/60">Get notified when inventory is low</p>
                      </div>
                      <label class="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox"
                          v-model="settings.notifications.lowStock"
                          class="sr-only peer"
                        />
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-navy/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-navy"></div>
                      </label>
                    </div>
    
                    <div class="flex items-center justify-between">
                      <div>
                        <p class="font-medium text-navy">Order Updates</p>
                        <p class="text-sm text-navy/60">Notifications for new orders</p>
                      </div>
                      <label class="relative inline-flex items-center cursor-pointer">
                        <input 
                          type="checkbox"
                          v-model="settings.notifications.orders"
                          class="sr-only peer"
                        />
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-navy/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-navy"></div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
    
              <!-- System Info -->
              <div class="space-y-6">
                <!-- System Status -->
                <div class="bg-white rounded-xl shadow-sm p-6">
                  <h2 class="text-lg font-semibold text-navy mb-4">System Status</h2>
                  <div class="space-y-4">
                    <div>
                      <p class="text-sm text-navy/60">Version</p>
                      <p class="font-medium text-navy">1.0.0</p>
                    </div>
                    <div>
                      <p class="text-sm text-navy/60">Last Updated</p>
                      <p class="font-medium text-navy">March 5, 2025</p>
                    </div>
                    <div>
                      <p class="text-sm text-navy/60">Database Status</p>
                      <div class="flex items-center gap-2">
                        <div class="w-2 h-2 rounded-full bg-green-500"></div>
                        <p class="font-medium text-navy">Connected</p>
                      </div>
                    </div>
                  </div>
                </div>
    
                <!-- Storage Usage -->
                <div class="bg-white rounded-xl shadow-sm p-6">
                  <h2 class="text-lg font-semibold text-navy mb-4">Storage Usage</h2>
                  <div class="space-y-4">
                    <div>
                      <div class="flex justify-between items-center mb-1">
                        <p class="text-sm text-navy/60">Database Storage</p>
                        <p class="text-sm font-medium text-navy">75%</p>
                      </div>
                      <div class="w-full bg-gray-200 rounded-full h-2">
                        <div class="bg-navy h-2 rounded-full" style="width: 75%"></div>
                      </div>
                    </div>
    
                    <div>
                      <div class="flex justify-between items-center mb-1">
                        <p class="text-sm text-navy/60">File Storage</p>
                        <p class="text-sm font-medium text-navy">45%</p>
                      </div>
                      <div class="w-full bg-gray-200 rounded-full h-2">
                        <div class="bg-navy h-2 rounded-full" style="width: 45%"></div>
                      </div>
                    </div>
                  </div>
                </div>
    
                <!-- Quick Actions -->
                <div class="bg-white rounded-xl shadow-sm p-6">
                  <h2 class="text-lg font-semibold text-navy mb-4">Quick Actions</h2>
                  <div class="space-y-3">
                    <button 
                      @click="clearCache"
                      class="w-full flex items-center gap-2 px-4 py-2 bg-navy/5 text-navy rounded-lg hover:bg-navy/10 transition-colors"
                    >
                      <RefreshCwIcon class="w-5 h-5" />
                      <span>Clear Cache</span>
                    </button>
                    <button 
                      @click="backupData"
                      class="w-full flex items-center gap-2 px-4 py-2 bg-navy/5 text-navy rounded-lg hover:bg-navy/10 transition-colors"
                    >
                      <DatabaseIcon class="w-5 h-5" />
                      <span>Backup Data</span>
                    </button>
                    <button 
                      @click="checkUpdates"
                      class="w-full flex items-center gap-2 px-4 py-2 bg-navy/5 text-navy rounded-lg hover:bg-navy/10 transition-colors"
                    >
                      <DownloadIcon class="w-5 h-5" />
                      <span>Check for Updates</span>
                    </button>
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
      RefreshCw as RefreshCwIcon,
      Database as DatabaseIcon,
      Download as DownloadIcon,
    } from 'lucide-vue-next'
    
    const router = useRouter()
    const mobileSidebarOpen = ref(false)
    
    // Navigation items
    const navigationItems = [
      { name: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
      { name: 'Staff Management', path: '/admin/staff', icon: Users },
      { name: 'Inventory', path: '/admin/inventory', icon: Package },
      { name: 'House Paint Recommender', path: '/admin/house-paint-recommender', icon: Home },
      { name: 'Paint Mixing', path: '/admin/paint-mixing', icon: Palette },
      { name: 'Sales Analytics', path: '/admin/sales-analytics', icon: TrendingUp },
      { name: 'Reports', path: '/admin/reports', icon: Clipboard },
      { name: 'System Settings', path: '/admin/settings', icon: Settings },
      { name: 'Security', path: '/admin/security', icon: Shield },
    ]
    
    // Settings state
    const settings = ref({
      general: {
        storeName: 'Mindoro Paint Center',
        address: '123 Main Street, Mindoro',
        email: 'contact@mindoropaint.com',
        phone: '+63 123 456 7890'
      },
      notifications: {
        email: true,
        lowStock: true,
        orders: true
      }
    })
    
    // Methods
    const saveGeneralSettings = async () => {
      // Implement settings save logic
      console.log('Saving settings:', settings.value)
    }
    
    const clearCache = async () => {
      // Implement cache clearing logic
      console.log('Clearing cache...')
    }
    
    const backupData = async () => {
      // Implement backup logic
      console.log('Backing up data...')
    }
    
    const checkUpdates = async () => {
      // Implement update check logic
      console.log('Checking for updates...')
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
    
    