<template>
  <div class="min-h-screen relative overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0 z-0">
      <img 
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/top-view-colorful-paint-cans.jpg-78zC5PSDkb02uzttCxHJXuCVzpRioD.jpeg" 
        alt="Colorful paint cans background" 
        class="w-full h-full object-cover"
      />
      <!-- Dark overlay for better text readability -->
      <div class="absolute inset-0 bg-black/50"></div>
    </div>

    <!-- Back to Homepage Button with Loading State -->
    <div class="absolute top-6 left-6 z-20">
      <button 
        @click="goToHomepage"
        :disabled="isNavigating"
        class="flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-sm border-2 border-white/30 rounded-xl text-gray-800 hover:bg-white hover:border-white/50 transition-all duration-200 shadow-lg hover:shadow-xl font-semibold disabled:opacity-75 disabled:cursor-not-allowed"
        :class="{ 'transform scale-95': isNavigating }"
      >
        <div class="relative flex items-center">
          <!-- Loading Spinner -->
          <LoaderIcon 
            v-if="isNavigating" 
            class="h-5 w-5 animate-spin text-blue-600" 
          />
          <!-- Arrow Icon -->
          <ArrowLeft 
            v-else 
            class="h-5 w-5 transition-transform duration-200" 
            :class="{ 'group-hover:-translate-x-1': !isNavigating }"
          />
        </div>
        <span class="transition-all duration-200">
          {{ isNavigating ? 'Loading...' : 'Back to Homepage' }}
        </span>
      </button>
    </div>

    <!-- Enhanced Background Elements with Paint Colors -->
    <div class="absolute inset-0 z-5">
      <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-red-200 via-orange-200 to-yellow-200 opacity-20 rounded-full filter blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-green-200 via-blue-200 to-purple-200 opacity-20 rounded-full filter blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      <div class="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-pink-200 via-rose-200 to-red-200 opacity-15 rounded-full filter blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
    </div>

    <!-- Main Content -->
    <div class="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <div class="w-full" :class="activeTab === 'register' ? 'max-w-lg' : 'max-w-md'">
        <!-- Enhanced Colorful Header -->
        <div class="text-center mb-8 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 w-full max-w-4xl mx-auto">
          <h1 class="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-center">
            <span class="bg-gradient-to-r from-red-400 via-orange-400 via-yellow-400 via-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg whitespace-nowrap">
              Barcelona Paint Center
            </span>
          </h1>
          <div class="flex justify-center items-center gap-2 mb-4">
            <div class="w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-lg"></div>
            <div class="w-3 h-3 bg-orange-500 rounded-full animate-pulse shadow-lg" style="animation-delay: 0.2s;"></div>
            <div class="w-3 h-3 bg-yellow-500 rounded-full animate-pulse shadow-lg" style="animation-delay: 0.4s;"></div>
            <div class="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg" style="animation-delay: 0.6s;"></div>
            <div class="w-3 h-3 bg-blue-500 rounded-full animate-pulse shadow-lg" style="animation-delay: 0.8s;"></div>
            <div class="w-3 h-3 bg-purple-500 rounded-full animate-pulse shadow-lg" style="animation-delay: 1s;"></div>
            <div class="w-3 h-3 bg-pink-500 rounded-full animate-pulse shadow-lg" style="animation-delay: 1.2s;"></div>
          </div>
          
        </div>
        
        <!-- Enhanced Form Card with Paint Theme -->
        <div class="bg-white/95 backdrop-blur-md border-2 border-white/30 bg-gradient-to-r from-red-100/80 via-yellow-100/80 via-green-100/80 via-blue-100/80 to-purple-100/80 p-0.5 rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300">
          <div class="bg-white/98 backdrop-blur-sm rounded-2xl overflow-hidden">
            <!-- Colorful Tabs -->
            <div class="flex bg-gradient-to-r from-red-50/90 via-orange-50/90 via-yellow-50/90 via-green-50/90 via-blue-50/90 to-purple-50/90 border-b-2 border-gray-100">
              <button 
                @click="activeTab = 'login'"
                class="flex-1 py-4 text-center font-bold transition-all duration-300 relative"
                :class="activeTab === 'login' ? 'text-blue-700 bg-white shadow-lg transform scale-105' : 'text-gray-600 hover:text-gray-900 hover:bg-white/70'"
              >
                <span class="flex justify-center items-center gap-2">
                  <LogIn class="h-5 w-5" />
                  Login
                </span>
                <div v-if="activeTab === 'login'" class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 rounded-t-full"></div>
              </button>
              <button 
                @click="activeTab = 'register'"
                class="flex-1 py-4 text-center font-bold transition-all duration-300 relative"
                :class="activeTab === 'register' ? 'text-purple-700 bg-white shadow-lg transform scale-105' : 'text-gray-600 hover:text-gray-900 hover:bg-white/70'"
              >
                <span class="flex justify-center items-center gap-2">
                  <UserPlus class="h-5 w-5" />
                  Register
                </span>
                <div v-if="activeTab === 'register'" class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 rounded-t-full"></div>
              </button>
            </div>

            <div class="p-6 space-y-6 bg-gradient-to-br from-white/95 via-blue-50/50 to-purple-50/50">
              <!-- Colorful Header -->
              <div class="text-center space-y-3">
                <h2 class="text-3xl font-bold tracking-tight">
                  <span class="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {{ activeTab === 'login' ? 'Staff Login' : 'Create Staff Account' }}
                  </span>
                </h2>
                <p class="text-gray-700 font-medium">
                  {{ activeTab === 'login' ? 'Access your colorful paint management dashboard' : 'Set up your paint center staff account' }}
                </p>
              </div>

              <!-- Staff Registration Form -->
              <form v-if="activeTab === 'register'" @submit.prevent="createStaffAccount" class="space-y-6">
                <!-- First Name Field -->
                <div class="relative group">
                  <UserIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-500 z-10" />
                  <input 
                    type="text" 
                    id="firstName" 
                    v-model="staffData.firstName" 
                    required 
                    class="w-full pl-10 pr-4 py-2.5 rounded-xl border-2 border-blue-200 bg-gradient-to-r from-blue-50/90 to-cyan-50/90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-gray-900 placeholder-gray-500 shadow-lg hover:shadow-xl font-medium backdrop-blur-sm"
                    placeholder="Enter your first name"
                  />
                </div>

                <!-- Last Name Field -->
                <div class="relative group">
                  <UserIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-green-500 z-10" />
                  <input
                    type="text"
                    id="lastName" 
                    v-model="staffData.lastName" 
                    required 
                    class="w-full pl-10 pr-4 py-2.5 rounded-xl border-2 border-green-200 bg-gradient-to-r from-green-50/90 to-emerald-50/90 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 text-gray-900 placeholder-gray-500 shadow-lg hover:shadow-xl font-medium backdrop-blur-sm"
                    placeholder="Enter your last name"
                  />
                </div>

                <!-- Email Field -->
                <div class="relative group">
                  <MailIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-orange-500 z-10" />
                  <input 
                    type="email" 
                    id="email" 
                    v-model="staffData.email" 
                    required 
                    class="w-full pl-10 pr-4 py-2.5 rounded-xl border-2 border-orange-200 bg-gradient-to-r from-orange-50/90 to-yellow-50/90 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 text-gray-900 placeholder-gray-500 shadow-lg hover:shadow-xl font-medium backdrop-blur-sm"
                    placeholder="Enter your email"
                  />
                </div>

                <!-- Password Field -->
                <div class="relative group">
                  <LockIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-red-500 z-10" />
                  <input 
                    :type="showPassword ? 'text' : 'password'" 
                    id="password" 
                    v-model="staffData.password" 
                    required 
                    class="w-full pl-10 pr-12 py-2.5 rounded-xl border-2 border-red-200 bg-gradient-to-r from-red-50/90 to-pink-50/90 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 text-gray-900 placeholder-gray-500 shadow-lg hover:shadow-xl font-medium backdrop-blur-sm"
                    placeholder="Create a strong password"
                    minlength="6"
                  />
                  <button 
                    type="button" 
                    class="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-400 hover:text-red-600 focus:outline-none transition-colors duration-200"
                    @click="showPassword = !showPassword"
                  >
                    <EyeIcon v-if="!showPassword" class="h-5 w-5" />
                    <EyeOffIcon v-else class="h-5 w-5" />
                  </button>
                </div>

                <!-- Confirm Password Field -->
                <div class="relative group">
                  <LockIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-pink-500 z-10" />
                  <input 
                    :type="showConfirmPassword ? 'text' : 'password'" 
                    id="confirmPassword" 
                    v-model="staffData.confirmPassword" 
                    required 
                    class="w-full pl-10 pr-12 py-2.5 rounded-xl border-2 border-pink-200 bg-gradient-to-r from-pink-50/90 to-rose-50/90 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-200 text-gray-900 placeholder-gray-500 shadow-lg hover:shadow-xl font-medium backdrop-blur-sm"
                    placeholder="Confirm your password"
                  />
                  <button 
                    type="button" 
                    class="absolute right-3 top-1/2 transform -translate-y-1/2 text-pink-400 hover:text-pink-600 focus:outline-none transition-colors duration-200"
                    @click="showConfirmPassword = !showConfirmPassword"
                  >
                    <EyeIcon v-if="!showConfirmPassword" class="h-5 w-5" />
                    <EyeOffIcon v-else class="h-5 w-5" />
                  </button>
                </div>

                <!-- Colorful Submit Button -->
                <button 
                  type="submit" 
                  class="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-2xl hover:shadow-3xl transform hover:scale-105"
                  :disabled="isLoading"
                >
                  <LoaderIcon v-if="isLoading" class="animate-spin h-6 w-6" />
                  <UserPlus v-else class="h-6 w-6" />
                  <span>{{ isLoading ? 'Creating Account...' : 'Create Staff Account' }}</span>
                </button>

                <!-- Login Link -->
                <div class="text-center">
                  <p class="text-gray-700 font-medium">
                    Already have an account? 
                    <button 
                      type="button"
                      @click="activeTab = 'login'"
                      class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold hover:from-blue-700 hover:to-purple-700 transition-colors duration-200 underline"
                    >
                      Login here
                    </button>
                  </p>
                </div>
              </form>

              <!-- Staff Login Form -->
              <form v-if="activeTab === 'login'" @submit.prevent="loginStaff" class="space-y-6">
                <!-- Email Field -->
                <div class="relative group">
                  <MailIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-500 z-10" />
                  <input 
                    type="email" 
                    id="loginEmail" 
                    v-model="loginData.email" 
                    required 
                    class="w-full pl-10 pr-4 py-2.5 rounded-xl border-2 border-blue-200 bg-gradient-to-r from-blue-50/90 to-cyan-50/90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-gray-900 placeholder-gray-500 shadow-lg hover:shadow-xl font-medium backdrop-blur-sm"
                    placeholder="Enter your email"
                  />
                </div>

                <!-- Password Field -->
                <div class="relative group">
                  <LockIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-purple-500 z-10" />
                  <input 
                    :type="showPassword ? 'text' : 'password'" 
                    id="loginPassword" 
                    v-model="loginData.password" 
                    required 
                    class="w-full pl-10 pr-12 py-2.5 rounded-xl border-2 border-purple-200 bg-gradient-to-r from-purple-50/90 to-pink-50/90 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 text-gray-900 placeholder-gray-500 shadow-lg hover:shadow-xl font-medium backdrop-blur-sm"
                    placeholder="Enter your password"
                  />
                  <button 
                    type="button" 
                    class="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-400 hover:text-purple-600 focus:outline-none transition-colors duration-200"
                    @click="showPassword = !showPassword"
                  >
                    <EyeIcon v-if="!showPassword" class="h-5 w-5" />
                    <EyeOffIcon v-else class="h-5 w-5" />
                  </button>
                </div>
                <div class="flex justify-end mt-1">
                  <button 
                    type="button"
                    @click="showForgotPassword = true"
                    class="text-sm text-purple-600 hover:text-purple-800 transition-colors duration-200 hover:underline font-semibold"
                  >
                    Forgot Password?
                  </button>
                </div>

                <!-- Colorful Submit Button -->
                <button 
                  type="submit" 
                  class="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-2xl hover:shadow-3xl transform hover:scale-105"
                  :disabled="isLoading"
                >
                  <LoaderIcon v-if="isLoading" class="animate-spin h-6 w-6" />
                  <LogIn v-else class="h-6 w-6" />
                  <span>{{ isLoading ? 'Logging in...' : 'Login to Dashboard' }}</span>
                </button>
                
                <!-- Register Link -->
                <div class="text-center">
                  <p class="text-gray-700 font-medium">
                    Don't have an account? 
                    <button 
                      type="button"
                      @click="activeTab = 'register'"
                      class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold hover:from-blue-700 hover:to-purple-700 transition-colors duration-200 underline"
                    >
                      Register here
                    </button>
                  </p>
                </div>
              </form>

              <!-- Enhanced Alert Message -->
              <div 
                v-if="alertMessage" 
                :class="[
                  'p-4 rounded-xl text-sm font-bold transition-all duration-300 border-2 backdrop-blur-sm',
                  alertType === 'success' ? 'bg-gradient-to-r from-green-50/90 to-emerald-50/90 text-green-800 border-green-300' : 'bg-gradient-to-r from-red-50/90 to-pink-50/90 text-red-800 border-red-300'
                ]"
              >
                <div class="flex items-center">
                  <div v-if="alertType === 'success'" class="mr-3 text-green-600">
                    <CheckCircle class="h-6 w-6" />
                  </div>
                  <div v-else class="mr-3 text-red-600">
                    <AlertCircle class="h-6 w-6" />
                  </div>
                  {{ alertMessage }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Colorful Footer -->
      <div class="mt-10 text-center">
        <p class="text-white font-bold drop-shadow-lg">© 2025 Barcelona Paint Center. All rights reserved.</p>
        <p class="mt-1 bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent font-bold drop-shadow-lg">
          Secure Staff Portal - Paint Your Success! 🎨
        </p>
      </div>
    </div>
  </div>
  
  <!-- Enhanced Forgot Password Modal -->
  <div v-if="showForgotPassword" class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
    <div class="bg-gradient-to-br from-white/95 via-blue-50/90 to-purple-50/90 backdrop-blur-md border-2 border-blue-200 rounded-2xl p-6 w-full max-w-md mx-4 shadow-2xl">
      <div class="flex justify-between items-center mb-6">
        <div class="flex items-center gap-3">
          <div class="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg">
            <KeyIcon class="h-6 w-6 text-white" />
          </div>
          <h3 class="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Reset Password</h3>
        </div>
        <button 
          type="button" 
          @click="showForgotPassword = false"
          class="text-gray-400 hover:text-gray-600 transition-colors duration-200 focus:outline-none p-2 rounded-lg hover:bg-gray-100"
        >
          <X class="h-5 w-5" />
        </button>
      </div>
      <form @submit.prevent="handleForgotPassword">
        <div class="space-y-4">
          <div class="space-y-2">
            <label for="resetEmail" class="block text-sm font-bold text-gray-700">
              Email Address
            </label>
            <div class="relative group">
              <MailIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-blue-400 group-focus-within:text-blue-600 transition-colors duration-200" />
              <input 
                type="email" 
                id="resetEmail" 
                v-model="resetEmail" 
                required 
                class="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-blue-200 bg-gradient-to-r from-blue-50/90 to-cyan-50/90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-gray-900 placeholder-gray-500 shadow-lg font-medium backdrop-blur-sm"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div class="flex gap-3 pt-2">
            <button 
              type="button" 
              @click="showForgotPassword = false"
              class="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl text-gray-700 hover:bg-gray-50 transition-all duration-200 font-bold backdrop-blur-sm"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              class="flex-1 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-200 disabled:opacity-50 shadow-lg font-bold"
              :disabled="isResetting"
            >
              {{ isResetting ? 'Sending...' : 'Reset Password' }}
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { auth, db } from '@/config/firebase'
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  sendPasswordResetEmail
} from 'firebase/auth'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { 
  User as UserIcon,
  Mail as MailIcon,
  Lock as LockIcon,
  Eye as EyeIcon,
  EyeOff as EyeOffIcon,
  Loader as LoaderIcon,
  LogIn,
  UserPlus,
  CheckCircle,
  AlertCircle,
  Key as KeyIcon,
  X,
  ArrowLeft
} from 'lucide-vue-next'

const router = useRouter()
const isLoading = ref(false)
const isNavigating = ref(false) // New loading state for navigation
const isResetting = ref(false)
const alertMessage = ref('')
const alertType = ref('success')
const showForgotPassword = ref(false)
const resetEmail = ref('')
const activeTab = ref('login')
const showPassword = ref(false)
const showConfirmPassword = ref(false)

const loginData = ref({
  email: '',
  password: ''
})

const staffData = ref({
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: ''
})

const createStaffAccount = async () => {
  try {
    if (staffData.value.password !== staffData.value.confirmPassword) {
      throw new Error('Passwords do not match')
    }

    if (staffData.value.password.length < 6) {
      throw new Error('Password must be at least 6 characters long')
    }

    isLoading.value = true
    alertMessage.value = ''

    console.log('Creating staff account with data:', {
      firstName: staffData.value.firstName,
      lastName: staffData.value.lastName,
      email: staffData.value.email
    })

    // Create user with email and password
    const { user } = await createUserWithEmailAndPassword(
      auth,
      staffData.value.email,
      staffData.value.password
    )

    console.log('Firebase Auth user created:', user.uid)

    // Create consistent data structure that matches AdminStaffManagement expectations
    const staffDocData = {
      firstName: staffData.value.firstName.trim(),
      lastName: staffData.value.lastName.trim(),
      fullName: `${staffData.value.firstName.trim()} ${staffData.value.lastName.trim()}`,
      email: staffData.value.email.toLowerCase().trim(),
      role: 'staff', // Default role
      status: 'active', // Default status
      position: 'Staff Member', // Default position instead of staffData.value.position
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      photoURL: null // Default photo
    }

    // Add staff data to Firestore 'staff' collection
    await setDoc(doc(db, 'staff', user.uid), staffDocData)

    console.log('Staff document created in Firestore:', staffDocData)

    alertMessage.value = 'Staff account created successfully! You can now login and will appear in the admin staff management.'
    alertType.value = 'success'
    
    // Switch to login tab after successful registration
    setTimeout(() => {
      activeTab.value = 'login'
      // Pre-fill login email
      loginData.value.email = staffData.value.email
    }, 2000)

    // Reset registration form
    staffData.value = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  } catch (err) {
    console.error('Error creating staff account:', err)
    
    let errorMessage = 'Failed to create account. Please try again.'
    if (err.code === 'auth/email-already-in-use') {
      errorMessage = 'Email is already registered. Please use a different email.'
    } else if (err.code === 'auth/weak-password') {
      errorMessage = 'Password is too weak. Please use a stronger password.'
    } else if (err.code === 'auth/invalid-email') {
      errorMessage = 'Invalid email address format.'
    } else if (err.message) {
      errorMessage = err.message
    }
    
    alertMessage.value = errorMessage
    alertType.value = 'error'
  } finally {
    isLoading.value = false
  }
}

const loginStaff = async () => {
  try {
    isLoading.value = true
    alertMessage.value = ''

    console.log('Attempting to login staff:', loginData.value.email)

    const { user } = await signInWithEmailAndPassword(
      auth,
      loginData.value.email,
      loginData.value.password
    )

    console.log('Firebase Auth login successful:', user.uid)

    // Check if user is a staff member
    const staffDoc = await getDoc(doc(db, 'staff', user.uid))
    if (!staffDoc.exists()) {
      console.error('Staff document not found for user:', user.uid)
      await auth.signOut()
      throw new Error('Unauthorized access. Staff privileges required.')
    }

    // Store user data for quick access
    const staffData = staffDoc.data()
    console.log('Staff data retrieved:', staffData)
    
    const userData = {
      uid: user.uid,
      email: user.email,
      fullName: staffData.fullName || `${staffData.firstName} ${staffData.lastName}`,
      firstName: staffData.firstName,
      lastName: staffData.lastName,
      role: staffData.role || 'staff',
      position: staffData.position || 'Staff Member'
    }
    
    localStorage.setItem('mindoro-user-data', JSON.stringify(userData))

    alertMessage.value = 'Login successful! Redirecting to dashboard...'
    alertType.value = 'success'

    // Redirect after a short delay
    setTimeout(() => {
      router.push('/staff/dashboard')
    }, 1000)
  } catch (err) {
    console.error('Error logging in:', err)
    
    let errorMessage = 'Login failed. Please check your credentials.'
    if (err.code === 'auth/user-not-found') {
      errorMessage = 'No account found with this email address.'
    } else if (err.code === 'auth/wrong-password') {
      errorMessage = 'Incorrect password. Please try again.'
    } else if (err.code === 'auth/invalid-email') {
      errorMessage = 'Invalid email address format.'
    } else if (err.code === 'auth/too-many-requests') {
      errorMessage = 'Too many failed attempts. Please try again later.'
    } else if (err.message) {
      errorMessage = err.message
    }
    
    alertMessage.value = errorMessage
    alertType.value = 'error'
  } finally {
    isLoading.value = false
  }
}

const handleForgotPassword = async () => {
  try {
    isResetting.value = true
    alertMessage.value = ''
    await sendPasswordResetEmail(auth, resetEmail.value)
    alertMessage.value = 'Password reset email sent!'
    alertType.value = 'success'
    showForgotPassword.value = false
  } catch (err) {
    console.error('Error sending password reset email:', err)
    alertMessage.value = err.message
    alertType.value = 'error'
  } finally {
    isResetting.value = false
  }
}

// Enhanced goToHomepage function with loading state
const goToHomepage = async () => {
  try {
    isNavigating.value = true
    
    // Add a small delay to show the loading state
    await new Promise(resolve => setTimeout(resolve, 800))
    
    router.push('/')
  } catch (error) {
    console.error('Navigation error:', error)
    // Reset loading state on error
    isNavigating.value = false
  }
}
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

/* Enhanced animations */
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

/* Enhanced shadow for cards */
.shadow-3xl {
  box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
}

/* Paint drop animations */
@keyframes bounce {
  0%, 20%, 53%, 80%, 100% {
    transform: translate3d(0,0,0);
  }
  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }
  70% {
    transform: translate3d(0, -15px, 0);
  }
  90% {
    transform: translate3d(0, -4px, 0);
  }
}
</style>
