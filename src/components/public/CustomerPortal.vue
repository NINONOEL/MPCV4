<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 font-sans">
    <!-- Enhanced background with better gradient -->
    <div class="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-100 via-orange-50 to-transparent"></div>

    <!-- Responsive header -->
    <header class="relative z-10 bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-sm">
      <div class="w-full px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3">
        <div class="flex items-center justify-between">
          <!-- Logo and text - responsive sizing -->
          <div class="flex items-center space-x-1.5 sm:space-x-2 cursor-pointer hover:opacity-80 transition-opacity min-w-0" @click="() => router.push({ name: 'CustomerPortalDashboard' })">
            <div class="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-red-500 via-red-600 to-orange-500 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
              <Paintbrush2 class="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            </div>
            <div class="min-w-0">
              <h1 class="text-xs sm:text-sm md:text-base font-black text-slate-900 leading-none tracking-tight truncate">BARCELONA</h1>
              <p class="text-[8px] sm:text-[10px] text-slate-600 font-semibold leading-none mt-0.5 truncate">PAINT CENTER</p>
            </div>
          </div>

          <!-- Logout button - responsive -->
          <div class="flex items-center ml-2 sm:ml-4">
            <button @click="handleLogout" class="flex items-center justify-center rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 text-xs font-semibold text-slate-700 hover:bg-red-50 hover:text-red-700 group border-2 border-slate-200 bg-white hover:border-red-200 transition-all whitespace-nowrap">
              <LogOut class="mr-1 h-3.5 w-3.5 sm:h-4 sm:w-4 text-slate-500 group-hover:text-red-600 transition-colors flex-shrink-0" />
              <span class="hidden xs:inline text-xs sm:text-sm">Sign Out</span>
              <span class="inline xs:hidden text-xs">Sign Out</span>
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content Area -->
    <main class="relative z-10">
      <div class="w-full">
        <!-- Responsive padding and centering -->
        <div class="min-h-[calc(100vh-60px)] sm:min-h-[calc(100vh-70px)] flex flex-col items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
          <!-- Title section - responsive text sizes -->
          <div class="text-center mb-6 sm:mb-8 md:mb-10 w-full">
            <h1 class="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black mb-2 sm:mb-3 tracking-tight bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-600 to-purple-600 bg-clip-text text-transparent px-2">
              Welcome to Barcelona Paint Center
            </h1>
            <p class="text-slate-600 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed px-2">
              Choose a service to get started with your painting project
            </p>
          </div>

          <!-- Responsive grid layout - 1 column on mobile, 2 on tablet, 3 on desktop -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 w-full max-w-6xl">
            
            <!-- Products Box -->
            <router-link 
              :to="{ name: 'CustomerPortalProducts' }"
              class="group relative bg-white border-2 border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 hover:border-red-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden"
            >
              <div class="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div class="relative flex flex-col items-center text-center space-y-2 sm:space-y-3">
                <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Package class="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
                </div>
                <h3 class="text-base sm:text-lg font-bold text-slate-900">Products</h3>
                <p class="text-slate-600 text-xs sm:text-sm leading-relaxed min-h-[2rem] sm:min-h-[2.5rem]">
                  Browse our wide selection of premium paints and painting supplies
                </p>
                <div class="pt-1">
                  <span class="inline-flex items-center text-red-600 font-semibold text-xs sm:text-sm group-hover:gap-2 transition-all">
                    Explore Products
                    <svg class="w-3 h-3 sm:w-4 sm:h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </router-link>

            <!-- Paint Mixer Box -->
            <router-link 
              :to="{ name: 'CustomerPortalMixing' }"
              class="group relative bg-white border-2 border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 hover:border-red-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden"
            >
              <div class="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div class="relative flex flex-col items-center text-center space-y-2 sm:space-y-3">
                <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Palette class="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
                </div>
                <h3 class="text-base sm:text-lg font-bold text-slate-900">Paint Mixer</h3>
                <p class="text-slate-600 text-xs sm:text-sm leading-relaxed min-h-[2rem] sm:min-h-[2.5rem]">
                  Create your perfect custom color with our real-time paint mixing tool
                </p>
                <div class="pt-1">
                  <span class="inline-flex items-center text-red-600 font-semibold text-xs sm:text-sm group-hover:gap-2 transition-all">
                    Start Mixing
                    <svg class="w-3 h-3 sm:w-4 sm:h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </router-link>

            <!-- House Color Recommender Box -->
            <router-link 
              :to="{ name: 'CustomerPortalRecommender' }"
              class="group relative bg-white border-2 border-slate-200 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 hover:border-red-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden sm:col-span-2 lg:col-span-1"
            >
              <div class="absolute inset-0 bg-gradient-to-br from-sky-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div class="relative flex flex-col items-center text-center space-y-2 sm:space-y-3">
                <div class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-sky-500 to-indigo-500 rounded-lg sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Home class="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
                </div>
                <h3 class="text-base sm:text-lg font-bold text-slate-900">House Color Recommender</h3>
                <p class="text-slate-600 text-xs sm:text-sm leading-relaxed min-h-[2rem] sm:min-h-[2.5rem]">
                  Get AI-powered color recommendations for your home's perfect look
                </p>
                <div class="pt-1">
                  <span class="inline-flex items-center text-red-600 font-semibold text-xs sm:text-sm group-hover:gap-2 transition-all">
                    Get Recommendations
                    <svg class="w-3 h-3 sm:w-4 sm:h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </router-link>

          </div>
        </div>
      </div>
    </main>

    <!-- Sign Out Confirmation Modal - responsive -->
    <div v-if="showSignOutConfirmModal" class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4" @click="showSignOutConfirmModal = false">
      <div class="bg-white rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-sm border" @click.stop>
        <div class="p-4 sm:p-5 border-b flex justify-between items-center">
          <h3 class="text-base sm:text-lg font-bold text-slate-800">Confirm Sign Out</h3>
          <button @click="showSignOutConfirmModal = false" class="p-1.5 sm:p-2 rounded-full hover:bg-slate-100">
            <X class="h-4 w-4 sm:h-5 sm:w-5 text-slate-500"/>
          </button>
        </div>
        
        <div class="p-4 sm:p-6 text-center">
          <LogOut class="h-10 w-10 sm:h-12 sm:w-12 text-slate-500 mx-auto mb-3 sm:mb-4"/> 
          <p class="text-slate-700 text-base sm:text-lg font-medium mb-4 sm:mb-6">Are you sure you want to sign out?</p> 
          <div class="flex justify-center gap-2 sm:gap-3"> 
            <button @click="showSignOutConfirmModal = false" class="px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-200 text-slate-800 rounded-lg text-xs sm:text-sm font-semibold hover:bg-slate-300 transition-colors">
              Cancel
            </button>
            <button @click="confirmLogout" class="px-3 sm:px-4 py-1.5 sm:py-2 bg-red-600 text-white rounded-lg text-xs sm:text-sm font-semibold hover:bg-red-700 transition-colors">
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Toast Notification - responsive positioning -->
    <div v-if="showToast" :class="['fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 p-3 sm:p-4 rounded-lg shadow-lg flex items-center gap-2 sm:gap-3 max-w-xs', toastType === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white']">
      <CheckCircle v-if="toastType === 'success'" class="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
      <XCircle v-else class="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
      <p class="font-medium text-xs sm:text-sm">{{ toastMessage }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { auth } from '@/config/firebase.js';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { 
  Paintbrush2, 
  Palette, 
  Home, 
  LogOut, 
  X, 
  CheckCircle,
  XCircle,
  Package
} from 'lucide-vue-next';

const router = useRouter();

// --- STATE MANAGEMENT --- 
const customerName = ref('Guest');
const userStatus = ref('Customer');
const showMobileMenu = ref(false);
const showSignOutConfirmModal = ref(false);

// Toast Notification State
const showToast = ref(false);
const toastMessage = ref('');
const toastType = ref('success'); 

// Function to show toast notification
const showToastNotification = (message, type) => {
  toastMessage.value = message;
  toastType.value = type;
  showToast.value = true;
  setTimeout(() => {
    showToast.value = false;
  }, 3000);
};

// --- NAVIGATION & AUTHENTICATION --- 
const handleLogout = () => {
  showSignOutConfirmModal.value = true; 
};

const confirmLogout = async () => {
  try {
    signOut(auth);
    showSignOutConfirmModal.value = false;
    showToastNotification('You have successfully signed out!', 'success');
    
    setTimeout(() => {
      router.push('/'); 
    }, 2000);
    
  } catch (error) {
    console.error("Error signing out:", error);
    showSignOutConfirmModal.value = false; 
    showToastNotification('Failed to sign out. Please try again.', 'error'); 
  }
};

// --- LIFECYCLE HOOKS --- 
const unsubscribe = ref(null);

onMounted(() => {
  unsubscribe.value = onAuthStateChanged(auth, (userAuth) => {
    if (userAuth) {
      customerName.value = userAuth.displayName || 'Valued Customer';
      userStatus.value = 'Customer';
    } else { 
      customerName.value = 'Guest';
      userStatus.value = 'Logged Out';
    }
  });
});

onUnmounted(() => {
  if (unsubscribe.value) {
    unsubscribe.value();
  }
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap');

.font-sans { 
  font-family: 'Inter', sans-serif; 
}

.backdrop-blur-xl { 
  backdrop-filter: blur(24px); 
  -webkit-backdrop-filter: blur(24px); 
}
</style>
