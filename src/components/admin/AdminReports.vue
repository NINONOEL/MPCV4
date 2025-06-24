<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0">
      <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200 to-purple-200 opacity-20 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-200 to-blue-200 opacity-20 rounded-full filter blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
    </div>

    <!-- Success Toast -->
    <div 
      v-if="showToast"
      class="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-fade-in z-[9999]"
    >
      <CheckIcon class="w-5 h-5" />
      <span>{{ toastMessage }}</span>
    </div>

    <div class="relative z-10 flex h-screen">
      <!-- Sidebar -->
      <aside class="w-64 bg-gradient-to-b from-white to-gray-50 backdrop-blur-sm border-r border-gray-200 hidden md:flex md:flex-col shadow-lg">
        <!-- Logo/Brand -->
        <div class="p-6 border-b border-gray-200 flex-shrink-0">
          <div>
            <h1 class="text-lg font-bold text-gray-900 leading-tight">Barcelona Paint Center</h1>
          </div>
          <div class="mt-2 text-xs text-white bg-gradient-to-r from-blue-500 to-purple-600 px-3 py-1 rounded-full inline-flex items-center shadow-sm">
            <ShieldIcon class="h-3 w-3 mr-1" />
            Admin Portal
          </div>
        </div>

        <!-- Navigation - Scrollable Area -->
        <nav class="flex-1 p-4 space-y-2 overflow-y-auto">
          <router-link 
            to="/admin/dashboard" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"
            :class="{ 'shadow-sm border border-blue-200 transform scale-105': $route.path === '/admin/dashboard' }"
          >
            <LayoutDashboardIcon class="w-5 h-5" />
            <span>Dashboard</span>
          </router-link>

          <router-link 
            to="/admin/staff" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-green-600 bg-green-50 hover:bg-green-100 hover:text-green-700"
            :class="{ 'shadow-sm border border-green-200 transform scale-105': $route.path === '/admin/staff' }"
          >
            <UsersIcon class="w-5 h-5" />
            <span>Staff Management</span>
          </router-link>

          <router-link 
            to="/admin/inventory" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-purple-600 bg-purple-50 hover:bg-purple-100 hover:text-purple-700"
            :class="{ 'shadow-sm border border-purple-200 transform scale-105': $route.path === '/admin/inventory' }"
          >
            <PackageIcon class="w-5 h-5" />
            <span>Inventory</span>
          </router-link>

          <router-link 
            to="/admin/house-paint-recommender" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-orange-600 bg-orange-50 hover:bg-orange-100 hover:text-orange-700"
            :class="{ 'shadow-sm border border-orange-200 transform scale-105': $route.path === '/admin/house-paint-recommender' }"
          >
            <HomeIcon class="w-5 h-5" />
            <span>House Paint Recommender</span>
          </router-link>

          <router-link 
            to="/admin/paint-mixing" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-pink-600 bg-pink-50 hover:bg-pink-100 hover:text-pink-700"
            :class="{ 'shadow-sm border border-pink-200 transform scale-105': $route.path === '/admin/paint-mixing' }"
          >
            <PaletteIcon class="w-5 h-5" />
            <span>Paint Mixing</span>
          </router-link>

          <router-link 
            to="/admin/sales-analytics" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-teal-600 bg-teal-50 hover:bg-teal-100 hover:text-teal-700"
            :class="{ 'shadow-sm border border-teal-200 transform scale-105': $route.path === '/admin/sales-analytics' }"
          >
            <TrendingUpIcon class="w-5 h-5" />
            <span>Sales Analytics</span>
          </router-link>

          <router-link 
            to="/admin/reports" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-indigo-600 bg-indigo-50 shadow-sm border border-indigo-200 transform scale-105"
            :class="{ 'hover:bg-indigo-100 hover:text-indigo-700': $route.path !== '/admin/reports' }"
          >
            <ClipboardIcon class="w-5 h-5" />
            <span>Reports</span>
          </router-link>

          <router-link 
            to="/admin/settings" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-amber-600 bg-amber-50 hover:bg-amber-100 hover:text-amber-700"
            :class="{ 'shadow-sm border border-amber-200 transform scale-105': $route.path === '/admin/settings' }"
          >
            <SettingsIcon class="w-5 h-5" />
            <span>System Settings</span>
          </router-link>

          <router-link 
            to="/admin/security" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-red-600 bg-red-50 hover:bg-red-100 hover:text-red-700"
            :class="{ 'shadow-sm border border-red-200 transform scale-105': $route.path === '/admin/security' }"
          >
            <ShieldIcon class="w-5 h-5" />
            <span>Security</span>
          </router-link>

          <!-- Perfect spacing -->
          <div class="h-4"></div>
        </nav>

        <!-- User Menu - Fixed at bottom -->
        <div class="p-4 border-t border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50 backdrop-blur-sm flex-shrink-0">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
              <UserIcon class="w-5 h-5 text-white" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate">Admin User</p>
              <p class="text-xs text-gray-600 truncate">admin@example.com</p>
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
          <div class="mt-2 text-xs text-white bg-gradient-to-r from-blue-500 to-purple-600 px-3 py-1 rounded-full inline-flex items-center shadow-sm">
            <ShieldIcon class="h-3 w-3 mr-1" />
            Admin Portal
          </div>
        </div>

        <!-- Mobile Navigation - Scrollable -->
        <nav class="flex-1 p-4 space-y-2 overflow-y-auto">
          <router-link 
            to="/admin/dashboard" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-blue-600 bg-blue-50"
            :class="{ 'shadow-sm border border-blue-200': $route.path === '/admin/dashboard' }"
            @click="mobileSidebarOpen = false"
          >
            <LayoutDashboardIcon class="w-5 h-5" />
            <span>Dashboard</span>
          </router-link>

          <router-link 
            to="/admin/staff" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-green-600 bg-green-50"
            :class="{ 'shadow-sm border border-green-200': $route.path === '/admin/staff' }"
            @click="mobileSidebarOpen = false"
          >
            <UsersIcon class="w-5 h-5" />
            <span>Staff Management</span>
          </router-link>

          <router-link 
            to="/admin/inventory" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-purple-600 bg-purple-50"
            :class="{ 'shadow-sm border border-purple-200': $route.path === '/admin/inventory' }"
            @click="mobileSidebarOpen = false"
          >
            <PackageIcon class="w-5 h-5" />
            <span>Inventory</span>
          </router-link>

          <router-link 
            to="/admin/house-paint-recommender" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-orange-600 bg-orange-50"
            :class="{ 'shadow-sm border border-orange-200': $route.path === '/admin/house-paint-recommender' }"
            @click="mobileSidebarOpen = false"
          >
            <HomeIcon class="w-5 h-5" />
            <span>House Paint Recommender</span>
          </router-link>

          <router-link 
            to="/admin/paint-mixing" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-pink-600 bg-pink-50"
            :class="{ 'shadow-sm border border-pink-200': $route.path === '/admin/paint-mixing' }"
            @click="mobileSidebarOpen = false"
          >
            <PaletteIcon class="w-5 h-5" />
            <span>Paint Mixing</span>
          </router-link>

          <router-link 
            to="/admin/sales-analytics" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-teal-600 bg-teal-50"
            :class="{ 'shadow-sm border border-teal-200': $route.path === '/admin/sales-analytics' }"
            @click="mobileSidebarOpen = false"
          >
            <TrendingUpIcon class="w-5 h-5" />
            <span>Sales Analytics</span>
          </router-link>

          <router-link 
            to="/admin/reports" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-indigo-600 bg-indigo-50 shadow-sm border border-indigo-200"
            @click="mobileSidebarOpen = false"
          >
            <ClipboardIcon class="w-5 h-5" />
            <span>Reports</span>
          </router-link>

          <router-link 
            to="/admin/settings" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-amber-600 bg-amber-50"
            :class="{ 'shadow-sm border border-amber-200': $route.path === '/admin/settings' }"
            @click="mobileSidebarOpen = false"
          >
            <SettingsIcon class="w-5 h-5" />
            <span>System Settings</span>
          </router-link>

          <router-link 
            to="/admin/security" 
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-red-600 bg-red-50"
            :class="{ 'shadow-sm border border-red-200': $route.path === '/admin/security' }"
            @click="mobileSidebarOpen = false"
          >
            <ShieldIcon class="w-5 h-5" />
            <span>Security</span>
          </router-link>

          <!-- Perfect spacing for mobile too -->
          <div class="h-4"></div>
        </nav>

        <!-- Mobile User Menu - Fixed at bottom -->
        <div class="p-4 border-t border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50 backdrop-blur-sm flex-shrink-0">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
              <UserIcon class="w-5 h-5 text-white" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate">Admin User</p>
              <p class="text-xs text-gray-600 truncate">admin@example.com</p>
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
              <h1 class="text-2xl font-bold text-gray-900">Reports</h1>
              <p class="text-gray-600">Generate and view detailed reports</p>
            </div>
            <div class="flex items-center gap-4">
              <div class="hidden md:flex items-center gap-2 text-gray-700">
                <CalendarIcon class="w-5 h-5 text-indigo-500" />
                <span>{{ currentDate }}</span>
              </div>
              <div class="hidden md:block h-6 w-px bg-gray-300"></div>
              <div class="flex items-center gap-3">
                <span class="text-gray-900">Welcome, Admin</span>
                <div class="relative">
                  <BellIcon class="w-5 h-5 text-orange-500 cursor-pointer hover:text-orange-600" />
                </div>
              </div>
            </div>
          </div>
        </header>

        <div class="p-6 md:p-8">
          <!-- Date Range Selector -->
          <div class="flex justify-end mb-6">
            <div class="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200 p-1 shadow-sm">
              <button 
                v-for="range in dateRanges" 
                :key="range.value"
                @click="selectedRange = range.value"
                class="px-3 py-1 rounded-md text-sm transition-colors"
                :class="selectedRange === range.value ? 'bg-indigo-500 text-white shadow-sm' : 'text-gray-600 hover:bg-gray-100'"
              >
                {{ range.label }}
              </button>
            </div>
          </div>

          <!-- Report Types Grid -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <!-- Sales Report -->
            <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 p-6">
              <div class="flex items-center gap-4 mb-6">
                <div class="p-3 rounded-xl shadow-lg bg-gradient-to-br from-blue-400 via-cyan-500 to-indigo-600 transform hover:scale-110 transition-transform duration-200">
                  <TrendingUpIcon class="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 class="text-lg font-semibold text-gray-900">Sales Report</h2>
                  <p class="text-sm text-gray-600">Detailed sales analysis</p>
                </div>
              </div>
              <button 
                @click="generateReport('sales')"
                class="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-medium flex items-center justify-center gap-2 shadow-lg"
              >
                <FileTextIcon class="w-5 h-5" />
                Generate Report
              </button>
            </div>

            <!-- Inventory Report -->
            <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 p-6">
              <div class="flex items-center gap-4 mb-6">
                <div class="p-3 rounded-xl shadow-lg bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600 transform hover:scale-110 transition-transform duration-200">
                  <PackageIcon class="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 class="text-lg font-semibold text-gray-900">Inventory Report</h2>
                  <p class="text-sm text-gray-600">Stock levels and movements</p>
                </div>
              </div>
              <button 
                @click="generateReport('inventory')"
                class="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-medium flex items-center justify-center gap-2 shadow-lg"
              >
                <FileTextIcon class="w-5 h-5" />
                Generate Report
              </button>
            </div>

            <!-- Staff Performance -->
            <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 p-6">
              <div class="flex items-center gap-4 mb-6">
                <div class="p-3 rounded-xl shadow-lg bg-gradient-to-br from-purple-400 via-violet-500 to-fuchsia-600 transform hover:scale-110 transition-transform duration-200">
                  <UsersIcon class="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 class="text-lg font-semibold text-gray-900">Staff Performance</h2>
                  <p class="text-sm text-gray-600">Employee productivity metrics</p>
                </div>
              </div>
              <button 
                @click="generateReport('staff')"
                class="w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-medium flex items-center justify-center gap-2 shadow-lg"
              >
                <FileTextIcon class="w-5 h-5" />
                Generate Report
              </button>
            </div>
          </div>

          <!-- Recent Reports -->
          <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg overflow-hidden">
            <div class="p-6 border-b border-gray-100">
              <h2 class="text-xl font-bold text-gray-900">Recent Reports</h2>
            </div>

            <!-- Empty State -->
            <div v-if="recentReports.length === 0" class="py-12 text-center">
              <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
                <FileTextIcon class="w-8 h-8 text-indigo-600" />
              </div>
              <h3 class="text-lg font-medium text-gray-900 mb-2">No reports generated yet</h3>
              <p class="text-gray-600 mb-4">Generate a report to see it listed here</p>
            </div>

            <!-- Table will be shown when reports are available -->
            <div v-if="recentReports.length > 0" class="overflow-x-auto">
              <table class="w-full">
                <thead>
                  <tr class="border-b border-gray-100">
                    <th class="text-left p-4 text-sm font-medium text-gray-600">Report Name</th>
                    <th class="text-left p-4 text-sm font-medium text-gray-600">Type</th>
                    <th class="text-left p-4 text-sm font-medium text-gray-600">Generated By</th>
                    <th class="text-left p-4 text-sm font-medium text-gray-600">Date</th>
                    <th class="text-right p-4 text-sm font-medium text-gray-600">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr 
                    v-for="report in paginatedReports" 
                    :key="report.id" 
                    class="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                  >
                    <td class="p-4">
                      <span class="font-medium text-gray-900">{{ report.name }}</span>
                    </td>
                    <td class="p-4">
                      <span 
                        class="px-3 py-1 rounded-full text-sm font-medium"
                        :class="{
                          'bg-blue-100 text-blue-800 border border-blue-200': report.type === 'sales',
                          'bg-green-100 text-green-800 border border-green-200': report.type === 'inventory',
                          'bg-purple-100 text-purple-800 border border-purple-200': report.type === 'staff'
                        }"
                      >
                        {{ formatReportType(report.type) }}
                      </span>
                    </td>
                    <td class="p-4">
                      <div class="flex items-center gap-3">
                        <div class="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                          <UserIcon class="w-4 h-4 text-white" />
                        </div>
                        <span class="text-gray-900">{{ report.generatedBy }}</span>
                      </div>
                    </td>
                    <td class="p-4 text-gray-600">
                      {{ formatDate(report.date) }}
                    </td>
                    <td class="p-4">
                      <div class="flex items-center justify-end gap-2">
                        <button 
                          @click="viewReport(report)"
                          class="p-2 hover:bg-blue-50 rounded-lg text-blue-600 hover:text-blue-700 transition-colors"
                          title="View Report"
                        >
                          <EyeIcon class="w-5 h-5" />
                        </button>
                        <button 
                          @click="downloadReport(report)"
                          class="p-2 hover:bg-green-50 rounded-lg text-green-600 hover:text-green-700 transition-colors"
                          title="Download Report"
                        >
                          <DownloadIcon class="w-5 h-5" />
                        </button>
                        <button 
                          @click="deleteReport(report)"
                          class="p-2 hover:bg-red-50 rounded-lg text-red-600 hover:text-red-700 transition-colors"
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
            <div v-if="recentReports.length > 0" class="flex items-center justify-between p-4 border-t border-gray-100">
              <p class="text-sm text-gray-600">
                Showing {{ paginationStart }} to {{ paginationEnd }} of {{ totalReports }} reports
              </p>
              <div class="flex items-center gap-2">
                <button 
                  @click="currentPage--"
                  :disabled="currentPage === 1"
                  class="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 text-gray-700"
                >
                  <ChevronLeftIcon class="w-5 h-5" />
                </button>
                <span class="text-sm text-gray-700">Page {{ currentPage }} of {{ totalPages }}</span>
                <button 
                  @click="currentPage++"
                  :disabled="currentPage === totalPages"
                  class="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 text-gray-700"
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
      <div class="bg-white rounded-xl w-full max-w-md shadow-2xl p-6">
        <div class="text-center">
          <LoaderIcon class="w-12 h-12 text-indigo-500 animate-spin mx-auto mb-4" />
          <h3 class="text-xl font-bold text-gray-900 mb-2">Generating Report</h3>
          <p class="text-gray-600 mb-6">Please wait while we generate your {{ currentReportType }} report...</p>
          <div class="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
            <div 
              class="bg-gradient-to-r from-indigo-500 to-purple-500 h-full transition-all duration-300 ease-in-out"
              :style="{ width: `${generationProgress}%` }"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <!-- View Report Modal -->
    <div v-if="showViewModal" class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[9000] p-4">
      <div class="bg-white rounded-xl w-full max-w-4xl shadow-2xl">
        <div class="flex items-center justify-between p-6 border-b border-gray-100">
          <h3 class="text-xl font-bold text-gray-900">{{ currentViewingReport?.name }}</h3>
          <button 
            @click="showViewModal = false"
            class="p-2 rounded-lg hover:bg-gray-100 text-gray-600 hover:text-gray-900"
          >
            <XIcon class="w-5 h-5" />
          </button>
        </div>
        <div class="p-6 max-h-[70vh] overflow-y-auto">
          <!-- Sales Report Content -->
          <div v-if="currentViewingReport?.type === 'sales'" class="space-y-6">
            <div class="bg-gray-50 rounded-lg p-4">
              <h4 class="text-lg font-medium text-gray-900 mb-2">Sales Summary</h4>
              <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div class="bg-white rounded-lg p-4 text-center shadow-sm">
                  <p class="text-sm text-gray-600 mb-1">Total Revenue</p>
                  <p class="text-2xl font-bold text-gray-900">₱{{ salesData.totalRevenue.toLocaleString() }}</p>
                  <p class="text-xs text-green-600">↑ 12.5% vs last period</p>
                </div>
                <div class="bg-white rounded-lg p-4 text-center shadow-sm">
                  <p class="text-sm text-gray-600 mb-1">Total Orders</p>
                  <p class="text-2xl font-bold text-gray-900">{{ salesData.totalOrders }}</p>
                  <p class="text-xs text-green-600">↑ 8.2% vs last period</p>
                </div>
                <div class="bg-white rounded-lg p-4 text-center shadow-sm">
                  <p class="text-sm text-gray-600 mb-1">Products Sold</p>
                  <p class="text-2xl font-bold text-gray-900">{{ salesData.productsSold }}</p>
                  <p class="text-xs text-red-600">↓ 3.1% vs last period</p>
                </div>
                <div class="bg-white rounded-lg p-4 text-center shadow-sm">
                  <p class="text-sm text-gray-600 mb-1">Average Order Value</p>
                  <p class="text-2xl font-bold text-gray-900">₱{{ salesData.averageOrderValue.toLocaleString() }}</p>
                  <p class="text-xs text-green-600">↑ 5.3% vs last period</p>
                </div>
              </div>
            </div>
            
            <div class="bg-gray-50 rounded-lg p-4">
              <h4 class="text-lg font-medium text-gray-900 mb-4">Best Seller</h4>
              <div class="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm">
                <div class="p-3 bg-blue-100 rounded-lg">
                  <PackageIcon class="w-8 h-8 text-blue-600" />
                </div>
                <div class="flex-1">
                  <h5 class="text-lg font-semibold text-gray-900">{{ salesData.bestSeller.name }}</h5>
                  <p class="text-sm text-gray-600">{{ salesData.bestSeller.category }}</p>
                </div>
                <div class="text-right">
                  <p class="text-lg font-bold text-gray-900">₱{{ salesData.bestSeller.revenue.toLocaleString() }}</p>
                  <p class="text-sm text-gray-600">{{ salesData.bestSeller.unitsSold }} units sold</p>
                </div>
              </div>
            </div>
            
            <div class="bg-gray-50 rounded-lg p-4">
              <h4 class="text-lg font-medium text-gray-900 mb-4">Top Products</h4>
              <div class="bg-white rounded-lg overflow-hidden shadow-sm">
                <table class="w-full">
                  <thead>
                    <tr class="border-b border-gray-100">
                      <th class="text-left p-3 text-sm font-medium text-gray-600">Product</th>
                      <th class="text-right p-3 text-sm font-medium text-gray-600">Units Sold</th>
                      <th class="text-right p-3 text-sm font-medium text-gray-600">Revenue</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="product in salesData.topProducts" :key="product.id" class="border-b border-gray-50">
                      <td class="p-3 text-gray-900">{{ product.name }}</td>
                      <td class="p-3 text-gray-900 text-right">{{ product.unitsSold }}</td>
                      <td class="p-3 text-gray-900 text-right">₱{{ product.revenue.toLocaleString() }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          <!-- Inventory Report Content -->
          <div v-if="currentViewingReport?.type === 'inventory'" class="space-y-6">
            <div class="bg-gray-50 rounded-lg p-4">
              <h4 class="text-lg font-medium text-gray-900 mb-2">Inventory Summary</h4>
              <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div class="bg-white rounded-lg p-4 text-center shadow-sm">
                  <p class="text-sm text-gray-600 mb-1">Total Products</p>
                  <p class="text-2xl font-bold text-gray-900">{{ inventoryData.totalProducts }}</p>
                </div>
                <div class="bg-white rounded-lg p-4 text-center shadow-sm">
                  <p class="text-sm text-gray-600 mb-1">Low Stock Items</p>
                  <p class="text-2xl font-bold text-gray-900">{{ inventoryData.lowStockItems }}</p>
                </div>
                <div class="bg-white rounded-lg p-4 text-center shadow-sm">
                  <p class="text-sm text-gray-600 mb-1">Out of Stock</p>
                  <p class="text-2xl font-bold text-gray-900">{{ inventoryData.outOfStockItems }}</p>
                </div>
                <div class="bg-white rounded-lg p-4 text-center shadow-sm">
                  <p class="text-sm text-gray-600 mb-1">Total Value</p>
                  <p class="text-2xl font-bold text-gray-900">₱{{ inventoryData.totalValue.toLocaleString() }}</p>
                </div>
              </div>
            </div>
            
            <div class="bg-gray-50 rounded-lg p-4">
              <h4 class="text-lg font-medium text-gray-900 mb-4">Inventory Items</h4>
              <div class="bg-white rounded-lg overflow-hidden shadow-sm">
                <table class="w-full">
                  <thead>
                    <tr class="border-b border-gray-100">
                      <th class="text-left p-3 text-sm font-medium text-gray-600">Product</th>
                      <th class="text-left p-3 text-sm font-medium text-gray-600">SKU</th>
                      <th class="text-left p-3 text-sm font-medium text-gray-600">Category</th>
                      <th class="text-right p-3 text-sm font-medium text-gray-600">Stock Level</th>
                      <th class="text-right p-3 text-sm font-medium text-gray-600">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in inventoryData.items" :key="item.id" class="border-b border-gray-50">
                      <td class="p-3 text-gray-900">{{ item.name }}</td>
                      <td class="p-3 text-gray-600">{{ item.sku }}</td>
                      <td class="p-3 text-gray-900">{{ item.category }}</td>
                      <td class="p-3 text-right">
                        <span 
                          class="px-2 py-1 rounded-full text-xs font-medium"
                          :class="{
                            'bg-red-100 text-red-800': item.stockStatus === 'Out of Stock',
                            'bg-yellow-100 text-yellow-800': item.stockStatus === 'Low Stock',
                            'bg-green-100 text-green-800': item.stockStatus === 'In Stock'
                          }"
                        >
                          {{ item.stockStatus }} {{ item.stockStatus !== 'Out of Stock' ? `(${item.stockLevel})` : '' }}
                        </span>
                      </td>
                      <td class="p-3 text-gray-900 text-right">₱{{ item.price.toLocaleString() }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          <!-- Staff Performance Report Content -->
          <div v-if="currentViewingReport?.type === 'staff'" class="space-y-6">
            <div class="bg-gray-50 rounded-lg p-4">
              <h4 class="text-lg font-medium text-gray-900 mb-2">Staff Summary</h4>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="bg-white rounded-lg p-4 text-center shadow-sm">
                  <p class="text-sm text-gray-600 mb-1">Total Staff</p>
                  <p class="text-2xl font-bold text-gray-900">{{ staffData.totalStaff }}</p>
                </div>
                <div class="bg-white rounded-lg p-4 text-center shadow-sm">
                  <p class="text-sm text-gray-600 mb-1">Active Staff</p>
                  <p class="text-2xl font-bold text-gray-900">{{ staffData.activeStaff }}</p>
                </div>
                <div class="bg-white rounded-lg p-4 text-center shadow-sm">
                  <p class="text-sm text-gray-600 mb-1">Regular Staff</p>
                  <p class="text-2xl font-bold text-gray-900">{{ staffData.regularStaff }}</p>
                </div>
              </div>
            </div>
            
            <div class="bg-gray-50 rounded-lg p-4">
              <h4 class="text-lg font-medium text-gray-900 mb-4">Staff Members</h4>
              <div class="bg-white rounded-lg overflow-hidden shadow-sm">
                <table class="w-full">
                  <thead>
                    <tr class="border-b border-gray-100">
                      <th class="text-left p-3 text-sm font-medium text-gray-600">Staff Member</th>
                      <th class="text-left p-3 text-sm font-medium text-gray-600">Email</th>
                      <th class="text-left p-3 text-sm font-medium text-gray-600">Role</th>
                      <th class="text-left p-3 text-sm font-medium text-gray-600">Status</th>
                      <th class="text-left p-3 text-sm font-medium text-gray-600">Last Active</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="member in staffData.members" :key="member.id" class="border-b border-gray-50">
                      <td class="p-3 text-gray-900">{{ member.name }}</td>
                      <td class="p-3 text-gray-600">{{ member.email }}</td>
                      <td class="p-3 text-gray-900">{{ member.role }}</td>
                      <td class="p-3">
                        <span 
                          class="px-2 py-1 rounded-full text-xs font-medium"
                          :class="{
                            'bg-green-100 text-green-800': member.status === 'Active',
                            'bg-red-100 text-red-800': member.status === 'Inactive'
                          }"
                        >
                          {{ member.status }}
                        </span>
                      </td>
                      <td class="p-3 text-gray-600">{{ member.lastActive }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="p-4 border-t border-gray-100 flex justify-between">
          <button 
            @click="downloadReport(currentViewingReport)"
            class="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
          >
            <DownloadIcon class="w-5 h-5" />
            Download Report
          </button>
          <button 
            @click="showViewModal = false"
            class="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>

    <!-- Delete Confirmation Modal -->
    <div v-if="showDeleteModal" class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[9000] p-4">
      <div class="bg-white rounded-xl w-full max-w-md shadow-2xl p-6">
        <div class="text-center mb-6">
          <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
            <AlertTriangleIcon class="w-8 h-8 text-red-600" />
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">Delete Report</h3>
          <p class="text-gray-600">Are you sure you want to delete this report? This action cannot be undone.</p>
        </div>
        <div class="flex justify-end gap-3">
          <button 
            @click="showDeleteModal = false"
            class="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Cancel
          </button>
          <button 
            @click="confirmDelete"
            class="px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
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
const STORAGE_KEY = 'barcelona-paint-center-reports'
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
  background: #f1f5f9;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #2563eb, #7c3aed);
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