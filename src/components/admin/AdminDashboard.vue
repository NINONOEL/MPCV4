<template>
  <div class="min-h-screen bg-gray-50">
    <div class="flex h-screen">
      <!-- Sidebar - Copied exactly from other admin pages -->
      <aside class="w-64 bg-white border-r border-gray-200 hidden md:block">
        <!-- Logo/Brand -->
        <div class="p-6 border-b border-gray-200">
          <h1 class="text-xl font-bold text-gray-900">Mindoro Paint Center</h1>
        </div>

        <!-- Navigation -->
        <nav class="p-4 space-y-2">
          <router-link 
            to="/admin/dashboard" 
            class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            :class="{ 'bg-gray-100': $route.path === '/admin/dashboard' }"
          >
            <LayoutDashboardIcon class="w-5 h-5" />
            <span>Dashboard</span>
          </router-link>

          <router-link 
            to="/admin/staff" 
            class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            :class="{ 'bg-gray-100': $route.path === '/admin/staff' }"
          >
            <UsersIcon class="w-5 h-5" />
            <span>Staff Management</span>
          </router-link>

          <router-link 
            to="/admin/inventory" 
            class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            :class="{ 'bg-gray-100': $route.path === '/admin/inventory' }"
          >
            <PackageIcon class="w-5 h-5" />
            <span>Inventory</span>
          </router-link>

          <router-link 
            to="/admin/house-paint-recommender" 
            class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            :class="{ 'bg-gray-100': $route.path === '/admin/house-paint-recommender' }"
          >
            <HomeIcon class="w-5 h-5" />
            <span>House Paint Recommender</span>
          </router-link>

          <router-link 
            to="/admin/paint-mixing" 
            class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            :class="{ 'bg-gray-100': $route.path === '/admin/paint-mixing' }"
          >
            <PaletteIcon class="w-5 h-5" />
            <span>Paint Mixing</span>
          </router-link>

          <router-link 
            to="/admin/sales-analytics" 
            class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            :class="{ 'bg-gray-100': $route.path === '/admin/sales-analytics' }"
          >
            <TrendingUpIcon class="w-5 h-5" />
            <span>Sales Analytics</span>
          </router-link>

          <router-link 
            to="/admin/reports" 
            class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            :class="{ 'bg-gray-100': $route.path === '/admin/reports' }"
          >
            <ClipboardIcon class="w-5 h-5" />
            <span>Reports</span>
          </router-link>

          <router-link 
            to="/admin/settings" 
            class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            :class="{ 'bg-gray-100': $route.path === '/admin/settings' }"
          >
            <SettingsIcon class="w-5 h-5" />
            <span>System Settings</span>
          </router-link>

          <router-link 
            to="/admin/security" 
            class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            :class="{ 'bg-gray-100': $route.path === '/admin/security' }"
          >
            <ShieldIcon class="w-5 h-5" />
            <span>Security</span>
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
          <!-- Same navigation links as desktop sidebar -->
          <!-- ... -->
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
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
              <h1 class="text-2xl font-bold text-navy">Dashboard</h1>
              <p class="text-navy/60">Welcome to your admin dashboard</p>
            </div>
            <button 
              @click="showSetupGuide = true"
              class="flex items-center gap-2 px-4 py-2 bg-navy text-white rounded-lg hover:bg-navy/90 transition-colors"
            >
              <BookOpenIcon class="w-5 h-5" />
              <span>Setup Guide</span>
            </button>
          </div>

          <!-- Welcome Section -->
          <div class="bg-white rounded-xl p-6 mb-6 shadow-sm">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h2 class="text-xl font-bold text-navy mb-2">Welcome to your Dashboard!</h2>
                <p class="text-navy/60">Get started by setting up your paint store.</p>
              </div>
              <button 
                @click="showSetupGuide = true"
                class="px-4 py-2 bg-navy text-white rounded-lg hover:bg-navy/90 transition-colors"
              >
                Setup Guide
              </button>
            </div>
          </div>

          <!-- Dashboard Summary Cards -->
          <!-- In the Quick Stats section, update the Total Sales card -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div class="bg-white border border-gray-200 rounded-lg shadow-sm p-4 md:p-6">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-lg font-semibold text-gray-900">Total Sales</h3>
                <DollarSignIcon class="h-6 w-6 text-gray-400" />
              </div>
              <div class="flex items-end justify-between">
                <div>
                  <p class="text-3xl font-bold text-gray-900">₱{{ totalSales.toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }}</p>
                  <p class="text-sm text-gray-500">{{ salesStatus }}</p>
                </div>
                <div class="flex items-center text-gray-400">
                  <ArrowRightIcon class="w-4 h-4 mr-1" />
                  <span class="text-sm font-medium">Start selling</span>
                </div>
              </div>
            </div>

            <!-- Update the Orders card -->
            <div class="bg-white border border-gray-200 rounded-lg shadow-sm p-4 md:p-6">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-lg font-semibold text-gray-900">Orders</h3>
                <ShoppingCartIcon class="h-6 w-6 text-gray-400" />
              </div>
              <div class="flex items-end justify-between">
                <div>
                  <p class="text-3xl font-bold text-gray-900">{{ totalOrders }}</p>
                  <p class="text-sm text-gray-500">{{ totalOrders === 0 ? 'No orders yet' : 'Orders processed' }}</p>
                </div>
                <div class="flex items-center text-gray-400">
                  <ClipboardIcon class="w-4 h-4 mr-1" />
                  <span class="text-sm font-medium">Create order</span>
                </div>
              </div>
            </div>

            <div class="bg-white border border-gray-200 rounded-lg shadow-sm p-4 md:p-6">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-lg font-semibold text-gray-900">Products</h3>
                <PackageIcon class="h-6 w-6 text-gray-400" />
              </div>
              <div class="flex items-end justify-between">
                <div>
                  <p class="text-3xl font-bold text-gray-900">{{ totalProducts }}</p>
                  <p class="text-sm text-gray-500">Total products</p>
                </div>
                <div class="flex items-center text-gray-400">
                  <PackagePlusIcon class="w-4 h-4 mr-1" />
                  <span class="text-sm font-medium">Add product</span>
                </div>
              </div>
            </div>

            <div class="bg-white border border-gray-200 rounded-lg shadow-sm p-4 md:p-6">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-lg font-semibold text-gray-900">Staff</h3>
                <UsersIcon class="h-6 w-6 text-gray-400" />
              </div>
              <div class="flex items-end justify-between">
                <div>
                  <p class="text-3xl font-bold text-gray-900">{{ totalStaff }}</p>
                  <p class="text-sm text-gray-500">Total staff members</p>
                </div>
                <div class="flex items-center text-gray-400">
                  <UserPlusIcon class="w-4 h-4 mr-1" />
                  <span class="text-sm font-medium">Add staff</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Getting Started Section -->
          <div class="mt-8">
            <h2 class="text-xl font-bold text-navy mb-4">Getting Started</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <!-- Add Products Card -->
              <div class="bg-white rounded-xl p-6 shadow-sm">
                <div class="flex justify-center mb-4">
                  <div class="p-4 bg-gray-100 rounded-full">
                    <PackageIcon class="w-8 h-8 text-navy/60" />
                  </div>
                </div>
                <h3 class="text-lg font-bold text-navy text-center mb-2">1. Add Products</h3>
                <p class="text-navy/60 text-center mb-4">Start by adding your paint products to the inventory</p>
                <div class="flex justify-center">
                  <router-link 
                    to="/admin/inventory" 
                    class="px-4 py-2 bg-navy text-white rounded-lg hover:bg-navy/90 transition-colors w-full text-center"
                  >
                    Add Products
                  </router-link>
                </div>
              </div>

              <!-- Add Staff Card -->
              <div class="bg-white rounded-xl p-6 shadow-sm">
                <div class="flex justify-center mb-4">
                  <div class="p-4 bg-gray-100 rounded-full">
                    <UsersIcon class="w-8 h-8 text-navy/60" />
                  </div>
                </div>
                <h3 class="text-lg font-bold text-navy text-center mb-2">2. Add Staff</h3>
                <p class="text-navy/60 text-center mb-4">Create accounts for your staff members</p>
                <div class="flex justify-center">
                  <router-link 
                    to="/admin/staff" 
                    class="px-4 py-2 bg-navy text-white rounded-lg hover:bg-navy/90 transition-colors w-full text-center"
                  >
                    Manage Staff
                  </router-link>
                </div>
              </div>

              <!-- Configure Settings Card -->
              <div class="bg-white rounded-xl p-6 shadow-sm">
                <div class="flex justify-center mb-4">
                  <div class="p-4 bg-gray-100 rounded-full">
                    <SettingsIcon class="w-8 h-8 text-navy/60" />
                  </div>
                </div>
                <h3 class="text-lg font-bold text-navy text-center mb-2">3. Configure Settings</h3>
                <p class="text-navy/60 text-center mb-4">Set up your store preferences and system settings</p>
                <div class="flex justify-center">
                  <router-link 
                    to="/admin/settings" 
                    class="px-4 py-2 bg-navy text-white rounded-lg hover:bg-navy/90 transition-colors w-full text-center"
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
  <div v-if="showSetupGuide" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
    <div class="bg-white rounded-xl w-full max-w-2xl max-h-[80vh] overflow-auto">
      <div class="p-6 border-b border-navy/10 sticky top-0 bg-white z-10">
        <div class="flex justify-between items-center">
          <h3 class="text-xl font-bold text-navy">Setup Guide</h3>
          <button 
            @click="showSetupGuide = false"
            class="p-2 hover:bg-navy/5 rounded-lg text-navy/60"
          >
            <XIcon class="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div class="p-6">
        <div class="space-y-6">
          <div>
            <h4 class="text-lg font-bold text-navy mb-2">1. Add Products</h4>
            <p class="text-navy/60 mb-4">Start by adding your paint products to the inventory.</p>
            <ul class="list-disc pl-5 space-y-2 text-navy/70">
              <li>Go to the Inventory page</li>
              <li>Click "Add Product" button</li>
              <li>Fill in the product details (name, category, price, etc.)</li>
              <li>Upload product images if available</li>
              <li>Save the product</li>
            </ul>
          </div>

          <div>
            <h4 class="text-lg font-bold text-navy mb-2">2. Add Staff Members</h4>
            <p class="text-navy/60 mb-4">Create accounts for your staff members.</p>
            <ul class="list-disc pl-5 space-y-2 text-navy/70">
              <li>Go to the Staff Management page</li>
              <li>Click "Add Staff Member" button</li>
              <li>Fill in the staff details (name, email, role, etc.)</li>
              <li>Set a temporary password</li>
              <li>Save the staff member</li>
            </ul>
          </div>

          <div>
            <h4 class="text-lg font-bold text-navy mb-2">3. Configure System Settings</h4>
            <p class="text-navy/60 mb-4">Set up your store preferences and system settings.</p>
            <ul class="list-disc pl-5 space-y-2 text-navy/70">
              <li>Go to the System Settings page</li>
              <li>Configure store information (name, address, contact details)</li>
              <li>Set up tax rates and currency preferences</li>
              <li>Configure email notifications</li>
              <li>Save your settings</li>
            </ul>
          </div>

          <div>
            <h4 class="text-lg font-bold text-navy mb-2">4. Record Sales</h4>
            <p class="text-navy/60 mb-4">Start recording sales and managing orders.</p>
            <ul class="list-disc pl-5 space-y-2 text-navy/70">
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
            class="px-4 py-2 bg-navy text-white rounded-lg hover:bg-navy/90 transition-colors"
          >
            Got it!
          </button>
        </div>
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
} from 'lucide-vue-next'
import { collection, query, getDocs, orderBy } from 'firebase/firestore'
import { db } from '../../config/firebase'

const router = useRouter()
const route = useRoute()
const mobileSidebarOpen = ref(false)
const totalSales = ref(0)
const totalProducts = ref(0)
const totalStaff = ref(0)
const totalOrders = ref(0)
const showSetupGuide = ref(false)

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

const currentDate = new Date().toLocaleDateString('en-US', { 
  weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' 
})

const currentTime = new Date().toLocaleTimeString('en-US', {
  hour: '2-digit',
  minute: '2-digit'
})

const pageTitle = computed(() => {
  const routeNames = {
    '/admin/dashboard': 'Dashboard',
    '/admin/staff': 'Staff Management',
    '/admin/inventory': 'Inventory',
    '/admin/house-paint-recommender': 'House Paint Recommender',
    '/admin/paint-mixing': 'Paint Mixing',
    '/admin/sales-analytics': 'Sales Analytics',
    '/admin/reports': 'Reports',
    '/admin/settings': 'System Settings',
    '/admin/security': 'Security'
  }
  return routeNames[route.path] || 'Dashboard'
})

const salesStatus = computed(() => {
  return totalSales.value === 0 ? 'No sales yet' : 'Sales this month'
})

const toggleMobileSidebar = () => {
  mobileSidebarOpen.value = !mobileSidebarOpen.value
}

const handleLogout = () => {
  router.push('/admin')
}

// Load data on component mount
onMounted(() => {
  fetchProductCount()
  fetchStaffCount()
  fetchSalesData()
})
</script>

<style scoped>
.router-link-active {
  background-color: #f9fafb;
  font-weight: 500;
}

/* Define your gradient colors */
:root {
  --pale-blue: #e0f2fe;
  --light-blue: #bae6fd;
  --medium-blue: #93c5fd;
  --navy: #1e3a8a;
}
</style>