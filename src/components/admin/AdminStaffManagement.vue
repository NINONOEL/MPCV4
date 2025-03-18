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

      <!-- Rest of your existing staff management content -->
      <main class="flex-1 overflow-auto">
        <div class="p-4 md:p-6 lg:p-8">
          <!-- Header Section -->
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
              <h1 class="text-2xl font-bold text-navy">Staff Management</h1>
              <p class="text-navy/60">Manage your staff members and their roles</p>
            </div>
            <button 
              @click="showAddModal = true"
              class="flex items-center gap-2 px-4 py-2 bg-navy text-white rounded-lg hover:bg-navy/90 transition-colors w-full sm:w-auto justify-center"
            >
              <UserPlusIcon class="w-5 h-5" />
              <span>Add Staff Member</span>
            </button>
          </div>

          <!-- Stats Cards -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <!-- Total Staff Card -->
            <div class="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-sm">
              <div class="flex items-center gap-4">
                <div class="p-3 bg-navy/5 rounded-lg">
                  <UsersIcon class="w-6 h-6 text-navy" />
                </div>
                <div>
                  <p class="text-sm text-navy/60">Total Staff</p>
                  <p class="text-2xl font-bold text-navy">{{ totalStaff }}</p>
                </div>
              </div>
            </div>

            <!-- Active Staff Card -->
            <div class="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-sm">
              <div class="flex items-center gap-4">
                <div class="p-3 bg-green-50 rounded-lg">
                  <UserCheckIcon class="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p class="text-sm text-navy/60">Active Staff</p>
                  <p class="text-2xl font-bold text-navy">{{ activeStaff }}</p>
                </div>
              </div>
            </div>

            <!-- Regular Staff Card -->
            <div class="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-sm">
              <div class="flex items-center gap-4">
                <div class="p-3 bg-blue-50 rounded-lg">
                  <UserIcon class="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p class="text-sm text-navy/60">Regular Staff</p>
                  <p class="text-2xl font-bold text-navy">{{ regularStaffCount }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Search and Filter Bar -->
          <div class="bg-white/90 backdrop-blur-sm rounded-xl p-4 mb-6 shadow-sm">
            <div class="flex flex-col md:flex-row gap-4">
              <div class="flex-1">
                <div class="relative">
                  <SearchIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 text-navy/40 w-5 h-5" />
                  <input 
                    type="text"
                    v-model="searchQuery"
                    placeholder="Search by name or email..."
                    class="w-full pl-10 pr-4 py-2 rounded-lg border border-navy/10 focus:outline-none focus:ring-2 focus:ring-navy/20 bg-white"
                  />
                </div>
              </div>
              <div class="flex flex-col sm:flex-row gap-4">
                <select 
                  v-model="filterRole"
                  class="px-4 py-2 rounded-lg border border-navy/10 focus:outline-none focus:ring-2 focus:ring-navy/20 bg-white"
                >
                  <option value="">All Roles</option>
                  <option value="admin">Admin</option>
                  <option value="staff">Staff</option>
                </select>
                <select 
                  v-model="filterStatus"
                  class="px-4 py-2 rounded-lg border border-navy/10 focus:outline-none focus:ring-2 focus:ring-navy/20 bg-white"
                >
                  <option value="">All Status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>
          </div>

          <!-- Staff Table -->
          <div class="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm overflow-hidden">
            <!-- Mobile View -->
            <div class="block md:hidden">
              <div v-if="loading" class="p-8 text-center">
                <LoaderIcon class="w-6 h-6 text-navy/40 animate-spin mx-auto" />
              </div>
              <div v-else-if="paginatedStaff.length === 0" class="p-8 text-center text-navy/60">
                No staff members found
              </div>
              <div v-else v-for="staff in paginatedStaff" :key="staff.id" class="p-4 border-b border-navy/10">
                <div class="flex items-center justify-between mb-2">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center">
                      <UserIcon class="w-5 h-5 text-navy" />
                    </div>
                    <div>
                      <p class="font-medium text-navy">{{ getFullName(staff) }}</p>
                      <p class="text-sm text-navy/60">{{ staff.email }}</p>
                    </div>
                  </div>
                  <div class="flex items-center gap-2">
                    <button 
                      @click="editStaff(staff)"
                      class="p-2 hover:bg-navy/5 rounded-lg text-navy/60"
                    >
                      <EditIcon class="w-5 h-5" />
                    </button>
                    <button 
                      @click="confirmDelete(staff)"
                      class="p-2 hover:bg-red-50 rounded-lg text-red-600/60"
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
                  <tr class="border-b border-navy/10">
                    <th class="text-left p-4 text-sm font-medium text-navy/60">Staff Member</th>
                    <th class="text-left p-4 text-sm font-medium text-navy/60">Role</th>
                    <th class="text-left p-4 text-sm font-medium text-navy/60">Status</th>
                    <th class="text-left p-4 text-sm font-medium text-navy/60">Last Active</th>
                    <th class="text-right p-4 text-sm font-medium text-navy/60">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-if="loading" class="border-b border-navy/10">
                    <td colspan="5" class="p-8 text-center">
                      <LoaderIcon class="w-6 h-6 text-navy/40 animate-spin mx-auto" />
                    </td>
                  </tr>
                  <tr v-else-if="paginatedStaff.length === 0" class="border-b border-navy/10">
                    <td colspan="5" class="p-8 text-center text-navy/60">
                      No staff members found
                    </td>
                  </tr>
                  <tr 
                    v-for="staff in paginatedStaff" 
                    :key="staff.id" 
                    class="border-b border-navy/10"
                  >
                    <td class="p-4">
                      <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center">
                          <UserIcon class="w-5 h-5 text-navy" />
                        </div>
                        <div>
                          <p class="font-medium text-navy">{{ getFullName(staff) }}</p>
                          <p class="text-sm text-navy/60">{{ staff.email }}</p>
                        </div>
                      </div>
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
                    <td class="p-4 text-navy/60">
                      {{ formatDate(staff.createdAt) }}
                    </td>
                    <td class="p-4">
                      <div class="flex items-center justify-end gap-2">
                        <button 
                          @click="editStaff(staff)"
                          class="p-2 hover:bg-navy/5 rounded-lg text-navy/60"
                        >
                          <EditIcon class="w-5 h-5" />
                        </button>
                        <button 
                          @click="confirmDelete(staff)"
                          class="p-2 hover:bg-red-50 rounded-lg text-red-600/60"
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
                  Showing {{ paginationStart }} - {{ paginationEnd }} of {{ totalStaff }}
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

  <!-- Add/Edit Staff Modal -->
  <div v-if="showAddModal" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
    <div class="bg-white rounded-xl w-full max-w-md">
      <div class="p-6 border-b border-navy/10">
        <h3 class="text-xl font-bold text-navy">
          {{ editingStaff ? 'Edit Staff Member' : 'Add Staff Member' }}
        </h3>
      </div>
      
      <form @submit.prevent="handleSubmit" class="p-6">
        <div class="space-y-4">
          <!-- Name -->
          <div>
            <label class="block text-sm font-medium text-navy mb-1">Full Name</label>
            <input 
              type="text"
              v-model="staffForm.name"
              required
              class="w-full px-3 py-2 rounded-lg border border-navy/10 focus:outline-none focus:ring-2 focus:ring-navy/20 bg-white"
              placeholder="Enter full name"
            />
          </div>

          <!-- Email -->
          <div>
            <label class="block text-sm font-medium text-navy mb-1">Email</label>
            <input 
              type="email"
              v-model="staffForm.email"
              required
              class="w-full px-3 py-2 rounded-lg border border-navy/10 focus:outline-none focus:ring-2 focus:ring-navy/20 bg-white"
              placeholder="Enter email address"
            />
          </div>

          <!-- Role -->
          <div>
            <label class="block text-sm font-medium text-navy mb-1">Role</label>
            <select 
              v-model="staffForm.role"
              required
              class="w-full px-3 py-2 rounded-lg border border-navy/10 focus:outline-none focus:ring-2 focus:ring-navy/20 bg-white"
            >
              <option value="admin">Admin</option>
              <option value="staff">Staff</option>
            </select>
          </div>

          <!-- Status -->
          <div>
            <label class="block text-sm font-medium text-navy mb-1">Status</label>
            <select 
              v-model="staffForm.status"
              required
              class="w-full px-3 py-2 rounded-lg border border-navy/10 focus:outline-none focus:ring-2 focus:ring-navy/20 bg-white"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          <!-- Password (only for new staff) -->
          <div v-if="!editingStaff">
            <label class="block text-sm font-medium text-navy mb-1">Password</label>
            <input 
              type="password"
              v-model="staffForm.password"
              required
              class="w-full px-3 py-2 rounded-lg border border-navy/10 focus:outline-none focus:ring-2 focus:ring-navy/20 bg-white"
              placeholder="Enter password"
              minlength="8"
            />
          </div>
        </div>

        <div class="flex justify-end gap-3 mt-6">
          <button 
            type="button"
            @click="closeModal"
            class="px-4 py-2 border border-navy/10 rounded-lg text-navy hover:bg-navy/5"
          >
            Cancel
          </button>
          <button 
            type="submit"
            class="px-4 py-2 bg-navy text-white rounded-lg hover:bg-navy/90"
            :disabled="loading"
          >
            <span v-if="loading" class="flex items-center gap-2">
              <LoaderIcon class="w-5 h-5 animate-spin" />
              Saving...
            </span>
            <span v-else>
              {{ editingStaff ? 'Save Changes' : 'Add Staff Member' }}
            </span>
          </button>
        </div>
      </form>
    </div>
  </div>

  <!-- Delete Confirmation Modal -->
  <div v-if="showDeleteModal" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
    <div class="bg-white rounded-xl w-full max-w-md">
      <div class="p-6">
        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-red-50 flex items-center justify-center">
          <AlertTriangleIcon class="w-8 h-8 text-red-600" />
        </div>
        <h3 class="text-xl font-bold text-navy text-center mb-2">Delete Staff Member</h3>
        <p class="text-navy/60 text-center mb-6">
          Are you sure you want to delete {{ selectedStaff?.name || getFullName(selectedStaff) }}? This action cannot be undone.
        </p>
        <div class="flex justify-center gap-3">
          <button 
            @click="showDeleteModal = false"
            class="px-6 py-3 border border-navy/10 rounded-lg text-navy hover:bg-navy/5"
          >
            Cancel
          </button>
          <button 
            @click="deleteStaff"
            class="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700"
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
import { ref, computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore'
import { db } from '../../config/firebase.js'
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
  UserPlus as UserPlusIcon,
  UserCheck as UserCheckIcon,
  ShieldCheck as ShieldCheckIcon,
  Search as SearchIcon,
  Edit as EditIcon,
  Trash2 as Trash2Icon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  AlertTriangle as AlertTriangleIcon,
  Loader as LoaderIcon
} from 'lucide-vue-next'

// State
const loading = ref(false)
const showAddModal = ref(false)
const showDeleteModal = ref(false)
const editingStaff = ref(null)
const selectedStaff = ref(null)
const searchQuery = ref('')
const filterRole = ref('')
const filterStatus = ref('')
const currentPage = ref(1)
const perPage = ref(10)
const mobileSidebarOpen = ref(false)

const router = useRouter()
const route = useRoute()

// Staff data
const staffMembers = ref([])

// Form state
const staffForm = ref({
  name: '',
  email: '',
  role: 'staff',
  status: 'active',
  password: ''
})

// Fetch staff members from Firestore
const fetchStaffMembers = async () => {
  try {
    loading.value = true
    const staffCollection = collection(db, 'staff')
    const staffSnapshot = await getDocs(staffCollection)
    
    const staffData = staffSnapshot.docs.map(doc => {
      const data = doc.data()
      return {
        id: doc.id,
        firstName: data.firstName || '',
        lastName: data.lastName || '',
        email: data.email || '',
        role: data.role || 'staff',
        status: 'active', // Assuming all are active for now
        createdAt: data.createdAt || new Date().toISOString()
      }
    })
    
    staffMembers.value = staffData
    console.log('Staff members loaded:', staffData)
  } catch (error) {
    console.error('Error fetching staff members:', error)
  } finally {
    loading.value = false
  }
}

// Load staff data on component mount
onMounted(() => {
  fetchStaffMembers()
})

// Helper function to get full name
const getFullName = (staff) => {
  if (!staff) return ''
  return `${staff.firstName || ''} ${staff.lastName || ''}`.trim()
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

  if (filterRole.value) {
    filtered = filtered.filter(staff => staff.role === filterRole.value)
  }

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
// Remove this line if you want
// const adminCount = computed(() => staffMembers.value.filter(s => s.role === 'admin').length)
const regularStaffCount = computed(() => staffMembers.value.filter(s => s.role === 'staff').length)

const totalPages = computed(() => Math.max(1, Math.ceil(filteredStaff.value.length / perPage.value)))
const paginationStart = computed(() => filteredStaff.value.length === 0 ? 0 : ((currentPage.value - 1) * perPage.value) + 1)
const paginationEnd = computed(() => Math.min(currentPage.value * perPage.value, filteredStaff.value.length))

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
      email: staffForm.value.email,
      role: staffForm.value.role,
      status: staffForm.value.status,
      createdAt: editingStaff.value ? editingStaff.value.createdAt : new Date().toISOString()
    }
    
    if (editingStaff.value) {
      // Update existing staff
      const staffRef = doc(db, 'staff', editingStaff.value.id)
      await updateDoc(staffRef, staffData)
      console.log('Staff updated successfully:', staffData)
    } else {
      // Add new staff
      const docRef = await addDoc(collection(db, 'staff'), staffData)
      console.log('Staff added successfully with ID:', docRef.id)
    }
    
    // Refresh the staff list
    await fetchStaffMembers()
    closeModal()
  } catch (error) {
    console.error('Error saving staff:', error)
    alert('Error saving staff: ' + error.message)
  } finally {
    loading.value = false
  }
}

// The edit and delete functions are already defined in the script section, but let's make sure they're properly connected to the UI.

// First, let's update the editStaff function to properly populate the form:
const editStaff = (staff) => {
  editingStaff.value = staff
  staffForm.value = { 
    name: getFullName(staff),
    email: staff.email,
    role: staff.role,
    status: staff.status || 'active'
  }
  showAddModal.value = true
}

// Finally, let's update the deleteStaff function to properly delete from Firestore:
const deleteStaff = async () => {
  try {
    loading.value = true
    
    if (!selectedStaff.value || !selectedStaff.value.id) {
      throw new Error('No staff selected for deletion')
    }
    
    // Delete from Firestore
    const staffRef = doc(db, 'staff', selectedStaff.value.id)
    await deleteDoc(staffRef)
    console.log('Staff deleted successfully:', selectedStaff.value.id)
    
    // Refresh the staff list
    await fetchStaffMembers()
    showDeleteModal.value = false
  } catch (error) {
    console.error('Error deleting staff:', error)
    alert('Error deleting staff: ' + error.message)
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
    password: ''
  }
}

const getRoleBadgeClass = (role) => {
  const classes = {
    admin: 'bg-purple-50 text-purple-700',
    staff: 'bg-blue-50 text-blue-700'
  }
  return classes[role] || 'bg-gray-50 text-gray-700'
}

const getStatusBadgeClass = (status) => {
  const classes = {
    active: 'bg-green-50 text-green-700',
    inactive: 'bg-red-50 text-red-700'
  }
  return classes[status] || 'bg-gray-50 text-gray-700'
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

