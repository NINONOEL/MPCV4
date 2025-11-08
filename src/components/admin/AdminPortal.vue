<template>
  <div class="min-h-screen relative overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <img 
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/mpcv4/backgrounds/paint-cans-arrangement.jpg-yZXnuIzCCqtvvx8TxTHtxPhUMvA5cP.jpeg" 
        alt="Colorful paint cans background" 
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black/50"></div>
    </div>

    <!-- Back to Homepage Button -->
    <div class="absolute top-6 left-6 z-20">
      <button 
        @click="handleBackToHome"
        :disabled="isGoingBack"
        class="inline-flex items-center px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ease-out
                 bg-white/90 text-gray-800 shadow-lg hover:bg-white hover:shadow-xl border border-gray-200
                 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        <span v-if="!isGoingBack" class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0L2.586 11H17a1 1 0 110 2H4.414l3.293 3.293a1 1 0 010 1.414z" clip-rule="evenodd" />
            <path fill-rule="evenodd" d="M7.707 5.293a1 1 0 010 1.414L4.414 10H17a1 1 0 100-2H4.414l3.293-3.293a1 1 0 000-1.414z" clip-rule="evenodd" />
          </svg>
          <span>Back to Home</span>
        </span>
        <span v-else class="flex items-center gap-2">
          <LoaderIcon class="h-4 w-4 sm:h-5 sm:w-5 animate-spin" />
          <span>Returning...</span>
        </span>
      </button>
    </div>

    <!-- Floating decorations -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="hidden md:block absolute -left-20 top-32 w-40 h-40 rounded-full bg-gradient-to-br from-red-500 via-orange-400 to-yellow-300 opacity-30 blur-2xl animate-float-slow"></div>
      <div class="hidden md:block absolute -right-28 bottom-20 w-48 h-48 rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 opacity-30 blur-2xl animate-float-slower"></div>
      <div class="absolute left-10 top-20 w-6 h-6 rounded-full bg-red-400 opacity-60 blur-[1px] animate-drop-slow"></div>
      <div class="absolute right-12 top-32 w-4 h-4 rounded-full bg-yellow-300 opacity-70 blur-[1px] animate-drop-medium"></div>
      <div class="absolute left-1/2 bottom-16 w-5 h-5 rounded-full bg-cyan-400 opacity-70 blur-[1px] animate-drop-fast"></div>
    </div>

    <!-- Main Content -->
    <div class="relative z-10 flex items-center justify-center min-h-screen p-4 sm:p-6 lg:p-10">
      <div class="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        
        <!-- Left branding -->
        <div class="hidden lg:flex flex-col items-center lg:items-start text-white space-y-6 lg:w-1/2">
          <div class="bg-black/30 border border-white/20 backdrop-blur-xl rounded-3xl p-6 lg:p-8 shadow-2xl transform hover:scale-[1.01] transition-all duration-300">
            <div class="flex items-center gap-3 mb-4">
              <div class="p-2 rounded-2xl bg-gradient-to-br from-yellow-400 via-red-400 to-pink-500 shadow-lg">
                <ShieldIcon class="h-6 w-6 text-white" />
              </div>
              <div>
                <p class="text-xs uppercase tracking-[0.25em] text-gray-200 font-semibold mb-1">Admin Portal</p>
                <h1 class="text-2xl lg:text-3xl xl:text-4xl font-extrabold tracking-tight leading-tight">
                  <span class="inline-block bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">
                    Barcelona Paint Center
                  </span>
                  <span class="block text-sm lg:text-base font-medium text-gray-100 mt-2">
                    Manage your color world with confidence.
                  </span>
                </h1>
              </div>
            </div>

            <p class="text-sm lg:text-base text-gray-100/80 leading-relaxed mb-4">
              Welcome to the <span class="font-semibold text-yellow-300">Admin Control Center</span>.  
              This portal allows authorized administrators to manage staff accounts, product inventory, sales analytics, and system settings.
            </p>

            <ul class="space-y-2 text-sm lg:text-base">
              <li class="flex items-center gap-2">
                <div class="w-6 h-6 rounded-full bg-green-500/80 flex items-center justify-center text-xs font-bold shadow-md">
                  ✓
                </div>
                <span>Secure access with admin security code</span>
              </li>
              <li class="flex items-center gap-2">
                <div class="w-6 h-6 rounded-full bg-blue-500/80 flex items-center justify-center text-xs font-bold shadow-md">
                  ✓
                </div>
                <span>Manage staff & customer records</span>
              </li>
              <li class="flex items-center gap-2">
                <div class="w-6 h-6 rounded-full bg-purple-500/80 flex items-center justify-center text-xs font-bold shadow-md">
                  ✓
                </div>
                <span>Track paint inventory, orders, and sales</span>
              </li>
            </ul>
          </div>

          <div class="flex items-center gap-2 mt-4">
            <div class="h-1.5 w-16 rounded-full bg-red-400 animate-pulse"></div>
            <div class="h-1.5 w-16 rounded-full bg-orange-400 animate-pulse delay-75"></div>
            <div class="h-1.5 w-16 rounded-full bg-yellow-300 animate-pulse delay-150"></div>
            <div class="h-1.5 w-16 rounded-full bg-green-400 animate-pulse delay-200"></div>
            <div class="h-1.5 w-16 rounded-full bg-blue-400 animate-pulse delay-300"></div>
            <div class="h-1.5 w-16 rounded-full bg-purple-400 animate-pulse delay-500"></div>
          </div>

          <div class="mt-4 flex items-center gap-4 bg-black/30 rounded-2xl px-4 py-3 border border-white/10">
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 via-red-400 to-purple-500 flex items-center justify-center shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 14l5 5L20 7" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div class="flex-1">
              <p class="text-xs uppercase tracking-[0.3em] text-gray-300 font-semibold mb-1">
                Secure Access
              </p>
              <p class="text-xs lg:text-sm text-gray-100">
                Only authorized admins with the correct security code can create new admin accounts.
              </p>
            </div>
          </div>

          <div class="mt-4 text-xs text-gray-200/90">
            <p class="font-medium">Tip:</p>
            <p>Use a strong password and keep your admin security code private to maintain system security.</p>
          </div>
        </div>
        
        <!-- Right form card -->
        <div class="bg-white/95 backdrop-blur-md border-2 border-white/80 bg-gradient-to-br from-red-100/80 via-yellow-100/80 via-green-100/80 via-blue-100/80 to-purple-100/80 p-0.5 rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300">
          <div class="bg-white/98 backdrop-blur-sm rounded-2xl overflow-hidden">
            <!-- Tabs -->
            <div class="flex bg-gradient-to-r from-red-50/90 via-yellow-50/90 via-green-50/90 via-blue-50/90 to-purple-50/90 border-b-2 border-gray-100">
              <button 
                @click="activeTab = 'login'"
                class="flex-1 py-4 text-center font-bold transition-all duration-300 relative"
                :class="activeTab === 'login' ? 'text-blue-700 bg-white shadow-md scale-105' : 'text-gray-600 hover:text-gray-900 hover:bg-white/70'"
              >
                <span class="flex justify-center items-center gap-2">
                  <LogInIcon class="h-5 w-5" />
                  Login
                </span>
                <div v-if="activeTab === 'login'" class="absolute -bottom-[2px] left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-t-full"></div>
              </button>
              <button 
                v-if="showRegisterTab"
                @click="activeTab = 'register'"
                class="flex-1 py-4 text-center font-bold transition-all duration-300 relative"
                :class="activeTab === 'register' ? 'text-pink-700 bg-white shadow-md scale-105' : 'text-gray-600 hover:text-gray-900 hover:bg-white/70'"
              >
                <span class="flex justify-center items-center gap-2">
                  <UserPlusIcon class="h-5 w-5" />
                  Register
                </span>
                <div v-if="activeTab === 'register'" class="absolute -bottom-[2px] left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 rounded-t-full"></div>
              </button>
            </div>

            <div class="p-6 sm:p-8">
              <!-- Header -->
              <div class="mb-6">
                <div class="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 via-pink-100 to-purple-100 px-3 py-1 rounded-full mb-2 border border-yellow-200/80 shadow-sm">
                  <ShieldIcon class="h-4 w-4 text-yellow-600" />
                  <p class="text-xs font-semibold tracking-wide text-gray-800 uppercase">Administrator Access</p>
                </div>
                <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 flex items-center gap-2">
                  <span v-if="activeTab === 'login'">Admin Login</span>
                  <span v-else>Create Admin Account</span>
                </h2>
                <p class="mt-1 text-xs sm:text-sm text-gray-600">
                  {{ activeTab === 'login' 
                    ? 'Log in to manage staff, inventory, and analytics for Barcelona Paint Center.' 
                    : 'Set up a new admin account using the secure admin code provided by the system owner.' 
                  }}
                </p>
              </div>

              <!-- Alert -->
              <transition name="fade">
                <div v-if="alertMessage" :class="[
                  'mb-4 px-4 py-3 rounded-xl text-xs sm:text-sm flex items-center gap-2 border',
                  alertType === 'success' 
                    ? 'bg-green-50 border-green-200 text-green-800' 
                    : 'bg-red-50 border-red-200 text-red-800'
                ]">
                  <div class="flex-shrink-0">
                    <component 
                      :is="alertType === 'success' ? CheckCircleIcon : AlertCircleIcon" 
                      class="h-4 w-4" 
                    />
                  </div>
                  <p class="flex-1">{{ alertMessage }}</p>
                </div>
              </transition>

              <!-- Login Form -->
              <form v-if="activeTab === 'login'" @submit.prevent="handleLogin" class="space-y-4">
                <div class="relative group">
                  <MailIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-amber-500 z-10" />
                  <input
                    type="email"
                    v-model="loginData.email"
                    required
                    class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white/90 text-sm sm:text-base
                           focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 shadow-sm
                           placeholder:text-gray-400 group-hover:shadow-md transition-all duration-200"
                    placeholder="Enter your admin email"
                  />
                </div>
                
                <div class="relative group">
                  <LockIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-rose-500 z-10" />
                  <input
                    :type="showPassword ? 'text' : 'password'"
                    v-model="loginData.password"
                    required
                    class="w-full pl-10 pr-12 py-2.5 rounded-xl border border-gray-200 bg-white/90 text-sm sm:text-base
                           focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 shadow-sm
                           placeholder:text-gray-400 group-hover:shadow-md transition-all duration-200"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    @click="showPassword = !showPassword"
                    class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <component :is="showPassword ? EyeOffIcon : EyeIcon" class="h-4 w-4" />
                  </button>
                </div>

                <div class="flex justify-between items-center">
                  <button
                    type="button"
                    @click="openForgotPasswordModal"
                    class="text-xs sm:text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
                  >
                    <span>Forgot password?</span>
                  </button>
                </div>

                <button
                  type="submit"
                  :disabled="isLoading"
                  class="w-full flex items-center justify-center gap-2 py-2.5 sm:py-3 px-4 rounded-xl
                         text-sm sm:text-base font-semibold text-white
                         bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 shadow-lg
                         hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600
                         disabled:opacity-70 disabled:cursor-not-allowed
                         transform hover:-translate-y-[1px] transition-all duration-200"
                >
                  <LoaderIcon v-if="isLoading" class="h-4 w-4 sm:h-5 sm:w-5 animate-spin" />
                  <span>{{ isLoading ? 'Signing in...' : 'Login to Admin Portal' }}</span>
                </button>

                <p class="mt-2 text-[11px] sm:text-xs text-gray-500 text-center">
                  Only authorized administrators may access this portal.
                </p>
              </form>

              <!-- Register Form -->
              <form v-else @submit.prevent="createAdminAccount" class="space-y-4">
                <div class="flex items-start gap-3 p-3 bg-yellow-50 border border-yellow-200 rounded-xl text-xs sm:text-sm text-yellow-900 mb-2">
                  <div class="flex-shrink-0 mt-0.5">
                    <ShieldAlertIcon class="h-4 w-4" />
                  </div>
                  <div>
                    <p class="font-semibold">Admin Security Notice</p>
                    <p>Only the system owner or authorized personnel should create new admin accounts. Keep the admin security code confidential.</p>
                  </div>
                </div>

                <div class="relative group">
                  <ShieldIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-purple-500 z-10" />
                  <input 
                    :type="showSecurityCode ? 'text' : 'password'" 
                    v-model="adminData.securityCode" 
                    required 
                    class="w-full pl-10 pr-12 py-2.5 rounded-xl border border-gray-200 bg-white/90 text-sm sm:text-base
                           focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 shadow-sm
                           placeholder:text-gray-400 group-hover:shadow-md transition-all duration-200"
                    placeholder="Enter admin security code"
                  />
                  <button
                    type="button"
                    @click="showSecurityCode = !showSecurityCode"
                    class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <component :is="showSecurityCode ? EyeOffIcon : EyeIcon" class="h-4 w-4" />
                  </button>
                </div>

                <div class="relative group">
                  <UserIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-green-500 z-10" />
                  <input
                    type="text"
                    v-model="adminData.lastName" 
                    required 
                    class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white/90 text-sm sm:text-base
                           focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 shadow-sm
                           placeholder:text-gray-400 group-hover:shadow-md transition-all duration-200"
                    placeholder="Enter your last name"
                  />
                </div>

                <div class="relative group">
                  <UserIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-500 z-10" />
                  <input 
                    type="text"
                    v-model="adminData.firstName" 
                    required 
                    class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white/90 text-sm sm:text-base
                           focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 shadow-sm
                           placeholder:text-gray-400 group-hover:shadow-md transition-all duration-200"
                    placeholder="Enter your first name"
                  />
                </div>

                <div class="relative group">
                  <MailIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-amber-500 z-10" />
                  <input 
                    type="email"
                    v-model="adminData.email" 
                    required 
                    class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white/90 text-sm sm:text-base
                           focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400 shadow-sm
                           placeholder:text-gray-400 group-hover:shadow-md transition-all duration-200"
                    placeholder="Enter your admin email"
                  />
                </div>

                <div class="relative group">
                  <LockIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-red-500 z-10" />
                  <input 
                    :type="showPassword ? 'text' : 'password'" 
                    v-model="adminData.password" 
                    required 
                    class="w-full pl-10 pr-12 py-2.5 rounded-xl border border-gray-200 bg-white/90 text-sm sm:text-base
                           focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 shadow-sm
                           placeholder:text-gray-400 group-hover:shadow-md transition-all duration-200"
                    placeholder="Create a strong password"
                  />
                  <button
                    type="button"
                    @click="showPassword = !showPassword"
                    class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <component :is="showPassword ? EyeOffIcon : EyeIcon" class="h-4 w-4" />
                  </button>
                </div>

                <div class="relative group">
                  <LockIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-pink-500 z-10" />
                  <input 
                    :type="showConfirmPassword ? 'text' : 'password'" 
                    v-model="adminData.confirmPassword" 
                    required 
                    class="w-full pl-10 pr-12 py-2.5 rounded-xl border border-gray-200 bg-white/90 text-sm sm:text-base
                           focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 shadow-sm
                           placeholder:text-gray-400 group-hover:shadow-md transition-all duration-200"
                    placeholder="Confirm your password"
                  />
                  <button
                    type="button"
                    @click="showConfirmPassword = !showConfirmPassword"
                    class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <component :is="showConfirmPassword ? EyeOffIcon : EyeIcon" class="h-4 w-4" />
                  </button>
                </div>

                <div class="text-[11px] sm:text-xs text-gray-500 space-y-1">
                  <p class="font-medium text-gray-600">Password tips:</p>
                  <ul class="list-disc list-inside space-y-0.5">
                    <li>Use at least 6 characters</li>
                    <li>Combine uppercase, lowercase, numbers, and symbols</li>
                    <li>Avoid using easily guessable information</li>
                  </ul>
                </div>

                <button 
                  type="submit" 
                  :disabled="isLoading"
                  class="w-full flex items-center justify-center gap-2 py-2.5 sm:py-3 px-4 rounded-xl
                         text-sm sm:text-base font-semibold text-white
                         bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 shadow-lg
                         hover:from-purple-600 hover:via-pink-600 hover:to-red-600
                         disabled:opacity-70 disabled:cursor-not-allowed
                         transform hover:-translate-y-[1px] transition-all duration-200"
                >
                  <LoaderIcon v-if="isLoading" class="h-4 w-4 sm:h-5 sm:w-5 animate-spin" />
                  <span>{{ isLoading ? 'Creating admin account...' : 'Create Admin Account' }}</span>
                </button>
              </form>

              <div class="mt-6 border-t border-gray-100 pt-4 text-[11px] sm:text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-2">
                <p>© 2025 Barcelona Paint Center. Admin Portal.</p>
                <p class="flex items-center gap-1">
                  <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span>Secure connection active</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Forgot Password Modal -->
    <transition name="fade">
      <div v-if="showForgotPassword" class="fixed inset-0 z-30 flex items-center justify-center bg-black/50 p-4">
        <div class="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-gray-200 relative">
          <button 
            @click="showForgotPassword = false"
            class="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
          
          <div class="flex items-center gap-3 mb-4">
            <div class="p-2 rounded-xl bg-blue-100 text-blue-600">
              <LockIcon class="h-5 w-5" />
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-900">Reset Admin Password</h3>
              <p class="text-xs text-gray-500">
                Enter your admin email address and we will send you a password reset link.
              </p>
            </div>
          </div>

          <form @submit.prevent="handleForgotPassword" class="space-y-4">
            <div class="relative group">
              <MailIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-500 z-10" />
              <input
                type="email"
                v-model="resetEmail"
                required
                class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white/90 text-sm
                       focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 shadow-sm
                       placeholder:text-gray-400 group-hover:shadow-md transition-all duration-200"
                placeholder="Enter your admin email"
              />
            </div>

            <button
              type="submit"
              :disabled="isResetting"
              class="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl
                     text-sm font-semibold text-white
                     bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 shadow-lg
                     hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600
                     disabled:opacity-70 disabled:cursor-not-allowed
                     transform hover:-translate-y-[1px] transition-all duration-200"
            >
              <LoaderIcon v-if="isResetting" class="h-4 w-4 animate-spin" />
              <span>{{ isResetting ? 'Sending reset link...' : 'Send Reset Link' }}</span>
            </button>
          </form>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { auth, db } from '@/config/firebase'
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail
} from 'firebase/auth'
import { doc, setDoc, getDoc, collection, getDocs, query } from 'firebase/firestore'
import { 
  User as UserIcon,
  Mail as MailIcon,
  Lock as LockIcon,
  Eye as EyeIcon,
  EyeOff as EyeOffIcon,
  Loader as LoaderIcon,
  Shield as ShieldIcon,
  ShieldAlert as ShieldAlertIcon,
  LogIn as LogInIcon,
  UserPlus as UserPlusIcon,
  CheckCircle2 as CheckCircleIcon,
  AlertCircle as AlertCircleIcon
} from 'lucide-vue-next'

const router = useRouter()

// ✅ Get from .env (Vite)
const ADMIN_SECURITY_CODE = import.meta.env.VITE_ADMIN_SECURITY_CODE

const activeTab = ref('login')
const showRegisterTab = ref(false)
const isAdminExists = ref(false)
const isLoading = ref(false)
const isGoingBack = ref(false)
const showPassword = ref(false)
const showConfirmPassword = ref(false)
const showSecurityCode = ref(false)
const alertMessage = ref('')
const alertType = ref('success')

const showForgotPassword = ref(false)
const resetEmail = ref('')
const isResetting = ref(false)

const loginData = reactive({
  email: '',
  password: ''
})

const adminData = reactive({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  securityCode: ''
})

const handleBackToHome = async () => {
  try {
    isGoingBack.value = true
    await router.push({ name: 'LandingPage' })
  } catch (error) {
    console.error('Error navigating back to home:', error)
  } finally {
    isGoingBack.value = false
  }
}

const initializeAdminState = async () => {
  try {
    const adminQuery = query(collection(db, 'admins'))
    const adminSnapshot = await getDocs(adminQuery)
    
    if (!adminSnapshot.empty) {
      isAdminExists.value = true
      if (activeTab.value === 'register') {
        activeTab.value = 'login'
      }
      showRegisterTab.value = false
    } else {
      isAdminExists.value = false
      activeTab.value = 'register'
      showRegisterTab.value = true
    }
  } catch (err) {
    console.error('Error checking admin state:', err)
    alertMessage.value = 'Failed to check admin status. Please try again later.'
    alertType.value = 'error'
  }
}

const handleLogin = async () => {
  try {
    isLoading.value = true
    alertMessage.value = ''
    
    const { user } = await signInWithEmailAndPassword(auth, loginData.email, loginData.password)
    
    const adminDocRef = doc(db, 'admins', user.uid)
    const adminDocSnapshot = await getDoc(adminDocRef)
    
    if (!adminDocSnapshot.exists()) {
      alertMessage.value = 'Access denied. This account is not an admin.'
      alertType.value = 'error'
      await auth.signOut()
      return
    }
    
    alertMessage.value = 'Login successful! Redirecting to Admin Dashboard...'
    alertType.value = 'success'
    
    setTimeout(async () => {
      try {
        await router.push({ name: 'AdminDashboard' })
      } catch (err) {
        console.error('Navigation error:', err)
        alertMessage.value = 'Failed to navigate to dashboard. Please try again.'
        alertType.value = 'error'
      }
    }, 1200)
    
  } catch (err) {
    console.error('Login error:', err)
    if (err.code === 'auth/invalid-credential' || err.code === 'auth/wrong-password') {
      alertMessage.value = 'Invalid email or password. Please check your credentials.'
    } else if (err.code === 'auth/user-not-found') {
      alertMessage.value = 'No admin account found with that email.'
    } else {
      alertMessage.value = err.message || 'Failed to login. Please try again.'
    }
    alertType.value = 'error'
  } finally {
    isLoading.value = false
  }
}

const createAdminAccount = async () => {
  try {
    isLoading.value = true
    alertMessage.value = ''

    if (!ADMIN_SECURITY_CODE) {
      throw new Error('Admin security code is not configured. Please contact the system administrator.')
    }

    if (adminData.securityCode !== ADMIN_SECURITY_CODE) {
      throw new Error('Invalid admin security code')
    }

    if (adminData.password !== adminData.confirmPassword) {
      throw new Error('Passwords do not match')
    }

    const { user } = await createUserWithEmailAndPassword(
      auth,
      adminData.email,
      adminData.password
    )

    await updateProfile(user, {
      displayName: `${adminData.firstName} ${adminData.lastName}`
    })

    await setDoc(doc(db, 'admins', user.uid), {
      firstName: adminData.firstName,
      lastName: adminData.lastName,
      email: adminData.email,
      isAdmin: true,
      createdAt: new Date().toISOString()
    })

    alertMessage.value = 'Admin account created successfully!'
    alertType.value = 'success'
    isAdminExists.value = true
    activeTab.value = 'login'

    adminData.firstName = ''
    adminData.lastName = ''
    adminData.email = ''
    adminData.password = ''
    adminData.confirmPassword = ''
    adminData.securityCode = ''
  } catch (err) {
    console.error('Error creating admin:', err)
    alertMessage.value = err.message
    alertType.value = 'error'
  } finally {
    isLoading.value = false
  }
}

const openForgotPasswordModal = () => {
  showForgotPassword.value = true
  resetEmail.value = loginData.email
}

const handleForgotPassword = async () => {
  try {
    isResetting.value = true
    alertMessage.value = ''
    await sendPasswordResetEmail(auth, resetEmail.value)
    alertMessage.value = 'Password reset email sent!'
    alertType.value = 'success'
    showForgotPassword.value = false
    resetEmail.value = ''
  } catch (err) {
    console.error('Error sending reset email:', err)
    alertMessage.value = err.message
    alertType.value = 'error'
  } finally {
    isResetting.value = false
  }
}

onMounted(async () => {
  console.log('ADMIN_SECURITY_CODE from env:', ADMIN_SECURITY_CODE ? 'loaded' : 'MISSING')
  await initializeAdminState()
})

watch([isAdminExists, showRegisterTab], ([adminExists, showRegister]) => {
  console.log('State changed - Admin exists:', adminExists, 'Show register:', showRegister)
}, { immediate: true })
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes float-slow {
  0%, 100% { transform: translateY(0px) translateX(0px); }
  50% { transform: translateY(-15px) translateX(10px); }
}
@keyframes float-slower {
  0%, 100% { transform: translateY(0px) translateX(0px); }
  50% { transform: translateY(-20px) translateX(-15px); }
}
@keyframes drop-slow {
  0% { transform: translateY(-10px); opacity: 0.3; }
  50% { transform: translateY(10px); opacity: 0.7; }
  100% { transform: translateY(-10px); opacity: 0.3; }
}
@keyframes drop-medium {
  0% { transform: translateY(-8px); opacity: 0.4; }
  50% { transform: translateY(8px); opacity: 0.8; }
  100% { transform: translateY(-8px); opacity: 0.4; }
}
@keyframes drop-fast {
  0% { transform: translateY(-6px); opacity: 0.4; }
  50% { transform: translateY(6px); opacity: 0.9; }
  100% { transform: translateY(-6px); opacity: 0.4; }
}
.animate-float-slow {
  animation: float-slow 12s ease-in-out infinite;
}
.animate-float-slower {
  animation: float-slower 16s ease-in-out infinite;
}
.animate-drop-slow {
  animation: drop-slow 10s ease-in-out infinite;
}
.animate-drop-medium {
  animation: drop-medium 7s ease-in-out infinite;
}
.animate-drop-fast {
  animation: drop-fast 5s ease-in-out infinite;
}
</style>
