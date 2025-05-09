<template>
  <div class="min-h-screen bg-gradient-to-br from-[#0F2C59] to-[#164B9A] relative overflow-hidden">
    <!-- Main Content -->
    <div class="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <!-- Logo -->
      <div class="mb-8 text-center">
        <h1 class="text-4xl font-bold text-white mb-2">Mindoro Paint Center</h1>
        <div class="h-1 w-20 bg-gradient-to-r from-[#5483B3] to-[#052659] mx-auto rounded-full"></div>
      </div>
      
      <div class="w-full max-w-md">
        <!-- Form Card -->
        <div class="bg-gradient-to-br from-[#C1E8FF] to-[#C1E8FF]/80 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden animate-fade-in border border-[#5483B3]/20">
          <!-- Tabs -->
          <div class="flex border-b border-[#5483B3]/20">
            <button 
              @click="activeTab = 'login'"
              class="flex-1 py-4 text-center font-medium transition-all duration-300"
              :class="activeTab === 'login' ? 'text-[#021024] border-b-2 border-[#5483B3] bg-[#5483B3]/10' : 'text-[#052659] hover:text-[#021024] hover:bg-[#5483B3]/10'"
            >
              <div class="flex items-center justify-center gap-2">
                <LogIn class="h-5 w-5" />
                <span>Login</span>
              </div>
            </button>
            <button 
              @click="activeTab = 'register'"
              class="flex-1 py-4 text-center font-medium transition-all duration-300"
              :class="activeTab === 'register' ? 'text-[#021024] border-b-2 border-[#5483B3] bg-[#5483B3]/10' : 'text-[#052659] hover:text-[#021024] hover:bg-[#5483B3]/10'"
            >
              <div class="flex items-center justify-center gap-2">
                <UserPlus class="h-5 w-5" />
                <span>Register</span>
              </div>
            </button>
          </div>
  
          <div class="p-8 space-y-6">
            <!-- Header -->
            <div class="text-center space-y-2">
              <h2 class="text-3xl font-bold text-[#021024]">
                {{ activeTab === 'login' ? 'Staff Login' : 'Staff Registration' }}
              </h2>
              <p class="text-[#052659]">
                {{ activeTab === 'login' ? 'Login to access the staff dashboard' : 'Create your staff account' }}
              </p>
            </div>
  
            <!-- Staff Registration Form -->
            <form v-if="activeTab === 'register'" @submit.prevent="createStaffAccount" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <!-- Last Name Field -->
                <div class="space-y-2">
                  <label for="lastName" class="block text-sm font-medium text-[#021024]">
                    Last Name
                  </label>
                  <div class="relative group">
                    <UserIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#052659] group-focus-within:text-[#021024] transition-colors duration-200" />
                    <input 
                      type="text" 
                      id="lastName" 
                      v-model="staffData.lastName" 
                      required 
                      class="w-full pl-10 pr-4 py-3 rounded-xl border border-[#5483B3]/30 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#5483B3]/50 focus:border-[#5483B3] transition-all duration-200"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
  
                <!-- First Name Field -->
                <div class="space-y-2">
                  <label for="firstName" class="block text-sm font-medium text-[#021024]">
                    First Name
                  </label>
                  <div class="relative group">
                    <UserIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#052659] group-focus-within:text-[#021024] transition-colors duration-200" />
                    <input 
                      type="text" 
                      id="firstName" 
                      v-model="staffData.firstName" 
                      required 
                      class="w-full pl-10 pr-4 py-3 rounded-xl border border-[#5483B3]/30 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#5483B3]/50 focus:border-[#5483B3] transition-all duration-200"
                      placeholder="Enter your first name"
                    />
                  </div>
                </div>
              </div>
  
              <!-- Email Field -->
              <div class="space-y-2">
                <label for="email" class="block text-sm font-medium text-[#021024]">
                  Email
                </label>
                <div class="relative group">
                  <MailIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#052659] group-focus-within:text-[#021024] transition-colors duration-200" />
                  <input 
                    type="email" 
                    id="email" 
                    v-model="staffData.email" 
                    required 
                    class="w-full pl-10 pr-4 py-3 rounded-xl border border-[#5483B3]/30 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#5483B3]/50 focus:border-[#5483B3] transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
  
              <!-- Password Field -->
              <div class="space-y-2">
                <label for="password" class="block text-sm font-medium text-[#021024]">
                  Password
                </label>
                <div class="relative group">
                  <LockIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#052659] group-focus-within:text-[#021024] transition-colors duration-200" />
                  <input 
                    :type="showPassword ? 'text' : 'password'" 
                    id="password" 
                    v-model="staffData.password" 
                    required 
                    class="w-full pl-10 pr-12 py-3 rounded-xl border border-[#5483B3]/30 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#5483B3]/50 focus:border-[#5483B3] transition-all duration-200"
                    placeholder="Create a strong password"
                    minlength="8"
                  />
                  <button 
                    type="button" 
                    class="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#052659] hover:text-[#021024] focus:outline-none transition-colors duration-200"
                    @click="showPassword = !showPassword"
                  >
                    <EyeIcon v-if="!showPassword" class="h-5 w-5" />
                    <EyeOffIcon v-else class="h-5 w-5" />
                  </button>
                </div>
              </div>
  
              <!-- Confirm Password Field -->
              <div class="space-y-2">
                <label for="confirmPassword" class="block text-sm font-medium text-[#021024]">
                  Confirm Password
                </label>
                <div class="relative group">
                  <LockIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#052659] group-focus-within:text-[#021024] transition-colors duration-200" />
                  <input 
                    :type="showConfirmPassword ? 'text' : 'password'" 
                    id="confirmPassword" 
                    v-model="staffData.confirmPassword" 
                    required 
                    class="w-full pl-10 pr-12 py-3 rounded-xl border border-[#5483B3]/30 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#5483B3]/50 focus:border-[#5483B3] transition-all duration-200"
                    placeholder="Confirm your password"
                  />
                  <button 
                    type="button" 
                    class="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#052659] hover:text-[#021024] focus:outline-none transition-colors duration-200"
                    @click="showConfirmPassword = !showConfirmPassword"
                  >
                    <EyeIcon v-if="!showConfirmPassword" class="h-5 w-5" />
                    <EyeOffIcon v-else class="h-5 w-5" />
                  </button>
                </div>
              </div>
  
              <!-- Submit Button -->
              <button 
                type="submit" 
                class="w-full bg-gradient-to-r from-[#052659] to-[#021024] hover:from-[#021024] hover:to-[#052659] text-white py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                :disabled="isLoading"
              >
                <LoaderIcon v-if="isLoading" class="animate-spin h-5 w-5" />
                <span>{{ isLoading ? 'Creating Account...' : 'Create Staff Account' }}</span>
              </button>
  
              <!-- Login Link -->
              <p class="text-center text-[#052659]">
                Already have an account? 
                <button 
                  type="button"
                  @click="activeTab = 'login'"
                  class="text-[#021024] hover:text-[#052659] font-medium underline underline-offset-2"
                >
                  Login here
                </button>
              </p>
            </form>
  
            <!-- Staff Login Form -->
            <form v-if="activeTab === 'login'" @submit.prevent="loginStaff" class="space-y-6">
              <!-- Email Field -->
              <div class="space-y-2">
                <label for="loginEmail" class="block text-sm font-medium text-[#021024]">
                  Email
                </label>
                <div class="relative group">
                  <MailIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#052659] group-focus-within:text-[#021024] transition-colors duration-200" />
                  <input 
                    type="email" 
                    id="loginEmail" 
                    v-model="loginData.email" 
                    required 
                    class="w-full pl-10 pr-4 py-3 rounded-xl border border-[#5483B3]/30 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#5483B3]/50 focus:border-[#5483B3] transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
  
              <!-- Password Field -->
              <div class="space-y-2">
                <label for="loginPassword" class="block text-sm font-medium text-[#021024]">
                  Password
                </label>
                <div class="relative group">
                  <LockIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#052659] group-focus-within:text-[#021024] transition-colors duration-200" />
                  <input 
                    :type="showPassword ? 'text' : 'password'" 
                    id="loginPassword" 
                    v-model="loginData.password" 
                    required 
                    class="w-full pl-10 pr-12 py-3 rounded-xl border border-[#5483B3]/30 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#5483B3]/50 focus:border-[#5483B3] transition-all duration-200"
                    placeholder="Enter your password"
                  />
                  <button 
                    type="button" 
                    class="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#052659] hover:text-[#021024] focus:outline-none transition-colors duration-200"
                    @click="showPassword = !showPassword"
                  >
                    <EyeIcon v-if="!showPassword" class="h-5 w-5" />
                    <EyeOffIcon v-else class="h-5 w-5" />
                  </button>
                </div>
                <div class="flex justify-end">
                  <button 
                    type="button"
                    @click="showForgotPassword = true"
                    class="text-sm text-[#052659] hover:text-[#021024] transition-colors font-medium"
                  >
                    Forgot Password?
                  </button>
                </div>
              </div>
  
              <!-- Submit Button -->
              <button 
                type="submit" 
                class="w-full bg-gradient-to-r from-[#052659] to-[#021024] hover:from-[#021024] hover:to-[#052659] text-white py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                :disabled="isLoading"
              >
                <LoaderIcon v-if="isLoading" class="animate-spin h-5 w-5" />
                <span>{{ isLoading ? 'Logging in...' : 'Login' }}</span>
              </button>
              
              <!-- Register Link -->
              <p class="text-center text-[#052659]">
                Don't have an account? 
                <button 
                  type="button"
                  @click="activeTab = 'register'"
                  class="text-[#021024] hover:text-[#052659] font-medium underline underline-offset-2"
                >
                  Register here
                </button>
              </p>
            </form>
  
            <!-- Alert Message -->
            <div 
              v-if="alertMessage" 
              :class="[
                'p-4 rounded-xl text-sm font-medium transition-all duration-300 animate-fade-in',
                alertType === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'
              ]"
            >
              <div class="flex items-center gap-2">
                <CheckCircle v-if="alertType === 'success'" class="h-5 w-5 text-green-500" />
                <AlertCircle v-else class="h-5 w-5 text-red-500" />
                {{ alertMessage }}
              </div>
            </div>
          </div>
        </div>
        
        <!-- Footer -->
        <div class="mt-6 text-center text-white text-sm">
          <p>© 2025 Mindoro Paint Center. All rights reserved.</p>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Forgot Password Modal -->
  <div v-if="showForgotPassword" class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in">
    <div class="bg-gradient-to-br from-[#C1E8FF] to-[#C1E8FF]/80 rounded-2xl p-8 w-full max-w-md mx-4 shadow-2xl border border-[#5483B3]/20">
      <div class="flex justify-between items-center mb-6">
        <h3 class="text-xl font-bold text-[#021024]">Reset Password</h3>
        <button 
          @click="showForgotPassword = false"
          class="text-[#052659] hover:text-[#021024] transition-colors"
        >
          <X class="h-5 w-5" />
        </button>
      </div>
      
      <form @submit.prevent="handleForgotPassword">
        <div class="space-y-6">
          <div class="space-y-2">
            <label for="resetEmail" class="block text-sm font-medium text-[#021024]">
              Email Address
            </label>
            <div class="relative group">
              <MailIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#052659] group-focus-within:text-[#021024] transition-colors duration-200" />
              <input 
                type="email" 
                id="resetEmail" 
                v-model="resetEmail" 
                required 
                class="w-full pl-10 pr-4 py-3 rounded-xl border border-[#5483B3]/30 bg-white/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-[#5483B3]/50 focus:border-[#5483B3] transition-all duration-200"
                placeholder="Enter your email"
              />
            </div>
            <p class="text-sm text-[#052659] mt-2">
              We'll send you an email with instructions to reset your password.
            </p>
          </div>
          <div class="flex gap-3">
            <button 
              type="button" 
              @click="showForgotPassword = false"
              class="flex-1 px-4 py-3 border border-[#5483B3]/30 rounded-xl text-[#052659] hover:bg-[#5483B3]/10 transition-all duration-200"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              class="flex-1 px-4 py-3 bg-gradient-to-r from-[#052659] to-[#021024] hover:from-[#021024] hover:to-[#052659] text-white rounded-xl transition-all duration-200 disabled:opacity-50 flex items-center justify-center gap-2 shadow-md"
              :disabled="isResetting"
            >
              <LoaderIcon v-if="isResetting" class="animate-spin h-5 w-5" />
              <span>{{ isResetting ? 'Sending...' : 'Reset Password' }}</span>
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
  X
} from 'lucide-vue-next'

const router = useRouter()
const isLoading = ref(false)
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

    isLoading.value = true
    alertMessage.value = ''

    // Create user with email and password
    const { user } = await createUserWithEmailAndPassword(
      auth,
      staffData.value.email,
      staffData.value.password
    )

    // Add staff data to Firestore
    await setDoc(doc(db, 'staff', user.uid), {
      firstName: staffData.value.firstName,
      lastName: staffData.value.lastName,
      email: staffData.value.email,
      role: 'staff',
      createdAt: new Date().toISOString()
    })

    alertMessage.value = 'Staff account created successfully!'
    alertType.value = 'success'
    activeTab.value = 'login'

    // Reset form
    staffData.value = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  } catch (err) {
    console.error('Error creating staff account:', err)
    alertMessage.value = err.message
    alertType.value = 'error'
  } finally {
    isLoading.value = false
  }
}

const loginStaff = async () => {
  try {
    isLoading.value = true
    alertMessage.value = ''

    const { user } = await signInWithEmailAndPassword(
      auth,
      loginData.value.email,
      loginData.value.password
    )

    // Check if user is a staff member
    const staffDoc = await getDoc(doc(db, 'staff', user.uid))
    if (!staffDoc.exists()) {
      await auth.signOut()
      throw new Error('Unauthorized access. Staff privileges required.')
    }

    router.push('/staff/dashboard')
  } catch (err) {
    console.error('Error logging in:', err)
    alertMessage.value = err.message
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
    alertMessage.value = err.message
    alertType.value = 'error'
  } finally {
    isResetting.value = false
  }
}
</script>
  
<style scoped>
.animate-fade-in {
  animation: fadeIn 0.5s ease-in-out;
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
</style>