<template>
  <div class="min-h-screen bg-gradient-to-br from-pale-blue via-light-blue to-medium-blue">
    <div class="flex h-screen">
      <!-- Sidebar -->
      <aside class="w-64 bg-white/90 backdrop-blur-sm border-r border-navy/10 hidden md:block">
        <!-- Logo/Brand -->
        <div class="p-4 border-b border-navy/10">
          <h1 class="text-xl font-bold text-navy">Mindoro Paint Center</h1>
        </div>

        <!-- Navigation -->
        <nav class="p-4 space-y-2">
          <router-link 
            v-for="item in navigationItems" 
            :key="item.path"
            :to="item.path"
            class="flex items-center gap-3 px-3 py-2 rounded-lg text-navy hover:bg-navy/5 transition-colors"
            :class="{ 'bg-navy/5': $route.path === item.path }"
          >
            <component :is="item.icon" class="w-5 h-5" />
            <span>{{ item.name }}</span>
          </router-link>
        </nav>

        <!-- User Menu -->
        <div class="absolute bottom-0 w-64 p-4 border-t border-navy/10 bg-white/90 backdrop-blur-sm">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center">
              <User class="w-5 h-5 text-navy" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-navy truncate">Staff User</p>
              <p class="text-xs text-navy/60 truncate">staff@example.com</p>
            </div>
            <button class="p-2 rounded-lg hover:bg-navy/5 text-navy transition-colors">
              <LogOut class="w-5 h-5" />
            </button>
          </div>
        </div>
      </aside>

      <!-- Mobile Sidebar Toggle -->
      <div class="fixed top-4 left-4 z-30 md:hidden">
        <button 
          @click="toggleSidebar"
          class="p-2 bg-white/90 backdrop-blur-sm border border-navy/10 rounded-lg shadow-sm"
        >
          <Menu v-if="!isSidebarOpen" class="w-6 h-6 text-navy" />
          <X v-else class="w-6 h-6 text-navy" />
        </button>
      </div>

      <!-- Mobile Sidebar -->
      <div 
        v-if="isSidebarOpen" 
        class="fixed inset-0 bg-black/20 z-20 md:hidden"
        @click="toggleSidebar"
      ></div>

      <aside 
        v-if="isSidebarOpen"
        class="fixed left-0 top-0 h-full w-64 bg-white/90 backdrop-blur-sm border-r border-navy/10 z-20 md:hidden"
      >
        <!-- Same content as desktop sidebar -->
        <div class="p-4 border-b border-navy/10">
          <h1 class="text-xl font-bold text-navy">Mindoro Paint Center</h1>
        </div>

        <nav class="p-4 space-y-2">
          <router-link 
            v-for="item in navigationItems" 
            :key="item.path"
            :to="item.path"
            class="flex items-center gap-3 px-3 py-2 rounded-lg text-navy hover:bg-navy/5 transition-colors"
            :class="{ 'bg-navy/5': $route.path === item.path }"
            @click="isSidebarOpen = false"
          >
            <component :is="item.icon" class="w-5 h-5" />
            <span>{{ item.name }}</span>
          </router-link>
        </nav>

        <div class="absolute bottom-0 w-64 p-4 border-t border-navy/10 bg-white/90 backdrop-blur-sm">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center">
              <User class="w-5 h-5 text-navy" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-navy truncate">Staff User</p>
              <p class="text-xs text-navy/60 truncate">staff@example.com</p>
            </div>
            <button class="p-2 rounded-lg hover:bg-navy/5 text-navy transition-colors">
              <LogOut class="w-5 h-5" />
            </button>
          </div>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 md:ml-64 overflow-y-auto">
        <!-- Header -->
        <header class="bg-white border-b border-gray-200 px-8 py-4">
          <div class="flex items-center justify-between">
            <div>
              <h1 class="text-2xl font-bold text-gray-900">Settings</h1>
              <p class="text-gray-500">Manage your account and preferences</p>
            </div>
            <div class="flex items-center gap-6">
              <div class="flex items-center gap-2">
                <Calendar class="w-5 h-5 text-gray-400" />
                <span class="text-gray-700">{{ currentDate }}</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-gray-700">Welcome, Staff</span>
                <Bell class="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600" />
              </div>
            </div>
          </div>
        </header>

        <div class="p-4 md:p-6 lg:p-8 space-y-6">
          <!-- Settings Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Profile Settings -->
            <div class="bg-white rounded-xl shadow-sm">
              <div class="p-6 border-b border-gray-100">
                <h2 class="text-lg font-semibold text-navy">Profile Settings</h2>
              </div>
              <div class="p-6 space-y-6">
                <div class="flex items-center gap-4">
                  <div class="w-20 h-20 rounded-full bg-navy/10 flex items-center justify-center">
                    <User class="w-10 h-10 text-navy" />
                  </div>
                  <div>
                    <button class="px-4 py-2 bg-navy text-white rounded-lg font-medium hover:bg-navy/90 transition-colors">
                      Change Photo
                    </button>
                  </div>
                </div>
                <div class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      v-model="profile.fullName"
                      class="w-full p-2.5 border border-gray-200 rounded-lg"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      v-model="profile.email"
                      class="w-full p-2.5 border border-gray-200 rounded-lg"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      v-model="profile.phone"
                      class="w-full p-2.5 border border-gray-200 rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>

            <!-- Account Settings -->
            <div class="bg-white rounded-xl shadow-sm">
              <div class="p-6 border-b border-gray-100">
                <h2 class="text-lg font-semibold text-navy">Account Settings</h2>
              </div>
              <div class="p-6 space-y-6">
                <div class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
                    <input 
                      type="password" 
                      v-model="account.currentPassword"
                      class="w-full p-2.5 border border-gray-200 rounded-lg"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">New Password</label>
                    <input 
                      type="password" 
                      v-model="account.newPassword"
                      class="w-full p-2.5 border border-gray-200 rounded-lg"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
                    <input 
                      type="password" 
                      v-model="account.confirmPassword"
                      class="w-full p-2.5 border border-gray-200 rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>

            <!-- Notification Settings -->
            <div class="bg-white rounded-xl shadow-sm">
              <div class="p-6 border-b border-gray-100">
                <h2 class="text-lg font-semibold text-navy">Notification Settings</h2>
              </div>
              <div class="p-6 space-y-6">
                <div class="space-y-4">
                  <div class="flex items-center justify-between">
                    <div>
                      <h3 class="font-medium text-gray-900">Email Notifications</h3>
                      <p class="text-sm text-gray-500">Receive updates about your account</p>
                    </div>
                    <label class="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" v-model="notifications.email" class="sr-only peer">
                      <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-navy"></div>
                    </label>
                  </div>
                  <div class="flex items-center justify-between">
                    <div>
                      <h3 class="font-medium text-gray-900">Desktop Notifications</h3>
                      <p class="text-sm text-gray-500">Get notified about new orders</p>
                    </div>
                    <label class="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" v-model="notifications.desktop" class="sr-only peer">
                      <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-navy"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <!-- Theme Settings -->
            <div class="bg-white rounded-xl shadow-sm">
              <div class="p-6 border-b border-gray-100">
                <h2 class="text-lg font-semibold text-navy">Theme Settings</h2>
              </div>
              <div class="p-6 space-y-6">
                <div class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Color Theme</label>
                    <select v-model="theme.color" class="w-full p-2.5 border border-gray-200 rounded-lg">
                      <option value="light">Light</option>
                      <option value="dark">Dark</option>
                      <option value="system">System</option>
                    </select>
                  </div>
                  <div class="flex items-center justify-between">
                    <div>
                      <h3 class="font-medium text-gray-900">Reduce Motion</h3>
                      <p class="text-sm text-gray-500">Minimize animations</p>
                    </div>
                    <label class="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" v-model="theme.reduceMotion" class="sr-only peer">
                      <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-navy"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Save Button -->
          <div class="flex justify-end">
            <button 
              @click="saveSettings" 
              class="px-6 py-2 bg-navy text-white rounded-lg font-medium hover:bg-navy/90 transition-colors flex items-center gap-2"
            >
              <Save class="w-4 h-4" />
              Save Changes
            </button>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { 
  LayoutDashboard, 
  Package, 
  Palette, 
  Home, 
  Settings, 
  User, 
  Menu,
  Calendar,
  Bell,
  Save,
  LogOut,
  X
} from 'lucide-vue-next'

const router = useRouter()
const isSidebarOpen = ref(false)

// Navigation items
const navigationItems = [
  { name: 'Dashboard', path: '/staff/dashboard', icon: LayoutDashboard },
  { name: 'Inventory', path: '/staff/inventory', icon: Package },
  { name: 'Paint Mixing', path: '/staff/paint-mixing', icon: Palette },
  { name: 'House Paint Recommender', path: '/staff/house-paint-recommender', icon: Home },
  { name: 'Settings', path: '/staff/settings', icon: Settings },
]

const currentDate = computed(() => {
  return new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
})

// Profile settings
const profile = ref({
  fullName: 'Staff User',
  email: 'staff@example.com',
  phone: '+63 912 345 6789'
})

// Account settings
const account = ref({
  currentPassword: '',
  newPassword: '',
  confirmPassword: ''
})

// Notification settings
const notifications = ref({
  email: true,
  desktop: false
})

// Theme settings
const theme = ref({
  color: 'light',
  reduceMotion: false
})

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

const saveSettings = () => {
  // This would save the settings to the database
  alert('Settings saved successfully!')
}
</script>

<style>
:root {
  --pale-blue: #f0f7ff;
  --light-blue: #e6f0ff;
  --medium-blue: #dce7ff;
  --navy: #1e3a8a;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: #c5d3e8;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #a3b8d9;
}
</style>

