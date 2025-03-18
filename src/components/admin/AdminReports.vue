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
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div>
                <h1 class="text-2xl font-bold text-navy mb-2">Reports</h1>
                <p class="text-navy/60">Generate and view detailed reports</p>
              </div>
              
              <!-- Date Range Selector -->
              <div class="flex items-center gap-2 bg-white rounded-lg border border-navy/10 p-1">
                <button 
                  v-for="range in dateRanges" 
                  :key="range.value"
                  @click="selectedRange = range.value"
                  class="px-3 py-1 rounded-md text-sm transition-colors"
                  :class="selectedRange === range.value ? 'bg-navy text-white' : 'text-navy hover:bg-navy/5'"
                >
                  {{ range.label }}
                </button>
              </div>
            </div>
    
            <!-- Report Types Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              <!-- Sales Report -->
              <div class="bg-white rounded-xl shadow-sm p-6">
                <div class="flex items-center gap-4 mb-4">
                  <div class="p-3 bg-blue-50 rounded-lg">
                    <TrendingUpIcon class="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h2 class="text-lg font-semibold text-navy">Sales Report</h2>
                    <p class="text-sm text-navy/60">Detailed sales analysis</p>
                  </div>
                </div>
                <button 
                  @click="generateReport('sales')"
                  class="w-full bg-navy text-white py-2 rounded-lg hover:bg-navy/90 transition-colors"
                >
                  Generate Report
                </button>
              </div>
    
              <!-- Inventory Report -->
              <div class="bg-white rounded-xl shadow-sm p-6">
                <div class="flex items-center gap-4 mb-4">
                  <div class="p-3 bg-green-50 rounded-lg">
                    <PackageIcon class="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h2 class="text-lg font-semibold text-navy">Inventory Report</h2>
                    <p class="text-sm text-navy/60">Stock levels and movements</p>
                  </div>
                </div>
                <button 
                  @click="generateReport('inventory')"
                  class="w-full bg-navy text-white py-2 rounded-lg hover:bg-navy/90 transition-colors"
                >
                  Generate Report
                </button>
              </div>
    
              <!-- Staff Performance -->
              <div class="bg-white rounded-xl shadow-sm p-6">
                <div class="flex items-center gap-4 mb-4">
                  <div class="p-3 bg-purple-50 rounded-lg">
                    <UsersIcon class="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h2 class="text-lg font-semibold text-navy">Staff Performance</h2>
                    <p class="text-sm text-navy/60">Employee productivity metrics</p>
                  </div>
                </div>
                <button 
                  @click="generateReport('staff')"
                  class="w-full bg-navy text-white py-2 rounded-lg hover:bg-navy/90 transition-colors"
                >
                  Generate Report
                </button>
              </div>
            </div>
    
            <!-- Recent Reports -->
            <div class="bg-white rounded-xl shadow-sm overflow-hidden">
              <div class="p-6 border-b border-navy/10">
                <h2 class="text-lg font-semibold text-navy">Recent Reports</h2>
              </div>
    
              <div class="overflow-x-auto">
                <table class="w-full">
                  <thead>
                    <tr class="border-b border-navy/10">
                      <th class="text-left p-4 text-sm font-medium text-navy/60">Report Name</th>
                      <th class="text-left p-4 text-sm font-medium text-navy/60">Type</th>
                      <th class="text-left p-4 text-sm font-medium text-navy/60">Generated By</th>
                      <th class="text-left p-4 text-sm font-medium text-navy/60">Date</th>
                      <th class="text-right p-4 text-sm font-medium text-navy/60">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="report in recentReports" :key="report.id" class="border-b border-navy/10">
                      <td class="p-4">
                        <span class="font-medium text-navy">{{ report.name }}</span>
                      </td>
                      <td class="p-4">
                        <span 
                          class="px-2 py-1 rounded-full text-sm font-medium"
                          :class="{
                            'bg-blue-50 text-blue-700': report.type === 'sales',
                            'bg-green-50 text-green-700': report.type === 'inventory',
                            'bg-purple-50 text-purple-700': report.type === 'staff'
                          }"
                        >
                          {{ formatReportType(report.type) }}
                        </span>
                      </td>
                      <td class="p-4">
                        <div class="flex items-center gap-3">
                          <div class="w-8 h-8 rounded-full bg-navy/5 flex items-center justify-center">
                            <UserIcon class="w-4 h-4 text-navy/40" />
                          </div>
                          <span class="text-navy">{{ report.generatedBy }}</span>
                        </div>
                      </td>
                      <td class="p-4 text-navy/60">
                        {{ formatDate(report.date) }}
                      </td>
                      <td class="p-4">
                        <div class="flex items-center justify-end gap-2">
                          <button 
                            @click="viewReport(report)"
                            class="p-2 hover:bg-navy/5 rounded-lg text-navy/60"
                            title="View Report"
                          >
                            <EyeIcon class="w-5 h-5" />
                          </button>
                          <button 
                            @click="downloadReport(report)"
                            class="p-2 hover:bg-navy/5 rounded-lg text-navy/60"
                            title="Download Report"
                          >
                            <DownloadIcon class="w-5 h-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
    
              <!-- Pagination -->
              <div class="flex items-center justify-between p-4 border-t border-navy/10">
                <p class="text-sm text-navy/60">
                  Showing {{ paginationStart }} to {{ paginationEnd }} of {{ totalReports }} reports
                </p>
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
                    :disabled="currentPage === totalPages"
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
      Users as UsersIcon,
      Package as PackageIcon,
      Home,
      Palette,
      TrendingUp as TrendingUpIcon,
      Clipboard,
      Settings,
      Shield,
      User as UserIcon,
      LogOut as LogOutIcon,
      Menu as MenuIcon,
      X as XIcon,
      Eye as EyeIcon,
      Download as DownloadIcon,
      ChevronLeft as ChevronLeftIcon,
      ChevronRight as ChevronRightIcon,
    } from 'lucide-vue-next'
    
    const router = useRouter()
    const mobileSidebarOpen = ref(false)
    
    // Navigation items
    const navigationItems = [
      { name: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
      { name: 'Staff Management', path: '/admin/staff', icon: UsersIcon },
      { name: 'Inventory', path: '/admin/inventory', icon: PackageIcon },
      { name: 'House Paint Recommender', path: '/admin/house-paint-recommender', icon: Home },
      { name: 'Paint Mixing', path: '/admin/paint-mixing', icon: Palette },
      { name: 'Sales Analytics', path: '/admin/sales-analytics', icon: TrendingUpIcon },
      { name: 'Reports', path: '/admin/reports', icon: Clipboard },
      { name: 'System Settings', path: '/admin/settings', icon: Settings },
      { name: 'Security', path: '/admin/security', icon: Shield },
    ]
    
    // Date range selector
    const dateRanges = [
      { label: '7D', value: '7d' },
      { label: '30D', value: '30d' },
      { label: '3M', value: '3m' },
      { label: '1Y', value: '1y' },
    ]
    const selectedRange = ref('30d')
    
    // Recent reports
    const recentReports = ref([
      {
        id: 1,
        name: 'Monthly Sales Report',
        type: 'sales',
        generatedBy: 'Admin User',
        date: '2025-03-05T10:30:00',
      },
      {
        id: 2,
        name: 'Stock Level Report',
        type: 'inventory',
        generatedBy: 'Admin User',
        date: '2025-03-04T15:45:00',
      },
      {
        id: 3,
        name: 'Staff Performance Q1',
        type: 'staff',
        generatedBy: 'Admin User',
        date: '2025-03-03T09:20:00',
      },
    ])
    
    // Pagination
    const currentPage = ref(1)
    const perPage = ref(10)
    const totalReports = computed(() => recentReports.value.length)
    const totalPages = computed(() => Math.ceil(totalReports.value / perPage.value))
    const paginationStart = computed(() => ((currentPage.value - 1) * perPage.value) + 1)
    const paginationEnd = computed(() => Math.min(currentPage.value * perPage.value, totalReports.value))
    
    // Methods
    const generateReport = async (type) => {
      // Implement report generation logic
      console.log(`Generating ${type} report...`)
    }
    
    const viewReport = (report) => {
      // Implement report viewing logic
      console.log('Viewing report:', report)
    }
    
    const downloadReport = (report) => {
      // Implement report download logic
      console.log('Downloading report:', report)
    }
    
    const formatReportType = (type) => {
      return type.charAt(0).toUpperCase() + type.slice(1)
    }
    
    const formatDate = (date) => {
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
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
    
    