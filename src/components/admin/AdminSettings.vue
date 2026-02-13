<template>
  <!-- biome-ignore lint/correctness/useHookAtTopLevel: False positive - all hooks are at top level -->
  <div 
    class="min-h-screen bg-gradient-to-b from-slate-50 via-amber-50/20 to-slate-100/80 relative overflow-x-hidden"
    :class="{ 'overflow-y-hidden': showSecurityCodeModal || showEraseAllModal || showDeleteAccountModal }"
  >
    <!-- Background Elements -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <div class="absolute top-0 right-0 w-[480px] h-[480px] bg-gradient-to-br from-amber-200/25 to-orange-200/20 rounded-full filter blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
      <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-yellow-200/20 to-amber-200/15 rounded-full filter blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(245,158,11,0.06),transparent)]"></div>
    </div>

    <div class="relative z-10 flex min-h-screen flex-col md:flex-row md:h-screen">
      <!-- Sidebar -->
      <aside class="w-64 bg-white/95 backdrop-blur-sm border-r border-gray-200/80 hidden md:flex md:flex-col shadow-sm">
        <div class="p-4 xl:p-5 border-b border-gray-100 flex-shrink-0">
          <h1 class="text-base xl:text-lg font-bold text-gray-900 leading-tight tracking-tight">Barcelona Paint Center</h1>
          <div class="mt-2 text-xs text-white bg-gradient-to-r from-amber-500 to-orange-600 px-2.5 xl:px-3 py-1.5 rounded-lg inline-flex items-center shadow-sm font-medium">
            <ShieldIcon class="h-3.5 w-3.5 mr-1.5 flex-shrink-0" />
            Admin Portal
          </div>
        </div>

        <nav class="flex-1 p-3 xl:p-4 space-y-1 overflow-y-auto">
          <router-link 
            to="/admin/dashboard" 
            class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-xl cursor-pointer transition-all duration-200 font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"
            :class="{ 'shadow-sm border-l-4 border-blue-500': $route.path === '/admin/dashboard' }"
          >
            <LayoutDashboardIcon class="w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0" />
            <span class="text-sm xl:text-base truncate">Dashboard</span>
          </router-link>

          <router-link 
            to="/admin/staff" 
            class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-xl cursor-pointer transition-all duration-200 font-medium text-green-600 bg-green-50 hover:bg-green-100 hover:text-green-700"
            :class="{ 'shadow-sm border-l-4 border-green-500': $route.path === '/admin/staff' }"
          >
            <UsersIcon class="w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0" />
            <span class="text-sm xl:text-base truncate">Staff Management</span>
          </router-link>

          <router-link 
            to="/admin/inventory" 
            class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-xl cursor-pointer transition-all duration-200 font-medium text-purple-600 bg-purple-50 hover:bg-purple-100 hover:text-purple-700"
            :class="{ 'shadow-sm border-l-4 border-purple-500': $route.path === '/admin/inventory' }"
          >
            <PackageIcon class="w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0" />
            <span class="text-sm xl:text-base truncate">Inventory</span>
          </router-link>

          <router-link 
            to="/admin/house-paint-recommender" 
            class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-xl cursor-pointer transition-all duration-200 font-medium text-orange-600 bg-orange-50 hover:bg-orange-100 hover:text-orange-700"
            :class="{ 'shadow-sm border-l-4 border-orange-500': $route.path === '/admin/house-paint-recommender' }"
          >
            <HomeIcon class="w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0" />
            <span class="text-sm xl:text-base truncate">Paint Recommender</span>
          </router-link>

          <router-link 
            to="/admin/paint-mixing" 
            class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-xl cursor-pointer transition-all duration-200 font-medium text-pink-600 bg-pink-50 hover:bg-pink-100 hover:text-pink-700"
            :class="{ 'shadow-sm border-l-4 border-pink-500': $route.path === '/admin/paint-mixing' }"
          >
            <PaletteIcon class="w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0" />
            <span class="text-sm xl:text-base truncate">Paint Mixing</span>
          </router-link>

          <router-link 
            to="/admin/sales-analytics" 
            class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-xl cursor-pointer transition-all duration-200 font-medium text-teal-600 bg-teal-50 hover:bg-teal-100 hover:text-teal-700"
            :class="{ 'shadow-sm border-l-4 border-teal-500': $route.path === '/admin/sales-analytics' }"
          >
            <TrendingUpIcon class="w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0" />
            <span class="text-sm xl:text-base truncate">Sales Analytics</span>
          </router-link>

          <router-link to="/admin/visualization" class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-xl cursor-pointer transition-all duration-200 font-medium text-indigo-600 bg-indigo-50 hover:bg-indigo-100 hover:text-indigo-700">
            <BarChart3Icon class="w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0" />
            <span class="text-sm xl:text-base truncate">Data Visualization</span>
          </router-link>

          <router-link 
            to="/admin/settings" 
            class="flex items-center space-x-2 xl:space-x-3 p-2 xl:p-3 rounded-xl cursor-pointer transition-all duration-200 font-medium text-amber-600 bg-amber-50 hover:bg-amber-100 hover:text-amber-700 shadow-sm border-l-4 border-amber-500"
          >
            <SettingsIcon class="w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0" />
            <span class="text-sm xl:text-base truncate">Settings</span>
          </router-link>

          <div class="h-4"></div>
        </nav>

        <div class="p-4 border-t border-gray-100 bg-gradient-to-r from-amber-50/80 to-orange-50/80 backdrop-blur-sm flex-shrink-0">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-md flex-shrink-0">
              <UserIcon class="w-5 h-5 text-white" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate">{{ userDisplayName || 'Admin User' }}</p>
              <p class="text-xs text-gray-600 truncate">{{ userEmail || 'admin@example.com' }}</p>
            </div>
            <button 
              @click="handleLogout"
              class="p-2.5 rounded-xl hover:bg-white/60 text-gray-600 hover:text-gray-900 transition-colors"
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
          class="p-3 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
          aria-label="Toggle navigation menu"
        >
          <MenuIcon v-if="!mobileSidebarOpen" class="w-6 h-6 text-gray-700" />
          <XIcon v-else class="w-6 h-6 text-gray-700" />
        </button>
      </div>

      <!-- Mobile Sidebar -->
      <div 
        v-if="mobileSidebarOpen" 
        class="fixed inset-0 bg-black/30 backdrop-blur-sm z-20 md:hidden"
        @click="toggleMobileSidebar"
      ></div>

      <aside 
        v-if="mobileSidebarOpen"
        class="fixed left-0 top-0 h-full w-64 bg-white/95 backdrop-blur-sm border-r border-gray-200 z-30 md:hidden shadow-xl flex flex-col"
      >
        <div class="p-5 border-b border-gray-100 flex-shrink-0">
          <h1 class="text-lg font-bold text-gray-900 leading-tight">Barcelona Paint Center</h1>
          <div class="mt-2 text-xs text-white bg-gradient-to-r from-amber-500 to-orange-600 px-2.5 py-1.5 rounded-lg inline-flex items-center font-medium">
            <ShieldIcon class="h-3.5 w-3.5 mr-1" />
            Admin Portal
          </div>
        </div>

        <nav class="flex-1 p-4 space-y-1 overflow-y-auto">
          <router-link to="/admin/dashboard" class="flex items-center space-x-3 p-3 rounded-xl cursor-pointer transition-all duration-200 font-medium text-blue-600 bg-blue-50" :class="{ 'shadow-sm border-l-4 border-blue-500': $route.path === '/admin/dashboard' }" @click="mobileSidebarOpen = false">
            <LayoutDashboardIcon class="w-5 h-5" />
            <span>Dashboard</span>
          </router-link>
          <router-link to="/admin/staff" class="flex items-center space-x-3 p-3 rounded-xl cursor-pointer transition-all duration-200 font-medium text-green-600 bg-green-50" :class="{ 'shadow-sm border-l-4 border-green-500': $route.path === '/admin/staff' }" @click="mobileSidebarOpen = false">
            <UsersIcon class="w-5 h-5" />
            <span>Staff Management</span>
          </router-link>
          <router-link to="/admin/inventory" class="flex items-center space-x-3 p-3 rounded-xl cursor-pointer transition-all duration-200 font-medium text-purple-600 bg-purple-50" :class="{ 'shadow-sm border-l-4 border-purple-500': $route.path === '/admin/inventory' }" @click="mobileSidebarOpen = false">
            <PackageIcon class="w-5 h-5" />
            <span>Inventory</span>
          </router-link>
          <router-link to="/admin/house-paint-recommender" class="flex items-center space-x-3 p-3 rounded-xl cursor-pointer transition-all duration-200 font-medium text-orange-600 bg-orange-50" :class="{ 'shadow-sm border-l-4 border-orange-500': $route.path === '/admin/house-paint-recommender' }" @click="mobileSidebarOpen = false">
            <HomeIcon class="w-5 h-5" />
            <span>Paint Recommender</span>
          </router-link>
          <router-link to="/admin/paint-mixing" class="flex items-center space-x-3 p-3 rounded-xl cursor-pointer transition-all duration-200 font-medium text-pink-600 bg-pink-50" :class="{ 'shadow-sm border-l-4 border-pink-500': $route.path === '/admin/paint-mixing' }" @click="mobileSidebarOpen = false">
            <PaletteIcon class="w-5 h-5" />
            <span>Paint Mixing</span>
          </router-link>
          <router-link to="/admin/sales-analytics" class="flex items-center space-x-3 p-3 rounded-xl cursor-pointer transition-all duration-200 font-medium text-teal-600 bg-teal-50" :class="{ 'shadow-sm border-l-4 border-teal-500': $route.path === '/admin/sales-analytics' }" @click="mobileSidebarOpen = false">
            <TrendingUpIcon class="w-5 h-5" />
            <span>Sales Analytics</span>
          </router-link>
          <router-link to="/admin/visualization" class="flex items-center space-x-3 p-3 rounded-xl cursor-pointer transition-all duration-200 font-medium text-indigo-600 bg-indigo-50" :class="{ 'shadow-sm border-l-4 border-indigo-500': $route.path === '/admin/visualization' }" @click="mobileSidebarOpen = false">
            <BarChart3Icon class="w-5 h-5" />
            <span>Data Visualization</span>
          </router-link>
          <router-link to="/admin/settings" class="flex items-center space-x-3 p-3 rounded-xl cursor-pointer transition-all duration-200 font-medium text-amber-600 bg-amber-50 shadow-sm border-l-4 border-amber-500" @click="mobileSidebarOpen = false">
            <SettingsIcon class="w-5 h-5" />
            <span>Settings</span>
          </router-link>
          <div class="h-4"></div>
        </nav>

        <div class="p-4 border-t border-gray-100 bg-gradient-to-r from-amber-50 to-orange-50 backdrop-blur-sm flex-shrink-0">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-md">
              <UserIcon class="w-5 h-5 text-white" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate">{{ userDisplayName || 'Admin' }}</p>
              <p class="text-xs text-gray-600 truncate">{{ userEmail || 'admin@example.com' }}</p>
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
      <main class="flex-1 min-h-0 overflow-auto overflow-x-hidden">
        <header class="relative bg-white/80 backdrop-blur-md border-b border-gray-200/90 px-4 sm:px-6 lg:px-8 py-4 sm:py-5 shadow-sm">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div class="flex items-center gap-4 ml-12 md:ml-0">
              <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-500/25">
                <SettingsIcon class="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 class="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">System Settings</h1>
                <p class="text-sm sm:text-base text-gray-500 mt-0.5">Manage your account preferences and security protocols.</p>
              </div>
            </div>
            <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
              <div class="flex items-center gap-2 px-3 py-2 rounded-xl bg-amber-50/80 border border-amber-100 text-amber-800 text-sm font-medium">
                <CalendarIcon class="w-4 h-4 flex-shrink-0" />
                <span class="truncate max-w-[180px] sm:max-w-none">{{ currentDate }}</span>
              </div>
              <div class="hidden sm:block h-8 w-px bg-gray-200"></div>
              <div class="flex items-center gap-3">
                <span class="text-sm text-gray-700 truncate max-w-32 sm:max-w-none">Welcome, <strong class="text-gray-900">{{ userDisplayName || 'Admin' }}</strong></span>
                <button class="p-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900 transition-colors">
                  <BellIcon class="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </header>

        <div class="p-3 sm:p-4 lg:p-6">
          <div class="max-w-5xl mx-auto">
            <!-- Two-column layout: Left = Profile + Tip, Right = Security Credentials -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-6">
              <!-- Left column: Admin Profile + Security Tip -->
              <div class="lg:col-span-4 space-y-3">
                <!-- Admin Profile Card -->
                <div class="bg-white rounded-xl border border-gray-200/90 shadow-sm overflow-hidden">
                  <div class="p-4 flex flex-col items-center text-center">
                    <div class="w-14 h-14 rounded-xl bg-orange-500 flex items-center justify-center text-white text-xl font-bold mb-3">
                      {{ adminInitial }}
                    </div>
                    <h3 class="text-base font-bold text-gray-900 truncate w-full">{{ userDisplayName || 'Admin User' }}</h3>
                    <p class="text-xs text-gray-500 truncate w-full mt-0.5">{{ userEmail || 'admin@example.com' }}</p>
                    <div class="mt-3 w-full">
                      <span class="inline-block px-3 py-1.5 rounded-lg bg-emerald-100 text-emerald-700 text-xs font-semibold">
                        ACTIVE ACCOUNT
                      </span>
                    </div>
                  </div>
                </div>
                <!-- Security Tip Card -->
                <div class="bg-white rounded-xl border-2 border-blue-200/90 shadow-sm p-3">
                  <div class="flex gap-2">
                    <div class="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                      <ShieldCheckIcon class="w-4 h-4 text-blue-600" />
                    </div>
                    <p class="text-xs text-gray-700 leading-snug">
                      Your account security is our priority. Always use a unique password to protect your inventory data.
                    </p>
                  </div>
                </div>
              </div>

              <!-- Right column: Security Credentials -->
              <div class="lg:col-span-8 min-w-0">
                <div class="bg-white rounded-xl border border-gray-200/90 shadow-sm overflow-hidden lg:h-full">
                  <div class="p-4 border-b border-gray-100">
                    <h3 class="text-base font-bold text-gray-900">Security Credentials</h3>
                    <p class="text-xs text-gray-500 mt-0.5">Update your access password regularly</p>
                  </div>
                  <form @submit.prevent="updatePassword" class="p-4 space-y-4">
                    <div>
                      <label class="block text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-1">Current Password</label>
                      <div class="relative">
                        <div class="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400">
                          <LockIcon class="w-4 h-4" />
                        </div>
                        <input 
                          :type="showCurrentPassword ? 'text' : 'password'"
                          v-model="passwordForm.current"
                          required
                          class="w-full pl-9 pr-9 py-2.5 text-sm rounded-lg border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-orange-200 focus:border-orange-400 text-gray-900 transition-all"
                          placeholder="Verify identity"
                        />
                        <button type="button" @click="showCurrentPassword = !showCurrentPassword" class="absolute right-2 top-1/2 -translate-y-1/2 p-2 -m-2 text-gray-400 hover:text-gray-600 touch-manipulation" aria-label="Toggle password visibility">
                          <EyeIcon v-if="!showCurrentPassword" class="w-4 h-4" />
                          <EyeOffIcon v-else class="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label class="block text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-1">New Password</label>
                        <div class="relative">
                          <div class="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400">
                            <KeyIcon class="w-4 h-4" />
                          </div>
                          <input 
                            :type="showNewPassword ? 'text' : 'password'"
                            v-model="passwordForm.new"
                            required
                            minlength="8"
                            class="w-full pl-9 pr-9 py-2.5 text-sm rounded-lg border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-orange-200 focus:border-orange-400 text-gray-900 transition-all"
                            placeholder="Min. 8 characters"
                          />
                          <button type="button" @click="showNewPassword = !showNewPassword" class="absolute right-2 top-1/2 -translate-y-1/2 p-2 -m-2 text-gray-400 hover:text-gray-600 touch-manipulation" aria-label="Toggle password visibility">
                            <EyeIcon v-if="!showNewPassword" class="w-4 h-4" />
                            <EyeOffIcon v-else class="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <div>
                        <label class="block text-[11px] font-semibold text-gray-500 uppercase tracking-wider mb-1">Confirm Password</label>
                        <div class="relative">
                          <div class="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400">
                            <CheckIcon class="w-4 h-4" />
                          </div>
                          <input 
                            :type="showConfirmPassword ? 'text' : 'password'"
                            v-model="passwordForm.confirm"
                            required
                            class="w-full pl-9 pr-9 py-2.5 text-sm rounded-lg border border-gray-200 bg-gray-50/50 focus:bg-white focus:ring-2 focus:ring-orange-200 focus:border-orange-400 text-gray-900 transition-all"
                            placeholder="Re-type new password"
                          />
                          <button type="button" @click="showConfirmPassword = !showConfirmPassword" class="absolute right-2 top-1/2 -translate-y-1/2 p-2 -m-2 text-gray-400 hover:text-gray-600 touch-manipulation" aria-label="Toggle password visibility">
                            <EyeIcon v-if="!showConfirmPassword" class="w-4 h-4" />
                            <EyeOffIcon v-else class="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="flex flex-col sm:flex-row justify-end pt-1 gap-2">
                      <button 
                        type="submit"
                        :disabled="isUpdatingPassword"
                        class="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 min-h-[44px] bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-lg shadow transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <ShieldCheckIcon class="w-4 h-4 flex-shrink-0" />
                        {{ isUpdatingPassword ? 'Saving...' : 'Save New Password' }}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <!-- Additional settings: Security Code, Erase Data, Delete Account -->
            <div class="border-t border-gray-200 pt-6">
              <h3 class="text-sm font-bold text-gray-900 mb-3">More options</h3>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-3 md:items-stretch">
                <!-- Admin Security Code Card -->
                <div class="bg-white rounded-xl border-2 border-blue-200/90 shadow-sm p-4 hover:shadow-md transition-shadow flex flex-col">
                  <div class="flex items-center gap-2 mb-2">
                    <div class="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center">
                      <ShieldIcon class="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 class="font-bold text-gray-900 text-xs">Admin Security Code</h4>
                      <p class="text-[11px] text-gray-500">Registration code</p>
                    </div>
                  </div>
                  <div class="flex-1 min-h-0 mb-2">
                    <p class="text-[11px] font-mono text-blue-700 bg-blue-50 rounded px-2 py-1 truncate">{{ adminSecurityCode || 'Not set' }}</p>
                  </div>
                  <button 
                    @click="showSecurityCodeModal = true"
                    class="w-full py-2.5 min-h-[44px] text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors mt-auto touch-manipulation"
                  >
                    {{ adminSecurityCode ? 'Change Code' : 'Set Code' }}
                  </button>
                </div>

                <!-- Erase All Data Card -->
                <div class="bg-white rounded-xl border-2 border-violet-200/90 shadow-sm p-4 hover:shadow-md transition-shadow flex flex-col">
                  <div class="flex items-center gap-2 mb-2">
                    <div class="w-8 h-8 rounded-lg bg-violet-100 flex items-center justify-center">
                      <Trash2Icon class="w-4 h-4 text-violet-600" />
                    </div>
                    <div>
                      <h4 class="font-bold text-violet-900 text-xs">Erase All Data</h4>
                      <p class="text-[11px] text-violet-700">Reset system data</p>
                    </div>
                  </div>
                  <div class="flex-1 min-h-0 mb-2">
                    <p class="text-[11px] text-violet-800 line-clamp-2">Permanently delete all products, sales, staff, and customer data.</p>
                  </div>
                  <button 
                    @click="showEraseAllModal = true"
                    :disabled="isErasingData"
                    class="w-full py-2.5 min-h-[44px] text-xs font-semibold text-white bg-gradient-to-r from-violet-600 to-purple-600 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 mt-auto touch-manipulation"
                  >
                    {{ isErasingData ? 'Erasing...' : 'Erase All Data' }}
                  </button>
                </div>

                <!-- Delete Account Card -->
                <div class="bg-white rounded-xl border-2 border-red-200/90 shadow-sm p-4 hover:shadow-md transition-shadow flex flex-col">
                  <div class="flex items-center gap-2 mb-2">
                    <div class="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center">
                      <Trash2Icon class="w-4 h-4 text-red-600" />
                    </div>
                    <div>
                      <h4 class="font-bold text-red-900 text-xs">Delete Account</h4>
                      <p class="text-[11px] text-red-700">Remove your account</p>
                    </div>
                  </div>
                  <div class="flex-1 min-h-0 mb-2">
                    <p class="text-[11px] text-red-800">Permanently delete your account. Cannot be undone.</p>
                  </div>
                  <button 
                    @click="showDeleteAccountModal = true"
                    :disabled="isDeletingAccount"
                    class="w-full py-2.5 min-h-[44px] text-xs font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 mt-auto touch-manipulation"
                  >
                    {{ isDeletingAccount ? 'Deleting...' : 'Delete Account' }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>

    <!-- Toast -->
    <Transition
      enter-active-class="transition ease-out duration-300"
      enter-from-class="opacity-0 translate-x-8"
      enter-to-class="opacity-100 translate-x-0"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="opacity-100 translate-x-0"
      leave-to-class="opacity-0 translate-x-8"
    >
      <div 
        v-if="showToast"
        class="fixed top-4 right-4 left-4 sm:left-auto z-[60] sm:max-w-sm w-auto max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-xl border-2 transition-all duration-300"
        :class="{
          'border-emerald-200 shadow-emerald-500/10': notificationType === 'success',
          'border-red-200 shadow-red-500/10': notificationType === 'error'
        }"
      >
        <div class="p-4 flex items-center gap-3">
          <div 
            class="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
            :class="{
              'bg-emerald-100': notificationType === 'success',
              'bg-red-100': notificationType === 'error'
            }"
          >
            <CheckIcon v-if="notificationType === 'success'" class="w-6 h-6 text-emerald-600" />
            <XIcon v-else class="w-6 h-6 text-red-600" />
          </div>
          <div class="flex-1 min-w-0">
            <p 
              class="font-semibold text-sm"
              :class="{
                'text-emerald-800': notificationType === 'success',
                'text-red-800': notificationType === 'error'
              }"
            >
              {{ toastMessage }}
            </p>
          </div>
          <button 
            @click="showToast = false"
            class="flex-shrink-0 p-2 rounded-xl text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
          >
            <XIcon class="w-5 h-5" />
          </button>
        </div>
      </div>
    </Transition>

    <!-- Admin Security Code Modal -->
    <div v-if="showSecurityCodeModal" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-end sm:items-center justify-center z-50 p-0 sm:p-4" @click.self="showSecurityCodeModal = false">
      <div class="bg-white rounded-t-2xl sm:rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto border border-gray-200/90 shadow-2xl animate-slide-up flex flex-col">
        <div class="h-1.5 w-full bg-gradient-to-r from-blue-500 to-indigo-600"></div>
        <div class="p-4 sm:p-6 border-b border-gray-100 flex-shrink-0">
          <div class="flex items-start sm:items-center justify-between gap-3">
            <div class="flex items-center gap-3 min-w-0">
              <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                <ShieldIcon class="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <h3 class="text-base sm:text-xl font-bold text-gray-900 truncate">Admin Security Code</h3>
            </div>
            <button 
              @click="showSecurityCodeModal = false"
              class="p-2.5 min-h-[44px] min-w-[44px] rounded-xl text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors flex-shrink-0 touch-manipulation"
              aria-label="Close"
            >
              <XIcon class="w-5 h-5" />
            </button>
          </div>
        </div>
        <form @submit.prevent="updateSecurityCode" class="p-4 sm:p-6 space-y-4">
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-1.5">New Security Code</label>
            <input 
              type="text"
              v-model="securityCodeForm.newCode"
              required
              minlength="4"
              class="w-full px-4 py-3 text-sm sm:text-base rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-blue-300 focus:border-blue-400 bg-white text-gray-900 transition-all"
              placeholder="Min. 4 characters"
            />
            <p class="text-xs text-gray-500 mt-1.5">Required for new admin registrations</p>
          </div>
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-1.5">Confirm Security Code</label>
            <input 
              type="text"
              v-model="securityCodeForm.confirmCode"
              required
              minlength="4"
              class="w-full px-4 py-3 text-sm sm:text-base rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-blue-300 focus:border-blue-400 bg-white text-gray-900 transition-all"
              placeholder="Confirm code"
            />
          </div>
          <div class="flex flex-col-reverse sm:flex-row justify-end gap-3 pt-2">
            <button type="button" @click="showSecurityCodeModal = false" class="w-full sm:w-auto px-4 py-3 min-h-[44px] sm:min-h-0 border-2 border-gray-200 rounded-xl text-gray-700 font-medium hover:bg-gray-50 transition-colors">
              Cancel
            </button>
            <button 
              type="submit"
              :disabled="isSavingSecurityCode"
              class="w-full sm:w-auto px-5 py-3 min-h-[44px] sm:min-h-0 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-semibold shadow-lg shadow-blue-500/25 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {{ isSavingSecurityCode ? 'Saving...' : 'Save Security Code' }}
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Erase All Data Confirmation Modal -->
    <div v-if="showEraseAllModal" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-end sm:items-center justify-center z-50 p-0 sm:p-4" @click.self="showEraseAllModal = false">
      <div class="bg-white rounded-t-2xl sm:rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto border border-gray-200/90 shadow-2xl flex flex-col">
        <div class="h-1.5 w-full bg-gradient-to-r from-violet-600 to-purple-600"></div>
        <div class="p-4 sm:p-5 border-b border-gray-100 flex items-center gap-3 flex-shrink-0">
          <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-violet-100 flex items-center justify-center flex-shrink-0">
            <AlertTriangleIcon class="w-5 h-5 sm:w-6 sm:h-6 text-violet-600" />
          </div>
          <div class="min-w-0">
            <h3 class="text-base sm:text-lg font-bold text-gray-900">Erase All Data</h3>
            <p class="text-xs text-gray-500">This action cannot be undone</p>
          </div>
          <button @click="showEraseAllModal = false" class="ml-auto p-2 min-h-[44px] min-w-[44px] rounded-xl text-gray-400 hover:text-gray-600 hover:bg-gray-100 touch-manipulation flex items-center justify-center" aria-label="Close">
            <XIcon class="w-5 h-5" />
          </button>
        </div>
        <div class="p-4 sm:p-5 space-y-4">
          <p class="text-sm text-gray-700">
            This will permanently delete <strong>all</strong> data: products, sales, orders, paint mixtures, recommendations, quotes, staff, and customers.
          </p>
          <div>
            <label class="block text-xs font-semibold text-gray-700 mb-1.5">Type <span class="font-mono text-violet-600">ERASE ALL</span> to confirm</label>
            <input 
              v-model="eraseConfirmText"
              type="text"
              class="w-full px-3 py-2.5 rounded-lg border-2 border-gray-200 focus:ring-2 focus:ring-violet-200 focus:border-violet-400 text-sm"
              placeholder="ERASE ALL"
            />
          </div>
        </div>
        <div class="p-4 sm:p-5 border-t border-gray-100 flex flex-col-reverse sm:flex-row gap-3 justify-end flex-shrink-0">
          <button type="button" @click="showEraseAllModal = false" class="w-full sm:w-auto px-4 py-2.5 min-h-[44px] border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 touch-manipulation">
            Cancel
          </button>
          <button 
            type="button"
            @click="confirmEraseAllData"
            :disabled="eraseConfirmText !== 'ERASE ALL' || isErasingData"
            class="w-full sm:w-auto px-4 py-2.5 min-h-[44px] rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-purple-600 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
          >
            {{ isErasingData ? 'Erasing...' : 'Erase All Data' }}
          </button>
        </div>
      </div>
    </div>

    <!-- Delete Account Confirmation Modal -->
    <div v-if="showDeleteAccountModal" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-end sm:items-center justify-center z-50 p-0 sm:p-4" @click.self="showDeleteAccountModal = false">
      <div class="bg-white rounded-t-2xl sm:rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto border border-gray-200/90 shadow-2xl flex flex-col">
        <div class="h-1.5 w-full bg-red-500"></div>
        <div class="p-4 sm:p-5 border-b border-gray-100 flex items-center gap-3 flex-shrink-0">
          <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
            <AlertTriangleIcon class="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
          </div>
          <div class="min-w-0">
            <h3 class="text-base sm:text-lg font-bold text-gray-900">Delete Account</h3>
            <p class="text-xs text-gray-500">This action cannot be undone</p>
          </div>
          <button @click="showDeleteAccountModal = false" class="ml-auto p-2 min-h-[44px] min-w-[44px] rounded-xl text-gray-400 hover:text-gray-600 hover:bg-gray-100 touch-manipulation flex items-center justify-center" aria-label="Close">
            <XIcon class="w-5 h-5" />
          </button>
        </div>
        <div class="p-4 sm:p-5">
          <p class="text-sm text-gray-700">
            Your admin account and all associated data will be <strong>permanently deleted</strong>. You will be logged out immediately.
          </p>
        </div>
        <div class="p-4 sm:p-5 border-t border-gray-100 flex flex-col-reverse sm:flex-row gap-3 justify-end flex-shrink-0">
          <button type="button" @click="showDeleteAccountModal = false" class="w-full sm:w-auto px-4 py-2.5 min-h-[44px] border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 touch-manipulation">
            Cancel
          </button>
          <button 
            type="button"
            @click="confirmDeleteAccount"
            :disabled="isDeletingAccount"
            class="w-full sm:w-auto px-4 py-2.5 min-h-[44px] rounded-lg text-sm font-semibold text-white bg-red-600 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
          >
            {{ isDeletingAccount ? 'Deleting...' : 'Delete Account' }}
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { auth, db } from '@/config/firebase'
import { 
  updatePassword as updateUserPassword, 
  reauthenticateWithCredential, 
  EmailAuthProvider,
  deleteUser,
  signOut
} from 'firebase/auth'
import { doc, getDoc, setDoc, deleteDoc, updateDoc, collection, getDocs } from 'firebase/firestore'
import {
  LayoutDashboard as LayoutDashboardIcon,
  Users as UsersIcon,
  Package as PackageIcon,
  Home as HomeIcon,
  Palette as PaletteIcon,
  TrendingUp as TrendingUpIcon,
  Settings as SettingsIcon,
  Shield as ShieldIcon,
  ShieldCheck as ShieldCheckIcon,
  User as UserIcon,
  LogOut as LogOutIcon,
  Menu as MenuIcon,
  X as XIcon,
  Key as KeyIcon,
  Check as CheckIcon,
  Calendar as CalendarIcon,
  Bell as BellIcon,
  BarChart3 as BarChart3Icon,
  Trash2 as Trash2Icon,
  AlertTriangle as AlertTriangleIcon,
  Lock as LockIcon,
  Eye as EyeIcon,
  EyeOff as EyeOffIcon
} from 'lucide-vue-next'

const router = useRouter()
const mobileSidebarOpen = ref(false)
const showToast = ref(false)
const toastMessage = ref('')
const notificationType = ref('success')
const showSecurityCodeModal = ref(false)
const showEraseAllModal = ref(false)
const showDeleteAccountModal = ref(false)
const eraseConfirmText = ref('')
const showCurrentPassword = ref(false)
const showNewPassword = ref(false)
const showConfirmPassword = ref(false)
const adminSecurityCode = ref('')
const isSavingSecurityCode = ref(false)
const isUpdatingPassword = ref(false)
const isDeletingAccount = ref(false)
const isErasingData = ref(false)
const userDisplayName = ref('Nino Noel Monsanto')
const userEmail = ref('nnmonsanto23@gmail.com')
const lastPasswordChange = ref(null)

const passwordForm = ref({
  current: '',
  new: '',
  confirm: ''
})

const securityCodeForm = ref({
  newCode: '',
  confirmCode: ''
})

const adminInitial = computed(() => {
  const name = userDisplayName.value || 'Admin'
  return name.charAt(0).toUpperCase()
})

// Computed property for password last changed text
const passwordLastChangedText = computed(() => {
  if (!lastPasswordChange.value) {
    return 'Password change date not available'
  }
  
  const lastChangeDate = new Date(lastPasswordChange.value)
  const now = new Date()
  const diffTime = Math.abs(now - lastChangeDate)
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
  const diffHours = Math.floor(diffTime / (1000 * 60 * 60))
  const diffMinutes = Math.floor(diffTime / (1000 * 60))
  
  if (diffDays === 0) {
    if (diffHours === 0) {
      if (diffMinutes === 0) {
        return 'Just changed'
      }
      return `Last changed ${diffMinutes} minute${diffMinutes > 1 ? 's' : ''} ago`
    }
    return `Last changed ${diffHours} hour${diffHours > 1 ? 's' : ''} ago`
  } else if (diffDays === 1) {
    return 'Last changed 1 day ago'
  } else if (diffDays < 30) {
    return `Last changed ${diffDays} days ago`
  } else if (diffDays < 365) {
    const months = Math.floor(diffDays / 30)
    return `Last changed ${months} month${months > 1 ? 's' : ''} ago`
  } else {
    const years = Math.floor(diffDays / 365)
    return `Last changed ${years} year${years > 1 ? 's' : ''} ago`
  }
})

const updatePassword = async () => {
  // Validation
  if (!passwordForm.value.current || !passwordForm.value.new || !passwordForm.value.confirm) {
    toastMessage.value = 'Please fill in all password fields!'
    notificationType.value = 'error'
    showToast.value = true
    setTimeout(() => {
      showToast.value = false
    }, 3000)
    return
  }

  if (passwordForm.value.new !== passwordForm.value.confirm) {
    toastMessage.value = 'New passwords do not match!'
    notificationType.value = 'error'
    showToast.value = true
    setTimeout(() => {
      showToast.value = false
    }, 3000)
    return
  }
  
  if (passwordForm.value.new.length < 8) {
    toastMessage.value = 'Password must be at least 8 characters long!'
    notificationType.value = 'error'
    showToast.value = true
    setTimeout(() => {
      showToast.value = false
    }, 3000)
    return
  }

  if (!auth.currentUser) {
    toastMessage.value = 'You must be logged in to change your password!'
    notificationType.value = 'error'
    showToast.value = true
    setTimeout(() => {
      showToast.value = false
    }, 3000)
    return
  }
  
  try {
    isUpdatingPassword.value = true

    // Reauthenticate user with current password
    const credential = EmailAuthProvider.credential(
      auth.currentUser.email,
      passwordForm.value.current
    )
    
    await reauthenticateWithCredential(auth.currentUser, credential)
    
    // Update password
    await updateUserPassword(auth.currentUser, passwordForm.value.new)
    
    // Update last password change date in Firestore
    try {
      const currentDate = new Date().toISOString()
      await updateDoc(doc(db, 'admins', auth.currentUser.uid), {
        lastPasswordChange: currentDate
      })
      lastPasswordChange.value = currentDate
    } catch (error) {
      console.error('Error updating last password change date:', error)
      // Continue even if Firestore update fails
    }
    
    // Clear form
    passwordForm.value = {
      current: '',
      new: '',
      confirm: ''
    }
    
    toastMessage.value = 'Password updated successfully!'
    notificationType.value = 'success'
    showToast.value = true
    setTimeout(() => {
      showToast.value = false
    }, 3000)
  } catch (error) {
    console.error('Error updating password:', error)
    
    let errorMessage = 'Failed to update password. Please try again.'
    if (error.code === 'auth/wrong-password') {
      errorMessage = 'Current password is incorrect!'
    } else if (error.code === 'auth/weak-password') {
      errorMessage = 'New password is too weak. Please use a stronger password!'
    } else if (error.code === 'auth/requires-recent-login') {
      errorMessage = 'For security, please log out and log back in before changing your password.'
    } else if (error.code === 'auth/invalid-credential') {
      errorMessage = 'Current password is incorrect!'
    }
    
    toastMessage.value = errorMessage
    notificationType.value = 'error'
    showToast.value = true
    setTimeout(() => {
      showToast.value = false
    }, 3000)
  } finally {
    isUpdatingPassword.value = false
  }
}

const confirmEraseAllData = async () => {
  if (eraseConfirmText.value !== 'ERASE ALL') return
  if (!auth.currentUser) {
    toastMessage.value = 'You must be logged in to erase data!'
    notificationType.value = 'error'
    showToast.value = true
    setTimeout(() => { showToast.value = false }, 3000)
    return
  }
  showEraseAllModal.value = false
  eraseConfirmText.value = ''
  await doEraseAllData()
}

const doEraseAllData = async () => {
  try {
    isErasingData.value = true

    // Collections to erase
    const collectionsToErase = [
      'products',
      'sales',
      'orders',
      'paintMixtures',
      'paintRecommendations',
      'quotes',
      'staff',
      'customers'
    ]

    let totalDeleted = 0
    let errors = []

    // Delete all documents from each collection
    for (const collectionName of collectionsToErase) {
      try {
        const collectionRef = collection(db, collectionName)
        const snapshot = await getDocs(collectionRef)
        
        const deletePromises = snapshot.docs.map(doc => deleteDoc(doc.ref))
        await Promise.all(deletePromises)
        
        totalDeleted += snapshot.docs.length
        console.log(`✅ Deleted ${snapshot.docs.length} documents from ${collectionName}`)
      } catch (error) {
        console.error(`Error deleting from ${collectionName}:`, error)
        errors.push(`${collectionName}: ${error.message}`)
      }
    }

    if (errors.length > 0) {
      toastMessage.value = `Data erased with some errors. Deleted ${totalDeleted} documents. Check console for details.`
      notificationType.value = 'error'
    } else {
      toastMessage.value = `Successfully erased all data! Deleted ${totalDeleted} documents.`
      notificationType.value = 'success'
    }
    
    showToast.value = true
    setTimeout(() => {
      showToast.value = false
    }, 5000)
  } catch (error) {
    console.error('Error erasing all data:', error)
    toastMessage.value = `Failed to erase all data: ${error.message}`
    notificationType.value = 'error'
    showToast.value = true
    setTimeout(() => {
      showToast.value = false
    }, 5000)
  } finally {
    isErasingData.value = false
  }
}

const confirmDeleteAccount = async () => {
  if (!auth.currentUser) {
    toastMessage.value = 'You must be logged in to delete your account!'
    notificationType.value = 'error'
    showToast.value = true
    setTimeout(() => { showToast.value = false }, 3000)
    return
  }
  showDeleteAccountModal.value = false
  await doDeleteAccount()
}

const doDeleteAccount = async () => {
  try {
    isDeletingAccount.value = true

    const userId = auth.currentUser.uid

    // Delete admin document from Firestore
    try {
      await deleteDoc(doc(db, 'admins', userId))
      console.log('Admin document deleted from Firestore')
    } catch (error) {
      console.error('Error deleting admin document:', error)
      // Continue with account deletion even if Firestore delete fails
    }

    // Delete user from Firebase Auth
    await deleteUser(auth.currentUser)

    toastMessage.value = 'Account deleted successfully. You will be logged out now.'
    notificationType.value = 'success'
    showToast.value = true
    
    // Sign out and redirect after a short delay
    setTimeout(async () => {
      try {
        await signOut(auth)
      } catch (error) {
        console.error('Error signing out:', error)
      }
      showToast.value = false
      router.push('/admin')
    }, 2000)
  } catch (error) {
    console.error('Error deleting account:', error)
    
    let errorMessage = 'Failed to delete account. Please try again.'
    if (error.code === 'auth/requires-recent-login') {
      errorMessage = 'For security, please log out and log back in before deleting your account.'
    }
    
    toastMessage.value = errorMessage
    notificationType.value = 'error'
    showToast.value = true
    setTimeout(() => {
      showToast.value = false
    }, 3000)
  } finally {
    isDeletingAccount.value = false
  }
}

const toggleMobileSidebar = () => {
  mobileSidebarOpen.value = !mobileSidebarOpen.value
}

const handleLogout = async () => {
  try {
    await signOut(auth)
  } catch (err) {
    console.error('Logout error:', err)
  }
  router.push('/admin')
}

const currentDate = new Date().toLocaleDateString('en-US', { 
  weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' 
})

// Load admin security code from Firestore
const loadAdminSecurityCode = async () => {
  try {
    const settingsDoc = await getDoc(doc(db, 'settings', 'adminSecurityCode'))
    if (settingsDoc.exists()) {
      adminSecurityCode.value = settingsDoc.data().code || ''
    } else {
      // If no security code exists, use default from env or set empty
      adminSecurityCode.value = import.meta.env.VITE_ADMIN_SECURITY_CODE || ''
    }
  } catch (error) {
    console.error('Error loading admin security code:', error)
    // Fallback to env variable if Firestore fails
    adminSecurityCode.value = import.meta.env.VITE_ADMIN_SECURITY_CODE || ''
  }
}

// Save admin security code to Firestore
const updateSecurityCode = async () => {
  if (securityCodeForm.value.newCode !== securityCodeForm.value.confirmCode) {
    toastMessage.value = 'Security codes do not match!'
    notificationType.value = 'error'
    showToast.value = true
    setTimeout(() => {
      showToast.value = false
    }, 3000)
    return
  }
  
  if (securityCodeForm.value.newCode.length < 4) {
    toastMessage.value = 'Security code must be at least 4 characters long!'
    notificationType.value = 'error'
    showToast.value = true
    setTimeout(() => {
      showToast.value = false
    }, 3000)
    return
  }
  
  try {
    isSavingSecurityCode.value = true
    
    // Check if user is authenticated and is admin
    if (!auth.currentUser) {
      throw new Error('You must be logged in to update the security code')
    }
    
    // Check if user is admin
    const adminDoc = await getDoc(doc(db, 'admins', auth.currentUser.uid))
    if (!adminDoc.exists()) {
      throw new Error('Only admins can update the security code')
    }
    
    // Save to Firestore settings collection
    await setDoc(doc(db, 'settings', 'adminSecurityCode'), {
      code: securityCodeForm.value.newCode,
      updatedAt: new Date().toISOString(),
      updatedBy: auth.currentUser.uid
    }, { merge: true })
    
    // Update local state
    adminSecurityCode.value = securityCodeForm.value.newCode
    
    // Reset form
    securityCodeForm.value = {
      newCode: '',
      confirmCode: ''
    }
    showSecurityCodeModal.value = false
    
    toastMessage.value = 'Admin security code updated successfully!'
    notificationType.value = 'success'
    showToast.value = true
    setTimeout(() => {
      showToast.value = false
    }, 3000)
  } catch (error) {
    console.error('Error updating security code:', error)
    toastMessage.value = error.message || 'Failed to update security code. Please try again.'
    notificationType.value = 'error'
    showToast.value = true
    setTimeout(() => {
      showToast.value = false
    }, 3000)
  } finally {
    isSavingSecurityCode.value = false
  }
}

// Load admin info including last password change
const loadAdminInfo = async () => {
  if (!auth.currentUser) return
  
  try {
    const adminDoc = await getDoc(doc(db, 'admins', auth.currentUser.uid))
    if (adminDoc.exists()) {
      const adminData = adminDoc.data()
      userDisplayName.value = `${adminData.firstName || ''} ${adminData.lastName || ''}`.trim() || auth.currentUser.displayName || 'Admin'
      
      // Load last password change date
      if (adminData.lastPasswordChange) {
        lastPasswordChange.value = adminData.lastPasswordChange
      } else {
        // If no lastPasswordChange exists, set it to createdAt or current date
        lastPasswordChange.value = adminData.createdAt || new Date().toISOString()
      }
    } else {
      // If admin doc doesn't exist, set default values
      userDisplayName.value = auth.currentUser.displayName || 'Admin'
      lastPasswordChange.value = new Date().toISOString()
    }
  } catch (error) {
    console.error('Error loading admin info:', error)
    userDisplayName.value = auth.currentUser.displayName || 'Admin'
    lastPasswordChange.value = new Date().toISOString()
  }
}

// Load security code on component mount
onMounted(async () => {
  await loadAdminSecurityCode()
  
  // Get current user info
  if (auth.currentUser) {
    userEmail.value = auth.currentUser.email || ''
    await loadAdminInfo()
  }
})
</script>

<style scoped>
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #f59e0b, #ea580c);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #d97706, #c2410c);
}

.animate-slide-up {
  animation: slideUp 0.3s ease-out;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
