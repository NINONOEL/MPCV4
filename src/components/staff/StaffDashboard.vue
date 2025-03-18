<template>
  <!-- Keep the same structure but update the content -->
  <div class="min-h-screen bg-gradient-to-br from-pale-blue via-light-blue to-medium-blue">
  <div class="flex h-screen">
    <!-- Sidebar stays the same -->
    <aside class="w-64 bg-white/90 backdrop-blur-sm border-r border-navy/10">
      <!-- Logo/Brand -->
      <div class="p-4 border-b border-navy/10">
        <h1 class="text-xl font-bold text-navy">Mindoro Paint Center</h1>
      </div>
  
      <!-- Navigation with updated items -->
      <nav class="p-4 space-y-2 overflow-y-auto max-h-[calc(100vh-10rem)]">
        <router-link 
          to="/staff/dashboard" 
          class="flex items-center gap-3 px-3 py-2 rounded-lg text-navy hover:bg-navy/5 transition-colors"
          :class="{ 'bg-navy/5': $route.path === '/staff/dashboard' }"
        >
          <LayoutDashboardIcon class="w-5 h-5" />
          <span>Dashboard</span>
        </router-link>
  
        <router-link 
          to="/staff/inventory" 
          class="flex items-center gap-3 px-3 py-2 rounded-lg text-navy hover:bg-navy/5 transition-colors"
          :class="{ 'bg-navy/5': $route.path === '/staff/inventory' }"
        >
          <PackageIcon class="w-5 h-5" />
          <span>Inventory</span>
        </router-link>
  
        <router-link 
          to="/staff/paint-mixing" 
          class="flex items-center gap-3 px-3 py-2 rounded-lg text-navy hover:bg-navy/5 transition-colors"
          :class="{ 'bg-navy/5': $route.path === '/staff/paint-mixing' }"
        >
          <PaletteIcon class="w-5 h-5" />
          <span>Paint Mixing</span>
        </router-link>
  
        <router-link 
          to="/staff/house-paint-recommender" 
          class="flex items-center gap-3 px-3 py-2 rounded-lg text-navy hover:bg-navy/5 transition-colors"
          :class="{ 'bg-navy/5': $route.path === '/staff/house-paint-recommender' }"
        >
          <HomeIcon class="w-5 h-5" />
          <span>House Paint Recommender</span>
        </router-link>
  
        <router-link 
          to="/staff/settings" 
          class="flex items-center gap-3 px-3 py-2 rounded-lg text-navy hover:bg-navy/5 transition-colors"
          :class="{ 'bg-navy/5': $route.path === '/staff/settings' }"
        >
          <SettingsIcon class="w-5 h-5" />
          <span>Settings</span>
        </router-link>
      </nav>
  
      <!-- User Menu stays the same -->
      <div class="absolute bottom-0 w-64 p-4 border-t border-navy/10 bg-white/90 backdrop-blur-sm">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center">
            <UserIcon class="w-5 h-5 text-navy" />
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-navy truncate">Staff User</p>
            <p class="text-xs text-navy/60 truncate">staff@example.com</p>
          </div>
          <button 
            @click="handleLogout"
            class="p-2 rounded-lg hover:bg-navy/5 text-navy transition-colors"
          >
            <LogOutIcon class="w-5 h-5" />
          </button>
        </div>
      </div>
    </aside>
  
    <!-- Main Content -->
    <main class="flex-1 overflow-auto">
      <!-- Header stays the same -->
      <header class="bg-white/90 backdrop-blur-sm border-b border-navy/10 px-8 py-4">
        <div class="flex items-center justify-between">
          <h1 class="text-2xl font-bold text-navy">Staff Dashboard</h1>
          <div class="flex items-center gap-4">
            <div class="flex items-center gap-2 text-navy">
              <CalendarIcon class="w-5 h-5" />
              <span>{{ currentDate }}</span>
            </div>
            <div class="h-6 w-px bg-navy/10"></div>
            <div class="flex items-center gap-2">
              <span class="text-navy">Welcome, Staff</span>
              <BellIcon class="w-5 h-5 text-navy cursor-pointer hover:text-navy/70" />
            </div>
          </div>
        </div>
      </header>
  
      <!-- Dashboard Content -->
      <div class="p-8">
        <!-- Quick Stats -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <!-- Total Products -->
          <div class="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm p-6 transition-transform hover:scale-105">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-lg font-semibold text-navy">Total Products</h3>
              <PackageIcon class="h-6 w-6 text-navy/60" />
            </div>
            <div class="flex items-end justify-between">
              <div>
                <p class="text-3xl font-bold text-navy">0</p>
                <p class="text-sm text-navy/60">In stock</p>
              </div>
              <div class="flex items-center text-navy/60">
                <InfoIcon class="w-4 h-4" />
                <span class="text-sm font-medium">No items yet</span>
              </div>
            </div>
          </div>
  
          <!-- Paint Mixing Tasks -->
          <div class="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm p-6 transition-transform hover:scale-105">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-lg font-semibold text-navy">Paint Mixing</h3>
              <PaletteIcon class="h-6 w-6 text-navy/60" />
            </div>
            <div class="flex items-end justify-between">
              <div>
                <p class="text-3xl font-bold text-navy">0</p>
                <p class="text-sm text-navy/60">Pending requests</p>
              </div>
              <div class="flex items-center text-navy/60">
                <InfoIcon class="w-4 h-4" />
                <span class="text-sm font-medium">No requests</span>
              </div>
            </div>
          </div>
  
          <!-- Tasks -->
          <div class="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm p-6 transition-transform hover:scale-105">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-lg font-semibold text-navy">Daily Tasks</h3>
              <CheckSquareIcon class="h-6 w-6 text-navy/60" />
            </div>
            <div class="flex items-end justify-between">
              <div>
                <p class="text-3xl font-bold text-navy">0</p>
                <p class="text-sm text-navy/60">Tasks remaining</p>
              </div>
              <div class="flex items-center text-navy/60">
                <InfoIcon class="w-4 h-4" />
                <span class="text-sm font-medium">No tasks</span>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Main Content Sections -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <!-- Low Stock Items -->
          <div class="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm p-6">
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-lg font-semibold text-navy">Low Stock Items</h3>
            </div>
            <div class="flex flex-col items-center justify-center py-8 text-center">
              <PackageIcon class="w-12 h-12 text-navy/20 mb-4" />
              <p class="text-navy/60">No items in inventory yet</p>
              <p class="text-sm text-navy/40">Add products to track stock levels</p>
            </div>
          </div>
  
          <!-- Paint Mixing Queue -->
          <div class="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm p-6">
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-lg font-semibold text-navy">Paint Mixing Queue</h3>
            </div>
            <div class="flex flex-col items-center justify-center py-8 text-center">
              <PaletteIcon class="w-12 h-12 text-navy/20 mb-4" />
              <p class="text-navy/60">No mixing requests yet</p>
              <p class="text-sm text-navy/40">New requests will appear here</p>
            </div>
          </div>
        </div>
  
        <!-- Recent Activity and Tasks -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <!-- Activity Feed -->
          <div class="lg:col-span-2 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm p-6">
            <h3 class="text-lg font-semibold text-navy mb-6">Recent Activity</h3>
            <div class="flex flex-col items-center justify-center py-8 text-center">
              <ClockIcon class="w-12 h-12 text-navy/20 mb-4" />
              <p class="text-navy/60">No recent activity</p>
              <p class="text-sm text-navy/40">Activity will be shown here</p>
            </div>
          </div>
  
          <!-- Upcoming Tasks -->
          <div class="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm p-6">
            <h3 class="text-lg font-semibold text-navy mb-6">Upcoming Tasks</h3>
            <div class="flex flex-col items-center justify-center py-8 text-center">
              <CheckSquareIcon class="w-12 h-12 text-navy/20 mb-4" />
              <p class="text-navy/60">No upcoming tasks</p>
              <p class="text-sm text-navy/40">Tasks will appear here</p>
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
  LayoutDashboard as LayoutDashboardIcon,
  Package as PackageIcon,
  Palette as PaletteIcon,
  Clipboard as ClipboardIcon,
  User as UserIcon,
  LogOut as LogOutIcon,
  Calendar as CalendarIcon,
  Bell as BellIcon,
  CheckSquare as CheckSquareIcon,
  Info as InfoIcon,
  Clock as ClockIcon,
  Settings as SettingsIcon,
  Home as HomeIcon,
  } from 'lucide-vue-next'
  
  const router = useRouter()
  const currentDate = new Date().toLocaleDateString('en-US', { 
  weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' 
  })
  
  const handleLogout = () => {
  router.push('/staff')
  }
  </script>

