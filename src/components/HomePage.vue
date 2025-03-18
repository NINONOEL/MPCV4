<template>
  <div class="min-h-screen bg-gradient-to-br from-pale-blue via-light-blue to-medium-blue relative overflow-hidden">
    <!-- Background Effects -->
    <div class="absolute inset-0">
      <div class="absolute top-0 left-0 w-96 h-96 bg-white opacity-10 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full filter blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
    </div>

    <!-- Main Content -->
    <div class="relative z-10">
      <div class="container mx-auto px-4 py-16 flex flex-col items-center">
        <!-- Title Section -->
        <div class="text-center mb-16 space-y-6">
          <h1 class="text-6xl md:text-7xl lg:text-8xl font-bold text-navy animate-fade-in">
            Mindoro Paint Center
          </h1>
          <p class="text-xl md:text-2xl text-dark-blue max-w-3xl mx-auto leading-relaxed">
            Advanced Paint Management System for Administrators and Staff
          </p>
        </div>

        <!-- Portal Buttons -->
        <div class="flex flex-col md:flex-row justify-center gap-6 mb-24">
          <button 
            @click="router.push('/staff')"
            class="group relative px-8 py-4 bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-white shadow-lg hover:shadow-xl"
          >
            <div class="relative flex items-center justify-center gap-3">
              <UserIcon class="h-6 w-6 text-navy" />
              <span class="text-lg font-semibold text-navy">Staff Portal</span>
            </div>
          </button>
          
          <!-- Admin Portal button - now using router-link -->
          <router-link 
            to="/admin"
            class="group relative px-8 py-4 bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-white shadow-lg hover:shadow-xl"
          >
            <div class="relative flex items-center justify-center gap-3">
              <ShieldIcon class="h-6 w-6 text-navy" />
              <span class="text-lg font-semibold text-navy">Admin Portal</span>
            </div>
          </router-link>
        </div>

        <!-- System Features -->
        <div class="w-full max-w-7xl mx-auto mb-24">
          <h2 class="text-4xl md:text-5xl font-bold text-center mb-16 text-navy">
            System Features
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Inventory Management -->
            <div class="group bg-white/90 backdrop-blur-sm p-8 rounded-xl hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl">
              <div class="flex items-center gap-4 mb-4">
                <div class="p-3 bg-navy/5 rounded-lg">
                  <BoxIcon class="h-8 w-8 text-navy" />
                </div>
                <h3 class="text-2xl font-semibold text-navy">Inventory Management</h3>
              </div>
              <ul class="space-y-3 text-dark-blue">
                <li class="flex items-center gap-2">
                  <CheckIcon class="h-5 w-5 text-green-600" />
                  Real-time stock level monitoring
                </li>
                <li class="flex items-center gap-2">
                  <CheckIcon class="h-5 w-5 text-green-600" />
                  Automated reordering system
                </li>
                <li class="flex items-center gap-2">
                  <CheckIcon class="h-5 w-5 text-green-600" />
                  Product categorization and tagging
                </li>
                <li class="flex items-center gap-2">
                  <CheckIcon class="h-5 w-5 text-green-600" />
                  Barcode scanning integration
                </li>
              </ul>
            </div>

            <!-- Paint Mixing -->
            <div class="group bg-white/90 backdrop-blur-sm p-8 rounded-xl hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl">
              <div class="flex items-center gap-4 mb-4">
                <div class="p-3 bg-navy/5 rounded-lg">
                  <PaintBucketIcon class="h-8 w-8 text-navy" />
                </div>
                <h3 class="text-2xl font-semibold text-navy">Paint Mixing</h3>
              </div>
              <ul class="space-y-3 text-dark-blue">
                <li class="flex items-center gap-2">
                  <CheckIcon class="h-5 w-5 text-green-600" />
                  AI-powered color matching technology
                </li>
                <li class="flex items-center gap-2">
                  <CheckIcon class="h-5 w-5 text-green-600" />
                  Custom formula management
                </li>
                <li class="flex items-center gap-2">
                  <CheckIcon class="h-5 w-5 text-green-600" />
                  Quality control and consistency checks
                </li>
                <li class="flex items-center gap-2">
                  <CheckIcon class="h-5 w-5 text-green-600" />
                  Digital color library and swatches
                </li>
              </ul>
            </div>

            <!-- Sales Management -->
            <div class="group bg-white/90 backdrop-blur-sm p-8 rounded-xl hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl">
              <div class="flex items-center gap-4 mb-4">
                <div class="p-3 bg-navy/5 rounded-lg">
                  <LineChartIcon class="h-8 w-8 text-navy" />
                </div>
                <h3 class="text-2xl font-semibold text-navy">Sales Management</h3>
              </div>
              <ul class="space-y-3 text-dark-blue">
                <li class="flex items-center gap-2">
                  <CheckIcon class="h-5 w-5 text-green-600" />
                  Comprehensive transaction tracking
                </li>
                <li class="flex items-center gap-2">
                  <CheckIcon class="h-5 w-5 text-green-600" />
                  Advanced revenue analytics
                </li>
                <li class="flex items-center gap-2">
                  <CheckIcon class="h-5 w-5 text-green-600" />
                  Customer relationship management
                </li>
                <li class="flex items-center gap-2">
                  <CheckIcon class="h-5 w-5 text-green-600" />
                  Promotions and discount management
                </li>
              </ul>
            </div>

            <!-- User Management -->
            <div class="group bg-white/90 backdrop-blur-sm p-8 rounded-xl hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl">
              <div class="flex items-center gap-4 mb-4">
                <div class="p-3 bg-navy/5 rounded-lg">
                  <UsersIcon class="h-8 w-8 text-navy" />
                </div>
                <h3 class="text-2xl font-semibold text-navy">User Management</h3>
              </div>
              <ul class="space-y-3 text-dark-blue">
                <li class="flex items-center gap-2">
                  <CheckIcon class="h-5 w-5 text-green-600" />
                  Role-based access control
                </li>
                <li class="flex items-center gap-2">
                  <CheckIcon class="h-5 w-5 text-green-600" />
                  Detailed activity logging
                </li>
                <li class="flex items-center gap-2">
                  <CheckIcon class="h-5 w-5 text-green-600" />
                  Granular permission settings
                </li>
                <li class="flex items-center gap-2">
                  <CheckIcon class="h-5 w-5 text-green-600" />
                  User performance tracking
                </li>
              </ul>
            </div>

            <!-- Reports and Analytics -->
            <div class="group bg-white/90 backdrop-blur-sm p-8 rounded-xl hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl">
              <div class="flex items-center gap-4 mb-4">
                <div class="p-3 bg-navy/5 rounded-lg">
                  <FileTextIcon class="h-8 w-8 text-navy" />
                </div>
                <h3 class="text-2xl font-semibold text-navy">Reports and Analytics</h3>
              </div>
              <ul class="space-y-3 text-dark-blue">
                <li class="flex items-center gap-2">
                  <CheckIcon class="h-5 w-5 text-green-600" />
                  Customizable sales reports
                </li>
                <li class="flex items-center gap-2">
                  <CheckIcon class="h-5 w-5 text-green-600" />
                  Real-time inventory status updates
                </li>
                <li class="flex items-center gap-2">
                  <CheckIcon class="h-5 w-5 text-green-600" />
                  Performance metrics and KPIs
                </li>
                <li class="flex items-center gap-2">
                  <CheckIcon class="h-5 w-5 text-green-600" />
                  Trend analysis and forecasting
                </li>
              </ul>
            </div>

            <!-- System Configuration -->
            <div class="group bg-white/90 backdrop-blur-sm p-8 rounded-xl hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl">
              <div class="flex items-center gap-4 mb-4">
                <div class="p-3 bg-navy/5 rounded-lg">
                  <SettingsIcon class="h-8 w-8 text-navy" />
                </div>
                <h3 class="text-2xl font-semibold text-navy">System Configuration</h3>
              </div>
              <ul class="space-y-3 text-dark-blue">
                <li class="flex items-center gap-2">
                  <CheckIcon class="h-5 w-5 text-green-600" />
                  Flexible system settings
                </li>
                <li class="flex items-center gap-2">
                  <CheckIcon class="h-5 w-5 text-green-600" />
                  Automated backup management
                </li>
                <li class="flex items-center gap-2">
                  <CheckIcon class="h-5 w-5 text-green-600" />
                  Integration with external systems
                </li>
                <li class="flex items-center gap-2">
                  <CheckIcon class="h-5 w-5 text-green-600" />
                  Customizable workflows
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <footer class="w-full max-w-7xl mx-auto text-center">
          <p class="text-dark-blue">© 2023 Mindoro Paint Center. All rights reserved.</p>
        </footer>
      </div>
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
  Check as CheckIcon
} from 'lucide-vue-next'

const router = useRouter()

const navigateToStaffPortal = () => {
  console.log('Staff Portal clicked')
  // Implement staff portal navigation logic here
}

const navigateToAdminPortal = () => {
  router.push('/admin')
}
</script>

<style>
.animate-fade-in {
  animation: fadeIn 1s ease-in;
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
</style>