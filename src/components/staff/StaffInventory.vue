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
              <p class="text-sm font-medium text-white truncate">Staff User</p>
              <p class="text-xs text-white/60 truncate">staff@example.com</p>
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
            to="/staff/dashboard" 
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
            :class="{ 'bg-white/10': $route.path === '/staff/dashboard' }"
            @click="mobileSidebarOpen = false"
          >
            <LayoutDashboardIcon class="w-5 h-5" />
            <span>Dashboard</span>
          </router-link>
  
          <router-link 
            to="/staff/inventory" 
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
            :class="{ 'bg-white/10': $route.path === '/staff/inventory' }"
            @click="mobileSidebarOpen = false"
          >
            <PackageIcon class="w-5 h-5" />
            <span>Inventory</span>
          </router-link>
  
          <router-link 
            to="/staff/paint-mixing" 
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
            :class="{ 'bg-white/10': $route.path === '/staff/paint-mixing' }"
            @click="mobileSidebarOpen = false"
          >
            <PaletteIcon class="w-5 h-5" />
            <span>Paint Mixing</span>
          </router-link>
  
          <router-link 
            to="/staff/house-paint-recommender" 
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
            :class="{ 'bg-white/10': $route.path === '/staff/house-paint-recommender' }"
            @click="mobileSidebarOpen = false"
          >
            <HomeIcon class="w-5 h-5" />
            <span>House Paint Recommender</span>
          </router-link>
  
          <router-link 
            to="/staff/settings" 
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors"
            :class="{ 'bg-white/10': $route.path === '/staff/settings' }"
            @click="mobileSidebarOpen = false"
          >
            <SettingsIcon class="w-5 h-5" />
            <span>Settings</span>
          </router-link>
        </nav>
  
        <div class="absolute bottom-0 w-64 p-4 border-t border-white/10 bg-[#0A2159]/90 backdrop-blur-sm">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <UserIcon class="w-5 h-5 text-white" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-white truncate">Staff User</p>
              <p class="text-xs text-white/60 truncate">staff@example.com</p>
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
              <h1 class="text-2xl font-bold text-white">Inventory Management</h1>
              <p class="text-white/60">View and manage product inventory</p>
            </div>
            <div class="flex items-center gap-4">
              <div class="hidden md:flex items-center gap-2 text-white/80">
                <CalendarIcon class="w-5 h-5" />
                <span>{{ currentDate }}</span>
              </div>
              <div class="hidden md:block h-6 w-px bg-white/20"></div>
              <div class="flex items-center gap-3">
                <span class="text-white">Welcome, Staff</span>
                <div class="relative">
                  <BellIcon class="w-5 h-5 text-white cursor-pointer hover:text-white/70" />
                </div>
              </div>
            </div>
          </div>
        </header>

        <div class="p-4 md:p-6 lg:p-8">
          <!-- Stats Cards -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <!-- Total Products -->
            <div class="bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-lg shadow-lg p-4 border border-white/10">
              <div class="flex items-center gap-3">
                <div class="p-2 bg-white/10 rounded-lg">
                  <PackageIcon class="w-5 h-5 text-white" />
                </div>
                <div>
                  <p class="text-sm text-white/60">Total Products</p>
                  <p class="text-xl font-bold text-white">{{ totalProducts }}</p>
                </div>
              </div>
            </div>

            <!-- Low Stock -->
            <div class="bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-lg shadow-lg p-4 border border-white/10">
              <div class="flex items-center gap-3">
                <div class="p-2 bg-amber-500/20 rounded-lg">
                  <AlertTriangleIcon class="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <p class="text-sm text-white/60">Low Stock Items</p>
                  <p class="text-xl font-bold text-white">{{ lowStockCount }}</p>
                </div>
              </div>
            </div>

            <!-- Out of Stock -->
            <div class="bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-lg shadow-lg p-4 border border-white/10">
              <div class="flex items-center gap-3">
                <div class="p-2 bg-red-500/20 rounded-lg">
                  <XCircleIcon class="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <p class="text-sm text-white/60">Out of Stock</p>
                  <p class="text-xl font-bold text-white">{{ outOfStockCount }}</p>
                </div>
              </div>
            </div>

            <!-- Total Value -->
            <div class="bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-lg shadow-lg p-4 border border-white/10">
              <div class="flex items-center gap-3">
                <div class="p-2 bg-green-500/20 rounded-lg">
                  <DollarSignIcon class="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p class="text-sm text-white/60">Total Value</p>
                  <p class="text-xl font-bold text-white">₱{{ totalValue.toLocaleString() }}</p>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Search and Filter Bar -->
          <div class="bg-[#0A2159] rounded-lg p-4 mb-6 border border-white/10">
            <div class="flex flex-col md:flex-row gap-4">
              <div class="flex-1">
                <div class="relative">
                  <SearchIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5" />
                  <input 
                    type="text"
                    v-model="searchQuery"
                    placeholder="Search products..."
                    class="w-full pl-10 pr-4 py-2 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 bg-white/10 text-white placeholder-white/50"
                  />
                </div>
              </div>
              <div class="flex flex-col sm:flex-row gap-4">
                <select 
                  v-model="filterCategory"
                  class="px-4 py-2 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 bg-white/10 text-white"
                >
                  <option value="">All Categories</option>
                  <option value="interior">Interior Paint</option>
                  <option value="exterior">Exterior Paint</option>
                  <option value="primer">Primers</option>
                  <option value="specialty">Specialty Paints</option>
                </select>
                <select 
                  v-model="filterStock"
                  class="px-4 py-2 rounded-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 bg-white/10 text-white"
                >
                  <option value="">All Stock Levels</option>
                  <option value="in-stock">In Stock</option>
                  <option value="low-stock">Low Stock</option>
                  <option value="out-of-stock">Out of Stock</option>
                </select>
              </div>
            </div>
          </div>
  
          <!-- Products Table -->
          <div class="bg-[#0A2159] rounded-lg shadow-md overflow-hidden border border-white/10">
            <!-- Loading State -->
            <div v-if="loading" class="p-12 text-center">
              <LoaderIcon class="w-10 h-10 text-white/20 animate-spin mx-auto mb-4" />
              <p class="text-white/60">Loading inventory data...</p>
            </div>

            <!-- Empty State -->
            <div v-if="!loading && products.length === 0" class="p-12 text-center">
              <div class="mx-auto w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-4">
                <PackageIcon class="w-10 h-10 text-white/20" />
              </div>
              <h3 class="text-xl font-medium text-white mb-2">No products found</h3>
              <p class="text-white/60 max-w-md mx-auto">
                Products added by admin will appear here.
              </p>
            </div>

            <!-- Mobile View (Products) -->
            <div v-if="!loading && products.length > 0" class="block md:hidden">
              <div v-for="product in paginatedProducts" :key="product.id" class="p-4 border-b border-white/10">
                <div class="flex items-center justify-between mb-2">
                  <div class="flex items-center gap-3">
                    <div class="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                      <PackageIcon class="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p class="font-medium text-white">{{ product.name }}</p>
                      <p class="text-sm text-white/60">{{ formatCategory(product.category) }}</p>
                    </div>
                  </div>
                </div>
                <div class="flex flex-wrap gap-2 mt-2">
                  <span 
                    class="px-2 py-1 rounded-full text-sm"
                    :class="getStockLevelClass(product.stockLevel)"
                  >
                    {{ formatStockLevel(product.stockLevel) }}
                  </span>
                  <span class="text-sm text-white/60">
                    Price: ₱{{ product.price.toLocaleString() }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Desktop View (Products Table) -->
            <div v-if="!loading && products.length > 0" class="hidden md:block overflow-x-auto">
              <table class="w-full">
                <thead>
                  <tr class="border-b border-white/10">
                    <th class="text-left p-4 text-sm font-medium text-white/60">Product</th>
                    <th class="text-left p-4 text-sm font-medium text-white/60">Category</th>
                    <th class="text-left p-4 text-sm font-medium text-white/60">Stock Level</th>
                    <th class="text-left p-4 text-sm font-medium text-white/60">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr 
                    v-for="product in paginatedProducts" 
                    :key="product.id" 
                    class="border-b border-white/10 hover:bg-white/5"
                  >
                    <td class="p-4">
                      <div class="flex items-center gap-3">
                        <div class="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                          <PackageIcon class="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p class="font-medium text-white">{{ product.name }}</p>
                          <p class="text-sm text-white/60">SKU: {{ product.sku || 'N/A' }}</p>
                        </div>
                      </div>
                    </td>
                    <td class="p-4">
                      <span class="px-3 py-1 rounded-full text-sm bg-white/10 text-white">
                        {{ formatCategory(product.category) }}
                      </span>
                    </td>
                    <td class="p-4">
                      <span 
                        class="px-3 py-1 rounded-full text-sm"
                        :class="getStockLevelClass(product.stockLevel)"
                      >
                        {{ formatStockLevel(product.stockLevel) }}
                      </span>
                    </td>
                    <td class="p-4 text-white">
                      ₱{{ product.price.toLocaleString() }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
  
            <!-- Pagination -->
            <div v-if="products.length > 0" class="flex flex-col sm:flex-row items-center justify-between gap-4 px-4 py-4 border-t border-white/10">
              <div class="flex items-center gap-2">
                <select 
                  v-model="perPage"
                  class="px-2 py-1 rounded-lg border border-white/10 text-sm bg-white/10 text-white"
                >
                  <option value="10">10 per page</option>
                  <option value="25">25 per page</option>
                  <option value="50">50 per page</option>
                </select>
                <span class="text-sm text-white/60">
                  Showing {{ paginationStart }} - {{ paginationEnd }} of {{ filteredProducts.length }}
                </span>
              </div>
              <div class="flex items-center gap-2">
                <button 
                  @click="currentPage--"
                  :disabled="currentPage === 1"
                  class="p-2 rounded-lg hover:bg-white/10 disabled:opacity-50 text-white"
                >
                  <ChevronLeftIcon class="w-5 h-5" />
                </button>
                <span class="text-sm text-white">Page {{ currentPage }} of {{ totalPages || 1 }}</span>
                <button 
                  @click="currentPage++"
                  :disabled="currentPage >= totalPages"
                  class="p-2 rounded-lg hover:bg-white/10 disabled:opacity-50 text-white"
                >
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
  DollarSign as DollarSignIcon,
  Loader as LoaderIcon,
  Calendar as CalendarIcon,
  Bell as BellIcon
} from 'lucide-vue-next'
import { 
  collection, 
  getDocs, 
  query, 
  orderBy,
  onSnapshot,
  where,
  Timestamp 
} from 'firebase/firestore'
import { db } from '../../config/firebase'
  
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

// Current date
const currentDate = computed(() => {
  return new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
})

// Products state
const products = ref([])

// Products collection reference
const productsRef = db ? collection(db, 'products') : null

// Fetch products from Firestore with real-time updates
const fetchProducts = async () => {
  try {
    loading.value = true
    error.value = null
    
    // Ensure db is properly initialized
    if (!db || !productsRef) {
      throw new Error('Database not initialized')
    }

    // Create query with error handling
    const q = query(productsRef)
    
    // Set up real-time listener
    if (unsubscribe.value) {
      unsubscribe.value()
    }

    unsubscribe.value = onSnapshot(
      q,
      (snapshot) => {
        products.value = snapshot.docs.map(doc => {
          const data = doc.data()
          // Ensure we use the correct stock value (check both fields)
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
        console.log('Fetched products with real-time updates:', products.value)
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

// Clean up listener on component unmount
onUnmounted(() => {
  if (unsubscribe.value) {
    unsubscribe.value()
  }
})

// Call fetchProducts on component mount with error handling
onMounted(() => {
  fetchProducts().catch(err => {
    console.error('Mount error:', err)
    error.value = 'Failed to initialize inventory. Please refresh the page.'
  })
})

// Computed properties
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
const totalValue = computed(() => products.value.reduce((sum, product) => sum + (product.price * product.stockLevel), 0))

const totalPages = computed(() => Math.ceil(filteredProducts.value.length / perPage.value) || 1)
const paginationStart = computed(() => filteredProducts.value.length ? ((currentPage.value - 1) * perPage.value) + 1 : 0)
const paginationEnd = computed(() => Math.min(currentPage.value * perPage.value, filteredProducts.value.length))

// Helper methods
const getStockLevelClass = (stockLevel) => {
  if (stockLevel === 0) return 'bg-red-500/20 text-red-300'
  if (stockLevel <= 10) return 'bg-amber-500/20 text-amber-300'
  return 'bg-green-500/20 text-green-300'
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

// Methods
const toggleMobileSidebar = () => {
  mobileSidebarOpen.value = !mobileSidebarOpen.value
}
  
const handleLogout = () => {
  router.push('/staff')
}

watch([searchQuery, filterStock, filterCategory], () => {
  currentPage.value = 1
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