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
          <div class="mt-2 text-xs text-white bg-gradient-to-r from-orange-500 to-yellow-600 px-3 py-1 rounded-full inline-flex items-center shadow-sm">
            <UserIcon class="h-3 w-3 mr-1" />
            Staff Portal
          </div>
        </div>

        <!-- Navigation - Scrollable Area -->
        <nav class="flex-1 p-4 space-y-2 overflow-y-auto">
          <router-link 
            to="/staff/dashboard" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-blue-600 bg-blue-50 shadow-sm border border-blue-200 transform scale-105"
            :class="{ 'hover:bg-blue-100 hover:text-blue-700': $route.path !== '/staff/dashboard' }"
          >
            <LayoutDashboardIcon class="w-5 h-5" />
            <span>Dashboard</span>
          </router-link>

          <router-link 
            to="/staff/inventory" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-purple-600 bg-purple-50 hover:bg-purple-100 hover:text-purple-700"
            :class="{ 'shadow-sm border border-purple-200 transform scale-105': $route.path === '/staff/inventory' }"
          >
            <PackageIcon class="w-5 h-5" />
            <span>Inventory</span>
          </router-link>

          <router-link 
            to="/staff/paint-mixing" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-pink-600 bg-pink-50 hover:bg-pink-100 hover:text-pink-700"
            :class="{ 'shadow-sm border border-pink-200 transform scale-105': $route.path === '/staff/paint-mixing' }"
          >
            <PaletteIcon class="w-5 h-5" />
            <span>Paint Mixing</span>
          </router-link>

          <router-link 
            to="/staff/house-paint-recommender" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-orange-600 bg-orange-50 hover:bg-orange-100 hover:text-orange-700"
            :class="{ 'shadow-sm border border-orange-200 transform scale-105': $route.path === '/staff/house-paint-recommender' }"
          >
            <HomeIcon class="w-5 h-5" />
            <span>House Paint Recommender</span>
          </router-link>

          <router-link 
            to="/staff/sales-analytics" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-teal-600 bg-teal-50 hover:bg-teal-100 hover:text-teal-700"
            :class="{ 'shadow-sm border border-teal-200 transform scale-105': $route.path === '/staff/sales-analytics' }"
          >
            <TrendingUpIcon class="w-5 h-5" />
            <span>Sales Analytics</span>
          </router-link>

          <router-link 
            to="/staff/settings" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-green-600 bg-green-50 hover:bg-green-100 hover:text-green-700"
            :class="{ 'shadow-sm border border-green-200 transform scale-105': $route.path === '/staff/settings' }"
          >
            <SettingsIcon class="w-5 h-5" />
            <span>Settings</span>
          </router-link>

          <!-- Perfect spacing -->
          <div class="h-4"></div>
        </nav>

        <!-- User Menu - Fixed at bottom -->
        <div class="p-4 border-t border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50 backdrop-blur-sm flex-shrink-0">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-yellow-600 flex items-center justify-center shadow-lg">
              <UserIcon class="w-5 h-5 text-white" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate">{{ userDisplayName || 'Staff User' }}</p>
              <p class="text-xs text-gray-600 truncate">{{ userEmail || 'staff@example.com' }}</p>
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
          <div class="mt-2 text-xs text-white bg-gradient-to-r from-orange-500 to-yellow-600 px-3 py-1 rounded-full inline-flex items-center shadow-sm">
            <UserIcon class="h-3 w-3 mr-1" />
            Staff Portal
          </div>
        </div>

        <!-- Mobile Navigation - Scrollable -->
        <nav class="flex-1 p-4 space-y-2 overflow-y-auto">
          <router-link 
            to="/staff/dashboard" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-blue-600 bg-blue-50 shadow-sm border border-blue-200"
            @click="mobileSidebarOpen = false"
          >
            <LayoutDashboardIcon class="w-5 h-5" />
            <span>Dashboard</span>
          </router-link>

          <router-link 
            to="/staff/inventory" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-purple-600 bg-purple-50"
            :class="{ 'shadow-sm border border-purple-200': $route.path === '/staff/inventory' }"
            @click="mobileSidebarOpen = false"
          >
            <PackageIcon class="w-5 h-5" />
            <span>Inventory</span>
          </router-link>

          <router-link 
            to="/staff/paint-mixing" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-pink-600 bg-pink-50"
            :class="{ 'shadow-sm border border-pink-200': $route.path === '/staff/paint-mixing' }"
            @click="mobileSidebarOpen = false"
          >
            <PaletteIcon class="w-5 h-5" />
            <span>Paint Mixing</span>
          </router-link>

          <router-link 
            to="/staff/house-paint-recommender" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-orange-600 bg-orange-50"
            :class="{ 'shadow-sm border border-orange-200': $route.path === '/staff/house-paint-recommender' }"
            @click="mobileSidebarOpen = false"
          >
            <HomeIcon class="w-5 h-5" />
            <span>House Paint Recommender</span>
          </router-link>

          <router-link 
            to="/staff/sales-analytics" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-teal-600 bg-teal-50"
            :class="{ 'shadow-sm border border-teal-200': $route.path === '/staff/sales-analytics' }"
            @click="mobileSidebarOpen = false"
          >
            <TrendingUpIcon class="w-5 h-5" />
            <span>Sales Analytics</span>
          </router-link>

          <router-link 
            to="/staff/settings" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-green-600 bg-green-50"
            :class="{ 'shadow-sm border border-green-200': $route.path === '/staff/settings' }"
            @click="mobileSidebarOpen = false"
          >
            <SettingsIcon class="w-5 h-5" />
            <span>Settings</span>
          </router-link>

          <!-- Perfect spacing for mobile too -->
          <div class="h-4"></div>
        </nav>

        <!-- Mobile User Menu - Fixed at bottom -->
        <div class="p-4 border-t border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50 backdrop-blur-sm flex-shrink-0">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-yellow-600 flex items-center justify-center shadow-lg">
              <UserIcon class="w-5 h-5 text-white" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate">{{ userDisplayName || 'Staff User' }}</p>
              <p class="text-xs text-gray-600 truncate">{{ userEmail || 'staff@example.com' }}</p>
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
              <h1 class="text-2xl font-bold text-gray-900">Staff Dashboard</h1>
              <p class="text-gray-600">Welcome to your staff dashboard</p>
            </div>
            <div class="flex items-center gap-4">
              <div class="hidden md:flex items-center gap-2 text-gray-700">
                <CalendarIcon class="w-5 h-5 text-orange-500" />
                <span>{{ currentDate }}</span>
              </div>
              <div class="hidden md:block h-6 w-px bg-gray-300"></div>
              <div class="flex items-center gap-3">
                <span class="text-gray-900">Welcome, {{ userDisplayName || 'Staff' }}</span>
                <div class="relative">
                  <BellIcon class="w-5 h-5 text-orange-500 cursor-pointer hover:text-orange-600" />
                  <span class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <!-- Dashboard Content -->
        <div class="p-6 md:p-8">
          <!-- Quick Stats -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <!-- Total Products -->
            <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 overflow-hidden relative">
              <div class="bg-gradient-to-br from-purple-400 via-violet-500 to-fuchsia-600 h-2 absolute top-0 left-0 right-0"></div>
              <div class="p-6">
                <div class="flex items-center gap-4">
                  <div class="p-3 rounded-xl shadow-lg bg-gradient-to-br from-purple-400 via-violet-500 to-fuchsia-600 transform hover:scale-110 transition-transform duration-200">
                    <PackageIcon class="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p class="text-sm text-gray-600">Total Products</p>
                    <p class="text-2xl font-bold text-gray-900">{{ inventoryStats.totalProducts }}</p>
                  </div>
                </div>
                <div class="mt-4 flex items-center justify-between">
                  <span class="text-sm text-gray-600">In stock</span>
                  <div v-if="inventoryStats.totalProducts === 0" class="flex items-center text-gray-500 bg-gray-100 px-3 py-1 rounded-full border border-gray-200">
                    <InfoIcon class="w-4 h-4 mr-1" />
                    <span class="text-sm font-medium">No items yet</span>
                  </div>
                  <div v-else class="flex items-center text-purple-700 bg-purple-100 px-3 py-1 rounded-full border border-purple-200">
                    <InfoIcon class="w-4 h-4 mr-1" />
                    <span class="text-sm font-medium">{{ inventoryStats.categories }} categories</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Orders -->
            <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 overflow-hidden relative">
              <div class="bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600 h-2 absolute top-0 left-0 right-0"></div>
              <div class="p-6">
                <div class="flex items-center gap-4">
                  <div class="p-3 rounded-xl shadow-lg bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600 transform hover:scale-110 transition-transform duration-200">
                    <ShoppingCartIcon class="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p class="text-sm text-gray-600">Orders</p>
                    <p class="text-2xl font-bold text-gray-900">{{ salesStats.today }}</p>
                  </div>
                </div>
                <div class="mt-4 flex items-center justify-between">
                  <span class="text-sm text-gray-600">Today's orders</span>
                  <div v-if="salesStats.today === 0" class="flex items-center text-gray-500 bg-gray-100 px-3 py-1 rounded-full border border-gray-200">
                    <InfoIcon class="w-4 h-4 mr-1" />
                    <span class="text-sm font-medium">No orders yet</span>
                  </div>
                  <div v-else class="flex items-center text-green-700 bg-green-100 px-3 py-1 rounded-full border border-green-200">
                    <CheckCircleIcon class="w-4 h-4 mr-1" />
                    <span class="text-sm font-medium">Active</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- System Status -->
            <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 overflow-hidden relative">
              <div class="bg-gradient-to-br from-blue-400 via-cyan-500 to-indigo-600 h-2 absolute top-0 left-0 right-0"></div>
              <div class="p-6">
                <div class="flex items-center gap-4 mb-4">
                  <div class="p-3 rounded-xl shadow-lg bg-gradient-to-br from-blue-400 via-cyan-500 to-indigo-600 transform hover:scale-110 transition-transform duration-200">
                    <ActivityIcon class="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p class="text-sm text-gray-600">System Status</p>
                    <p class="text-lg font-bold text-gray-900">All Systems</p>
                  </div>
                </div>
                <div class="space-y-3">
                  <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-700">Inventory System</span>
                    <div class="flex items-center">
                      <span class="h-2 w-2 rounded-full" :class="systemStatus.inventory ? 'bg-green-500' : 'bg-red-500'"></span>
                      <span :class="systemStatus.inventory ? 'text-green-600' : 'text-red-600'" class="text-sm ml-2 font-medium">{{ systemStatus.inventory ? 'Online' : 'Offline' }}</span>
                    </div>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-700">Paint Mixing</span>
                    <div class="flex items-center">
                      <span class="h-2 w-2 rounded-full" :class="systemStatus.paintMixing ? 'bg-green-500' : 'bg-red-500'"></span>
                      <span :class="systemStatus.paintMixing ? 'text-green-600' : 'text-red-600'" class="text-sm ml-2 font-medium">{{ systemStatus.paintMixing ? 'Online' : 'Offline' }}</span>
                    </div>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-700">Recommender</span>
                    <div class="flex items-center">
                      <span class="h-2 w-2 rounded-full" :class="systemStatus.recommender ? 'bg-green-500' : 'bg-red-500'"></span>
                      <span :class="systemStatus.recommender ? 'text-green-600' : 'text-red-600'" class="text-sm ml-2 font-medium">{{ systemStatus.recommender ? 'Online' : 'Offline' }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Quick Actions -->
          <div class="mb-8">
            <h2 class="text-lg sm:text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
              <router-link
                to="/staff/inventory"
                class="group relative bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-200 rounded-xl p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div class="flex flex-col items-center text-center">
                  <div class="p-3 rounded-lg bg-gradient-to-br from-purple-400 to-violet-500 text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                    <PackageIcon class="w-5 h-5" />
                  </div>
                  <p class="text-xs sm:text-sm font-semibold text-gray-900">Inventory</p>
                  <p class="text-xs text-gray-600 mt-1">{{ inventoryStats.totalProducts }} items</p>
                </div>
              </router-link>

              <router-link
                to="/staff/paint-mixing"
                class="group relative bg-gradient-to-br from-pink-50 to-rose-50 border border-pink-200 rounded-xl p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div class="flex flex-col items-center text-center">
                  <div class="p-3 rounded-lg bg-gradient-to-br from-pink-400 to-rose-500 text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                    <PaletteIcon class="w-5 h-5" />
                  </div>
                  <p class="text-xs sm:text-sm font-semibold text-gray-900">Paint Mix</p>
                  <p class="text-xs text-gray-600 mt-1">Color mixing</p>
                </div>
              </router-link>

              <router-link
                to="/staff/house-paint-recommender"
                class="group relative bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200 rounded-xl p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div class="flex flex-col items-center text-center">
                  <div class="p-3 rounded-lg bg-gradient-to-br from-orange-400 to-amber-500 text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                    <HomeIcon class="w-5 h-5" />
                  </div>
                  <p class="text-xs sm:text-sm font-semibold text-gray-900">Recommender</p>
                  <p class="text-xs text-gray-600 mt-1">Paint advisor</p>
                </div>
              </router-link>

              <router-link
                to="/staff/sales-analytics"
                class="group relative bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-200 rounded-xl p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div class="flex flex-col items-center text-center">
                  <div class="p-3 rounded-lg bg-gradient-to-br from-teal-400 to-cyan-500 text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUpIcon class="w-5 h-5" />
                  </div>
                  <p class="text-xs sm:text-sm font-semibold text-gray-900">Analytics</p>
                  <p class="text-xs text-gray-600 mt-1">Sales data</p>
                </div>
              </router-link>

              <router-link
                to="/staff/settings"
                class="group relative bg-gradient-to-br from-gray-50 to-slate-50 border border-gray-200 rounded-xl p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <div class="flex flex-col items-center text-center">
                  <div class="p-3 rounded-lg bg-gradient-to-br from-gray-400 to-slate-500 text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                    <SettingsIcon class="w-5 h-5" />
                  </div>
                  <p class="text-xs sm:text-sm font-semibold text-gray-900">Settings</p>
                  <p class="text-xs text-gray-600 mt-1">Preferences</p>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </main>
    </div>

    <!-- Logout Confirmation Modal -->
    <div v-if="showLogoutConfirmation" class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-xl w-full max-w-md border border-gray-200 shadow-2xl p-6">
        <h3 class="text-xl font-bold text-gray-900 mb-4">Confirm Logout</h3>
        <p class="text-gray-700 mb-6">Are you sure you want to log out of your account?</p>
        <div class="flex justify-end gap-3">
          <button 
            @click="showLogoutConfirmation = false"
            class="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Cancel
          </button>
          <button 
            @click="confirmLogout"
            class="bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-medium px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center"
            :disabled="isLoggingOut"
          >
            <LoaderIcon v-if="isLoggingOut" class="animate-spin w-4 h-4 mr-2" />
            <span>{{ isLoggingOut ? 'Logging out...' : 'Logout' }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { 
  LayoutDashboard as LayoutDashboardIcon,
  Package as PackageIcon,
  Palette as PaletteIcon,
  User as UserIcon,
  LogOut as LogOutIcon,
  Calendar as CalendarIcon,
  Bell as BellIcon,
  Info as InfoIcon,
  Clock as ClockIcon,
  Settings as SettingsIcon,
  Home as HomeIcon,
  RefreshCw as RefreshCwIcon,
  Plus as PlusIcon,
  Filter as FilterIcon,
  Activity as ActivityIcon,
  AlertTriangle as AlertTriangleIcon,
  XCircle as XCircleIcon,
  BarChart3 as BarChart3Icon,
  History as HistoryIcon,
  PlusCircle as PlusCircleIcon,
  MinusCircle as MinusCircleIcon,
  Edit as EditIcon,
  CheckCircle as CheckCircleIcon,
  Shield as ShieldIcon,
  TrendingUp as TrendingUpIcon,
  Star as StarIcon,
  ShoppingCart as ShoppingCartIcon,
  DollarSign as DollarSignIcon,
  Loader as LoaderIcon,
  Menu as MenuIcon,
  X as XIcon
} from 'lucide-vue-next'

import { 
  collection, 
  getDocs, 
  query, 
  where,
  orderBy, 
  limit, 
  onSnapshot,
  Timestamp 
} from 'firebase/firestore'
import { db, auth } from '../../config/firebase'
import { signOut } from 'firebase/auth'

const router = useRouter()
const mobileSidebarOpen = ref(false)
const currentDate = new Date().toLocaleDateString('en-US', { 
  weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' 
})

// User information
const userEmail = ref('')
const userDisplayName = ref('')

// Logout state
const showLogoutConfirmation = ref(false)
const isLoggingOut = ref(false)

// Inventory statistics
const inventoryStats = ref({
  totalProducts: 0,
  lowStock: 0,
  outOfStock: 0,
  totalValue: 0,
  categories: 0
})

// Orders statistics (today only - resets daily)
const salesStats = ref({
  today: 0,
  todayValue: 0,
  total: 0,
  pending: 0,
  completed: 0,
  totalValue: 0,
  thisMonth: 0
})

// Paint Mixing statistics
const paintMixingStats = ref({
  total: 0,
  pending: 0,
  byStaff: 0,
  byAdmin: 0,
  thisWeek: 0,
  thisMonth: 0
})

// House Paint Recommender statistics
const recommenderStats = ref({
  total: 0,
  byStaff: 0,
  byAdmin: 0,
  thisWeek: 0,
  thisMonth: 0,
  popularColor: ''
})

// System status
const systemStatus = ref({
  inventory: true,
  paintMixing: true,
  recommender: true
})

// Firestore unsubscribe functions
let unsubscribeInventory = null
let unsubscribePaintMixing = null
let unsubscribeRecommender = null
let unsubscribeSales = null

// Interval for checking date change (to reset orders at midnight)
let dateCheckInterval = null

// Format currency
const formatCurrency = (value) => {
  return value.toLocaleString('en-PH')
}

// Get current user info
const fetchUserInfo = () => {
  const user = auth.currentUser
  if (user) {
    userEmail.value = user.email || ''
    userDisplayName.value = user.displayName || 'Staff User'
  }
}

// Fetch inventory data with real-time updates
const fetchInventoryData = async () => {
  try {
    if (!db) return
    
    console.log("Setting up real-time listener for products collection")
    
    // Create a query for the products collection
    const productsRef = collection(db, 'products')
    const q = query(productsRef)
    
    // Set up real-time listener for products
    if (unsubscribeInventory) {
      unsubscribeInventory()
    }
    
    unsubscribeInventory = onSnapshot(q, (snapshot) => {
      console.log(`Received ${snapshot.docs.length} products from Firestore`)
      
      let totalProducts = snapshot.size
      let lowStock = 0
      let outOfStock = 0
      let totalValue = 0
      const categories = new Set()
      
      snapshot.forEach(doc => {
        const product = doc.data()
        // Check both stock and stockLevel fields for compatibility with Admin Inventory
        const stockLevel = product.stock !== undefined ? Number(product.stock) : 
                         product.stockLevel !== undefined ? Number(product.stockLevel) : 0
        const price = Number(product.price) || 0
        
        if (product.category) {
          categories.add(product.category)
        }
        
        totalValue += stockLevel * price
        
        if (stockLevel === 0) {
          outOfStock++
        } else if (stockLevel <= 10) {
          lowStock++
        }
      })
      
      inventoryStats.value = {
        totalProducts,
        lowStock,
        outOfStock,
        totalValue,
        categories: categories.size
      }
      
      // Update system status based on data availability
      systemStatus.value.inventory = true
      
      console.log("Updated inventory stats:", inventoryStats.value)
    }, (error) => {
      console.error('Error listening to inventory changes:', error)
      systemStatus.value.inventory = false
    })
    
  } catch (error) {
    console.error('Error fetching inventory data:', error)
    systemStatus.value.inventory = false
  }
}

// Fetch orders data (today only - resets daily, counts from both admin and staff)
const fetchSalesData = async () => {
  try {
    if (!db) return
    
    console.log("Setting up real-time listener for orders (sales collection)")
    
    const salesRef = collection(db, 'sales')
    
    // Query all sales and filter in memory (more reliable than date range queries)
    // This matches the pattern used in Staff Sales Analytics
    const allSalesQuery = query(
      salesRef,
      orderBy('date', 'desc')
    )
    
    // Set up real-time listener for all sales (we'll filter for today in memory)
    if (unsubscribeSales) {
      unsubscribeSales()
    }
    
    unsubscribeSales = onSnapshot(allSalesQuery, (snapshot) => {
      console.log(`Received ${snapshot.docs.length} total orders from query`)
      
      // Calculate today's date range INSIDE the callback so it always uses current date
      // This ensures automatic reset at midnight even if page is kept open
      const now = new Date()
      const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0)
      const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999)
      
      let todayCount = 0
      let todayValue = 0
      let totalCount = 0
      let totalValue = 0
      let pendingCount = 0
      let thisMonthCount = 0
      
      // Get one month ago for this month calculation
      const oneMonthAgo = new Date()
      oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1)
      
      snapshot.forEach(doc => {
        const sale = doc.data()
        
        // Convert Firestore timestamp to JS Date
        let saleDate = sale.date
        if (saleDate && typeof saleDate.toDate === 'function') {
          saleDate = saleDate.toDate()
        } else if (!saleDate) {
          saleDate = new Date() // Default to current date if missing
        }
        
        const saleTotal = Number(sale.total) || 0
        const saleStatus = sale.status || 'completed'
        
        // Count all completed orders
        if (saleStatus === 'completed') {
          totalCount++
          totalValue += saleTotal
          
          // Count today's orders (resets daily - date range recalculated each time)
          if (saleDate >= startOfDay && saleDate <= endOfDay) {
            todayCount++
            todayValue += saleTotal
            console.log(`Today's order: ${sale.orderId || doc.id}, Total: ₱${saleTotal}`)
          }
          
          // Count this month's orders
          if (saleDate >= oneMonthAgo) {
            thisMonthCount++
          }
        } else if (saleStatus === 'pending') {
          pendingCount++
        }
      })
      
      // Update stats
      salesStats.value = {
        today: todayCount,
        todayValue: todayValue,
        total: totalCount,
        pending: pendingCount,
        completed: totalCount,
        totalValue: totalValue,
        thisMonth: thisMonthCount
      }
      
      console.log(`Today's orders: ${todayCount}, Today's value: ₱${todayValue}`)
      console.log(`Total orders: ${totalCount}, Total value: ₱${totalValue}`)
    }, (error) => {
      console.error('Error listening to orders changes:', error)
    })
    
  } catch (error) {
    console.error('Error fetching orders data:', error)
  }
}

// Fetch paint mixing data - UPDATED to use paintMixtures collection
const fetchPaintMixingData = async () => {
  try {
    if (!db) return
    
    console.log("Fetching paint mixing data from paintMixtures collection")
    
    // Use the paintMixtures collection instead of paintMixingRequests
    const mixturesRef = collection(db, 'paintMixtures')
    
    // Get all paint mixtures
    const allMixturesQuery = query(mixturesRef)
    const allSnapshot = await getDocs(allMixturesQuery)
    
    // Get mixtures created by staff
    const staffMixturesQuery = query(mixturesRef, where('createdBy', '==', 'staff'))
    const staffSnapshot = await getDocs(staffMixturesQuery)
    
    // Get mixtures created by admin
    const adminMixturesQuery = query(mixturesRef, where('createdBy', '==', 'admin'))
    const adminSnapshot = await getDocs(adminMixturesQuery)
    
    // Get mixtures created this week
    const oneWeekAgo = new Date()
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)
    const oneWeekAgoTimestamp = Timestamp.fromDate(oneWeekAgo)
    
    const thisWeekQuery = query(
      mixturesRef, 
      where('date', '>=', oneWeekAgoTimestamp)
    )
    const thisWeekSnapshot = await getDocs(thisWeekQuery)
    
    // Get mixtures created this month
    const oneMonthAgo = new Date()
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1)
    const oneMonthAgoTimestamp = Timestamp.fromDate(oneMonthAgo)
    
    const thisMonthQuery = query(
      mixturesRef, 
      where('date', '>=', oneMonthAgoTimestamp)
    )
    const thisMonthSnapshot = await getDocs(thisMonthQuery)
    
    paintMixingStats.value = {
      total: allSnapshot.size,
      pending: 0, // Not applicable for mixtures
      byStaff: staffSnapshot.size,
      byAdmin: adminSnapshot.size,
      thisWeek: thisWeekSnapshot.size,
      thisMonth: thisMonthSnapshot.size
    }
    
    console.log("Updated paint mixing stats:", paintMixingStats.value)
    
    // Update system status based on data availability
    systemStatus.value.paintMixing = true
    
  } catch (error) {
    console.error('Error fetching paint mixing data:', error)
    systemStatus.value.paintMixing = false
  }
}

// Fetch house paint recommender data
const fetchRecommenderData = async () => {
  try {
    if (!db) return
    
    const recommenderRef = collection(db, 'paintRecommendations')
    
    // Get all recommendations
    const allSnapshot = await getDocs(query(recommenderRef))
    
    // Get recommendations by staff
    const staffSnapshot = await getDocs(query(recommenderRef, where('createdBy', '==', 'staff')))
    
    // Get recommendations by admin
    const adminSnapshot = await getDocs(query(recommenderRef, where('createdBy', '==', 'admin')))
    
    // Get recommendations from this week
    const oneWeekAgo = new Date()
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)
    const oneWeekAgoTimestamp = Timestamp.fromDate(oneWeekAgo)
    
    const thisWeekSnapshot = await getDocs(query(
      recommenderRef, 
      where('createdAt', '>=', oneWeekAgoTimestamp)
    ))
    
    // Get recommendations from this month
    const oneMonthAgo = new Date()
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1)
    const oneMonthAgoTimestamp = Timestamp.fromDate(oneMonthAgo)
    
    const thisMonthSnapshot = await getDocs(query(
      recommenderRef, 
      where('createdAt', '>=', oneMonthAgoTimestamp)
    ))
    
    recommenderStats.value = {
      total: allSnapshot.size,
      byStaff: staffSnapshot.size,
      byAdmin: adminSnapshot.size,
      thisWeek: thisWeekSnapshot.size,
      thisMonth: thisMonthSnapshot.size
    }
    
    // Update system status based on data availability
    systemStatus.value.recommender = true
    
  } catch (error) {
    console.error('Error fetching recommender data:', error)
    systemStatus.value.recommender = false
  }
}

// Check system status
const checkSystemStatus = async () => {
  try {
    // Check if we can connect to Firestore
    if (!db) {
      systemStatus.value = {
        inventory: false,
        paintMixing: false,
        recommender: false
      }
      return
    }
    
    // Try to fetch data from each collection to check status
    await fetchInventoryData()
    await fetchPaintMixingData()
    await fetchRecommenderData()
    
  } catch (error) {
    console.error('Error checking system status:', error)
    systemStatus.value = {
      inventory: false,
      paintMixing: false,
      recommender: false
    }
  }
}

// Set up real-time listener for sales
// setupSalesListener is no longer needed - fetchSalesData now sets up its own real-time listener

// Set up real-time listener for paint mixing - UPDATED to use paintMixtures collection
const setupPaintMixingListener = () => {
  if (!db) return null
  try {
    console.log("Setting up real-time listener for paintMixtures collection")
    
    // Use the paintMixtures collection instead of paintMixingRequests
    const mixturesRef = collection(db, 'paintMixtures')
    
    return onSnapshot(mixturesRef, async () => {
      await fetchPaintMixingData()
    }, (error) => {
      console.error('Error listening to paint mixing changes:', error)
      systemStatus.value.paintMixing = false
    })
  } catch (error) {
    console.error('Error setting up paint mixing listener:', error)
    systemStatus.value.paintMixing = false
    return null
  }
}

// Set up real-time listener for recommender
const setupRecommenderListener = () => {
  if (!db) return null
  
  try {
    const recommenderRef = collection(db, 'paintRecommendations')
    
    return onSnapshot(recommenderRef, async () => {
      await fetchRecommenderData()
    }, (error) => {
      console.error('Error listening to recommender changes:', error)
      systemStatus.value.recommender = false
    })
  } catch (error) {
    console.error('Error setting up recommender listener:', error)
    systemStatus.value.recommender = false
    return null
  }
}

// Set up real-time listener for inventory
const setupInventoryListener = () => {
  if (!db) return null
  
  try {
    const productsRef = collection(db, 'products')
    
    return onSnapshot(productsRef, async () => {
      await fetchInventoryData()
    }, (error) => {
      console.error('Error listening to inventory changes:', error)
      systemStatus.value.inventory = false
    })
  } catch (error) {
    console.error('Error setting up inventory listener:', error)
    systemStatus.value.inventory = false
    return null
  }
}

// Toggle mobile sidebar
const toggleMobileSidebar = () => {
  mobileSidebarOpen.value = !mobileSidebarOpen.value
}

// Show logout confirmation dialog
const handleLogout = () => {
  showLogoutConfirmation.value = true
}

// Perform actual logout after confirmation
const confirmLogout = async () => {
  try {
    isLoggingOut.value = true
    
    // Sign out from Firebase Auth
    await signOut(auth)
    console.log('User signed out successfully')
    
    router.push('/system')
  } catch (error) {
    console.error('Error signing out:', error)
  } finally {
    isLoggingOut.value = false
    showLogoutConfirmation.value = false
  }
}

// Initialize data on component mount
onMounted(async () => {
  // Check system status
  await checkSystemStatus()
  
  // Fetch user info
  fetchUserInfo()
  
  // Fetch initial data
  await fetchInventoryData()
  await fetchPaintMixingData()
  await fetchRecommenderData()
  await fetchSalesData()
  
  // Set up real-time listeners
  unsubscribeInventory = setupInventoryListener()
  unsubscribePaintMixing = setupPaintMixingListener()
  unsubscribeRecommender = setupRecommenderListener()
  // fetchSalesData now sets up its own real-time listener, so no need for setupSalesListener
  
  // Set up interval to check if date has changed (for automatic reset at midnight)
  // Check every minute to see if we've crossed into a new day
  let lastCheckedDate = new Date().toDateString()
  dateCheckInterval = setInterval(() => {
    const currentDate = new Date().toDateString()
    if (currentDate !== lastCheckedDate) {
      console.log('Date changed! Resetting orders count for new day.')
      lastCheckedDate = currentDate
      // Re-fetch sales data to recalculate with new date range
      fetchSalesData()
    }
  }, 60000) // Check every minute
})

// Clean up on component unmount
onUnmounted(() => {
  // Unsubscribe from Firestore listeners
  if (unsubscribeInventory) {
    unsubscribeInventory()
  }
  
  if (unsubscribePaintMixing) {
    unsubscribePaintMixing()
  }
  
  if (unsubscribeRecommender) {
    unsubscribeRecommender()
  }
  
  if (unsubscribeSales) {
    unsubscribeSales()
  }
  
  // Clear date check interval
  if (dateCheckInterval) {
    clearInterval(dateCheckInterval)
  }
})
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
</style>
