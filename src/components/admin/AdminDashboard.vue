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
              <p class="text-sm font-medium text-white truncate">{{ userDisplayName }}</p>
              <p class="text-xs text-white/60 truncate">{{ userEmail }}</p>
            </div>
            <button 
              @click="handleLogout"
              class="p-2 rounded-lg hover:bg-white/10 text-white transition-colors"
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
              <p class="text-sm font-medium text-white truncate">{{ userDisplayName }}</p>
              <p class="text-xs text-white/60 truncate">{{ userEmail }}</p>
            </div>
            <button 
              @click="handleLogout"
              class="p-2 rounded-lg hover:bg-white/10 text-white transition-colors"
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
        <header class="bg-[#0A2159]/80 backdrop-blur-sm border-b border-white/10 px-8 py-4 shadow-md">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 class="text-2xl font-bold text-white">Dashboard</h1>
              <p class="text-white/60">Welcome to your admin dashboard</p>
            </div>
            <div class="flex items-center gap-4">
              <div class="flex items-center gap-2 text-white/80">
                <CalendarIcon class="w-5 h-5" />
                <span>{{ currentDate }}</span>
              </div>
              <div class="h-6 w-px bg-white/20"></div>
              <div class="flex items-center gap-3">
                <span class="text-white">Welcome, {{ userDisplayName || 'Admin' }}</span>
                <div class="relative">
                  <BellIcon class="w-5 h-5 text-white cursor-pointer hover:text-white/70" />
                </div>
              </div>
            </div>
          </div>
        </header>

        <div class="p-6 md:p-8">
          <!-- Welcome Section -->
          <div class="bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-xl shadow-lg p-6 mb-6 border border-white/10">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h2 class="text-xl font-bold text-white mb-2">Welcome to your Dashboard!</h2>
                <p class="text-white/60">Get started by setting up your paint store.</p>
              </div>
              <button 
                @click="showSetupGuide = true"
                class="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:opacity-90 transition-colors shadow-lg"
              >
                Setup Guide
              </button>
            </div>
          </div>

          <!-- Dashboard Summary Cards -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <!-- Total Sales Card -->
            <div class="bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-xl shadow-lg p-6 border border-white/10">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-lg font-semibold text-white">Total Sales</h3>
                <DollarSignIcon class="h-6 w-6 text-white/40" />
              </div>
              <div class="flex items-end justify-between">
                <div>
                  <p class="text-3xl font-bold text-white">₱{{ totalSales.toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}</p>
                  <p class="text-sm text-white/60">{{ salesStatus }}</p>
                </div>
                <div class="flex items-center text-blue-300 hover:text-blue-200 cursor-pointer">
                  <ArrowRightIcon class="w-4 h-4 mr-1" />
                  <span class="text-sm font-medium">Start selling</span>
                </div>
              </div>
            </div>

            <!-- Orders Card -->
            <div class="bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-xl shadow-lg p-6 border border-white/10">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-lg font-semibold text-white">Orders</h3>
                <ShoppingCartIcon class="h-6 w-6 text-white/40" />
              </div>
              <div class="flex items-end justify-between">
                <div>
                  <p class="text-3xl font-bold text-white">{{ totalOrders }}</p>
                  <p class="text-sm text-white/60">{{ totalOrders === 0 ? 'No orders yet' : 'Orders processed' }}</p>
                </div>
                <div class="flex items-center text-blue-300 hover:text-blue-200 cursor-pointer">
                  <ClipboardIcon class="w-4 h-4 mr-1" />
                  <span class="text-sm font-medium">Create order</span>
                </div>
              </div>
            </div>

            <!-- Products Card -->
            <div class="bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-xl shadow-lg p-6 border border-white/10">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-lg font-semibold text-white">Products</h3>
                <PackageIcon class="h-6 w-6 text-white/40" />
              </div>
              <div class="flex items-end justify-between">
                <div>
                  <p class="text-3xl font-bold text-white">{{ totalProducts }}</p>
                  <p class="text-sm text-white/60">Total products</p>
                </div>
                <div class="flex items-center text-blue-300 hover:text-blue-200 cursor-pointer">
                  <PackagePlusIcon class="w-4 h-4 mr-1" />
                  <span class="text-sm font-medium">Add product</span>
                </div>
              </div>
            </div>

            <!-- Staff Card -->
            <div class="bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-xl shadow-lg p-6 border border-white/10">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-lg font-semibold text-white">Staff</h3>
                <UsersIcon class="h-6 w-6 text-white/40" />
              </div>
              <div class="flex items-end justify-between">
                <div>
                  <p class="text-3xl font-bold text-white">{{ totalStaff }}</p>
                  <p class="text-sm text-white/60">Total staff members</p>
                </div>
                <div class="flex items-center text-blue-300 hover:text-blue-200 cursor-pointer">
                  <UserPlusIcon class="w-4 h-4 mr-1" />
                  <span class="text-sm font-medium">Add staff</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Getting Started Section -->
          <div class="mt-8">
            <h2 class="text-xl font-bold text-white mb-6">Getting Started</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <!-- Add Products Card -->
              <div class="bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-xl shadow-lg p-6 border border-white/10">
                <div class="flex justify-center mb-6">
                  <div class="p-4 bg-white/10 rounded-full">
                    <PackageIcon class="w-8 h-8 text-white/70" />
                  </div>
                </div>
                <h3 class="text-lg font-bold text-white text-center mb-2">1. Add Products</h3>
                <p class="text-white/60 text-center mb-6">Start by adding your paint products to the inventory</p>
                <div class="flex justify-center">
                  <router-link 
                    to="/admin/inventory" 
                    class="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:opacity-90 transition-colors w-full text-center shadow-lg"
                  >
                    Add Products
                  </router-link>
                </div>
              </div>

              <!-- Add Staff Card -->
              <div class="bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-xl shadow-lg p-6 border border-white/10">
                <div class="flex justify-center mb-6">
                  <div class="p-4 bg-white/10 rounded-full">
                    <UsersIcon class="w-8 h-8 text-white/70" />
                  </div>
                </div>
                <h3 class="text-lg font-bold text-white text-center mb-2">2. Add Staff</h3>
                <p class="text-white/60 text-center mb-6">Create accounts for your staff members</p>
                <div class="flex justify-center">
                  <router-link 
                    to="/admin/staff" 
                    class="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:opacity-90 transition-colors w-full text-center shadow-lg"
                  >
                    Manage Staff
                  </router-link>
                </div>
              </div>

              <!-- Configure Settings Card -->
              <div class="bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-xl shadow-lg p-6 border border-white/10">
                <div class="flex justify-center mb-6">
                  <div class="p-4 bg-white/10 rounded-full">
                    <SettingsIcon class="w-8 h-8 text-white/70" />
                  </div>
                </div>
                <h3 class="text-lg font-bold text-white text-center mb-2">3. Configure Settings</h3>
                <p class="text-white/60 text-center mb-6">Set up your store preferences and system settings</p>
                <div class="flex justify-center">
                  <router-link 
                    to="/admin/settings" 
                    class="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:opacity-90 transition-colors w-full text-center shadow-lg"
                  >
                    System Settings
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>

  <!-- Setup Guide Modal -->
  <div v-if="showSetupGuide" class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
    <div class="bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-xl w-full max-w-2xl max-h-[80vh] overflow-auto border border-white/10 shadow-2xl">
      <div class="p-6 border-b border-white/10 sticky top-0 bg-[#0A2159] z-10">
        <div class="flex justify-between items-center">
          <h3 class="text-xl font-bold text-white">Setup Guide</h3>
          <button 
            @click="showSetupGuide = false"
            class="p-2 hover:bg-white/10 rounded-lg text-white/60 hover:text-white"
          >
            <XIcon class="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div class="p-6">
        <div class="space-y-6">
          <div>
            <h4 class="text-lg font-bold text-white mb-2">1. Add Products</h4>
            <p class="text-white/60 mb-4">Start by adding your paint products to the inventory.</p>
            <ul class="list-disc pl-5 space-y-2 text-white/70">
              <li>Go to the Inventory page</li>
              <li>Click "Add Product" button</li>
              <li>Fill in the product details (name, category, price, etc.)</li>
              <li>Upload product images if available</li>
              <li>Save the product</li>
            </ul>
          </div>

          <div>
            <h4 class="text-lg font-bold text-white mb-2">2. Add Staff Members</h4>
            <p class="text-white/60 mb-4">Create accounts for your staff members.</p>
            <ul class="list-disc pl-5 space-y-2 text-white/70">
              <li>Go to the Staff Management page</li>
              <li>Click "Add Staff Member" button</li>
              <li>Fill in the staff details (name, email, role, etc.)</li>
              <li>Set a temporary password</li>
              <li>Save the staff member</li>
            </ul>
          </div>

          <div>
            <h4 class="text-lg font-bold text-white mb-2">3. Configure System Settings</h4>
            <p class="text-white/60 mb-4">Set up your store preferences and system settings.</p>
            <ul class="list-disc pl-5 space-y-2 text-white/70">
              <li>Go to the System Settings page</li>
              <li>Configure store information (name, address, contact details)</li>
              <li>Set up tax rates and currency preferences</li>
              <li>Configure email notifications</li>
              <li>Save your settings</li>
            </ul>
          </div>

          <div>
            <h4 class="text-lg font-bold text-white mb-2">4. Record Sales</h4>
            <p class="text-white/60 mb-4">Start recording sales and managing orders.</p>
            <ul class="list-disc pl-5 space-y-2 text-white/70">
              <li>Go to the Sales Analytics page</li>
              <li>Click "Add Sale" button</li>
              <li>Select products and quantities</li>
              <li>Add customer information</li>
              <li>Complete the sale</li>
            </ul>
          </div>
        </div>

        <div class="mt-8 flex justify-end">
          <button 
            @click="showSetupGuide = false"
            class="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:opacity-90 transition-colors shadow-lg"
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Logout Confirmation Modal -->
  <div v-if="showLogoutConfirmation" class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
    <div class="bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-xl w-full max-w-md border border-white/10 shadow-2xl p-6">
      <h3 class="text-xl font-bold text-white mb-4">Confirm Logout</h3>
      <p class="text-white/80 mb-6">Are you sure you want to log out of your account?</p>
      <div class="flex justify-end gap-3">
        <button 
          @click="showLogoutConfirmation = false"
          class="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
        >
          Cancel
        </button>
        <button 
          @click="confirmLogout"
          class="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:opacity-90 transition-colors shadow-lg flex items-center"
          :disabled="isLoggingOut"
        >
          <LoaderIcon v-if="isLoggingOut" class="animate-spin w-4 h-4 mr-2" />
          <span>{{ isLoggingOut ? 'Logging out...' : 'Logout' }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
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
  Plus as PlusIcon,
  ArrowRight as ArrowRightIcon,
  BarChart as BarChartIcon,
  Activity as ActivityIcon,
  Calendar as CalendarIcon,
  Bell as BellIcon,
  DollarSign as DollarSignIcon,
  ShoppingCart as ShoppingCartIcon,
  Clock as ClockIcon,
  UserPlus as UserPlusIcon,
  AlertTriangle as AlertTriangleIcon,
  PackagePlus as PackagePlusIcon,
  FileText as FileTextIcon,
  CheckCircle as CheckCircleIcon,
  BookOpen as BookOpenIcon,
  Loader as LoaderIcon
} from 'lucide-vue-next'
import { collection, query, getDocs, orderBy } from 'firebase/firestore'
import { db, auth } from '../../config/firebase'
import { signOut } from 'firebase/auth'

const router = useRouter()
const route = useRoute()
const mobileSidebarOpen = ref(false)
const totalSales = ref(0)
const totalProducts = ref(0)
const totalStaff = ref(0)
const totalOrders = ref(0)
const showSetupGuide = ref(false)
const showLogoutConfirmation = ref(false)
const isLoggingOut = ref(false)
const userEmail = ref('')
const userDisplayName = ref('')

// Fetch product count from Firestore
const fetchProductCount = async () => {
  try {
    const productsRef = collection(db, 'products')
    const q = query(productsRef)
    const querySnapshot = await getDocs(q)
    totalProducts.value = querySnapshot.size
    console.log('Fetched product count:', totalProducts.value)
  } catch (err) {
    console.error('Error fetching product count:', err)
  }
}

// Fetch staff count from Firestore
const fetchStaffCount = async () => {
  try {
    const staffRef = collection(db, 'staff')
    const q = query(staffRef)
    const querySnapshot = await getDocs(q)
    totalStaff.value = querySnapshot.size
  } catch (err) {
    console.error('Error fetching staff count:', err)
  }
}

// Fetch sales data from Firestore
const fetchSalesData = async () => {
  try {
    console.log("Fetching sales data for dashboard...")
    
    // Try to fetch from 'sales' collection first (used by AdminSalesAnalytics)
    const salesRef = collection(db, 'sales')
    const salesQuery = query(salesRef, orderBy('date', 'desc'))
    const salesSnapshot = await getDocs(salesQuery)
    
    let salesTotal = 0
    let ordersCount = 0
    
    salesSnapshot.forEach((doc) => {
      const data = doc.data()
      salesTotal += Number(data.total) || 0
      ordersCount++
    })
    
    // If we found sales data, use it
    if (ordersCount > 0) {
      totalSales.value = salesTotal
      totalOrders.value = ordersCount
      console.log(`Fetched sales data from 'sales' collection: ${ordersCount} orders, total: ${salesTotal}`)
      return
    }
    
    // If no data in 'sales', try 'orders' collection as fallback
    const ordersRef = collection(db, 'orders')
    const ordersQuery = query(ordersRef)
    const ordersSnapshot = await getDocs(ordersQuery)
    
    let ordersTotal = 0
    
    ordersSnapshot.forEach((doc) => {
      const data = doc.data()
      ordersTotal += Number(data.totalAmount) || 0
      ordersCount++
    })
    
    totalSales.value = ordersTotal
    totalOrders.value = ordersCount
    console.log(`Fetched sales data from 'orders' collection: ${ordersCount} orders, total: ${ordersTotal}`)
    
  } catch (err) {
    console.error('Error fetching sales data:', err)
  }
}

// Get current user info
const fetchUserInfo = () => {
  const user = auth.currentUser
  if (user) {
    userEmail.value = user.email || ''
    userDisplayName.value = user.displayName || 'Admin'
  }
}

const currentDate = new Date().toLocaleDateString('en-US', { 
  weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' 
})

const salesStatus = computed(() => {
  return totalSales.value === 0 ? 'No sales yet' : 'Sales this month'
})

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
    
    // Redirect to homepage (root path)
    router.push('/')
  } catch (error) {
    console.error('Error signing out:', error)
  } finally {
    isLoggingOut.value = false
    showLogoutConfirmation.value = false
  }
}

// Load data on component mount
onMounted(() => {
  fetchProductCount()
  fetchStaffCount()
  fetchSalesData()
  fetchUserInfo()
})
</script>

<style scoped>
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
</style>