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
  
      <!-- Mobile Sidebar Toggle -->
      <div class="fixed top-4 left-4 z-30 md:hidden">
        <button 
          @click="toggleMobileSidebar"
          class="p-2 bg-white/90 backdrop-blur-sm border border-navy/10 rounded-lg shadow-sm"
        >
          <MenuIcon v-if="!mobileSidebarOpen" class="w-6 h-6 text-navy" />
          <XIcon v-else class="w-6 h-6 text-navy" />
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
            @click="mobileSidebarOpen = false"
          >
            <component :is="item.icon" class="w-5 h-5" />
            <span>{{ item.name }}</span>
          </router-link>
        </nav>
  
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
        <div class="p-4 md:p-6 lg:p-8">
          <!-- Header -->
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
              <h1 class="text-2xl font-bold text-navy">Inventory Management</h1>
              <p class="text-navy/60">View and manage product inventory</p>
            </div>
            <div class="w-full sm:w-auto">
              <button 
                @click="showAddModal = true"
                class="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-navy text-white rounded-lg hover:bg-navy/90 transition-colors"
              >
                <PlusIcon class="w-5 h-5" />
                <span>Add Product</span>
              </button>
            </div>
          </div>
  
          <!-- Search and Filter Bar -->
          <div class="bg-white/90 backdrop-blur-sm rounded-xl p-4 mb-6">
            <div class="flex flex-col md:flex-row gap-4">
              <div class="flex-1">
                <div class="relative">
                  <SearchIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 text-navy/40 w-5 h-5" />
                  <input 
                    type="text"
                    v-model="searchQuery"
                    placeholder="Search products..."
                    class="w-full pl-10 pr-4 py-2 rounded-lg border border-navy/10 focus:outline-none focus:ring-2 focus:ring-navy/20 bg-white"
                  />
                </div>
              </div>
              <div class="flex flex-col sm:flex-row gap-4">
                <select 
                  v-model="filterCategory"
                  class="px-4 py-2 rounded-lg border border-navy/10 focus:outline-none focus:ring-2 focus:ring-navy/20 bg-white"
                >
                  <option value="">All Categories</option>
                  <option value="interior">Interior Paint</option>
                  <option value="exterior">Exterior Paint</option>
                  <option value="primer">Primers</option>
                  <option value="specialty">Specialty Paints</option>
                </select>
                <select 
                  v-model="filterStock"
                  class="px-4 py-2 rounded-lg border border-navy/10 focus:outline-none focus:ring-2 focus:ring-navy/20 bg-white"
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
          <div class="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm overflow-hidden">
            <!-- Mobile View -->
            <div class="block md:hidden">
              <div v-if="loading" class="p-8 text-center">
                <LoaderIcon class="w-6 h-6 text-navy/40 animate-spin mx-auto" />
              </div>
              <div v-else-if="filteredProducts.length === 0" class="p-8 text-center text-navy/60">
                No products found
              </div>
              <div v-else>
                <div 
                  v-for="product in paginatedProducts" 
                  :key="product.id" 
                  class="p-4 border-b border-navy/10"
                >
                  <div class="flex items-center justify-between mb-2">
                    <div class="flex items-center gap-3">
                      <div class="w-12 h-12 rounded-lg bg-navy/5 flex items-center justify-center">
                        <PackageIcon class="w-6 h-6 text-navy" />
                      </div>
                      <div>
                        <p class="font-medium text-navy">{{ product.name }}</p>
                        <p class="text-sm text-navy/60">{{ product.category }}</p>
                      </div>
                    </div>
                    <div class="flex items-center gap-2">
                      <button 
                        @click="editProduct(product)"
                        class="p-2 hover:bg-navy/5 rounded-lg text-navy/60"
                      >
                        <EditIcon class="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                  <div class="flex flex-wrap gap-2 mt-2">
                    <span 
                      class="px-2 py-1 rounded-full text-sm"
                      :class="getStockLevelClass(product.stockLevel)"
                    >
                      {{ formatStockLevel(product.stockLevel) }}
                    </span>
                    <span class="text-sm text-navy/60">
                      Price: ₱{{ product.price.toLocaleString() }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
  
            <!-- Desktop View -->
            <div class="hidden md:block overflow-x-auto">
              <table class="w-full">
                <thead>
                  <tr class="border-b border-navy/10">
                    <th class="text-left p-4 text-sm font-medium text-navy/60">Product</th>
                    <th class="text-left p-4 text-sm font-medium text-navy/60">Category</th>
                    <th class="text-left p-4 text-sm font-medium text-navy/60">Stock Level</th>
                    <th class="text-left p-4 text-sm font-medium text-navy/60">Price</th>
                    <th class="text-right p-4 text-sm font-medium text-navy/60">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="loading" class="border-b border-navy/10">
                    <td colspan="5" class="p-8 text-center">
                      <LoaderIcon class="w-6 h-6 text-navy/40 animate-spin mx-auto" />
                    </td>
                  </tr>
                  <tr v-else-if="filteredProducts.length === 0" class="border-b border-navy/10">
                    <td colspan="5" class="p-8 text-center text-navy/60">
                      No products found
                    </td>
                  </tr>
                  <tr 
                    v-for="product in paginatedProducts" 
                    :key="product.id" 
                    class="border-b border-navy/10"
                  >
                    <td class="p-4">
                      <div class="flex items-center gap-3">
                        <div class="w-12 h-12 rounded-lg bg-navy/5 flex items-center justify-center">
                          <PackageIcon class="w-6 h-6 text-navy" />
                        </div>
                        <div>
                          <p class="font-medium text-navy">{{ product.name }}</p>
                          <p class="text-sm text-navy/60">SKU: {{ product.sku }}</p>
                        </div>
                      </div>
                    </td>
                    <td class="p-4">
                      <span class="px-3 py-1 rounded-full text-sm bg-navy/5 text-navy">
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
                    <td class="p-4 text-navy">
                      ₱{{ product.price.toLocaleString() }}
                    </td>
                    <td class="p-4">
                      <div class="flex items-center justify-end gap-2">
                        <button 
                          @click="editProduct(product)"
                          class="p-2 hover:bg-navy/5 rounded-lg text-navy/60"
                        >
                          <EditIcon class="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
  
            <!-- Pagination -->
            <div class="flex flex-col sm:flex-row items-center justify-between gap-4 px-4 py-4 border-t border-navy/10">
              <div class="flex items-center gap-2">
                <select 
                  v-model="perPage"
                  class="px-2 py-1 rounded-lg border border-navy/10 text-sm bg-white"
                >
                  <option value="10">10 per page</option>
                  <option value="25">25 per page</option>
                  <option value="50">50 per page</option>
                </select>
                <span class="text-sm text-navy/60">
                  Showing {{ paginationStart }} - {{ paginationEnd }} of {{ totalProducts }}
                </span>
              </div>
              <div class="flex items-center gap-2">
                <button 
                  @click="currentPage--"
                  :disabled="currentPage === 1"
                  class="p-2 rounded-lg hover:bg-navy/5 disabled:opacity-50"
                >
                  <ChevronLeftIcon class="w-5 h-5" />
                </button>
                <span class="text-sm text-navy">Page {{ currentPage }} of {{ totalPages }}</span>
                <button 
                  @click="currentPage++"
                  :disabled="currentPage >= totalPages"
                  class="p-2 rounded-lg hover:bg-navy/5 disabled:opacity-50"
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
  import { ref, computed } from 'vue'
  import { useRouter } from 'vue-router'
  import {
  LayoutDashboard,
  Package as PackageIcon,
  Palette as PaletteIcon,
  Home as HomeIcon,
  Settings as SettingsIcon,
  User as UserIcon,
  LogOut as LogOutIcon,
  Menu as MenuIcon,
  X as XIcon,
  Plus as PlusIcon,
  Search as SearchIcon,
  Edit as EditIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Loader as LoaderIcon,
  } from 'lucide-vue-next'
  
  const router = useRouter()
  const mobileSidebarOpen = ref(false)
  const loading = ref(false)
  const showAddModal = ref(false)
  const searchQuery = ref('')
  const filterCategory = ref('')
  const filterStock = ref('')
  const currentPage = ref(1)
  const perPage = ref(10)
  
  // Navigation items
  const navigationItems = [
  { name: 'Dashboard', path: '/staff/dashboard', icon: LayoutDashboard },
  { name: 'Inventory', path: '/staff/inventory', icon: PackageIcon },
  { name: 'Paint Mixing', path: '/staff/paint-mixing', icon: PaletteIcon },
  { name: 'House Paint Recommender', path: '/staff/house-paint-recommender', icon: HomeIcon },
  { name: 'Settings', path: '/staff/settings', icon: SettingsIcon },
]
  
  // Mock products data - replace with actual API calls
  const products = ref([
  {
    id: 1,
    name: 'Premium Interior Paint',
    sku: 'INT-001',
    category: 'interior',
    price: 1200,
    stockLevel: 50
  },
  {
    id: 2,
    name: 'Weather Shield Exterior',
    sku: 'EXT-001',
    category: 'exterior',
    price: 1500,
    stockLevel: 8
  },
  {
    id: 3,
    name: 'Multi-Surface Primer',
    sku: 'PRI-001',
    category: 'primer',
    price: 800,
    stockLevel: 0
  }
  ])
  
  // Computed properties
  const filteredProducts = computed(() => {
  let filtered = [...products.value]
  
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(product => 
      product.name.toLowerCase().includes(query) ||
      product.sku.toLowerCase().includes(query)
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
  const end = start + perPage.value
  return filteredProducts.value.slice(start, end)
  })
  
  const totalProducts = computed(() => filteredProducts.value.length)
  const totalPages = computed(() => Math.ceil(totalProducts.value / perPage.value))
  const paginationStart = computed(() => ((currentPage.value - 1) * perPage.value) + 1)
  const paginationEnd = computed(() => Math.min(currentPage.value * perPage.value, totalProducts.value))
  
  // Methods
  const toggleMobileSidebar = () => {
  mobileSidebarOpen.value = !mobileSidebarOpen.value
  }
  
  const handleLogout = () => {
  router.push('/staff')
  }
  
  const editProduct = (product) => {
  // Implement edit functionality
  console.log('Editing product:', product)
  }
  
  const getStockLevelClass = (stockLevel) => {
  if (stockLevel === 0) return 'bg-red-50 text-red-700'
  if (stockLevel <= 10) return 'bg-amber-50 text-amber-700'
  return 'bg-green-50 text-green-700'
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
  </script>
  
  