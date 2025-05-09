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
                <h1 class="text-2xl font-bold text-white">Paint Recommendation History</h1>
                <p class="text-white/60">View and manage your previous paint recommendations</p>
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
  
          <div class="p-6 md:p-8">
            <!-- Main Content -->
            <div class="bg-gradient-to-br from-[#0A2159] to-[#0A3573] rounded-xl shadow-lg p-6 border border-white/10">
              <div class="flex justify-between items-center mb-6">
                <h2 class="text-2xl font-bold text-white flex items-center">
                  <HistoryIcon class="h-6 w-6 mr-2 text-white/70" />
                  Paint Recommendation History
                </h2>
                
                <div class="flex items-center gap-3">
                  <button 
                    @click="clearAllHistory" 
                    class="px-4 py-2 bg-red-600/20 hover:bg-red-600/30 text-white rounded-lg flex items-center gap-2 transition-colors"
                    :disabled="loading || historyItems.length === 0"
                    :class="{ 'opacity-50 cursor-not-allowed': loading || historyItems.length === 0 }"
                  >
                    <TrashIcon class="h-4 w-4" />
                    <span>Clear All</span>
                  </button>
                  
                  <a 
                    href="/staff/house-paint-recommender" 
                    class="px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 text-white rounded-lg flex items-center gap-2 transition-colors"
                  >
                    <PlusIcon class="h-4 w-4" />
                    <span>New Recommendation</span>
                  </a>
                </div>
              </div>
              
              <!-- Loading State -->
              <div v-if="loading" class="flex flex-col items-center justify-center py-12">
                <div class="w-12 h-12 border-4 border-white/20 border-t-white/80 rounded-full animate-spin mb-4"></div>
                <p class="text-white/80">Loading history...</p>
              </div>
              
              <!-- Empty State -->
              <div v-else-if="historyItems.length === 0" class="text-center py-16">
                <div class="inline-flex items-center justify-center p-4 bg-white/5 rounded-full mb-4">
                  <HistoryIcon class="h-10 w-10 text-white/40" />
                </div>
                <h3 class="text-lg font-medium text-white mb-2">No recommendation history</h3>
                <p class="text-white/60 mb-6 max-w-md mx-auto">You haven't created any paint recommendations yet. Create your first recommendation to see it here.</p>
                <a 
                  href="/staff/house-paint-recommender" 
                  class="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:opacity-90 text-white rounded-lg inline-flex items-center gap-2 transition-all shadow-lg"
                >
                  <HomeIcon class="h-5 w-5" />
                  <span>Create Recommendation</span>
                </a>
              </div>
              
              <!-- History List -->
              <div v-else class="space-y-6">
                <!-- Filters -->
                <div class="flex flex-col md:flex-row gap-4 mb-6">
                  <div class="flex-1">
                    <input 
                      type="text" 
                      v-model="searchQuery" 
                      placeholder="Search recommendations..." 
                      class="w-full bg-[#002B73] border border-white/20 rounded-lg text-white px-4 py-3 focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all placeholder-white/40"
                    />
                  </div>
                  
                  <div class="flex gap-3">
                    <select 
                      v-model="filterStyle"
                      class="bg-[#002B73] border border-white/20 rounded-lg text-white px-4 py-3 focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all placeholder-white/40 appearance-none pr-10"
                    >
                      <option value="">All Styles</option>
                      <option v-for="style in houseStyles" :key="style.id" :value="style.id">{{ style.name }}</option>
                    </select>
                    
                    <select 
                      v-model="filterColor"
                      class="bg-[#002B73] border border-white/20 rounded-lg text-white px-4 py-3 focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all placeholder-white/40 appearance-none pr-10"
                    >
                      <option value="">All Colors</option>
                      <option v-for="color in colorPreferences" :key="color.id" :value="color.id">{{ color.name }}</option>
                    </select>
                  </div>
                </div>
                
                <!-- History Items -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div 
                    v-for="item in filteredHistory" 
                    :key="item.id"
                    class="bg-white/5 p-5 rounded-xl border border-white/10 hover:border-white/20 transition-all"
                  >
                    <div class="flex justify-between items-start mb-3">
                      <div>
                        <h3 class="text-lg font-medium text-white">{{ getHouseStyleNameById(item.houseStyle) }}</h3>
                        <p class="text-sm text-white/60">{{ formatDate(item.createdAt) }}</p>
                      </div>
                      <div class="flex gap-2">
                        <button 
                          @click="loadRecommendation(item)"
                          class="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors"
                          title="Load Recommendation"
                        >
                          <ArrowRightIcon class="h-4 w-4" />
                        </button>
                        <button 
                          @click="deleteHistoryItem(item.id)"
                          class="p-2 rounded-lg bg-white/5 hover:bg-red-500/20 text-white transition-colors"
                          title="Delete"
                        >
                          <TrashIcon class="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    
                    <div class="flex space-x-1 h-8 mb-3">
                      <div 
                        v-for="(color, colorIndex) in item.schemes[0]" 
                        :key="colorIndex"
                        class="flex-1 first:rounded-l-md last:rounded-r-md"
                        :style="{ backgroundColor: color.hex }"
                      ></div>
                    </div>
                    
                    <div class="flex justify-between items-center">
                      <div class="flex items-center gap-2">
                        <HomeIcon class="h-4 w-4 text-white/60" />
                        <span class="text-sm text-white/60">{{ item.size }} sqm</span>
                      </div>
                      <span class="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">
                        {{ getColorPreferenceNameById(item.colorPreference) }}
                      </span>
                    </div>
                    
                    <div class="mt-3 pt-3 border-t border-white/10">
                      <div class="flex justify-between text-xs text-white/60">
                        <span>{{ getSurfaceMaterialNameById(item.surfaceMaterial) }}</span>
                        <span>{{ item.schemes.length }} color schemes</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- Empty Search Results -->
                <div v-if="filteredHistory.length === 0 && historyItems.length > 0" class="text-center py-8">
                  <SearchXIcon class="h-10 w-10 text-white/40 mx-auto mb-3" />
                  <h3 class="text-lg font-medium text-white mb-2">No matching results</h3>
                  <p class="text-white/60">Try adjusting your search or filters</p>
                  <button 
                    @click="clearFilters" 
                    class="mt-4 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  
    <!-- Toast notification -->
    <div 
      v-if="showToast" 
      class="fixed bottom-4 right-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg shadow-lg flex items-center"
    >
      <CheckIcon class="h-5 w-5 mr-2" />
      <span>{{ toastMessage }}</span>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted, onUnmounted } from 'vue';
  import { useRouter } from 'vue-router';
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
    Check as CheckIcon,
    Calendar as CalendarIcon,
    Bell as BellIcon,
    History as HistoryIcon,
    Trash as TrashIcon,
    Plus as PlusIcon,
    ArrowRight as ArrowRightIcon,
    SearchX as SearchXIcon
  } from 'lucide-vue-next';
  import { 
    collection, 
    getDocs, 
    query, 
    orderBy, 
    deleteDoc,
    doc,
    where
  } from 'firebase/firestore';
  import { db, auth } from '../../config/firebase';
  
  const router = useRouter();
  const mobileSidebarOpen = ref(false);
  const loading = ref(true);
  const historyItems = ref([]);
  const showToast = ref(false);
  const toastMessage = ref('');
  const searchQuery = ref('');
  const filterStyle = ref('');
  const filterColor = ref('');
  const currentDate = ref(new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
  }));
  
  // House Styles
  const houseStyles = [
    { id: 'modern', name: 'Modern' },
    { id: 'traditional', name: 'Traditional' },
    { id: 'mediterranean', name: 'Mediterranean' },
    { id: 'colonial', name: 'Colonial' },
    { id: 'contemporary', name: 'Contemporary' },
    { id: 'bungalow', name: 'Bungalow' },
    { id: 'minimalist', name: 'Minimalist' },
    { id: 'craftsman', name: 'Craftsman' },
    { id: 'victorian', name: 'Victorian' },
    { id: 'farmhouse', name: 'Farmhouse' },
  ];
  
  // Color Preferences
  const colorPreferences = [
    { id: 'warm', name: 'Warm Colors' },
    { id: 'cool', name: 'Cool Colors' },
    { id: 'neutral', name: 'Neutral Colors' },
    { id: 'bright', name: 'Bright Colors' },
    { id: 'pastel', name: 'Pastel Colors' },
    { id: 'earthy', name: 'Earthy Tones' },
    { id: 'monochromatic', name: 'Monochromatic' },
    { id: 'traditional', name: 'Traditional Filipino' },
  ];
  
  // Surface Materials
  const surfaceMaterials = [
    { id: 'concrete', name: 'Concrete/Cement' },
    { id: 'wood', name: 'Wood' },
    { id: 'brick', name: 'Brick' },
    { id: 'stucco', name: 'Stucco' },
    { id: 'vinyl', name: 'Vinyl Siding' },
    { id: 'metal', name: 'Metal' },
    { id: 'fiber_cement', name: 'Fiber Cement' },
  ];
  
  // Filtered history based on search and filters
  const filteredHistory = computed(() => {
    let filtered = [...historyItems.value];
    
    // Apply search filter
    if (searchQuery.value) {
      const query = searchQuery.value.toLowerCase();
      filtered = filtered.filter(item => {
        const styleName = getHouseStyleNameById(item.houseStyle).toLowerCase();
        const colorName = getColorPreferenceNameById(item.colorPreference).toLowerCase();
        const materialName = getSurfaceMaterialNameById(item.surfaceMaterial).toLowerCase();
        
        return styleName.includes(query) || 
               colorName.includes(query) || 
               materialName.includes(query) ||
               item.size.toString().includes(query);
      });
    }
    
    // Apply style filter
    if (filterStyle.value) {
      filtered = filtered.filter(item => item.houseStyle === filterStyle.value);
    }
    
    // Apply color filter
    if (filterColor.value) {
      filtered = filtered.filter(item => item.colorPreference === filterColor.value);
    }
    
    return filtered;
  });
  
  // Toggle Mobile Sidebar
  const toggleMobileSidebar = () => {
    mobileSidebarOpen.value = !mobileSidebarOpen.value;
  };
  
  // Handle Logout
  const handleLogout = () => {
    router.push('/staff');
  };
  
  // Get house style name by ID
  const getHouseStyleNameById = (styleId) => {
    const style = houseStyles.find(style => style.id === styleId);
    return style ? style.name : 'Custom';
  };
  
  // Get color preference name by ID
  const getColorPreferenceNameById = (preferenceId) => {
    const preference = colorPreferences.find(pref => pref.id === preferenceId);
    return preference ? preference.name : 'Custom';
  };
  
  // Get surface material name by ID
  const getSurfaceMaterialNameById = (materialId) => {
    const material = surfaceMaterials.find(mat => mat.id === materialId);
    return material ? material.name : 'Custom';
  };
  
  // Format date for display
  const formatDate = (timestamp) => {
    if (!timestamp) return '';
    
    try {
      const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
      return date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch (error) {
      console.error('Error formatting date:', error);
      return 'Invalid date';
    }
  };
  
  // Load recommendation
  const loadRecommendation = (item) => {
    // Navigate to the recommender page with the item ID as a query parameter
    window.location.href = `/staff/house-paint-recommender?loadId=${item.id}`;
  };
  
  // Delete history item
  const deleteHistoryItem = async (id) => {
    if (!confirm('Are you sure you want to delete this recommendation?')) return;
    
    try {
      // Check if it's a local item
      if (id.startsWith('local_')) {
        // Remove from local storage
        const localHistory = JSON.parse(localStorage.getItem('paintRecommendations') || '[]');
        const updatedHistory = localHistory.filter(item => item.id !== id);
        localStorage.setItem('paintRecommendations', JSON.stringify(updatedHistory));
        
        // Remove from local state
        historyItems.value = historyItems.value.filter(item => item.id !== id);
        
        // Show success toast
        toastMessage.value = 'Recommendation deleted successfully';
        showToast.value = true;
        setTimeout(() => {
          showToast.value = false;
        }, 3000);
        return;
      }
      
      // Otherwise try to delete from Firestore
      if (db && auth.currentUser) {
        const docRef = doc(db, 'paintRecommendations', id);
        await deleteDoc(docRef);
        
        // Remove from local state
        historyItems.value = historyItems.value.filter(item => item.id !== id);
        
        // Show success toast
        toastMessage.value = 'Recommendation deleted successfully';
        showToast.value = true;
        setTimeout(() => {
          showToast.value = false;
        }, 3000);
      }
    } catch (error) {
      console.error('Error deleting history item:', error);
      alert('Failed to delete recommendation. Please try again.');
    }
  };
  
  // Clear all history
  const clearAllHistory = async () => {
    if (!confirm('Are you sure you want to clear all your recommendation history? This action cannot be undone.')) return;
    
    loading.value = true;
    
    try {
      // Clear local storage first
      localStorage.removeItem('paintRecommendations');
      
      // Then try to clear Firestore if available
      if (db && auth.currentUser) {
        try {
          const recommendationsRef = collection(db, 'paintRecommendations');
          const q = query(recommendationsRef, where('userId', '==', auth.currentUser.uid));
          const snapshot = await getDocs(q);
          
          // Delete each document one by one
          for (const doc of snapshot.docs) {
            await deleteDoc(doc.ref);
            console.log('Deleted document:', doc.id);
          }
        } catch (firestoreError) {
          console.error('Error clearing Firestore history:', firestoreError);
          // Still show success since we cleared local history
        }
      }
      
      // Clear local state
      historyItems.value = [];
      
      // Show success toast
      toastMessage.value = 'All recommendations cleared successfully';
      showToast.value = true;
      setTimeout(() => {
        showToast.value = false;
      }, 3000);
    } catch (error) {
      console.error('Error clearing history:', error);
      alert('Failed to clear history. Please try again.');
    } finally {
      loading.value = false;
    }
  };
  
  // Clear filters
  const clearFilters = () => {
    searchQuery.value = '';
    filterStyle.value = '';
    filterColor.value = '';
  };
  
  // Fetch history items
  const fetchHistory = async () => {
    loading.value = true;
    let isMounted = true;
    let cleanup = null;
  
    try {
      // Get local history first
      const localHistory = JSON.parse(localStorage.getItem('paintRecommendations') || '[]');
      let allItems = [...localHistory];
      
      // Then try to get Firestore history if available
      if (db) {
        try {
          // Check if user is authenticated
          if (auth.currentUser) {
            console.log('Fetching history for user:', auth.currentUser.uid);
            
            const recommendationsRef = collection(db, 'paintRecommendations');
            const q = query(
              recommendationsRef,
              where('userId', '==', auth.currentUser.uid),
              orderBy('createdAt', 'desc')
            );
            
            const snapshot = await getDocs(q);
            const firestoreItems = snapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data()
            }));
            
            console.log(`Fetched ${firestoreItems.length} recommendations from Firestore`);
            
            // Add Firestore items to the list
            allItems = [...firestoreItems, ...allItems];
          }
        } catch (firestoreError) {
          console.error('Error fetching from Firestore:', firestoreError);
          // Continue with local items only
        }
      }
      
      // Sort by createdAt (newest first)
      if (isMounted) {
        historyItems.value = allItems.sort((a, b) => {
          const dateA = a.createdAt?.toDate?.() || new Date(a.createdAt);
          const dateB = b.createdAt?.toDate?.() || new Date(b.createdAt);
          return dateB - dateA;
        });
      }
      
      console.log(`Total history items: ${historyItems.value.length}`);
    } catch (error) {
      console.error('Error fetching history:', error);
      if (isMounted) {
        historyItems.value = [];
      }
    } finally {
      if (isMounted) {
        loading.value = false;
      }
    }
  
    cleanup = () => {
      isMounted = false;
    };
  
    return cleanup;
  };
  
  // Fetch history on component mount
  onMounted(() => {
    const cleanup = fetchHistory();
    
    onUnmounted(() => {
      if (cleanup && typeof cleanup === 'function') {
        cleanup();
      }
    });
  });
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
  
  /* Animation for toast */
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes fadeOut {
    from { opacity: 1; transform: translateY(0); }
    to { opacity: 0; transform: translateY(10px); }
  }
  
  div[v-if="showToast"] {
    animation: fadeIn 0.3s ease-out;
  }
  
  div[v-if="!showToast"] {
    animation: fadeOut 0.3s ease-in;
  }
  </style>