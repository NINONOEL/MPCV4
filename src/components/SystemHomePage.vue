<template>
  <div class="min-h-screen relative overflow-hidden">
    <!-- Paint Cans Background Image -->
    <div class="absolute inset-0 z-0">
      <img 
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/top-view-paint-can%20%281%29.jpg-kjaKpOkhljMqayHwJyfHctwy9XDmUM.jpeg" 
        alt="Colorful paint cans background" 
        class="w-full h-full object-cover"
      />
      <!-- Dark overlay for better text readability -->
      <div class="absolute inset-0 bg-black/50"></div>
    </div>

    <!-- Main Content -->
    <div class="relative z-10">
      <!-- Hero Section with Paint Theme -->
      <section class="pt-16 pb-12">
        <div class="container mx-auto px-6 flex flex-col items-center">
          <div class="text-center mb-16 max-w-4xl mx-auto relative">
            
            <!-- Enhanced Paint-Themed Title -->
            <div class="relative">
              <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in drop-shadow-2xl bg-gradient-to-r from-yellow-300 via-orange-300 via-pink-300 via-purple-300 via-blue-300 to-green-300 bg-clip-text text-transparent">
                Barcelona Paint Center
              </h1>
              
              <p class="text-xl md:text-2xl leading-relaxed animate-fade-in-delay max-w-3xl mx-auto drop-shadow-lg bg-gradient-to-r from-blue-200 via-purple-200 via-pink-200 to-orange-200 bg-clip-text text-transparent font-semibold">
                Technology That Transforms How You Mix and Manage Paint
              </p>
              
              <!-- Colorful Paint Dots -->
              <div class="flex justify-center items-center gap-3 mt-6">
                <div class="w-4 h-4 bg-red-500 rounded-full animate-pulse shadow-lg"></div>
                <div class="w-4 h-4 bg-orange-500 rounded-full animate-pulse shadow-lg" style="animation-delay: 0.2s;"></div>
                <div class="w-4 h-4 bg-yellow-500 rounded-full animate-pulse shadow-lg" style="animation-delay: 0.4s;"></div>
                <div class="w-4 h-4 bg-green-500 rounded-full animate-pulse shadow-lg" style="animation-delay: 0.6s;"></div>
                <div class="w-4 h-4 bg-blue-500 rounded-full animate-pulse shadow-lg" style="animation-delay: 0.8s;"></div>
                <div class="w-4 h-4 bg-purple-500 rounded-full animate-pulse shadow-lg" style="animation-delay: 1s;"></div>
                <div class="w-4 h-4 bg-pink-500 rounded-full animate-pulse shadow-lg" style="animation-delay: 1.2s;"></div>
              </div>
            </div>
          </div>

          <!-- FLAT OVAL Portal Buttons - More Visible Color Tints -->
          <div class="flex flex-col sm:flex-row justify-center gap-6 mb-32 w-full max-w-xl mx-auto mt-12">
            <!-- Staff Portal Button - More Orange Tinted -->
            <div 
              @click="handleStaffClick"
              :class="['group relative flex-1 bg-gradient-to-br from-orange-100 via-orange-50 to-white backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden border-2 border-orange-200', staffClicked ? 'scale-95' : '']"
              style="border-radius: 32px; padding: 24px 20px;"
            >
              <!-- Simple Loading State - Staff -->
              <div v-if="staffClicked" class="absolute inset-0 bg-white/98 backdrop-blur-sm flex items-center justify-center z-30" style="border-radius: 32px;">
                <div class="flex flex-col items-center gap-4">
                  <!-- Simple Spinner -->
                  <div class="w-8 h-8 border-3 border-orange-200 border-t-orange-500 rounded-full animate-spin"></div>
                  
                  <!-- Clean Loading Text -->
                  <div class="text-center">
                    <p class="text-orange-600 font-medium text-sm">Loading Staff Portal</p>
                    
                    <!-- Smooth Animated Loading Dots -->
                    <div class="flex justify-center gap-1 mt-3">
                      <div class="w-2 h-2 bg-orange-500 rounded-full animate-smooth-bounce"></div>
                      <div class="w-2 h-2 bg-orange-500 rounded-full animate-smooth-bounce" style="animation-delay: 0.2s;"></div>
                      <div class="w-2 h-2 bg-orange-500 rounded-full animate-smooth-bounce" style="animation-delay: 0.4s;"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Normal Button Content - Icon on Left -->
              <div v-if="!staffClicked" class="flex flex-col items-center text-center space-y-4">
                <!-- Title with Icon on Left -->
                <div class="flex items-center gap-3 justify-center">
                  <div class="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-md">
                    <UserIcon class="h-5 w-5 text-white" />
                  </div>
                  <h3 class="text-xl font-bold text-gray-800">Staff Portal</h3>
                </div>
                
                <!-- Description -->
                <p class="text-gray-600 text-sm leading-relaxed px-2">Tools for efficient frontline operations</p>
                
                <!-- Enter Button -->
                <div class="w-full pt-1">
                  <div class="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 text-sm font-medium flex items-center justify-center gap-2 shadow-md group-hover:shadow-lg transition-all duration-300" style="border-radius: 24px;">
                    <span>Enter Portal</span>
                    <ChevronRightIcon class="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Admin Portal Button - More Blue Tinted -->
            <div 
              @click="handleAdminClick"
              :class="['group relative flex-1 bg-gradient-to-br from-blue-100 via-blue-50 to-white backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden border-2 border-blue-200', adminClicked ? 'scale-95' : '']"
              style="border-radius: 32px; padding: 24px 20px;"
            >
              <!-- Simple Loading State - Admin -->
              <div v-if="adminClicked" class="absolute inset-0 bg-white/98 backdrop-blur-sm flex items-center justify-center z-30" style="border-radius: 32px;">
                <div class="flex flex-col items-center gap-4">
                  <!-- Simple Spinner -->
                  <div class="w-8 h-8 border-3 border-blue-200 border-t-blue-500 rounded-full animate-spin"></div>
                  
                  <!-- Clean Loading Text -->
                  <div class="text-center">
                    <p class="text-blue-600 font-medium text-sm">Loading Admin Portal</p>
                    
                    <!-- Smooth Animated Loading Dots -->
                    <div class="flex justify-center gap-1 mt-3">
                      <div class="w-2 h-2 bg-blue-500 rounded-full animate-smooth-bounce"></div>
                      <div class="w-2 h-2 bg-blue-500 rounded-full animate-smooth-bounce" style="animation-delay: 0.2s;"></div>
                      <div class="w-2 h-2 bg-blue-500 rounded-full animate-smooth-bounce" style="animation-delay: 0.4s;"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Normal Button Content - Icon on Left -->
              <div v-if="!adminClicked" class="flex flex-col items-center text-center space-y-4">
                <!-- Title with Icon on Left -->
                <div class="flex items-center gap-3 justify-center">
                  <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-md">
                    <ShieldIcon class="h-5 w-5 text-white" />
                  </div>
                  <h3 class="text-xl font-bold text-gray-800">Admin Portal</h3>
                </div>
                
                <!-- Description -->
                <p class="text-gray-600 text-sm leading-relaxed px-2">Full access to system and sale analytics</p>
                
                <!-- Enter Button -->
                <div class="w-full pt-1">
                  <div class="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 text-sm font-medium flex items-center justify-center gap-2 shadow-md group-hover:shadow-lg transition-all duration-300" style="border-radius: 24px;">
                    <span>Enter Portal</span>
                    <ChevronRightIcon class="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- System Features with Paint Theme -->
          <div id="features" class="w-full max-w-6xl mx-auto mb-24">
            <div class="text-center mb-12">
              <div class="inline-block">
                <h2 class="text-4xl font-bold mb-3 drop-shadow-xl bg-gradient-to-r from-green-300 via-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                  System Features
                </h2>
              </div>
              <p class="bg-gradient-to-r from-cyan-200 via-blue-200 to-purple-200 bg-clip-text text-transparent font-bold max-w-2xl mx-auto mt-4 drop-shadow-lg">Comprehensive tools designed for paint management professionals</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <!-- Feature Cards with Paint Colors -->
              <div class="group bg-white/95 backdrop-blur-sm p-5 rounded-xl border-2 border-red-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden relative">
                <!-- Hover Effect Background -->
                <div class="absolute inset-0 bg-gradient-to-br from-red-100 to-orange-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div class="relative">
                  <div class="flex items-center gap-3 mb-4">
                    <div class="p-3 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg shadow-md group-hover:scale-110 transition-transform duration-300">
                      <BoxIcon class="h-6 w-6 text-white" />
                    </div>
                    <h3 class="text-lg font-bold text-red-700">Inventory Management</h3>
                  </div>
                  <p class="text-red-600 text-sm leading-relaxed mb-4">Real-time stock monitoring with automated reordering and low stock alerts</p>
                  
                  <!-- Feature Details -->
                  <ul class="space-y-2">
                    <li class="flex items-center gap-2 text-xs text-red-600">
                      <CheckCircleIcon class="h-4 w-4 text-red-500" />
                      <span>Barcode scanning integration</span>
                    </li>
                    <li class="flex items-center gap-2 text-xs text-red-600">
                      <CheckCircleIcon class="h-4 w-4 text-red-500" />
                      <span>Automated purchase orders</span>
                    </li>
                    <li class="flex items-center gap-2 text-xs text-red-600">
                      <CheckCircleIcon class="h-4 w-4 text-red-500" />
                      <span>Stock level predictions</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div class="group bg-white/95 backdrop-blur-sm p-5 rounded-xl border-2 border-orange-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden relative">
                <div class="absolute inset-0 bg-gradient-to-br from-orange-100 to-yellow-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div class="relative">
                  <div class="flex items-center gap-3 mb-4">
                    <div class="p-3 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg shadow-md group-hover:scale-110 transition-transform duration-300">
                      <PaintBucketIcon class="h-6 w-6 text-white" />
                    </div>
                    <h3 class="text-lg font-bold text-orange-700">Paint Mixing</h3>
                  </div>
                  <p class="text-orange-600 text-sm leading-relaxed mb-4">AI-powered color matching with formula management and batch tracking</p>
                  
                  <ul class="space-y-2">
                    <li class="flex items-center gap-2 text-xs text-orange-600">
                      <CheckCircleIcon class="h-4 w-4 text-orange-500" />
                      <span>Spectrophotometer integration</span>
                    </li>
                    <li class="flex items-center gap-2 text-xs text-orange-600">
                      <CheckCircleIcon class="h-4 w-4 text-orange-500" />
                      <span>Custom formula storage</span>
                    </li>
                    <li class="flex items-center gap-2 text-xs text-orange-600">
                      <CheckCircleIcon class="h-4 w-4 text-orange-500" />
                      <span>Batch consistency analysis</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div class="group bg-white/95 backdrop-blur-sm p-5 rounded-xl border-2 border-green-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden relative">
                <div class="absolute inset-0 bg-gradient-to-br from-green-100 to-emerald-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div class="relative">
                  <div class="flex items-center gap-3 mb-4">
                    <div class="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg shadow-md group-hover:scale-110 transition-transform duration-300">
                      <LineChartIcon class="h-6 w-6 text-white" />
                    </div>
                    <h3 class="text-lg font-bold text-green-700">Sales Analytics</h3>
                  </div>
                  <p class="text-green-600 text-sm leading-relaxed mb-4">Comprehensive reporting with revenue insights and trend forecasting</p>
                  
                  <ul class="space-y-2">
                    <li class="flex items-center gap-2 text-xs text-green-600">
                      <CheckCircleIcon class="h-4 w-4 text-green-500" />
                      <span>Interactive dashboards</span>
                    </li>
                    <li class="flex items-center gap-2 text-xs text-green-600">
                      <CheckCircleIcon class="h-4 w-4 text-green-500" />
                      <span>Customizable reports</span>
                    </li>
                    <li class="flex items-center gap-2 text-xs text-green-600">
                      <CheckCircleIcon class="h-4 w-4 text-green-500" />
                      <span>Predictive analytics</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <!-- Second Row -->
              <div class="group bg-white/95 backdrop-blur-sm p-5 rounded-xl border-2 border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden relative">
                <div class="absolute inset-0 bg-gradient-to-br from-blue-100 to-cyan-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div class="relative">
                  <div class="flex items-center gap-3 mb-4">
                    <div class="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg shadow-md group-hover:scale-110 transition-transform duration-300">
                      <UsersIcon class="h-6 w-6 text-white" />
                    </div>
                    <h3 class="text-lg font-bold text-blue-700">Staff Management</h3>
                  </div>
                  <p class="text-blue-600 text-sm leading-relaxed mb-4">Role-based access control with performance tracking and shift scheduling</p>
                  
                  <ul class="space-y-2">
                    <li class="flex items-center gap-2 text-xs text-blue-600">
                      <CheckCircleIcon class="h-4 w-4 text-blue-500" />
                      <span>Performance metrics</span>
                    </li>
                    <li class="flex items-center gap-2 text-xs text-blue-600">
                      <CheckCircleIcon class="h-4 w-4 text-blue-500" />
                      <span>Shift management</span>
                    </li>
                    <li class="flex items-center gap-2 text-xs text-blue-600">
                      <CheckCircleIcon class="h-4 w-4 text-blue-500" />
                      <span>Training tracking</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div class="group bg-white/95 backdrop-blur-sm p-5 rounded-xl border-2 border-purple-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden relative">
                <div class="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div class="relative">
                  <div class="flex items-center gap-3 mb-4">
                    <div class="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg shadow-md group-hover:scale-110 transition-transform duration-300">
                      <FileTextIcon class="h-6 w-6 text-white" />
                    </div>
                    <h3 class="text-lg font-bold text-purple-700">Reports</h3>
                  </div>
                  <p class="text-purple-600 text-sm leading-relaxed mb-4">Customizable reports with trend analysis and export capabilities</p>
                  
                  <ul class="space-y-2">
                    <li class="flex items-center gap-2 text-xs text-purple-600">
                      <CheckCircleIcon class="h-4 w-4 text-purple-500" />
                      <span>Multiple export formats</span>
                    </li>
                    <li class="flex items-center gap-2 text-xs text-purple-600">
                      <CheckCircleIcon class="h-4 w-4 text-purple-500" />
                      <span>Scheduled reporting</span>
                    </li>
                    <li class="flex items-center gap-2 text-xs text-purple-600">
                      <CheckCircleIcon class="h-4 w-4 text-purple-500" />
                      <span>Data visualization tools</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div class="group bg-white/95 backdrop-blur-sm p-5 rounded-xl border-2 border-pink-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden relative">
                <div class="absolute inset-0 bg-gradient-to-br from-pink-100 to-rose-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div class="relative">
                  <div class="flex items-center gap-3 mb-4">
                    <div class="p-3 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg shadow-md group-hover:scale-110 transition-transform duration-300">
                      <HomeIcon class="h-6 w-6 text-white" />
                    </div>
                    <h3 class="text-lg font-bold text-pink-700">House Paint Recommender</h3>
                  </div>
                  <p class="text-pink-600 text-sm leading-relaxed mb-4">AI-driven color suggestions based on home architecture and environment</p>
                  
                  <ul class="space-y-2">
                    <li class="flex items-center gap-2 text-xs text-pink-600">
                      <CheckCircleIcon class="h-4 w-4 text-pink-500" />
                      <span>Photo analysis</span>
                    </li>
                    <li class="flex items-center gap-2 text-xs text-pink-600">
                      <CheckCircleIcon class="h-4 w-4 text-pink-500" />
                      <span>Virtual preview</span>
                    </li>
                    <li class="flex items-center gap-2 text-xs text-pink-600">
                      <CheckCircleIcon class="h-4 w-4 text-pink-500" />
                      <span>Style-based recommendations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <!-- System Settings Card - Centered below the grid -->
            <div class="flex justify-center mt-8">
              <div class="group bg-white/95 backdrop-blur-sm p-5 rounded-xl border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 w-full max-w-md relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div class="relative">
                  <div class="flex items-center gap-3 mb-4">
                    <div class="p-3 bg-gradient-to-br from-gray-500 to-blue-500 rounded-lg shadow-md group-hover:scale-110 transition-transform duration-300">
                      <SettingsIcon class="h-6 w-6 text-white" />
                    </div>
                    <h3 class="text-lg font-bold text-gray-700">System Settings</h3>
                  </div>
                  <p class="text-gray-600 text-sm mb-4">Flexible configuration with backup management and user preferences</p>
                  
                  <div class="flex flex-wrap gap-2">
                    <span class="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700 border border-gray-300">User Roles</span>
                    <span class="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700 border border-gray-300">Notifications</span>
                    <span class="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700 border border-gray-300">Backup & Restore</span>
                    <span class="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700 border border-gray-300">Appearance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Simple Footer -->
          <footer class="w-full max-w-6xl mx-auto pt-8 border-t-2 border-white/30">
            <div class="text-center">
              <p class="text-white mb-2 font-bold drop-shadow-lg">© 2025 Barcelona Paint Center. All rights reserved.</p>
              <p class="bg-gradient-to-r from-red-300 via-orange-300 via-yellow-300 via-green-300 via-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent text-sm font-bold drop-shadow-lg">
                Internal Management System - Paint Your Success! 🎨
              </p>
            </div>
          </footer>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { 
  User as UserIcon,
  Shield as ShieldIcon,
  Box as BoxIcon,
  PaintBucket as PaintBucketIcon,
  LineChart as LineChartIcon,
  Users as UsersIcon,
  FileText as FileTextIcon,
  Settings as SettingsIcon,
  Home as HomeIcon,
  ChevronRight as ChevronRightIcon,
  CheckCircle as CheckCircleIcon
} from 'lucide-vue-next'

const router = useRouter()

// Add reactive state for button animations and loading
const staffClicked = ref(false)
const adminClicked = ref(false)

// Functions to handle button clicks with longer loading animations
const handleStaffClick = () => {
  staffClicked.value = true
  
  // Longer loading time to show the simple animation
  setTimeout(() => {
    router.push('/staff')
  }, 1200) // Extended to 1.2 seconds
}

const handleAdminClick = () => {
  adminClicked.value = true
  
  // Longer loading time to show the simple animation
  setTimeout(() => {
    router.push('/admin')
  }, 1200) // Extended to 1.2 seconds
}
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 1s ease-out;
}

.animate-fade-in-delay {
  animation: fadeIn 1s ease-out 0.3s both;
}

.animate-smooth-bounce {
  animation: smoothBounce 1.4s ease-in-out infinite;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes smoothBounce {
  0%, 80%, 100% {
    transform: translateY(0);
    opacity: 0.7;
  }
  40% {
    transform: translateY(-12px);
    opacity: 1;
  }
}
</style>