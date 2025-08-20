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

        <!-- Navigation -->
        <nav class="flex-1 p-4 space-y-2 overflow-y-auto">
          <router-link to="/staff/dashboard" class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700">
            <LayoutDashboardIcon class="w-5 h-5" />
            <span>Dashboard</span>
          </router-link>

          <router-link to="/staff/inventory" class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-purple-600 bg-purple-50 shadow-sm border border-purple-200 transform scale-105">
            <PackageIcon class="w-5 h-5" />
            <span>Inventory</span>
          </router-link>

          <router-link to="/staff/paint-mixing" class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-pink-600 bg-pink-50 hover:bg-pink-100 hover:text-pink-700">
            <PaletteIcon class="w-5 h-5" />
            <span>Paint Mixing</span>
          </router-link>

          <router-link to="/staff/house-paint-recommender" class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-orange-600 bg-orange-50 hover:bg-orange-100 hover:text-orange-700">
            <HomeIcon class="w-5 h-5" />
            <span>House Paint Recommender</span>
          </router-link>

          <router-link to="/staff/sales-analytics" class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-teal-600 bg-teal-50 hover:bg-teal-100 hover:text-teal-700">
            <TrendingUpIcon class="w-5 h-5" />
            <span>Sales Analytics</span>
          </router-link>

          <router-link to="/staff/settings" class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-green-600 bg-green-50 hover:bg-green-100 hover:text-green-700">
            <SettingsIcon class="w-5 h-5" />
            <span>Settings</span>
          </router-link>
        </nav>

        <!-- User Menu -->
        <div class="p-4 border-t border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50 backdrop-blur-sm flex-shrink-0">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-yellow-600 flex items-center justify-center shadow-lg">
              <UserIcon class="w-5 h-5 text-white" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate">Staff User</p>
              <p class="text-xs text-gray-600 truncate">staff@example.com</p>
            </div>
            <button @click="handleLogout" class="p-2 rounded-lg hover:bg-white/50 text-gray-600 hover:text-gray-900 transition-colors" title="Logout">
              <LogOutIcon class="w-5 h-5" />
            </button>
          </div>
        </div>
      </aside>

      <!-- Mobile Sidebar Toggle -->
      <div class="fixed top-4 left-4 z-30 md:hidden">
        <button @click="toggleMobileSidebar" class="p-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-lg shadow-lg" aria-label="Toggle navigation menu">
          <MenuIcon v-if="!mobileSidebarOpen" class="w-6 h-6 text-gray-700" />
          <XIcon v-else class="w-6 h-6 text-gray-700" />
        </button>
      </div>

      <!-- Mobile Sidebar -->
      <div v-if="mobileSidebarOpen" class="fixed inset-0 bg-black/20 z-20 md:hidden" @click="toggleMobileSidebar"></div>

      <aside v-if="mobileSidebarOpen" class="fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-white to-gray-50 backdrop-blur-sm border-r border-gray-200 z-20 md:hidden shadow-xl flex flex-col">
        <!-- Mobile Logo -->
        <div class="p-6 border-b border-gray-200 flex-shrink-0">
          <div>
            <h1 class="text-lg font-bold text-gray-900 leading-tight">Barcelona Paint Center</h1>
          </div>
          <div class="mt-2 text-xs text-white bg-gradient-to-r from-orange-500 to-yellow-600 px-3 py-1 rounded-full inline-flex items-center shadow-sm">
            <UserIcon class="h-3 w-3 mr-1" />
            Staff Portal
          </div>
        </div>

        <!-- Mobile Navigation -->
        <nav class="flex-1 p-4 space-y-2 overflow-y-auto">
          <router-link to="/staff/dashboard" class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-blue-600 bg-blue-50" @click="mobileSidebarOpen = false">
            <LayoutDashboardIcon class="w-5 h-5" />
            <span>Dashboard</span>
          </router-link>

          <router-link to="/staff/inventory" class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-purple-600 bg-purple-50 shadow-sm border border-purple-200" @click="mobileSidebarOpen = false">
            <PackageIcon class="w-5 h-5" />
            <span>Inventory</span>
          </router-link>

          <router-link to="/staff/paint-mixing" class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-pink-600 bg-pink-50" @click="mobileSidebarOpen = false">
            <PaletteIcon class="w-5 h-5" />
            <span>Paint Mixing</span>
          </router-link>

          <router-link to="/staff/house-paint-recommender" class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-orange-600 bg-orange-50" @click="mobileSidebarOpen = false">
            <HomeIcon class="w-5 h-5" />
            <span>House Paint Recommender</span>
          </router-link>

          <router-link to="/staff/sales-analytics" class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-teal-600 bg-teal-50" @click="mobileSidebarOpen = false">
            <TrendingUpIcon class="w-5 h-5" />
            <span>Sales Analytics</span>
          </router-link>

          <router-link to="/staff/settings" class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-green-600 bg-green-50" @click="mobileSidebarOpen = false">
            <SettingsIcon class="w-5 h-5" />
            <span>Settings</span>
          </router-link>
        </nav>

        <!-- Mobile User Menu -->
        <div class="p-4 border-t border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50 backdrop-blur-sm flex-shrink-0">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-yellow-600 flex items-center justify-center shadow-lg">
              <UserIcon class="w-5 h-5 text-white" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate">Staff User</p>
              <p class="text-xs text-gray-600 truncate">staff@example.com</p>
            </div>
            <button @click="handleLogout" class="p-2 rounded-lg hover:bg-white/50 text-gray-600 hover:text-gray-900 transition-colors" title="Logout">
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
              <h1 class="text-2xl font-bold text-gray-900">Inventory Management</h1>
              <p class="text-gray-600">View and manage product inventory</p>
            </div>
            <div class="flex items-center gap-4">
              <div class="hidden md:flex items-center gap-2 text-gray-700">
                <CalendarIcon class="w-5 h-5 text-purple-500" />
                <span>{{ currentDate }}</span>
              </div>
              <div class="hidden md:block h-6 w-px bg-gray-300"></div>
              <div class="flex items-center gap-3">
                <span class="text-gray-900">Welcome, Staff</span>
                <div class="relative">
                  <BellIcon class="w-5 h-5 text-orange-500 cursor-pointer hover:text-orange-600" />
                </div>
              </div>
            </div>
          </div>
        </header>

        <div class="p-6 md:p-8">
          <!-- Stats Cards -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 overflow-hidden relative">
              <div class="bg-gradient-to-br from-purple-400 via-violet-500 to-fuchsia-600 h-2 absolute top-0 left-0 right-0"></div>
              <div class="p-6">
                <div class="flex items-center gap-4">
                  <div class="p-3 rounded-xl shadow-lg bg-gradient-to-br from-purple-400 via-violet-500 to-fuchsia-600 transform hover:scale-110 transition-transform duration-200">
                    <PackageIcon class="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p class="text-sm text-gray-600">Total Products</p>
                    <p class="text-2xl font-bold text-gray-900">{{ totalProducts }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 overflow-hidden relative">
              <div class="bg-gradient-to-br from-orange-400 via-amber-500 to-yellow-500 h-2 absolute top-0 left-0 right-0"></div>
              <div class="p-6">
                <div class="flex items-center gap-4">
                  <div class="p-3 rounded-xl shadow-lg bg-gradient-to-br from-orange-400 via-amber-500 to-yellow-500 transform hover:scale-110 transition-transform duration-200">
                    <AlertTriangleIcon class="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p class="text-sm text-gray-600">Low Stock Items</p>
                    <p class="text-2xl font-bold text-gray-900">{{ lowStockCount }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 overflow-hidden relative">
              <div class="bg-gradient-to-br from-red-400 via-pink-500 to-rose-600 h-2 absolute top-0 left-0 right-0"></div>
              <div class="p-6">
                <div class="flex items-center gap-4">
                  <div class="p-3 rounded-xl shadow-lg bg-gradient-to-br from-red-400 via-pink-500 to-rose-600 transform hover:scale-110 transition-transform duration-200">
                    <XCircleIcon class="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p class="text-sm text-gray-600">Out of Stock</p>
                    <p class="text-2xl font-bold text-gray-900">{{ outOfStockCount }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Search and Filter Bar -->
          <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 mb-8">
            <div class="flex flex-col md:flex-row gap-4">
              <div class="flex-1">
                <div class="relative">
                  <SearchIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input type="text" v-model="searchQuery" placeholder="Search products..." class="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500" />
                </div>
              </div>
              <div class="flex flex-col sm:flex-row gap-4">
                <select v-model="filterCategory" class="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white text-gray-900">
                  <option value="">All Categories</option>
                  <option value="interior">Interior Paint</option>
                  <option value="exterior">Exterior Paint</option>
                  <option value="primer">Primers</option>
                  <option value="specialty">Specialty Paints</option>
                </select>
                <select v-model="filterStock" class="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white text-gray-900">
                  <option value="">All Stock Levels</option>
                  <option value="in-stock">In Stock</option>
                  <option value="low-stock">Low Stock</option>
                  <option value="out-of-stock">Out of Stock</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Products Table -->
          <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg overflow-hidden">
            <!-- Loading State -->
            <div v-if="loading && products.length === 0" class="p-8 text-center">
              <LoaderIcon class="w-8 h-8 text-gray-400 animate-spin mx-auto mb-4" />
              <p class="text-gray-600">Loading inventory data...</p>
            </div>

            <!-- Empty State -->
            <div v-if="!loading && products.length === 0" class="p-8 text-center">
              <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                <PackageIcon class="w-8 h-8 text-purple-600" />
              </div>
              <h3 class="text-lg font-medium text-gray-900 mb-2">No products found</h3>
              <p class="text-gray-600 mb-4">Products added by admin will appear here.</p>
            </div>

            <!-- Mobile View -->
            <div v-else-if="products.length > 0" class="block md:hidden">
              <div v-for="product in paginatedProducts" :key="product.id" class="p-4 border-b border-gray-100">
                <div class="flex items-center justify-between mb-2">
                  <div class="flex items-center gap-3">
                    <!-- Updated to show product images instead of generic icons -->
                    <div class="w-12 h-12 rounded-lg overflow-hidden shadow-lg flex items-center justify-center" :class="product.image ? 'bg-white' : 'bg-gradient-to-br from-purple-500 to-pink-500'">
                      <img v-if="product.image" :src="product.image" :alt="product.name" class="w-full h-full object-cover" />
                      <PackageIcon v-else class="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p class="font-medium text-gray-900">{{ product.name }}</p>
                      <p class="text-sm text-gray-600">{{ formatCategory(product.category) }}</p>
                    </div>
                  </div>
                </div>
                <div class="flex flex-wrap gap-2 mt-2">
                  <span class="px-2 py-1 rounded-full text-sm" :class="getStockLevelClass(product.stockLevel)">
                    {{ formatStockLevel(product.stockLevel) }}
                  </span>
                  <span class="text-sm text-gray-600">
                    Price: ₱{{ product.price.toLocaleString() }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Desktop View -->
            <div v-if="products.length > 0" class="hidden md:block overflow-x-auto">
              <table class="w-full">
                <thead>
                  <tr class="border-b border-gray-100">
                    <th class="text-left p-4 text-sm font-medium text-gray-600">Product</th>
                    <th class="text-left p-4 text-sm font-medium text-gray-600">Category</th>
                    <th class="text-left p-4 text-sm font-medium text-gray-600">Stock Level</th>
                    <th class="text-left p-4 text-sm font-medium text-gray-600">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="loading" class="border-b border-gray-100">
                    <td colspan="4" class="p-8 text-center">
                      <LoaderIcon class="w-6 h-6 text-gray-400 animate-spin mx-auto" />
                    </td>
                  </tr>
                  <tr v-else-if="paginatedProducts.length === 0" class="border-b border-gray-100">
                    <td colspan="4" class="p-8 text-center text-gray-600">
                      No products found
                    </td>
                  </tr>
                  <tr v-for="product in paginatedProducts" :key="product.id" class="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                    <td class="p-4">
                      <div class="flex items-center gap-3">
                        <!-- Updated to show product images instead of generic icons -->
                        <div class="w-12 h-12 rounded-lg overflow-hidden shadow-lg flex items-center justify-center" :class="product.image ? 'bg-white' : 'bg-gradient-to-br from-purple-500 to-pink-500'">
                          <img v-if="product.image" :src="product.image" :alt="product.name" class="w-full h-full object-cover" />
                          <PackageIcon v-else class="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p class="font-medium text-gray-900">{{ product.name }}</p>
                          <p class="text-sm text-gray-600">SKU: {{ product.sku || 'N/A' }}</p>
                        </div>
                      </div>
                    </td>
                    <td class="p-4">
                      <span class="px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-800 border border-purple-200">
                        {{ formatCategory(product.category) }}
                      </span>
                    </td>
                    <td class="p-4">
                      <span class="px-3 py-1 rounded-full text-sm" :class="getStockLevelClass(product.stockLevel)">
                        {{ formatStockLevel(product.stockLevel) }}
                      </span>
                    </td>
                    <td class="p-4 text-gray-900">
                      ₱{{ product.price.toLocaleString() }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Pagination -->
            <div v-if="products.length > 0" class="flex flex-col sm:flex-row items-center justify-between gap-4 px-4 py-4 border-t border-gray-100">
              <div class="flex items-center gap-2">
                <select v-model="perPage" class="px-2 py-1 rounded-lg border border-gray-200 text-sm bg-white text-gray-900">
                  <option value="10">10 per page</option>
                  <option value="25">25 per page</option>
                  <option value="50">50 per page</option>
                </select>
                <span class="text-sm text-gray-600">
                  Showing {{ paginationStart }} - {{ paginationEnd }} of {{ filteredProducts.length }}
                </span>
              </div>
              <div class="flex items-center gap-2">
                <button @click="currentPage--" :disabled="currentPage === 1" class="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 text-gray-700">
                  <ChevronLeftIcon class="w-5 h-5" />
                </button>
                <span class="text-sm text-gray-700">Page {{ currentPage }} of {{ totalPages || 1 }}</span>
                <button @click="currentPage++" :disabled="currentPage >= totalPages" class="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 text-gray-700">
                  <ChevronRightIcon class="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import {
  LayoutDashboard as LayoutDashboardIcon,
  Package as PackageIcon,
  Palette as PaletteIcon,
  Home as HomeIcon,
  Settings as SettingsIcon,
  User as UserIcon,
  LogOut as LogOutIcon,
  Menu as MenuIcon,
  X as XIcon,
  Search as SearchIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  AlertTriangle as AlertTriangleIcon,
  XCircle as XCircleIcon,
  Loader as LoaderIcon,
  Calendar as CalendarIcon,
  Bell as BellIcon,
  TrendingUp as TrendingUpIcon
} from 'lucide-vue-next'
import { collection, query, onSnapshot } from 'firebase/firestore'
import { db } from '../../config/firebase'

// Router and reactive state
const router = useRouter()
const mobileSidebarOpen = ref(false)
const searchQuery = ref('')
const filterCategory = ref('')
const filterStock = ref('')
const perPage = ref(10)
const currentPage = ref(1)
const loading = ref(false)
const error = ref(null)
const unsubscribe = ref(null)
const products = ref([])

// Database reference
const productsRef = db ? collection(db, 'products') : null

// Computed properties
const currentDate = computed(() => {
  return new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
})

const filteredProducts = computed(() => {
  let filtered = [...products.value]

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(product => 
      product.name?.toLowerCase().includes(query) ||
      product.sku?.toLowerCase().includes(query)
    )
  }

  if (filterCategory.value) {
    filtered = filtered.filter(product => product.category === filterCategory.value)
  }

  if (filterStock.value) {
    switch (filterStock.value) {
      case 'in-stock':
        filtered = filtered.filter(product => product.stockLevel > 10)
        break
      case 'low-stock':
        filtered = filtered.filter(product => product.stockLevel > 0 && product.stockLevel <= 10)
        break
      case 'out-of-stock':
        filtered = filtered.filter(product => product.stockLevel === 0)
        break
    }
  }

  return filtered
})

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * perPage.value
  const end = start + parseInt(perPage.value)
  return filteredProducts.value.slice(start, end)
})

const totalProducts = computed(() => products.value.length)
const lowStockCount = computed(() => products.value.filter(p => p.stockLevel > 0 && p.stockLevel <= 10).length)
const outOfStockCount = computed(() => products.value.filter(p => p.stockLevel === 0).length)
const totalPages = computed(() => Math.ceil(filteredProducts.value.length / perPage.value) || 1)
const paginationStart = computed(() => filteredProducts.value.length ? ((currentPage.value - 1) * perPage.value) + 1 : 0)
const paginationEnd = computed(() => Math.min(currentPage.value * perPage.value, filteredProducts.value.length))

// Methods
const fetchProducts = async () => {
  try {
    loading.value = true
    error.value = null
    
    if (!db || !productsRef) {
      throw new Error('Database not initialized')
    }

    const q = query(productsRef)
    
    if (unsubscribe.value) {
      unsubscribe.value()
    }

    unsubscribe.value = onSnapshot(
      q,
      (snapshot) => {
        products.value = snapshot.docs.map(doc => {
          const data = doc.data()
          const stockValue = data.stock !== undefined ? Number(data.stock) : 
                            data.stockLevel !== undefined ? Number(data.stockLevel) : 0
          
          return {
            id: doc.id,
            ...data,
            price: Number(data.price) || 0,
            stockLevel: stockValue,
            stock: stockValue
          }
        })
        
        loading.value = false
        error.value = null
      },
      (err) => {
        console.error('Firestore error:', err)
        loading.value = false
        error.value = 'Unable to connect to database. Please try again.'
        products.value = []
      }
    )
  } catch (err) {
    console.error('Error in fetchProducts:', err)
    loading.value = false
    error.value = 'Database connection failed. Please refresh the page.'
    products.value = []
  }
}

const getStockLevelClass = (stockLevel) => {
  if (stockLevel === 0) return 'bg-red-100 text-red-800 border border-red-200'
  if (stockLevel <= 10) return 'bg-amber-100 text-amber-800 border border-amber-200'
  return 'bg-green-100 text-green-800 border border-green-200'
}

const formatStockLevel = (stockLevel) => {
  if (stockLevel === 0) return 'Out of Stock'
  if (stockLevel <= 10) return `Low Stock (${stockLevel})`
  return `In Stock (${stockLevel})`
}

const formatCategory = (category) => {
  const categories = {
    interior: 'Interior Paint',
    exterior: 'Exterior Paint',
    primer: 'Primers',
    specialty: 'Specialty Paints'
  }
  return categories[category] || category
}

const toggleMobileSidebar = () => {
  mobileSidebarOpen.value = !mobileSidebarOpen.value
}

const handleLogout = () => {
  router.push('/staff')
}

// Lifecycle hooks
onMounted(() => {
  fetchProducts().catch(err => {
    console.error('Mount error:', err)
    error.value = 'Failed to initialize inventory. Please refresh the page.'
  })
})

onUnmounted(() => {
  if (unsubscribe.value) {
    unsubscribe.value()
  }
})

// Watchers
watch([searchQuery, filterStock, filterCategory], () => {
  currentPage.value = 1
})
</script>

<style scoped>
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
