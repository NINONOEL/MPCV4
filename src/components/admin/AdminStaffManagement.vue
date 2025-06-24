<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0">
      <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200 to-purple-200 opacity-20 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-200 to-blue-200 opacity-20 rounded-full filter blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
    </div>

    <!-- Error Boundary -->
    <div v-if="componentError" class="fixed inset-0 bg-red-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg shadow-lg p-8 max-w-md mx-4">
        <div class="text-center">
          <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
            <AlertTriangleIcon class="w-8 h-8 text-red-600" />
          </div>
          <h2 class="text-xl font-bold text-gray-900 mb-2">Component Error</h2>
          <p class="text-gray-600 mb-4">{{ componentError }}</p>
          <button 
            @click="reloadComponent"
            class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            Reload Component
          </button>
        </div>
      </div>
    </div>

    <div v-else class="relative z-10 flex h-screen">
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
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-green-600 bg-green-50 shadow-sm border border-green-200 transform scale-105"
            :class="{ 'hover:bg-green-100 hover:text-green-700': $route.path !== '/admin/staff' }"
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
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100 hover:text-indigo-700"
            :class="{ 'shadow-sm border border-indigo-200 transform scale-105': $route.path === '/admin/reports' }"
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
        <!-- Same mobile sidebar content as desktop -->
        <div class="p-6 border-b border-gray-200 flex-shrink-0">
          <div>
            <h1 class="text-lg font-bold text-gray-900 leading-tight">Barcelona Paint Center</h1>
          </div>
          <div class="mt-2 text-xs text-white bg-gradient-to-r from-blue-500 to-purple-600 px-3 py-1 rounded-full inline-flex items-center shadow-sm">
            <ShieldIcon class="h-3 w-3 mr-1" />
            Admin Portal
          </div>
        </div>

        <nav class="flex-1 p-4 space-y-2 overflow-y-auto">
          <!-- Mobile navigation links with same styling -->
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
            class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-all duration-200 font-medium text-green-600 bg-green-50 shadow-sm border border-green-200"
            @click="mobileSidebarOpen = false"
          >
            <UsersIcon class="w-5 h-5" />
            <span>Staff Management</span>
          </router-link>

          <!-- Other mobile nav links... -->
        </nav>

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
            >
              <LogOutIcon class="w-5 h-5" />
            </button>
          </div>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 overflow-auto">
        <!-- Header - Updated with Date and Welcome -->
        <header class="bg-white/50 backdrop-blur-sm border-b border-gray-200 px-4 sm:px-6 md:px-8 py-4 shadow-sm">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 class="text-xl sm:text-2xl font-bold text-gray-900">Staff Management</h1>
              <p class="text-sm sm:text-base text-gray-600">Manage your staff members and their roles</p>
              <!-- Real-time Status Indicator -->
              <div class="flex items-center gap-2 mt-2">
                <div class="flex items-center gap-1">
                  <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span class="text-xs text-green-600 font-medium">Real-time Updates Active</span>
                </div>
                <span class="text-xs text-gray-500">• Last updated: {{ lastUpdated }}</span>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <div class="hidden md:flex items-center gap-2 text-gray-700">
                <CalendarIcon class="w-5 h-5 text-green-500" />
                <span>{{ currentDate }}</span>
              </div>
              <div class="hidden md:block h-6 w-px bg-gray-300"></div>
              <div class="flex items-center gap-3">
                <span class="text-gray-900 text-sm sm:text-base">Welcome, Admin</span>
                <div class="relative">
                  <BellIcon class="w-5 h-5 text-green-500 cursor-pointer hover:text-green-600" />
                </div>
              </div>
            </div>
          </div>
        </header>

        <div class="p-4 sm:p-6 md:p-8 space-y-6">
          <!-- Connection Status -->
          <div v-if="connectionStatus" class="mb-6">
            <div 
              :class="[
                'p-4 rounded-lg border-2 flex items-center gap-3',
                connectionStatus.success 
                  ? 'bg-green-50 border-green-200 text-green-800' 
                  : 'bg-red-50 border-red-200 text-red-800'
              ]"
            >
              <CheckCircleIcon v-if="connectionStatus.success" class="w-6 h-6 text-green-600" />
              <XCircleIcon v-else class="w-6 h-6 text-red-600" />
              <div>
                <h3 class="font-medium">{{ connectionStatus.title }}</h3>
                <p class="text-sm">{{ connectionStatus.message }}</p>
              </div>
            </div>
          </div>

          <!-- New Staff Notification -->
          <div v-if="newStaffNotification" class="mb-6">
            <div class="p-4 rounded-lg border-2 bg-blue-50 border-blue-200 text-blue-800 flex items-center gap-3">
              <div class="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                <span class="text-white text-sm font-bold">!</span>
              </div>
              <div>
                <h3 class="font-medium">New Staff Member Registered!</h3>
                <p class="text-sm">{{ newStaffNotification }}</p>
              </div>
              <button 
                @click="newStaffNotification = null"
                class="ml-auto p-1 hover:bg-blue-100 rounded"
              >
                <XIcon class="w-4 h-4" />
              </button>
            </div>
          </div>

          <!-- Stats Cards -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <!-- Total Staff Card -->
            <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 overflow-hidden relative">
              <div class="bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600 h-2 absolute top-0 left-0 right-0"></div>
              <div class="p-6">
                <div class="flex items-center gap-4">
                  <div class="p-3 rounded-xl shadow-lg bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600 transform hover:scale-110 transition-transform duration-200">
                    <UsersIcon class="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p class="text-sm text-gray-600">Total Staff</p>
                    <p class="text-2xl font-bold text-gray-900">{{ totalStaff }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Active Staff Card -->
            <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 overflow-hidden relative">
              <div class="bg-gradient-to-br from-blue-400 via-cyan-500 to-indigo-600 h-2 absolute top-0 left-0 right-0"></div>
              <div class="p-6">
                <div class="flex items-center gap-4">
                  <div class="p-3 rounded-xl shadow-lg bg-gradient-to-br from-blue-400 via-cyan-500 to-indigo-600 transform hover:scale-110 transition-transform duration-200">
                    <UserCheckIcon class="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p class="text-sm text-gray-600">Active Staff</p>
                    <p class="text-2xl font-bold text-gray-900">{{ activeStaff }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Regular Staff Card -->
            <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transform transition-all duration-300 overflow-hidden relative">
              <div class="bg-gradient-to-br from-purple-400 via-violet-500 to-fuchsia-600 h-2 absolute top-0 left-0 right-0"></div>
              <div class="p-6">
                <div class="flex items-center gap-4">
                  <div class="p-3 rounded-xl shadow-lg bg-gradient-to-br from-purple-400 via-violet-500 to-fuchsia-600 transform hover:scale-110 transition-transform duration-200">
                    <UserIcon class="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p class="text-sm text-gray-600">Regular Staff</p>
                    <p class="text-2xl font-bold text-gray-900">{{ regularStaffCount }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Debug Info -->
          <div v-if="staffMembers.length === 0 && !loading" class="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <div class="flex items-center gap-2 mb-2">
              <AlertTriangleIcon class="w-5 h-5 text-yellow-600" />
              <h3 class="font-medium text-yellow-800">No Staff Members Found</h3>
            </div>
            <p class="text-yellow-700 text-sm mb-3">
              Staff members registered through the Staff Portal should appear here automatically with real-time updates.
            </p>
            <div class="space-y-2 text-sm">
              <button 
                @click="testConnection" 
                class="block w-full text-left px-3 py-2 bg-yellow-100 hover:bg-yellow-200 rounded border border-yellow-300 transition-colors"
              >
                1. Test Firebase/Firestore connection
              </button>
              <button 
                @click="fetchStaffMembers" 
                class="block w-full text-left px-3 py-2 bg-yellow-100 hover:bg-yellow-200 rounded border border-yellow-300 transition-colors"
              >
                2. Manual refresh to check for new staff registrations
              </button>
            </div>
          </div>

          <!-- Search and Filter Bar -->
          <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-6 mb-8">
            <div class="flex flex-col md:flex-row gap-4">
              <div class="flex-1">
                <div class="relative">
                  <SearchIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input 
                    type="text"
                    v-model="searchQuery"
                    placeholder="Search by name or email..."
                    class="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500"
                  />
                </div>
              </div>
              <div class="flex flex-col sm:flex-row gap-4">
                <!-- Removed All Roles filter since it's only staff -->
                <select 
                  v-model="filterStatus"
                  class="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900"
                >
                  <option value="">All Status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
                <!-- Admin Tools moved here -->
                <div class="flex gap-2">
                  <button 
                    @click="testConnection"
                    class="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-sm"
                    :disabled="loading"
                  >
                    <AlertTriangleIcon class="w-4 h-4" />
                    <span class="hidden sm:inline">Test Connection</span>
                  </button>
                  <button 
                    @click="fetchStaffMembers"
                    class="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-sm"
                    :disabled="loading"
                  >
                    <RefreshCwIcon class="w-4 h-4" :class="{ 'animate-spin': loading }" />
                    <span class="hidden sm:inline">{{ loading ? 'Loading...' : 'Refresh' }}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Staff Table -->
          <div class="bg-white/80 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg overflow-hidden">
            <!-- Mobile View -->
            <div class="block md:hidden">
              <div v-if="loading" class="p-8 text-center">
                <LoaderIcon class="w-6 h-6 text-gray-400 animate-spin mx-auto" />
                <p class="text-gray-600 mt-2">Loading staff members...</p>
              </div>
              <div v-else-if="paginatedStaff.length === 0" class="p-8 text-center text-gray-600">
                No staff members found
              </div>
              <div v-else v-for="staff in paginatedStaff" :key="staff.id" class="p-4 border-b border-gray-100">
                <div class="flex items-center justify-between mb-2">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center overflow-hidden shadow-lg">
                      <img v-if="staff.photoURL" :src="staff.photoURL" alt="Profile" class="w-full h-full object-cover" />
                      <UserIcon v-else class="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p class="font-medium text-gray-900">{{ getFullName(staff) }}</p>
                      <p class="text-sm text-gray-600">{{ staff.email }}</p>
                      <p class="text-xs text-gray-500">{{ staff.position || 'Staff Member' }}</p>
                    </div>
                  </div>
                  <div class="flex items-center gap-2">
                    <button 
                      @click="editStaff(staff)"
                      class="p-2 hover:bg-blue-50 rounded-lg text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <EditIcon class="w-5 h-5" />
                    </button>
                    <button 
                      @click="confirmDelete(staff)"
                      class="p-2 hover:bg-red-50 rounded-lg text-red-600 hover:text-red-700 transition-colors"
                    >
                      <Trash2Icon class="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div class="flex flex-wrap gap-2 mt-2">
                  <span 
                    class="px-2 py-1 rounded-full text-sm"
                    :class="getRoleBadgeClass(staff.role)"
                  >
                    {{ formatRole(staff.role) }}
                  </span>
                  <span 
                    class="px-2 py-1 rounded-full text-sm"
                    :class="getStatusBadgeClass(staff.status || 'active')"
                  >
                    {{ formatStatus(staff.status || 'active') }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Desktop View -->
            <div class="hidden md:block overflow-x-auto">
              <table class="w-full">
                <thead>
                  <tr class="border-b border-gray-100">
                    <th class="text-left p-4 text-sm font-medium text-gray-600">Staff Member</th>
                    <th class="text-left p-4 text-sm font-medium text-gray-600">Position</th>
                    <th class="text-left p-4 text-sm font-medium text-gray-600">Role</th>
                    <th class="text-left p-4 text-sm font-medium text-gray-600">Status</th>
                    <th class="text-left p-4 text-sm font-medium text-gray-600">Created</th>
                    <th class="text-right p-4 text-sm font-medium text-gray-600">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="loading" class="border-b border-gray-100">
                    <td colspan="6" class="p-8 text-center">
                      <LoaderIcon class="w-6 h-6 text-gray-400 animate-spin mx-auto" />
                      <p class="text-gray-600 mt-2">Loading staff members...</p>
                    </td>
                  </tr>
                  <tr v-else-if="paginatedStaff.length === 0" class="border-b border-gray-100">
                    <td colspan="6" class="p-8 text-center text-gray-600">
                      No staff members found
                    </td>
                  </tr>
                  <tr 
                    v-for="staff in paginatedStaff" 
                    :key="staff.id" 
                    class="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                  >
                    <td class="p-4">
                      <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center overflow-hidden shadow-lg">
                          <img v-if="staff.photoURL" :src="staff.photoURL" alt="Profile" class="w-full h-full object-cover" />
                          <UserIcon v-else class="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p class="font-medium text-gray-900">{{ getFullName(staff) }}</p>
                          <p class="text-sm text-gray-600">{{ staff.email }}</p>
                        </div>
                      </div>
                    </td>
                    <td class="p-4">
                      <span class="text-gray-900">{{ staff.position || 'Staff Member' }}</span>
                    </td>
                    <td class="p-4">
                      <span 
                        class="px-3 py-1 rounded-full text-sm"
                        :class="getRoleBadgeClass(staff.role)"
                      >
                        {{ formatRole(staff.role) }}
                      </span>
                    </td>
                    <td class="p-4">
                      <span 
                        class="px-3 py-1 rounded-full text-sm"
                        :class="getStatusBadgeClass(staff.status || 'active')"
                      >
                        {{ formatStatus(staff.status || 'active') }}
                      </span>
                    </td>
                    <td class="p-4 text-gray-600">
                      {{ formatDate(staff.createdAt) }}
                    </td>
                    <td class="p-4">
                      <div class="flex items-center justify-end gap-2">
                        <button 
                          @click="editStaff(staff)"
                          class="p-2 hover:bg-blue-50 rounded-lg text-blue-600 hover:text-blue-700 transition-colors"
                          title="Edit Staff"
                        >
                          <EditIcon class="w-5 h-5" />
                        </button>
                        <button 
                          @click="confirmDelete(staff)"
                          class="p-2 hover:bg-red-50 rounded-lg text-red-600 hover:text-red-700 transition-colors"
                          title="Delete Staff"
                        >
                          <Trash2Icon class="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Pagination -->
            <div class="flex flex-col sm:flex-row items-center justify-between gap-4 px-4 py-4 border-t border-gray-100">
              <div class="flex items-center gap-2">
                <select 
                  v-model="perPage"
                  class="px-2 py-1 rounded-lg border border-gray-200 text-sm bg-white text-gray-900"
                >
                  <option value="10">10 per page</option>
                  <option value="25">25 per page</option>
                  <option value="50">50 per page</option>
                </select>
                <span class="text-sm text-gray-600">
                  Showing {{ paginationStart }} - {{ paginationEnd }} of {{ totalStaff }}
                </span>
              </div>
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
                  :disabled="currentPage >= totalPages"
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
  </div>

  <!-- Edit Staff Modal - Fixed Size and Position -->
  <div v-if="showAddModal" class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
    <div class="bg-white rounded-xl w-full max-w-lg shadow-2xl max-h-[90vh] overflow-y-auto">
      <div class="p-6 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white rounded-t-xl">
        <h3 class="text-xl font-bold text-gray-900">
          Edit Staff Member
        </h3>
        <button 
          @click="closeModal"
          class="p-2 rounded-lg hover:bg-gray-100 text-gray-600"
          aria-label="Close modal"
        >
          <XIcon class="w-5 h-5" />
        </button>
      </div>
      
      <form @submit.prevent="handleSubmit" class="p-6">
        <div class="space-y-4">
          <!-- Profile Photo -->
          <div class="flex flex-col items-center gap-4 mb-4">
            <div class="relative">
              <div class="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center overflow-hidden shadow-lg">
                <img v-if="staffForm.photoURL" :src="staffForm.photoURL" alt="Profile" class="w-full h-full object-cover" />
                <UserIcon v-else class="w-12 h-12 text-white" />
              </div>
              <input 
                type="file" 
                ref="photoInput" 
                accept="image/*" 
                class="hidden" 
                @change="handleStaffPhotoUpload"
              />
            </div>
            <div class="flex gap-2">
              <button 
                type="button"
                @click="$refs.photoInput.click()" 
                class="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-sm"
              >
                Change Photo
              </button>
              <button 
                v-if="staffForm.photoURL" 
                type="button"
                @click="removeStaffPhoto" 
                class="px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200 text-sm"
              >
                Remove Photo
              </button>
            </div>
          </div>

          <!-- Name -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input 
              type="text"
              v-model="staffForm.name"
              required
              class="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500"
              placeholder="Enter full name"
            />
          </div>

          <!-- Email -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input 
              type="email"
              v-model="staffForm.email"
              required
              class="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500"
              placeholder="Enter email address"
            />
          </div>

          <!-- Role -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Role</label>
            <select 
              v-model="staffForm.role"
              required
              class="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900"
            >
              <option value="staff">Staff</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <!-- Status -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Status</label>
            <select 
              v-model="staffForm.status"
              required
              class="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          <!-- Position -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Position</label>
            <input 
              type="text"
              v-model="staffForm.position"
              class="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500"
              placeholder="Enter position"
            />
          </div>
        </div>

        <div class="flex justify-end gap-3 mt-6 border-t border-gray-200 pt-6 sticky bottom-0 bg-white">
          <button 
            type="button"
            @click="closeModal"
            class="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button 
            type="submit"
            class="px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 shadow-lg"
            :disabled="loading"
          >
            <span v-if="loading" class="flex items-center gap-2">
              <LoaderIcon class="w-5 h-5 animate-spin" />
              Saving...
            </span>
            <span v-else>
              Save Changes
            </span>
          </button>
        </div>
      </form>
    </div>
  </div>

  <!-- Delete Confirmation Modal -->
  <div v-if="showDeleteModal" class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
    <div class="bg-white rounded-xl w-full max-w-md shadow-2xl">
      <div class="p-6">
        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
          <AlertTriangleIcon class="w-8 h-8 text-red-600" />
        </div>
        <h3 class="text-xl font-bold text-gray-900 text-center mb-2">Delete Staff Member</h3>
        <p class="text-gray-600 text-center mb-6">
          Are you sure you want to delete {{ selectedStaff?.name || getFullName(selectedStaff) }}? This action cannot be undone.
        </p>
        <div class="flex justify-center gap-3">
          <button 
            @click="showDeleteModal = false"
            class="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button 
            @click="deleteStaff"
            class="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            :disabled="loading"
          >
            <span v-if="loading" class="flex items-center gap-2">
              <LoaderIcon class="w-5 h-5 animate-spin" />
              Deleting...
            </span>
            <span v-else>Delete</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, onErrorCaptured } from 'vue'
import { useRouter } from 'vue-router'
import { collection, getDocs, updateDoc, deleteDoc, doc, onSnapshot } from 'firebase/firestore'
import { db } from '@/config/firebase.js'
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
  UserCheck as UserCheckIcon,
  Search as SearchIcon,
  Edit as EditIcon,
  Trash2 as Trash2Icon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  AlertTriangle as AlertTriangleIcon,
  Loader as LoaderIcon,
  RefreshCw as RefreshCwIcon,
  CheckCircle as CheckCircleIcon,
  XCircle as XCircleIcon,
  Calendar as CalendarIcon,
  Bell as BellIcon
} from 'lucide-vue-next'

// State
const loading = ref(false)
const showAddModal = ref(false)
const showDeleteModal = ref(false)
const editingStaff = ref(null)
const selectedStaff = ref(null)
const searchQuery = ref('')
const filterStatus = ref('') // Removed filterRole since it's only staff
const currentPage = ref(1)
const perPage = ref(10)
const mobileSidebarOpen = ref(false)
const photoInput = ref(null)
const connectionStatus = ref(null)
const componentError = ref(null)
const newStaffNotification = ref(null)
const lastUpdated = ref(new Date().toLocaleTimeString())

const router = useRouter()

// Staff data
const staffMembers = ref([])

// Real-time listener
let unsubscribeStaffListener = null

// Form state
const staffForm = ref({
  name: '',
  email: '',
  role: 'staff', // Default to staff
  status: 'active',
  photoURL: null,
  position: ''
})

// Current date computed property
const currentDate = computed(() => {
  return new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
});

// Error handling
onErrorCaptured((error) => {
  console.error('❌ Component error:', error)
  componentError.value = error.message
  return false
})

const reloadComponent = () => {
  componentError.value = null
  window.location.reload()
}

// Setup real-time listener for staff collection
const setupRealtimeListener = () => {
  try {
    console.log('🔄 Setting up real-time listener for staff collection...')
    
    const staffCollection = collection(db, 'staff')
    
    unsubscribeStaffListener = onSnapshot(staffCollection, (snapshot) => {
      console.log('📡 Real-time update received! Changes:', snapshot.docChanges().length)
      
      const staffData = snapshot.docs.map(doc => {
        const data = doc.data()
        return {
          id: doc.id,
          firstName: data.firstName || '',
          lastName: data.lastName || '',
          fullName: data.fullName || `${data.firstName || ''} ${data.lastName || ''}`.trim(),
          email: data.email || '',
          role: data.role || 'staff',
          status: data.status || 'active',
          photoURL: data.photoURL || null,
          createdAt: data.createdAt || new Date().toISOString(),
          position: data.position || 'Staff Member'
        }
      })
      
      // Check for new staff members
      const previousCount = staffMembers.value.length
      const newCount = staffData.length
      
      if (newCount > previousCount && previousCount > 0) {
        // Find the new staff member
        const newStaff = staffData.find(staff => 
          !staffMembers.value.some(existing => existing.id === staff.id)
        )
        
        if (newStaff) {
          newStaffNotification.value = `${newStaff.fullName} (${newStaff.email}) has registered and been added to the system.`
          
          // Auto-hide notification after 10 seconds
          setTimeout(() => {
            newStaffNotification.value = null
          }, 10000)
        }
      }
      
      staffMembers.value = staffData
      lastUpdated.value = new Date().toLocaleTimeString()
      
      console.log('✅ Real-time data updated:', staffData.length, 'staff members')
    }, (error) => {
      console.error('❌ Real-time listener error:', error)
      connectionStatus.value = {
        success: false,
        title: 'Real-time Updates Failed',
        message: `Error: ${error.message}. Falling back to manual refresh.`
      }
      
      setTimeout(() => {
        connectionStatus.value = null
      }, 5000)
    })
    
    console.log('✅ Real-time listener setup successful')
  } catch (error) {
    console.error('❌ Error setting up real-time listener:', error)
  }
}

// Test connection function
const testConnection = async () => {
  try {
    loading.value = true
    console.log('🔍 Testing Firebase/Firestore connection...')
    
    // Simple connection test
    const staffCollection = collection(db, 'staff')
    await getDocs(staffCollection)
    
    connectionStatus.value = {
      success: true,
      title: 'Connection Successful',
      message: 'Firebase and Firestore are working properly. Real-time updates are active.'
    }
    
    // Auto-hide status after 5 seconds
    setTimeout(() => {
      connectionStatus.value = null
    }, 5000)
    
  } catch (error) {
    console.error('❌ Connection test failed:', error)
    connectionStatus.value = {
      success: false,
      title: 'Connection Failed',
      message: `Connection failed: ${error.message}`
    }
    
    setTimeout(() => {
      connectionStatus.value = null
    }, 5000)
  } finally {
    loading.value = false
  }
}

// Fetch staff members from Firestore (manual refresh)
const fetchStaffMembers = async () => {
  try {
    loading.value = true
    console.log('📊 Manual refresh: Fetching staff members from Firestore...')
    
    const staffCollection = collection(db, 'staff')
    const staffSnapshot = await getDocs(staffCollection)
    
    console.log('📈 Staff snapshot size:', staffSnapshot.size)
    
    const staffData = staffSnapshot.docs.map(doc => {
      const data = doc.data()
      console.log('👤 Staff document:', doc.id, data)
      
      return {
        id: doc.id,
        firstName: data.firstName || '',
        lastName: data.lastName || '',
        fullName: data.fullName || `${data.firstName || ''} ${data.lastName || ''}`.trim(),
        email: data.email || '',
        role: data.role || 'staff',
        status: data.status || 'active',
        photoURL: data.photoURL || null,
        createdAt: data.createdAt || new Date().toISOString(),
        position: data.position || 'Staff Member'
      }
    })
    
    staffMembers.value = staffData
    lastUpdated.value = new Date().toLocaleTimeString()
    console.log('✅ Manual refresh completed:', staffData.length, 'members')
    
    connectionStatus.value = {
      success: true,
      title: 'Manual Refresh Complete',
      message: `Loaded ${staffData.length} staff member${staffData.length !== 1 ? 's' : ''} from the database.`
    }
    
    setTimeout(() => {
      connectionStatus.value = null
    }, 3000)
    
  } catch (error) {
    console.error('❌ Error fetching staff members:', error)
    console.error('Error details:', error.code, error.message)
    
    connectionStatus.value = {
      success: false,
      title: 'Manual Refresh Failed',
      message: `Error: ${error.message}. Please check your Firebase configuration.`
    }
    
    setTimeout(() => {
      connectionStatus.value = null
    }, 8000)
  } finally {
    loading.value = false
  }
}

// Load staff data on component mount
onMounted(async () => {
  try {
    console.log('🚀 AdminStaffManagement component mounted')
    
    // Setup real-time listener first
    setupRealtimeListener()
    
    // Also do an initial fetch
    await fetchStaffMembers()
  } catch (error) {
    console.error('❌ Error during component initialization:', error)
    componentError.value = `Initialization failed: ${error.message}`
  }
})

// Cleanup on unmount
onUnmounted(() => {
  if (unsubscribeStaffListener) {
    console.log('🔄 Cleaning up real-time listener')
    unsubscribeStaffListener()
  }
})

// Helper function to get full name
const getFullName = (staff) => {
  if (!staff) return ''
  if (staff.fullName) return staff.fullName
  return `${staff.firstName || ''} ${staff.lastName || ''}`.trim()
}

// Methods
const handleSubmit = async () => {
  try {
    loading.value = true
    
    // Split the name into firstName and lastName
    const nameParts = staffForm.value.name.split(' ')
    const firstName = nameParts[0] || ''
    const lastName = nameParts.slice(1).join(' ') || ''
    
    const staffData = {
      firstName,
      lastName,
      fullName: staffForm.value.name.trim(),
      email: staffForm.value.email,
      role: staffForm.value.role,
      status: staffForm.value.status,
      photoURL: staffForm.value.photoURL,
      position: staffForm.value.position || 'Staff Member',
      updatedAt: new Date().toISOString()
    }
    
    if (editingStaff.value) {
      // Update existing staff
      staffData.createdAt = editingStaff.value.createdAt
      const staffRef = doc(db, 'staff', editingStaff.value.id)
      await updateDoc(staffRef, staffData)
      console.log('✅ Staff updated successfully:', staffData)
    }
    
    // Real-time listener will automatically update the UI
    closeModal()
    
    connectionStatus.value = {
      success: true,
      title: 'Staff Updated',
      message: 'Staff member updated successfully!'
    }
    
    setTimeout(() => {
      connectionStatus.value = null
    }, 3000)
    
  } catch (error) {
    console.error('❌ Error saving staff:', error)
    connectionStatus.value = {
      success: false,
      title: 'Update Failed',
      message: `Error updating staff: ${error.message}`
    }
    
    setTimeout(() => {
      connectionStatus.value = null
    }, 5000)
  } finally {
    loading.value = false
  }
}

const handleStaffPhotoUpload = async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  try {
    // Create a persistent URL for the image
    const reader = new FileReader();
    reader.onload = (e) => {
      // Store the data URL
      staffForm.value.photoURL = e.target.result;
    };
    
    // Read the file as a data URL (base64 encoded string)
    reader.readAsDataURL(file);
  } catch (error) {
    console.error('Error uploading photo:', error);
    alert('Error uploading photo: ' + error.message);
  }
};

const removeStaffPhoto = () => {
  staffForm.value.photoURL = null;
};

const editStaff = (staff) => {
  editingStaff.value = staff
  staffForm.value = { 
    name: getFullName(staff),
    email: staff.email,
    role: staff.role,
    status: staff.status || 'active',
    photoURL: staff.photoURL || null,
    position: staff.position || 'Staff Member'
  }
  showAddModal.value = true
}

const confirmDelete = (staff) => {
  selectedStaff.value = staff
  showDeleteModal.value = true
}

const deleteStaff = async () => {
  try {
    loading.value = true
    
    if (!selectedStaff.value || !selectedStaff.value.id) {
      throw new Error('No staff selected for deletion')
    }
    
    // Delete from Firestore
    const staffRef = doc(db, 'staff', selectedStaff.value.id)
    await deleteDoc(staffRef)
    console.log('✅ Staff deleted successfully:', selectedStaff.value.id)
    
    // Real-time listener will automatically update the UI
    showDeleteModal.value = false
    
    connectionStatus.value = {
      success: true,
      title: 'Staff Deleted',
      message: 'Staff member deleted successfully!'
    }
    
    setTimeout(() => {
      connectionStatus.value = null
    }, 3000)
    
  } catch (error) {
    console.error('❌ Error deleting staff:', error)
    connectionStatus.value = {
      success: false,
      title: 'Delete Failed',
      message: `Error deleting staff: ${error.message}`
    }
    
    setTimeout(() => {
      connectionStatus.value = null
    }, 5000)
  } finally {
    loading.value = false
  }
}

const closeModal = () => {
  showAddModal.value = false
  editingStaff.value = null
  staffForm.value = {
    name: '',
    email: '',
    role: 'staff',
    status: 'active',
    photoURL: null,
    position: ''
  }
}

const getRoleBadgeClass = (role) => {
  const classes = {
    admin: 'bg-purple-100 text-purple-800 border border-purple-200',
    staff: 'bg-blue-100 text-blue-800 border border-blue-200'
  }
  return classes[role] || 'bg-gray-100 text-gray-800 border border-gray-200'
}

const getStatusBadgeClass = (status) => {
  const classes = {
    active: 'bg-green-100 text-green-800 border border-green-200',
    inactive: 'bg-red-100 text-red-800 border border-red-200'
  }
  return classes[status] || 'bg-gray-100 text-gray-800 border border-gray-200'
}

const formatRole = (role) => {
  const roles = {
    admin: 'Admin',
    staff: 'Staff'
  }
  return roles[role] || role
}

const formatStatus = (status) => {
  const statuses = {
    active: 'Active',
    inactive: 'Inactive'
  }
  return statuses[status] || status
}

const formatDate = (date) => {
  if (!date) return 'Never'
  return new Date(date).toLocaleDateString()
}

const toggleMobileSidebar = () => {
  mobileSidebarOpen.value = !mobileSidebarOpen.value
}

const handleLogout = () => {
  router.push('/admin')
}

// Computed properties
const filteredStaff = computed(() => {
  let filtered = [...staffMembers.value]

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(staff => 
      getFullName(staff).toLowerCase().includes(query) ||
      staff.email.toLowerCase().includes(query)
    )
  }

  // Removed role filter since it's only staff
  if (filterStatus.value) {
    filtered = filtered.filter(staff => (staff.status || 'active') === filterStatus.value)
  }

  return filtered
})

const paginatedStaff = computed(() => {
  const start = (currentPage.value - 1) * perPage.value
  const end = start + perPage.value
  return filteredStaff.value.slice(start, end)
})

const totalStaff = computed(() => staffMembers.value.length)
const activeStaff = computed(() => staffMembers.value.filter(s => (s.status || 'active') === 'active').length)
const regularStaffCount = computed(() => staffMembers.value.filter(s => s.role === 'staff').length)

const totalPages = computed(() => Math.max(1, Math.ceil(filteredStaff.value.length / perPage.value)))
const paginationStart = computed(() => filteredStaff.value.length === 0 ? 0 : ((currentPage.value - 1) * perPage.value) + 1)
const paginationEnd = computed(() => Math.min(currentPage.value * perPage.value, filteredStaff.value.length))
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
