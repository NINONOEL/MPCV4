<template>
  <div class="min-h-screen bg-[#001333] relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0">
      <div class="absolute top-0 right-0 w-96 h-96 bg-[#0A3573] opacity-10 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-[#0A3573] opacity-10 rounded-full filter blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
    </div>
  
    <!-- Success Toast - Moved to the top of the template to ensure it appears in front -->
    <div 
      v-if="showToast"
      class="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-fade-in z-[9999]"
    >
      <CheckIcon class="w-5 h-5" />
      <span>{{ toastMessage }}</span>
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
              <p class="text-sm font-medium text-white truncate">Admin User</p>
              <p class="text-xs text-white/60 truncate">admin@example.com</p>
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
              <p class="text-sm font-medium text-white truncate">Admin User</p>
              <p class="text-xs text-white/60 truncate">admin@example.com</p>
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
              <h1 class="text-2xl font-bold text-white">Reports</h1>
              <p class="text-white/60">Generate and view detailed reports</p>
            </div>
            <div class="flex items-center gap-4">
              <div class="hidden md:flex items-center gap-2 text-white/80">
                <CalendarIcon class="w-5 h-5" />
                <span>{{ currentDate }}</span>
              </div>
              <div class="hidden md:block h-6 w-px bg-white/20"></div>
              <div class="flex items-center gap-3">
                <span class="text-white">Welcome, Admin</span>
                <div class="relative">
                  <BellIcon class="w-5 h-5 text-white cursor-pointer hover:text-white/70" />
                </div>
              </div>
            </div>
          </div>
        </header>
  
        <div class="p-6 md:p-8">
          <!-- Date Range Selector -->
          <div class="flex justify-end mb-6">
            <div class="flex items-center gap-2 bg-[#0A2159]/80 rounded-lg border border-white/10 p-1">
              <button 
                v-for="range in dateRanges" 
                :key="range.value"
                @click="selectedRange = range.value"
                class="px-3 py-1 rounded-md text-sm transition-colors"
                :class="selectedRange === range.value ? 'bg-blue-600 text-white' : 'text-white hover:bg-white/10'"
              >
                {{ range.label }}
              </button>
            </div>
          </div>
  
          <!-- Report Types Grid -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <!-- Sales Report -->
            <div class="bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-xl shadow-lg p-6 border border-white/10 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div class="flex items-center gap-4 mb-6">
                <div class="p-3 bg-blue-500/20 rounded-lg">
                  <TrendingUpIcon class="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h2 class="text-lg font-semibold text-white">Sales Report</h2>
                  <p class="text-sm text-white/60">Detailed sales analysis</p>
                </div>
              </div>
              <button 
                @click="generateReport('sales')"
                class="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg hover:opacity-90 transition-all duration-300 font-medium flex items-center justify-center gap-2 shadow-lg"
              >
                <FileTextIcon class="w-5 h-5" />
                Generate Report
              </button>
            </div>
  
            <!-- Inventory Report -->
            <div class="bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-xl shadow-lg p-6 border border-white/10 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div class="flex items-center gap-4 mb-6">
                <div class="p-3 bg-green-500/20 rounded-lg">
                  <PackageIcon class="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h2 class="text-lg font-semibold text-white">Inventory Report</h2>
                  <p class="text-sm text-white/60">Stock levels and movements</p>
                </div>
              </div>
              <button 
                @click="generateReport('inventory')"
                class="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-lg hover:opacity-90 transition-all duration-300 font-medium flex items-center justify-center gap-2 shadow-lg"
              >
                <FileTextIcon class="w-5 h-5" />
                Generate Report
              </button>
            </div>
  
            <!-- Staff Performance -->
            <div class="bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-xl shadow-lg p-6 border border-white/10 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div class="flex items-center gap-4 mb-6">
                <div class="p-3 bg-purple-500/20 rounded-lg">
                  <UsersIcon class="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h2 class="text-lg font-semibold text-white">Staff Performance</h2>
                  <p class="text-sm text-white/60">Employee productivity metrics</p>
                </div>
              </div>
              <button 
                @click="generateReport('staff')"
                class="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 rounded-lg hover:opacity-90 transition-all duration-300 font-medium flex items-center justify-center gap-2 shadow-lg"
              >
                <FileTextIcon class="w-5 h-5" />
                Generate Report
              </button>
            </div>
          </div>
  
          <!-- Recent Reports -->
          <div class="bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-xl shadow-lg overflow-hidden border border-white/10">
            <div class="p-6 border-b border-white/10">
              <h2 class="text-xl font-bold text-white">Recent Reports</h2>
            </div>
  
            <!-- Empty State - Showing this by default since we're resetting to zero -->
            <div v-if="recentReports.length === 0" class="py-12 text-center">
              <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                <FileTextIcon class="w-8 h-8 text-white/40" />
              </div>
              <h3 class="text-lg font-medium text-white mb-2">No reports generated yet</h3>
              <p class="text-white/60 mb-4">Generate a report to see it listed here</p>
            </div>
  
            <!-- Table will be shown when reports are available -->
            <div v-if="recentReports.length > 0" class="overflow-x-auto">
              <table class="w-full">
                <thead>
                  <tr class="border-b border-white/10">
                    <th class="text-left p-4 text-sm font-medium text-white/60">Report Name</th>
                    <th class="text-left p-4 text-sm font-medium text-white/60">Type</th>
                    <th class="text-left p-4 text-sm font-medium text-white/60">Generated By</th>
                    <th class="text-left p-4 text-sm font-medium text-white/60">Date</th>
                    <th class="text-right p-4 text-sm font-medium text-white/60">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr 
                    v-for="report in paginatedReports" 
                    :key="report.id" 
                    class="border-b border-white/10 hover:bg-white/5 transition-colors"
                  >
                    <td class="p-4">
                      <span class="font-medium text-white">{{ report.name }}</span>
                    </td>
                    <td class="p-4">
                      <span 
                        class="px-2 py-1 rounded-full text-xs font-medium"
                        :class="{
                          'bg-blue-500/20 text-blue-400': report.type === 'sales',
                          'bg-green-500/20 text-green-400': report.type === 'inventory',
                          'bg-purple-500/20 text-purple-400': report.type === 'staff'
                        }"
                      >
                        {{ formatReportType(report.type) }}
                      </span>
                    </td>
                    <td class="p-4">
                      <div class="flex items-center gap-3">
                        <div class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                          <UserIcon class="w-4 h-4 text-white/40" />
                        </div>
                        <span class="text-white">{{ report.generatedBy }}</span>
                      </div>
                    </td>
                    <td class="p-4 text-white/60">
                      {{ formatDate(report.date) }}
                    </td>
                    <td class="p-4">
                      <div class="flex items-center justify-end gap-2">
                        <button 
                          @click="viewReport(report)"
                          class="p-2 hover:bg-white/10 rounded-lg text-white/60 hover:text-white transition-colors"
                          title="View Report"
                        >
                          <EyeIcon class="w-5 h-5" />
                        </button>
                        <button 
                          @click="downloadReport(report)"
                          class="p-2 hover:bg-white/10 rounded-lg text-white/60 hover:text-white transition-colors"
                          title="Download Report"
                        >
                          <DownloadIcon class="w-5 h-5" />
                        </button>
                        <button 
                          @click="deleteReport(report)"
                          class="p-2 hover:bg-white/10 rounded-lg text-white/60 hover:text-red-400 transition-colors"
                          title="Delete Report"
                        >
                          <TrashIcon class="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
  
            <!-- Pagination - Only shown when reports are available -->
            <div v-if="recentReports.length > 0" class="flex items-center justify-between p-4 border-t border-white/10">
              <p class="text-sm text-white/60">
                Showing {{ paginationStart }} to {{ paginationEnd }} of {{ totalReports }} reports
              </p>
              <div class="flex items-center gap-2">
                <button 
                  @click="currentPage--"
                  :disabled="currentPage === 1"
                  class="p-2 rounded-lg hover:bg-white/10 disabled:opacity-50 text-white"
                >
                  <ChevronLeftIcon class="w-5 h-5" />
                </button>
                <span class="text-sm text-white">Page {{ currentPage }} of {{ totalPages }}</span>
                <button 
                  @click="currentPage++"
                  :disabled="currentPage === totalPages"
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
  
    <!-- Report Generation Modal -->
    <div v-if="showGeneratingModal" class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[9000] p-4">
      <div class="bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-xl w-full max-w-md border border-white/10 shadow-2xl p-6">
        <div class="text-center">
          <LoaderIcon class="w-12 h-12 text-white/40 animate-spin mx-auto mb-4" />
          <h3 class="text-xl font-bold text-white mb-2">Generating Report</h3>
          <p class="text-white/60 mb-6">Please wait while we generate your {{ currentReportType }} report...</p>
          <div class="w-full bg-white/10 h-2 rounded-full overflow-hidden">
            <div 
              class="bg-blue-500 h-full transition-all duration-300 ease-in-out"
              :style="{ width: `${generationProgress}%` }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  
    <!-- View Report Modal -->
    <div v-if="showViewModal" class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[9000] p-4">
      <div class="bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-xl w-full max-w-4xl border border-white/10 shadow-2xl">
        <div class="flex items-center justify-between p-6 border-b border-white/10">
          <h3 class="text-xl font-bold text-white">{{ currentViewingReport?.name }}</h3>
          <button 
            @click="showViewModal = false"
            class="p-2 rounded-lg hover:bg-white/10 text-white"
          >
            <XIcon class="w-5 h-5" />
          </button>
        </div>
        <div class="p-6 max-h-[70vh] overflow-y-auto">
          <!-- Sales Report Content -->
          <div v-if="currentViewingReport?.type === 'sales'" class="space-y-6">
            <div class="bg-white/5 rounded-lg p-4">
              <h4 class="text-lg font-medium text-white mb-2">Sales Summary</h4>
              <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div class="bg-white/10 rounded-lg p-4 text-center">
                  <p class="text-sm text-white/60 mb-1">Total Revenue</p>
                  <p class="text-2xl font-bold text-white">₱{{ salesData.totalRevenue.toLocaleString() }}</p>
                  <p class="text-xs text-green-400">↑ 12.5% vs last period</p>
                </div>
                <div class="bg-white/10 rounded-lg p-4 text-center">
                  <p class="text-sm text-white/60 mb-1">Total Orders</p>
                  <p class="text-2xl font-bold text-white">{{ salesData.totalOrders }}</p>
                  <p class="text-xs text-green-400">↑ 8.2% vs last period</p>
                </div>
                <div class="bg-white/10 rounded-lg p-4 text-center">
                  <p class="text-sm text-white/60 mb-1">Products Sold</p>
                  <p class="text-2xl font-bold text-white">{{ salesData.productsSold }}</p>
                  <p class="text-xs text-red-400">↓ 3.1% vs last period</p>
                </div>
                <div class="bg-white/10 rounded-lg p-4 text-center">
                  <p class="text-sm text-white/60 mb-1">Average Order Value</p>
                  <p class="text-2xl font-bold text-white">₱{{ salesData.averageOrderValue.toLocaleString() }}</p>
                  <p class="text-xs text-green-400">↑ 5.3% vs last period</p>
                </div>
              </div>
            </div>
            
            <div class="bg-white/5 rounded-lg p-4">
              <h4 class="text-lg font-medium text-white mb-4">Best Seller</h4>
              <div class="flex items-center gap-4 p-4 bg-white/10 rounded-lg">
                <div class="p-3 bg-blue-500/20 rounded-lg">
                  <PackageIcon class="w-8 h-8 text-blue-400" />
                </div>
                <div class="flex-1">
                  <h5 class="text-lg font-semibold text-white">{{ salesData.bestSeller.name }}</h5>
                  <p class="text-sm text-white/60">{{ salesData.bestSeller.category }}</p>
                </div>
                <div class="text-right">
                  <p class="text-lg font-bold text-white">₱{{ salesData.bestSeller.revenue.toLocaleString() }}</p>
                  <p class="text-sm text-white/60">{{ salesData.bestSeller.unitsSold }} units sold</p>
                </div>
              </div>
            </div>
            
            <div class="bg-white/5 rounded-lg p-4">
              <h4 class="text-lg font-medium text-white mb-4">Top Products</h4>
              <table class="w-full">
                <thead>
                  <tr class="border-b border-white/10">
                    <th class="text-left p-2 text-sm font-medium text-white/60">Product</th>
                    <th class="text-right p-2 text-sm font-medium text-white/60">Units Sold</th>
                    <th class="text-right p-2 text-sm font-medium text-white/60">Revenue</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="product in salesData.topProducts" :key="product.id" class="border-b border-white/10">
                    <td class="p-2 text-white">{{ product.name }}</td>
                    <td class="p-2 text-white text-right">{{ product.unitsSold }}</td>
                    <td class="p-2 text-white text-right">₱{{ product.revenue.toLocaleString() }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <!-- Inventory Report Content -->
          <div v-if="currentViewingReport?.type === 'inventory'" class="space-y-6">
            <div class="bg-white/5 rounded-lg p-4">
              <h4 class="text-lg font-medium text-white mb-2">Inventory Summary</h4>
              <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div class="bg-white/10 rounded-lg p-4 text-center">
                  <p class="text-sm text-white/60 mb-1">Total Products</p>
                  <p class="text-2xl font-bold text-white">{{ inventoryData.totalProducts }}</p>
                </div>
                <div class="bg-white/10 rounded-lg p-4 text-center">
                  <p class="text-sm text-white/60 mb-1">Low Stock Items</p>
                  <p class="text-2xl font-bold text-white">{{ inventoryData.lowStockItems }}</p>
                </div>
                <div class="bg-white/10 rounded-lg p-4 text-center">
                  <p class="text-sm text-white/60 mb-1">Out of Stock</p>
                  <p class="text-2xl font-bold text-white">{{ inventoryData.outOfStockItems }}</p>
                </div>
                <div class="bg-white/10 rounded-lg p-4 text-center">
                  <p class="text-sm text-white/60 mb-1">Total Value</p>
                  <p class="text-2xl font-bold text-white">₱{{ inventoryData.totalValue.toLocaleString() }}</p>
                </div>
              </div>
            </div>
            
            <div class="bg-white/5 rounded-lg p-4">
              <h4 class="text-lg font-medium text-white mb-4">Inventory Items</h4>
              <table class="w-full">
                <thead>
                  <tr class="border-b border-white/10">
                    <th class="text-left p-2 text-sm font-medium text-white/60">Product</th>
                    <th class="text-left p-2 text-sm font-medium text-white/60">SKU</th>
                    <th class="text-left p-2 text-sm font-medium text-white/60">Category</th>
                    <th class="text-right p-2 text-sm font-medium text-white/60">Stock Level</th>
                    <th class="text-right p-2 text-sm font-medium text-white/60">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in inventoryData.items" :key="item.id" class="border-b border-white/10">
                    <td class="p-2 text-white">{{ item.name }}</td>
                    <td class="p-2 text-white/60">{{ item.sku }}</td>
                    <td class="p-2 text-white">{{ item.category }}</td>
                    <td class="p-2 text-right">
                      <span 
                        class="px-2 py-1 rounded-full text-xs font-medium"
                        :class="{
                          'bg-red-500/20 text-red-400': item.stockStatus === 'Out of Stock',
                          'bg-yellow-500/20 text-yellow-400': item.stockStatus === 'Low Stock',
                          'bg-green-500/20 text-green-400': item.stockStatus === 'In Stock'
                        }"
                      >
                        {{ item.stockStatus }} {{ item.stockStatus !== 'Out of Stock' ? `(${item.stockLevel})` : '' }}
                      </span>
                    </td>
                    <td class="p-2 text-white text-right">₱{{ item.price.toLocaleString() }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <!-- Staff Performance Report Content -->
          <div v-if="currentViewingReport?.type === 'staff'" class="space-y-6">
            <div class="bg-white/5 rounded-lg p-4">
              <h4 class="text-lg font-medium text-white mb-2">Staff Summary</h4>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="bg-white/10 rounded-lg p-4 text-center">
                  <p class="text-sm text-white/60 mb-1">Total Staff</p>
                  <p class="text-2xl font-bold text-white">{{ staffData.totalStaff }}</p>
                </div>
                <div class="bg-white/10 rounded-lg p-4 text-center">
                  <p class="text-sm text-white/60 mb-1">Active Staff</p>
                  <p class="text-2xl font-bold text-white">{{ staffData.activeStaff }}</p>
                </div>
                <div class="bg-white/10 rounded-lg p-4 text-center">
                  <p class="text-sm text-white/60 mb-1">Regular Staff</p>
                  <p class="text-2xl font-bold text-white">{{ staffData.regularStaff }}</p>
                </div>
              </div>
            </div>
            
            <div class="bg-white/5 rounded-lg p-4">
              <h4 class="text-lg font-medium text-white mb-4">Staff Members</h4>
              <table class="w-full">
                <thead>
                  <tr class="border-b border-white/10">
                    <th class="text-left p-2 text-sm font-medium text-white/60">Staff Member</th>
                    <th class="text-left p-2 text-sm font-medium text-white/60">Email</th>
                    <th class="text-left p-2 text-sm font-medium text-white/60">Role</th>
                    <th class="text-left p-2 text-sm font-medium text-white/60">Status</th>
                    <th class="text-left p-2 text-sm font-medium text-white/60">Last Active</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="member in staffData.members" :key="member.id" class="border-b border-white/10">
                    <td class="p-2 text-white">{{ member.name }}</td>
                    <td class="p-2 text-white/60">{{ member.email }}</td>
                    <td class="p-2 text-white">{{ member.role }}</td>
                    <td class="p-2">
                      <span 
                        class="px-2 py-1 rounded-full text-xs font-medium"
                        :class="{
                          'bg-green-500/20 text-green-400': member.status === 'Active',
                          'bg-red-500/20 text-red-400': member.status === 'Inactive'
                        }"
                      >
                        {{ member.status }}
                      </span>
                    </td>
                    <td class="p-2 text-white/60">{{ member.lastActive }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="p-4 border-t border-white/10 flex justify-between">
          <button 
            @click="downloadReport(currentViewingReport)"
            class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <DownloadIcon class="w-5 h-5" />
            Download Report
          </button>
          <button 
            @click="showViewModal = false"
            class="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  
    <!-- Delete Confirmation Modal -->
    <div v-if="showDeleteModal" class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[9000] p-4">
      <div class="bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-xl w-full max-w-md border border-white/10 shadow-2xl p-6">
        <div class="text-center mb-6">
          <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-red-500/20 flex items-center justify-center">
            <AlertTriangleIcon class="w-8 h-8 text-red-400" />
          </div>
          <h3 class="text-xl font-bold text-white mb-2">Delete Report</h3>
          <p class="text-white/60">Are you sure you want to delete this report? This action cannot be undone.</p>
        </div>
        <div class="flex justify-end gap-3">
          <button 
            @click="showDeleteModal = false"
            class="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
          >
            Cancel
          </button>
          <button 
            @click="confirmDelete"
            class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'
  import { useRouter } from 'vue-router'
  import { 
    collection, 
    getDocs, 
    query, 
    where, 
    orderBy, 
    limit, 
    onSnapshot,
    addDoc,
    serverTimestamp,
    deleteDoc,
    doc
  } from 'firebase/firestore'
  import { db } from '../../config/firebase'
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
    Eye as EyeIcon,
    Download as DownloadIcon,
    ChevronLeft as ChevronLeftIcon,
    ChevronRight as ChevronRightIcon,
    FileText as FileTextIcon,
    Calendar as CalendarIcon,
    Bell as BellIcon,
    Loader as LoaderIcon,
    Trash as TrashIcon,
    AlertTriangle as AlertTriangleIcon,
    Check as CheckIcon
  } from 'lucide-vue-next'
  
  const router = useRouter()
  const mobileSidebarOpen = ref(false)
  
  // Current date
  const currentDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
  
  // Date range selector
  const dateRanges = [
    { label: '7D', value: '7d' },
    { label: '30D', value: '30d' },
    { label: '3M', value: '3m' },
    { label: '1Y', value: '1y' },
  ]
  const selectedRange = ref('30d')
  
  // Recent reports - using localStorage to persist data
  const STORAGE_KEY = 'mindoro-paint-center-reports'
  const recentReports = ref([])
  
  // Load reports from localStorage or Firestore
  const loadReports = async () => {
    try {
      // First try to load from localStorage
      const savedReports = localStorage.getItem(STORAGE_KEY)
      if (savedReports) {
        recentReports.value = JSON.parse(savedReports)
      }
      
      // Then try to fetch from Firestore if available
      if (db) {
        const reportsRef = collection(db, 'reports')
        const q = query(reportsRef, orderBy('createdAt', 'desc'))
        
        const snapshot = await getDocs(q)
        
        if (!snapshot.empty) {
          // Convert Firestore documents to report objects
          const firestoreReports = snapshot.docs.map(doc => {
            const data = doc.data()
            return {
              id: doc.id,
              name: data.name || 'Unnamed Report',
              type: data.type || 'unknown',
              generatedBy: data.generatedBy || 'Admin User',
              date: data.createdAt ? data.createdAt.toDate().toISOString() : new Date().toISOString()
            }
          })
          
          // Update localStorage with Firestore data
          recentReports.value = firestoreReports
          localStorage.setItem(STORAGE_KEY, JSON.stringify(firestoreReports))
        }
      }
    } catch (error) {
      console.error('Error loading reports:', error)
    }
  }
  
  // Save reports to localStorage
  const saveReports = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(recentReports.value))
  }
  
  // Watch for changes to recentReports and save to localStorage
  watch(recentReports, () => {
    saveReports()
  }, { deep: true })
  
  // Pagination
  const currentPage = ref(1)
  const perPage = ref(10)
  const totalReports = computed(() => recentReports.value.length)
  const totalPages = computed(() => Math.ceil(totalReports.value / perPage.value) || 1)
  const paginationStart = computed(() => recentReports.value.length ? ((currentPage.value - 1) * perPage.value) + 1 : 0)
  const paginationEnd = computed(() => Math.min(currentPage.value * perPage.value, totalReports.value))
  
  // Paginated reports
  const paginatedReports = computed(() => {
    const start = (currentPage.value - 1) * perPage.value
    const end = start + perPage.value
    return recentReports.value.slice(start, end)
  })
  
  // Report generation modal
  const showGeneratingModal = ref(false)
  const generationProgress = ref(0)
  const currentReportType = ref('')
  
  // View report modal
  const showViewModal = ref(false)
  const currentViewingReport = ref(null)
  
  // Delete confirmation modal
  const showDeleteModal = ref(false)
  const reportToDelete = ref(null)
  
  // Toast notification
  const showToast = ref(false)
  const toastMessage = ref('')
  
  // Data for reports - using actual data from your system
  const salesData = ref({
    totalRevenue: 445800.00,
    totalOrders: 13,
    productsSold: 459,
    averageOrderValue: 34292.31,
    bestSeller: {
      name: 'qwert',
      category: 'exterior',
      revenue: 172000.00,
      unitsSold: 86
    },
    topProducts: [
      { id: 1, name: 'qwert exterior', unitsSold: 86, revenue: 172000.00 }
    ]
  })
  
  const inventoryData = ref({
    totalProducts: 6,
    lowStockItems: 1,
    outOfStockItems: 0,
    totalValue: 176200,
    items: [
      { id: 1, name: 'qwert', sku: 'qwewqe654', category: 'Exterior Paint', stockStatus: 'Low Stock', stockLevel: 5, price: 2000 },
      { id: 2, name: 'BRUSH', sku: 'BRU123', category: 'Interior Paint', stockStatus: 'In Stock', stockLevel: 70, price: 500 },
      { id: 3, name: 'werty', sku: 'afa9080', category: 'Interior Paint', stockStatus: 'In Stock', stockLevel: 45, price: 900 }
    ]
  })
  
  const staffData = ref({
    totalStaff: 2,
    activeStaff: 2,
    regularStaff: 2,
    members: [
      { 
        id: 1, 
        name: 'John Carl Adarlo', 
        email: 'adarlojohncarl3@gmail.com', 
        role: 'Staff', 
        status: 'Active', 
        lastActive: '3/17/2025' 
      },
      { 
        id: 2, 
        name: 'John Brian Evangelista', 
        email: 'johnbrianevangelista73@gmail.com', 
        role: 'Staff', 
        status: 'Active', 
        lastActive: '3/18/2025' 
      }
    ]
  })
  
  // Fetch data from Firestore
  const fetchSalesData = async () => {
    try {
      if (!db) return;
      
      // Query sales collection
      const salesRef = collection(db, 'sales');
      const q = query(salesRef, orderBy('date', 'desc'));
      
      const snapshot = await getDocs(q);
      
      // Calculate metrics
      let totalRevenue = 0;
      let totalProductsSold = 0;
      const productMap = new Map();
      
      snapshot.forEach(doc => {
        const sale = doc.data();
        totalRevenue += Number(sale.total) || 0;
        
        // Count products sold
        if (sale.products && Array.isArray(sale.products)) {
          sale.products.forEach(product => {
            totalProductsSold += Number(product.quantity) || 0;
            
            // Track product sales for top products
            const productId = product.id;
            if (productId) {
              const existing = productMap.get(productId) || {
                id: productId,
                name: product.name || 'Unknown Product',
                category: product.category || 'Uncategorized',
                unitsSold: 0,
                revenue: 0
              };
              
              existing.unitsSold += Number(product.quantity) || 0;
              existing.revenue += (Number(product.price) || 0) * (Number(product.quantity) || 0);
              
              productMap.set(productId, existing);
            }
          });
        }
      });
      
      // Update sales data
      salesData.value = {
        totalRevenue: totalRevenue,
        totalOrders: snapshot.size,
        productsSold: totalProductsSold,
        averageOrderValue: snapshot.size ? totalRevenue / snapshot.size : 0,
        topProducts: Array.from(productMap.values())
          .sort((a, b) => b.revenue - a.revenue)
          .slice(0, 5),
        bestSeller: Array.from(productMap.values())
          .sort((a, b) => b.revenue - a.revenue)[0] || {
            name: 'No products sold',
            category: 'N/A',
            revenue: 0,
            unitsSold: 0
          }
      };
      
    } catch (error) {
      console.error('Error fetching sales data:', error);
    }
  };
  
  // Modify the fetchInventoryData function to properly connect with the inventory data
  const fetchInventoryData = async () => {
    try {
      if (!db) return;
      
      // Query products collection
      const productsRef = collection(db, 'products');
      const q = query(productsRef);
      
      const snapshot = await getDocs(q);
      
      // Calculate metrics
      let totalValue = 0;
      let lowStockCount = 0;
      let outOfStockCount = 0;
      const items = [];
      
      snapshot.forEach(doc => {
        const product = doc.data();
        // Ensure we use the correct stock value (check both fields)
        const stockLevel = product.stock !== undefined ? Number(product.stock) : 
                           product.stockLevel !== undefined ? Number(product.stockLevel) : 0;
        const price = Number(product.price) || 0;
        
        totalValue += stockLevel * price;
        
        if (stockLevel === 0) {
          outOfStockCount++;
        } else if (stockLevel <= 10) {
          lowStockCount++;
        }
        
        // Determine stock status
        let stockStatus = 'In Stock';
        if (stockLevel === 0) {
          stockStatus = 'Out of Stock';
        } else if (stockLevel <= 10) {
          stockStatus = 'Low Stock';
        }
        
        items.push({
          id: doc.id,
          name: product.name || 'Unnamed Product',
          sku: product.sku || '',
          category: product.category === 'interior' ? 'Interior Paint' : 
                   product.category === 'exterior' ? 'Exterior Paint' : 
                   product.category === 'primer' ? 'Primers' : 
                   product.category === 'specialty' ? 'Specialty Paints' : 
                   product.category || 'Uncategorized',
          stockLevel: stockLevel,
          stockStatus: stockStatus,
          price: price
        });
      });
      
      // Update inventory data
      inventoryData.value = {
        totalProducts: snapshot.size,
        lowStockItems: lowStockCount,
        outOfStockItems: outOfStockCount,
        totalValue: totalValue,
        items: items.sort((a, b) => a.name.localeCompare(b.name))
      };
      
      console.log('Fetched inventory data for report:', inventoryData.value);
      
    } catch (error) {
      console.error('Error fetching inventory data:', error);
    }
  };
  
  const fetchStaffData = async () => {
    try {
      if (!db) return;
      
      // Query staff collection
      const staffRef = collection(db, 'staff');
      const q = query(staffRef);
      
      const snapshot = await getDocs(q);
      
      // Calculate metrics
      let activeCount = 0;
      let regularCount = 0;
      const members = [];
      
      snapshot.forEach(doc => {
        const staff = doc.data();
        const status = staff.status || 'Active';
        const role = staff.role || 'Staff';
        
        if (status === 'Active') {
          activeCount++;
        }
        
        if (role === 'Staff') {
          regularCount++;
        }
        
        members.push({
          id: doc.id,
          name: staff.name || 'Unknown Staff',
          email: staff.email || '',
          role: role,
          status: status,
          lastActive: staff.lastActive ? new Date(staff.lastActive.toDate()).toLocaleDateString() : 'N/A'
        });
      });
      
      // If no staff found in database, use the default data
      if (snapshot.size === 0) {
        staffData.value = {
          totalStaff: 2,
          activeStaff: 2,
          regularStaff: 2,
          members: [
            { 
              id: 1, 
              name: 'John Carl Adarlo', 
              email: 'adarlojohncarl3@gmail.com', 
              role: 'Staff', 
              status: 'Active', 
              lastActive: '3/17/2025' 
            },
            { 
              id: 2, 
              name: 'John Brian Evangelista', 
              email: 'johnbrianevangelista73@gmail.com', 
              role: 'Staff', 
              status: 'Active', 
              lastActive: '3/18/2025' 
            }
          ]
        };
      } else {
        // Update staff data
        staffData.value = {
          totalStaff: snapshot.size,
          activeStaff: activeCount,
          regularStaff: regularCount,
          members: members
        };
      }
      
    } catch (error) {
      console.error('Error fetching staff data:', error);
    }
  };
  
  // Methods
  const generateReport = async (type) => {
    currentReportType.value = type
    showGeneratingModal.value = true
    generationProgress.value = 0
    
    // Fetch the latest data based on report type
    try {
      if (type === 'sales') {
        await fetchSalesData();
      } else if (type === 'inventory') {
        await fetchInventoryData();
      } else if (type === 'staff') {
        await fetchStaffData();
      }
    } catch (error) {
      console.error(`Error fetching ${type} data:`, error);
    }
    
    // Simulate progress
    const interval = setInterval(() => {
      generationProgress.value += 5
      if (generationProgress.value >= 100) {
        clearInterval(interval)
        setTimeout(() => {
          showGeneratingModal.value = false
          
          // Add the new report to the list
          const reportTypes = {
            'sales': 'Sales',
            'inventory': 'Inventory',
            'staff': 'Staff Performance'
          }
          
          const newReport = {
            id: Date.now().toString(),
            name: `${reportTypes[type]} Report - ${formatDate(new Date())}`,
            type: type,
            generatedBy: 'Admin User',
            date: new Date().toISOString()
          }
          
          // Add to local reports immediately to ensure UI update
          recentReports.value = [newReport, ...recentReports.value]
          saveReports()
          
          // Save report to Firestore if available
          if (db) {
            try {
              const reportsRef = collection(db, 'reports');
              addDoc(reportsRef, {
                ...newReport,
                createdAt: serverTimestamp()
              }).then(docRef => {
                // Update the ID with the Firestore document ID
                const index = recentReports.value.findIndex(r => r.id === newReport.id)
                if (index !== -1) {
                  recentReports.value[index].id = docRef.id
                  saveReports()
                }
              }).catch(error => {
                console.error('Error saving report to Firestore:', error)
              });
            } catch (error) {
              console.error('Error saving report to Firestore:', error)
            }
          }
          
          // Show success message
          showToastMessage(`${reportTypes[type]} report generated successfully!`)
        }, 500)
      }
    }, 100)
  }
  
  const viewReport = (report) => {
    // Set the current report being viewed
    currentViewingReport.value = report
    
    // Show the view modal
    showViewModal.value = true
  }
  
  const downloadReport = (report) => {
    if (!report) return
    
    // Create a fake PDF blob
    const reportContent = generateReportContent(report)
    const blob = new Blob([reportContent], { type: 'application/pdf' })
    
    // Create a download link
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${report.name.replace(/\s+/g, '_')}.pdf`
    
    // Trigger the download
    document.body.appendChild(a)
    a.click()
    
    // Clean up
    setTimeout(() => {
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    }, 0)
    
    // Show success message
    showToastMessage(`${report.name} downloaded successfully!`)
  }
  
  const generateReportContent = (report) => {
    // Generate PDF content based on report type
    let content = `Report: ${report.name}\n`;
    content += `Generated by: ${report.generatedBy}\n`;
    content += `Date: ${formatDate(report.date)}\n\n`;
    
    if (report.type === 'sales') {
      content += `Sales Summary\n`;
      content += `Total Revenue: ₱${salesData.value.totalRevenue.toLocaleString()}\n`;
      content += `Total Orders: ${salesData.value.totalOrders}\n`;
      content += `Products Sold: ${salesData.value.productsSold}\n`;
      content += `Average Order Value: ₱${salesData.value.averageOrderValue.toLocaleString()}\n\n`;
      
      content += `Best Seller: ${salesData.value.bestSeller.name}\n`;
      content += `Category: ${salesData.value.bestSeller.category}\n`;
      content += `Revenue: ₱${salesData.value.bestSeller.revenue.toLocaleString()}\n`;
      content += `Units Sold: ${salesData.value.bestSeller.unitsSold}\n\n`;
      
      content += `Top Products:\n`;
      salesData.value.topProducts.forEach(product => {
        content += `- ${product.name}: ${product.unitsSold} units, ₱${product.revenue.toLocaleString()}\n`;
      });
    } else if (report.type === 'inventory') {
      content += `Inventory Summary\n`;
      content += `Total Products: ${inventoryData.value.totalProducts}\n`;
      content += `Low Stock Items: ${inventoryData.value.lowStockItems}\n`;
      content += `Out of Stock Items: ${inventoryData.value.outOfStockItems}\n`;
      content += `Total Value: ₱${inventoryData.value.totalValue.toLocaleString()}\n\n`;
      
      content += `Inventory Items:\n`;
      inventoryData.value.items.forEach(item => {
        content += `- ${item.name} (${item.sku}): ${item.stockStatus}, Price: ₱${item.price.toLocaleString()}\n`;
      });
    } else if (report.type === 'staff') {
      content += `Staff Summary\n`;
      content += `Total Staff: ${staffData.value.totalStaff}\n`;
      content += `Active Staff: ${staffData.value.activeStaff}\n`;
      content += `Regular Staff: ${staffData.value.regularStaff}\n\n`;
      
      content += `Staff Members:\n`;
      staffData.value.members.forEach(member => {
        content += `- ${member.name} (${member.email}): ${member.role}, Status: ${member.status}, Last Active: ${member.lastActive}\n`;
      });
    }
    
    return content;
  }
  
  const deleteReport = (report) => {
    reportToDelete.value = report
    showDeleteModal.value = true
  }
  
  const confirmDelete = async () => {
    if (reportToDelete.value) {
      // Remove the report from the list
      recentReports.value = recentReports.value.filter(report => report.id !== reportToDelete.value.id)
      
      // Delete from Firestore if available
      if (db) {
        try {
          const reportRef = doc(db, 'reports', reportToDelete.value.id)
          await deleteDoc(reportRef)
        } catch (error) {
          console.error('Error deleting report from Firestore:', error)
        }
      }
      
      // Save updated reports to localStorage
      saveReports()
      
      // Show success message
      showToastMessage('Report deleted successfully!')
      
      // Close the modal
      showDeleteModal.value = false
      reportToDelete.value = null
    }
  }
  
  const showToastMessage = (message) => {
    toastMessage.value = message
    showToast.value = true
    setTimeout(() => {
      showToast.value = false
    }, 3000)
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
  
  // Set up real-time listener for reports
  let unsubscribe = null
  
  const setupReportsListener = () => {
    if (!db) return
    
    try {
      const reportsRef = collection(db, 'reports')
      const q = query(reportsRef, orderBy('createdAt', 'desc'))
      
      unsubscribe = onSnapshot(q, (snapshot) => {
        const updatedReports = snapshot.docs.map(doc => {
          const data = doc.data()
          return {
            id: doc.id,
            name: data.name || 'Unnamed Report',
            type: data.type || 'unknown',
            generatedBy: data.generatedBy || 'Admin User',
            date: data.createdAt ? data.createdAt.toDate().toISOString() : new Date().toISOString()
          }
        })
        
        recentReports.value = updatedReports
        saveReports()
      })
    } catch (error) {
      console.error('Error setting up reports listener:', error)
    }
  }
  
  // Add a real-time listener for inventory changes
  const setupInventoryListener = () => {
    if (!db) return null;
    
    try {
      const productsRef = collection(db, 'products');
      const q = query(productsRef);
      
      return onSnapshot(q, (snapshot) => {
        console.log('Inventory data changed, updating report data...');
        fetchInventoryData();
      }, (error) => {
        console.error('Error listening to inventory changes:', error);
      });
    } catch (error) {
      console.error('Error setting up inventory listener:', error);
      return null;
    }
  };
  
  // Initialize data on component mount
  onMounted(async () => {
    // Load reports from localStorage or Firestore
    await loadReports();
    
    // Set up real-time listener for reports
    setupReportsListener();
    
    // Set up real-time listener for inventory changes
    const inventoryUnsubscribe = setupInventoryListener();
    
    // Fetch initial data for reports
    await fetchSalesData();
    await fetchInventoryData();
    await fetchStaffData();
    
    // Add some sample reports if none exist (for testing)
    if (recentReports.value.length === 0) {
      const sampleReports = [
        {
          id: '1',
          name: 'Sales Report - Apr 5, 2025',
          type: 'sales',
          generatedBy: 'Admin User',
          date: new Date().toISOString()
        },
        {
          id: '2',
          name: 'Inventory Report - Apr 4, 2025',
          type: 'inventory',
          generatedBy: 'Admin User',
          date: new Date(Date.now() - 86400000).toISOString()
        }
      ];
      
      recentReports.value = sampleReports;
      saveReports();
    }
    
    // Clean up inventory listener on component unmount
    if (inventoryUnsubscribe) {
      onBeforeUnmount(() => {
        inventoryUnsubscribe();
      });
    }
  });
  
  // Clean up on component unmount
  onBeforeUnmount(() => {
    // Unsubscribe from Firestore listener
    if (unsubscribe) {
      unsubscribe()
    }
  })
  </script>
  
  <style scoped>
  .animate-fade-in {
    animation: fadeIn 0.5s ease-out;
  }
  
  @keyframes fadeIn {
    from { 
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
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
  
  /* Modal transition */
  .modal-enter-active,
  .modal-leave-active {
    transition: opacity 0.3s ease;
  }
  
  .modal-enter-from,
  .modal-leave-to {
    opacity: 0;
  }
  </style>