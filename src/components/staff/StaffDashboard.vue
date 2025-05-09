<template>
  <div class="min-h-screen bg-[#001333] relative overflow-hidden">
  <!-- Background Elements -->
  <div class="absolute inset-0">
    <div class="absolute top-0 right-0 w-96 h-96 bg-[#0A3573] opacity-10 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-[#0A3573] opacity-10 rounded-full filter blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
  </div>
  
  <div class="relative z-10 flex h-screen">
    <!-- Sidebar -->
    <aside class="w-64 bg-[#0A2159]/90 backdrop-blur-sm border-r border-white/10 shadow-xl">
      <!-- Logo/Brand -->
      <div class="p-6 border-b border-white/10">
        <h1 class="text-xl font-bold text-white">Mindoro Paint Center</h1>
      </div>
  
      <!-- Navigation -->
      <nav class="p-4 space-y-2 overflow-y-auto max-h-[calc(100vh-10rem)]">
        <router-link 
          to="/staff/dashboard" 
          class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
          :class="{ 'bg-white/10': $route.path === '/staff/dashboard' }"
        >
          <LayoutDashboardIcon class="w-5 h-5" />
          <span>Dashboard</span>
        </router-link>
  
        <router-link 
          to="/staff/inventory" 
          class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
          :class="{ 'bg-white/10': $route.path === '/staff/inventory' }"
        >
          <PackageIcon class="w-5 h-5" />
          <span>Inventory</span>
        </router-link>
  
        <router-link 
          to="/staff/paint-mixing" 
          class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
          :class="{ 'bg-white/10': $route.path === '/staff/paint-mixing' }"
        >
          <PaletteIcon class="w-5 h-5" />
          <span>Paint Mixing</span>
        </router-link>
  
        <router-link 
          to="/staff/house-paint-recommender" 
          class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
          :class="{ 'bg-white/10': $route.path === '/staff/house-paint-recommender' }"
        >
          <HomeIcon class="w-5 h-5" />
          <span>House Paint Recommender</span>
        </router-link>
  
        <router-link 
          to="/staff/settings" 
          class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
          :class="{ 'bg-white/10': $route.path === '/staff/settings' }"
        >
          <SettingsIcon class="w-5 h-5" />
          <span>Settings</span>
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
  
    <!-- Main Content -->
    <main class="flex-1 overflow-auto">
      <!-- Header -->
      <header class="bg-[#0A2159]/80 backdrop-blur-sm border-b border-white/10 px-8 py-4 shadow-md">
        <div class="flex items-center justify-between">
          <h1 class="text-2xl font-bold text-white">Staff Dashboard</h1>
          <div class="flex items-center gap-4">
            <div class="flex items-center gap-2 text-white/80">
              <CalendarIcon class="w-5 h-5" />
              <span>{{ currentDate }}</span>
            </div>
            <div class="h-6 w-px bg-white/20"></div>
            <div class="flex items-center gap-3">
              <span class="text-white">Welcome, {{ userDisplayName || 'Staff' }}</span>
              <div class="relative">
                <BellIcon class="w-5 h-5 text-white cursor-pointer hover:text-white/70" />
                <span class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
              </div>
            </div>
          </div>
        </div>
      </header>
  
      <!-- Dashboard Content -->
      <div class="p-8">
        <!-- Quick Stats -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <!-- Total Products -->
          <div class="bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-xl shadow-lg p-6 border border-white/10 transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px]">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-lg font-semibold text-white">Total Products</h3>
              <div class="p-2 bg-white/10 rounded-lg">
                <PackageIcon class="h-6 w-6 text-white" />
              </div>
            </div>
            <div class="flex items-end justify-between">
              <div>
                <p class="text-4xl font-bold text-white">{{ inventoryStats.totalProducts }}</p>
                <p class="text-sm text-white/60">In stock</p>
              </div>
              <div v-if="inventoryStats.totalProducts === 0" class="flex items-center text-white/60 bg-white/5 px-3 py-1 rounded-full">
                <InfoIcon class="w-4 h-4 mr-1" />
                <span class="text-sm font-medium">No items yet</span>
              </div>
              <div v-else class="flex items-center text-white/60 bg-white/5 px-3 py-1 rounded-full">
                <InfoIcon class="w-4 h-4 mr-1" />
                <span class="text-sm font-medium">{{ inventoryStats.categories }} categories</span>
              </div>
            </div>
          </div>
  
          <!-- Sales/Orders -->
          <div class="bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-xl shadow-lg p-6 border border-white/10 transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px]">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-lg font-semibold text-white">Sales</h3>
              <div class="p-2 bg-white/10 rounded-lg">
                <ShoppingCartIcon class="h-6 w-6 text-white" />
              </div>
            </div>
            <div class="flex items-end justify-between">
              <div>
                <p class="text-4xl font-bold text-white">{{ salesStats.total }}</p>
                <p class="text-sm text-white/60">Completed orders</p>
              </div>
              <div v-if="salesStats.total === 0" class="flex items-center text-white/60 bg-white/5 px-3 py-1 rounded-full">
                <InfoIcon class="w-4 h-4 mr-1" />
                <span class="text-sm font-medium">No sales yet</span>
              </div>
              <div v-else class="flex items-center text-white/60 bg-white/5 px-3 py-1 rounded-full">
                <InfoIcon class="w-4 h-4 mr-1" />
                <span class="text-sm font-medium">₱{{ formatCurrency(salesStats.totalValue) }}</span>
              </div>
            </div>
          </div>
  
          <!-- System Status -->
          <div class="bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-xl shadow-lg p-6 border border-white/10 transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px]">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-lg font-semibold text-white">System Status</h3>
              <div class="p-2 bg-white/10 rounded-lg">
                <ActivityIcon class="h-6 w-6 text-white" />
              </div>
            </div>
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-white/80">Inventory System</span>
                <div class="flex items-center">
                  <span class="h-2 w-2 rounded-full" :class="systemStatus.inventory ? 'bg-green-500' : 'bg-red-500'" :title="systemStatus.inventory ? 'Online' : 'Offline'"></span>
                  <span :class="systemStatus.inventory ? 'text-green-400' : 'text-red-400'" class="text-sm ml-2">{{ systemStatus.inventory ? 'Online' : 'Offline' }}</span>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-white/80">Paint Mixing</span>
                <div class="flex items-center">
                  <span class="h-2 w-2 rounded-full" :class="systemStatus.paintMixing ? 'bg-green-500' : 'bg-red-500'" :title="systemStatus.paintMixing ? 'Online' : 'Offline'"></span>
                  <span :class="systemStatus.paintMixing ? 'text-green-400' : 'text-red-400'" class="text-sm ml-2">{{ systemStatus.paintMixing ? 'Online' : 'Offline' }}</span>
                </div>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-white/80">Recommender</span>
                <div class="flex items-center">
                  <span class="h-2 w-2 rounded-full" :class="systemStatus.recommender ? 'bg-green-500' : 'bg-red-500'" :title="systemStatus.recommender ? 'Online' : 'Offline'"></span>
                  <span :class="systemStatus.recommender ? 'text-green-400' : 'text-red-400'" class="text-sm ml-2">{{ systemStatus.recommender ? 'Online' : 'Offline' }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Main Content Sections -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <!-- Inventory Quick Status -->
          <div class="bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-xl shadow-lg p-6 border border-white/10">
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-lg font-semibold text-white">Inventory Quick Status</h3>
              <button @click="fetchInventoryData" class="text-white/60 hover:text-white transition-colors">
                <RefreshCwIcon class="w-5 h-5" />
              </button>
            </div>
            
            <div class="grid grid-cols-2 gap-4 mb-6">
              <div class="bg-white/5 rounded-lg p-4">
                <div class="flex items-center gap-3 mb-2">
                  <div class="p-2 bg-yellow-500/20 rounded-lg">
                    <AlertTriangleIcon class="w-5 h-5 text-yellow-400" />
                  </div>
                  <span class="text-white font-medium">Low Stock</span>
                </div>
                <p class="text-2xl font-bold text-white">{{ inventoryStats.lowStock }}</p>
                <p class="text-xs text-white/60">Items below threshold</p>
              </div>
              
              <div class="bg-white/5 rounded-lg p-4">
                <div class="flex items-center gap-3 mb-2">
                  <div class="p-2 bg-red-500/20 rounded-lg">
                    <XCircleIcon class="w-5 h-5 text-red-400" />
                  </div>
                  <span class="text-white font-medium">Out of Stock</span>
                </div>
                <p class="text-2xl font-bold text-white">{{ inventoryStats.outOfStock }}</p>
                <p class="text-xs text-white/60">Items need reordering</p>
              </div>
            </div>
            
            <div class="bg-white/5 rounded-lg p-4">
              <div class="flex items-center gap-3 mb-2">
                <div class="p-2 bg-blue-500/20 rounded-lg">
                  <BarChart3Icon class="w-5 h-5 text-blue-400" />
                </div>
                <span class="text-white font-medium">Inventory Value</span>
              </div>
              <p class="text-2xl font-bold text-white">₱{{ formatCurrency(inventoryStats.totalValue) }}</p>
              <p class="text-xs text-white/60">Total value of current inventory</p>
            </div>
          </div>
  
          <!-- Paint Mixing Stats -->
          <div class="bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-xl shadow-lg p-6 border border-white/10">
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-lg font-semibold text-white">Paint Mixing</h3>
              <button @click="fetchPaintMixingData" class="text-white/60 hover:text-white transition-colors">
                <RefreshCwIcon class="w-5 h-5" />
              </button>
            </div>
            
            <div class="grid grid-cols-2 gap-4 mb-6">
              <div class="bg-white/5 rounded-lg p-4">
                <div class="flex items-center gap-3 mb-2">
                  <div class="p-2 bg-green-500/20 rounded-lg">
                    <UserIcon class="w-5 h-5 text-green-400" />
                  </div>
                  <span class="text-white font-medium">By Staff</span>
                </div>
                <p class="text-2xl font-bold text-white">{{ paintMixingStats.byStaff }}</p>
                <p class="text-xs text-white/60">Recommendations</p>
              </div>
              
              <div class="bg-white/5 rounded-lg p-4">
                <div class="flex items-center gap-3 mb-2">
                  <div class="p-2 bg-blue-500/20 rounded-lg">
                    <ShieldIcon class="w-5 h-5 text-blue-400" />
                  </div>
                  <span class="text-white font-medium">By Admin</span>
                </div>
                <p class="text-2xl font-bold text-white">{{ paintMixingStats.byAdmin }}</p>
                <p class="text-xs text-white/60">Recommendations</p>
              </div>
            </div>
            
            <div class="bg-white/5 rounded-lg p-4">
              <div class="flex items-center gap-3 mb-2">
                <div class="p-2 bg-purple-500/20 rounded-lg">
                  <TrendingUpIcon class="w-5 h-5 text-purple-400" />
                </div>
                <span class="text-white font-medium">This Month</span>
              </div>
              <p class="text-2xl font-bold text-white">{{ paintMixingStats.thisMonth }}</p>
              <p class="text-xs text-white/60">Recommendations this month</p>
            </div>
          </div>
        </div>
  
        <!-- Recent Inventory Changes and House Paint Recommender -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <!-- Recent Inventory Changes -->
          <div class="bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-xl shadow-lg p-6 border border-white/10">
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-lg font-semibold text-white">Recent Inventory Changes</h3>
              <div class="flex items-center gap-2">
                <button class="text-white/60 hover:text-white transition-colors">
                  <FilterIcon class="w-5 h-5" />
                </button>
                <button @click="fetchInventoryChanges" class="text-white/60 hover:text-white transition-colors">
                  <RefreshCwIcon class="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div v-if="inventoryChanges.length === 0" class="flex flex-col items-center justify-center py-10 text-center">
              <HistoryIcon class="w-16 h-16 text-white/10 mb-4" />
              <p class="text-white/80 text-lg">No recent inventory changes</p>
              <p class="text-white/40 mt-2">Changes to inventory will be shown here</p>
            </div>
            
            <div v-else class="space-y-4">
              <div v-for="change in inventoryChanges" :key="change.id" class="bg-white/5 rounded-lg p-4 flex items-center gap-4">
                <div class="p-2 rounded-full" :class="getChangeTypeColor(change.type)">
                  <component :is="getChangeTypeIcon(change.type)" class="w-5 h-5" />
                </div>
                <div class="flex-1">
                  <p class="text-white font-medium">{{ change.productName }}</p>
                  <p class="text-white/60 text-sm">{{ change.description }}</p>
                </div>
                <div class="text-right">
                  <p class="text-white/80 text-sm">{{ formatDate(change.timestamp) }}</p>
                  <p class="text-white/60 text-xs">By {{ change.user }}</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- House Paint Recommender -->
          <div class="bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-xl shadow-lg p-6 border border-white/10">
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-lg font-semibold text-white">House Paint Recommender</h3>
              <button @click="fetchRecommenderData" class="text-white/60 hover:text-white transition-colors">
                <RefreshCwIcon class="w-5 h-5" />
              </button>
            </div>
            
            <div class="grid grid-cols-2 gap-4 mb-6">
              <div class="bg-white/5 rounded-lg p-4">
                <div class="flex items-center gap-3 mb-2">
                  <div class="p-2 bg-green-500/20 rounded-lg">
                    <UserIcon class="w-5 h-5 text-green-400" />
                  </div>
                  <span class="text-white font-medium">By Staff</span>
                </div>
                <p class="text-2xl font-bold text-white">{{ recommenderStats.byStaff }}</p>
                <p class="text-xs text-white/60">Recommendations</p>
              </div>
              
              <div class="bg-white/5 rounded-lg p-4">
                <div class="flex items-center gap-3 mb-2">
                  <div class="p-2 bg-blue-500/20 rounded-lg">
                    <ShieldIcon class="w-5 h-5 text-blue-400" />
                  </div>
                  <span class="text-white font-medium">By Admin</span>
                </div>
                <p class="text-2xl font-bold text-white">{{ recommenderStats.byAdmin }}</p>
                <p class="text-xs text-white/60">Recommendations</p>
              </div>
            </div>
            
            <div class="bg-white/5 rounded-lg p-4">
              <div class="flex items-center gap-3 mb-2">
                <div class="p-2 bg-purple-500/20 rounded-lg">
                  <TrendingUpIcon class="w-5 h-5 text-purple-400" />
                </div>
                <span class="text-white font-medium">This Month</span>
              </div>
              <p class="text-2xl font-bold text-white">{{ recommenderStats.thisMonth }}</p>
              <p class="text-xs text-white/60">Recommendations this month</p>
            </div>
          </div>
        </div>
      </div>
    </main>
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
  Loader as LoaderIcon
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

// Sales statistics
const salesStats = ref({
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

// Inventory changes
const inventoryChanges = ref([])

// Firestore unsubscribe functions
let unsubscribeInventory = null
let unsubscribeChanges = null
let unsubscribePaintMixing = null
let unsubscribeRecommender = null
let unsubscribeSales = null

// Format currency
const formatCurrency = (value) => {
  return value.toLocaleString('en-PH')
}

// Format date
const formatDate = (timestamp) => {
  if (!timestamp) return 'N/A'
  
  const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp)
  
  // If today, show time
  const today = new Date()
  if (date.toDateString() === today.toDateString()) {
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
  }
  
  // If this year, show month and day
  if (date.getFullYear() === today.getFullYear()) {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }
  
  // Otherwise show full date
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}

// Helper functions for inventory changes
const getChangeTypeColor = (type) => {
  switch(type) {
    case 'add': return 'bg-green-500/20 text-green-400'
    case 'remove': return 'bg-red-500/20 text-red-400'
    case 'update': return 'bg-blue-500/20 text-blue-400'
    default: return 'bg-gray-500/20 text-gray-400'
  }
}

const getChangeTypeIcon = (type) => {
  switch(type) {
    case 'add': return PlusCircleIcon
    case 'remove': return MinusCircleIcon
    case 'update': return EditIcon
    default: return InfoIcon
  }
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

// Fetch sales data
const fetchSalesData = async () => {
  try {
    if (!db) return
    
    const salesRef = collection(db, 'sales')
    
    // Get all completed orders (sales)
    const completedOrdersQuery = query(salesRef, where('status', '==', 'completed'))
    const completedSnapshot = await getDocs(completedOrdersQuery)
    
    // Get pending orders
    const pendingOrdersQuery = query(salesRef, where('status', '==', 'pending'))
    const pendingSnapshot = await getDocs(pendingOrdersQuery)
    
    // Get orders from this month
    const oneMonthAgo = new Date()
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1)
    
    const oneMonthAgoTimestamp = Timestamp.fromDate(oneMonthAgo)
    
    const thisMonthQuery = query(
      salesRef, 
      where('status', '==', 'completed'),
      where('date', '>=', oneMonthAgoTimestamp)
    )
    const thisMonthSnapshot = await getDocs(thisMonthQuery)
    
    // Calculate total value of completed orders
    let totalValue = 0
    completedSnapshot.forEach(doc => {
      const sale = doc.data()
      totalValue += Number(sale.total) || 0
    })
    
    salesStats.value = {
      total: completedSnapshot.size,
      pending: pendingSnapshot.size,
      completed: completedSnapshot.size,
      totalValue: totalValue,
      thisMonth: thisMonthSnapshot.size
    }
    
  } catch (error) {
    console.error('Error fetching sales data:', error)
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
const setupSalesListener = () => {
  if (!db) return null

  try {
    const salesRef = collection(db, 'sales')
    
    return onSnapshot(salesRef, async () => {
      await fetchSalesData()
    }, (error) => {
      console.error('Error listening to sales changes:', error)
    })
  } catch (error) {
    console.error('Error setting up sales listener:', error)
    return null
  }
}

// Fetch inventory changes
const fetchInventoryChanges = async () => {
  try {
    if (!db) return
    
    const changesRef = collection(db, 'inventoryChanges')
    const q = query(changesRef, orderBy('timestamp', 'desc'), limit(10))
    
    const snapshot = await getDocs(q)
    
    const changes = []
    snapshot.forEach(doc => {
      changes.push({
        id: doc.id,
        ...doc.data()
      })
    })
    
    inventoryChanges.value = changes
    
  } catch (error) {
    console.error('Error fetching inventory changes:', error)
  }
}

// Set up real-time listener for inventory changes
const setupInventoryChangesListener = () => {
  if (!db) return null
  
  try {
    const changesRef = collection(db, 'inventoryChanges')
    const q = query(changesRef, orderBy('timestamp', 'desc'), limit(10))
    
    return onSnapshot(q, (snapshot) => {
      const changes = []
      snapshot.forEach(doc => {
        changes.push({
          id: doc.id,
          ...doc.data()
        })
      })
      
      inventoryChanges.value = changes
    }, (error) => {
      console.error('Error listening to inventory changes:', error)
    })
  } catch (error) {
    console.error('Error setting up inventory changes listener:', error)
    return null
  }
}

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

// Initialize data on component mount
onMounted(async () => {
  // Check system status
  await checkSystemStatus()
  
  // Fetch user info
  fetchUserInfo()
  
  // Fetch initial data
  await fetchInventoryData()
  await fetchInventoryChanges()
  await fetchPaintMixingData()
  await fetchRecommenderData()
  await fetchSalesData()
  
  // Set up real-time listeners
  unsubscribeInventory = setupInventoryListener()
  unsubscribeChanges = setupInventoryChangesListener()
  unsubscribePaintMixing = setupPaintMixingListener()
  unsubscribeRecommender = setupRecommenderListener()
  unsubscribeSales = setupSalesListener()
})

// Clean up on component unmount
onUnmounted(() => {
  // Unsubscribe from Firestore listeners
  if (unsubscribeInventory) {
    unsubscribeInventory()
  }
  
  if (unsubscribeChanges) {
    unsubscribeChanges()
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
})
</script>
  
<style scoped>
/* Add any additional styles here */
</style>