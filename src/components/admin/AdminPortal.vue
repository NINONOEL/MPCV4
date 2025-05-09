<template>
  <div class="min-h-screen bg-[#00205F] relative overflow-hidden">
    <!-- Main Content -->
    <div class="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <div class="w-full max-w-md">
        <!-- Logo -->
        <div class="text-center mb-10">
          <h1 class="text-4xl font-bold text-white mb-3 tracking-tight">
            Mindoro Paint Center
          </h1>
          <div class="h-1 w-32 bg-blue-400 mx-auto rounded-full"></div>
        </div>
        
        <!-- Form Card -->
        <div class="bg-[#cce7f8] rounded-lg shadow-2xl overflow-hidden">
          <!-- Tabs -->
          <div class="flex">
            <button 
              @click="activeTab = 'login'"
              class="flex-1 py-4 text-center font-medium transition-all duration-300"
              :class="activeTab === 'login' ? 'text-[#00205F] bg-[#cce7f8] border-b-2 border-[#00205F]' : 'text-[#00205F]/70 bg-[#b8ddf5] hover:bg-[#cce7f8]/90'"
            >
              <span class="flex justify-center items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
                Login
              </span>
            </button>
            <button 
              v-if="showRegisterTab"
              @click="activeTab = 'register'"
              class="flex-1 py-4 text-center font-medium transition-all duration-300"
              :class="activeTab === 'register' ? 'text-[#00205F] bg-[#cce7f8] border-b-2 border-[#00205F]' : 'text-[#00205F]/70 bg-[#b8ddf5] hover:bg-[#cce7f8]/90'"
            >
              <span class="flex justify-center items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>
                Register
              </span>
            </button>
          </div>

          <div class="p-8 space-y-6">
            <!-- Header -->
            <div class="text-center space-y-2">
              <h2 class="text-3xl font-bold text-[#00205F] tracking-tight">
                {{ activeTab === 'login' ? 'Admin Login' : 'Create Admin Account' }}
              </h2>
              <p class="text-[#00205F]/70">
                {{ activeTab === 'login' ? 'Login to access the administrator dashboard' : 'Set up your administrator account to manage the system' }}
              </p>
            </div>

            <!-- Admin Registration Form -->
            <form v-if="activeTab === 'register'" @submit.prevent="createAdminAccount" class="space-y-6">
              <!-- Registration Security Code -->
              <div class="space-y-2">
                <label for="securityCode" class="block text-sm font-medium text-[#00205F]">
                  Admin Security Code
                </label>
                <div class="relative group">
                  <ShieldIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#00205F]/40 group-focus-within:text-[#00205F] transition-colors duration-200" />
                  <input 
                    type="password" 
                    id="securityCode" 
                    v-model="adminData.securityCode" 
                    required 
                    class="w-full pl-10 pr-4 py-3 rounded-lg border border-[#00205F]/10 bg-white focus:outline-none focus:ring-2 focus:ring-[#00205F]/20 focus:border-[#00205F]/30 transition-all duration-200 text-[#00205F] placeholder-[#00205F]/40 shadow-sm"
                    placeholder="Enter admin security code"
                  />
                </div>
              </div>

              <!-- Last Name Field -->
              <div class="space-y-2">
                <label for="lastName" class="block text-sm font-medium text-[#00205F]">
                  Last Name
                </label>
                <div class="relative group">
                  <UserIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#00205F]/40 group-focus-within:text-[#00205F] transition-colors duration-200" />
                  <input
                    type="text"
                    id="lastName" 
                    v-model="adminData.lastName" 
                    required 
                    class="w-full pl-10 pr-4 py-3 rounded-lg border border-[#00205F]/10 bg-white focus:outline-none focus:ring-2 focus:ring-[#00205F]/20 focus:border-[#00205F]/30 transition-all duration-200 text-[#00205F] placeholder-[#00205F]/40 shadow-sm"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <!-- First Name Field -->
              <div class="space-y-2">
                <label for="firstName" class="block text-sm font-medium text-[#00205F]">
                  First Name
                </label>
                <div class="relative group">
                  <UserIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#00205F]/40 group-focus-within:text-[#00205F] transition-colors duration-200" />
                  <input 
                    type="text" 
                    id="firstName" 
                    v-model="adminData.firstName" 
                    required 
                    class="w-full pl-10 pr-4 py-3 rounded-lg border border-[#00205F]/10 bg-white focus:outline-none focus:ring-2 focus:ring-[#00205F]/20 focus:border-[#00205F]/30 transition-all duration-200 text-[#00205F] placeholder-[#00205F]/40 shadow-sm"
                    placeholder="Enter your first name"
                  />
                </div>
              </div>

              <!-- Email Field -->
              <div class="space-y-2">
                <label for="email" class="block text-sm font-medium text-[#00205F]">
                  Email
                </label>
                <div class="relative group">
                  <MailIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#00205F]/40 group-focus-within:text-[#00205F] transition-colors duration-200" />
                  <input 
                    type="email" 
                    id="email" 
                    v-model="adminData.email" 
                    required 
                    class="w-full pl-10 pr-4 py-3 rounded-lg border border-[#00205F]/10 bg-white focus:outline-none focus:ring-2 focus:ring-[#00205F]/20 focus:border-[#00205F]/30 transition-all duration-200 text-[#00205F] placeholder-[#00205F]/40 shadow-sm"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <!-- Password Field -->
              <div class="space-y-2">
                <label for="password" class="block text-sm font-medium text-[#00205F]">
                  Password
                </label>
                <div class="relative group">
                  <LockIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#00205F]/40 group-focus-within:text-[#00205F] transition-colors duration-200" />
                  <input 
                    :type="showPassword ? 'text' : 'password'" 
                    id="password" 
                    v-model="adminData.password" 
                    required 
                    class="w-full pl-10 pr-12 py-3 rounded-lg border border-[#00205F]/10 bg-white focus:outline-none focus:ring-2 focus:ring-[#00205F]/20 focus:border-[#00205F]/30 transition-all duration-200 text-[#00205F] placeholder-[#00205F]/40 shadow-sm"
                    placeholder="Create a strong password"
                    minlength="8"
                  />
                  <button 
                    type="button" 
                    class="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#00205F]/40 hover:text-[#00205F]/60 focus:outline-none transition-colors duration-200"
                    @click="showPassword = !showPassword"
                  >
                    <EyeIcon v-if="!showPassword" class="h-5 w-5" />
                    <EyeOffIcon v-else class="h-5 w-5" />
                  </button>
                </div>
              </div>

              <!-- Confirm Password Field -->
              <div class="space-y-2">
                <label for="confirmPassword" class="block text-sm font-medium text-[#00205F]">
                  Confirm Password
                </label>
                <div class="relative group">
                  <LockIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#00205F]/40 group-focus-within:text-[#00205F] transition-colors duration-200" />
                  <input 
                    :type="showConfirmPassword ? 'text' : 'password'" 
                    id="confirmPassword" 
                    v-model="adminData.confirmPassword" 
                    required 
                    class="w-full pl-10 pr-12 py-3 rounded-lg border border-[#00205F]/10 bg-white focus:outline-none focus:ring-2 focus:ring-[#00205F]/20 focus:border-[#00205F]/30 transition-all duration-200 text-[#00205F] placeholder-[#00205F]/40 shadow-sm"
                    placeholder="Confirm your password"
                  />
                  <button 
                    type="button" 
                    class="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#00205F]/40 hover:text-[#00205F]/60 focus:outline-none transition-colors duration-200"
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
                class="w-full bg-[#00205F] hover:bg-[#002c85] text-white py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                :disabled="isLoading"
              >
                <LoaderIcon v-if="isLoading" class="animate-spin h-5 w-5" />
                <span>{{ isLoading ? 'Creating Account...' : 'Create Admin Account' }}</span>
              </button>
            </form>

            <!-- Admin Login Form -->
            <form v-if="activeTab === 'login'" @submit.prevent="loginAdmin" class="space-y-6">
              <!-- Email Field -->
              <div class="space-y-2">
                <label for="loginEmail" class="block text-sm font-medium text-[#00205F]">
                  Email
                </label>
                <div class="relative group">
                  <MailIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#00205F]/40 group-focus-within:text-[#00205F] transition-colors duration-200" />
                  <input 
                    type="email" 
                    id="loginEmail" 
                    v-model="loginData.email" 
                    required 
                    class="w-full pl-10 pr-4 py-3 rounded-lg border border-[#00205F]/10 bg-white focus:outline-none focus:ring-2 focus:ring-[#00205F]/20 focus:border-[#00205F]/30 transition-all duration-200 text-[#00205F] placeholder-[#00205F]/40 shadow-sm"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <!-- Password Field -->
              <div class="space-y-2">
                <label for="loginPassword" class="block text-sm font-medium text-[#00205F]">
                  Password
                </label>
                <div class="relative group">
                  <LockIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#00205F]/40 group-focus-within:text-[#00205F] transition-colors duration-200" />
                  <input 
                    :type="showPassword ? 'text' : 'password'" 
                    id="loginPassword" 
                    v-model="loginData.password" 
                    required 
                    class="w-full pl-10 pr-12 py-3 rounded-lg border border-[#00205F]/10 bg-white focus:outline-none focus:ring-2 focus:ring-[#00205F]/20 focus:border-[#00205F]/30 transition-all duration-200 text-[#00205F] placeholder-[#00205F]/40 shadow-sm"
                    placeholder="Enter your password"
                  />
                  <button 
                    type="button" 
                    class="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#00205F]/40 hover:text-[#00205F]/60 focus:outline-none transition-colors duration-200"
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
                    class="text-sm text-[#00205F]/70 hover:text-[#00205F] transition-colors duration-200 hover:underline"
                  >
                    Forgot Password?
                  </button>
                </div>
              </div>

              <!-- Submit Button -->
              <button 
                type="submit" 
                class="w-full bg-[#00205F] hover:bg-[#002c85] text-white py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                :disabled="isLoading"
              >
                <LoaderIcon v-if="isLoading" class="animate-spin h-5 w-5" />
                <span>{{ isLoading ? 'Logging in...' : 'Login' }}</span>
              </button>
              
              <!-- Register Link -->
              <div v-if="!showRegisterTab" class="text-center">
                <p class="text-[#00205F]/70">
                  Don't have an account? 
                  <a href="#" class="text-[#00205F] font-medium hover:underline transition-colors duration-200">Register here</a>
                </p>
              </div>
            </form>

            <!-- Alert Message -->
            <div 
              v-if="alertMessage" 
              :class="[
                'p-4 rounded-lg text-sm font-medium transition-all duration-200',
                alertType === 'success' ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-red-100 text-red-800 border border-red-200'
              ]"
            >
              <div class="flex items-center">
                <div v-if="alertType === 'success'" class="mr-2 text-green-500">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                <div v-else class="mr-2 text-red-500">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                </div>
                {{ alertMessage }}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Footer -->
      <div class="mt-10 text-center text-white/60 text-sm">
        © 2025 Mindoro Paint Center. All rights reserved.
      </div>
    </div>
  </div>
  
  <!-- Forgot Password Modal -->
  <div v-if="showForgotPassword" class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
    <div class="bg-[#cce7f8] rounded-lg p-6 w-full max-w-md mx-4 shadow-2xl">
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-xl font-bold text-[#00205F]">Reset Password</h3>
        <button 
          type="button" 
          @click="showForgotPassword = false"
          class="text-[#00205F]/60 hover:text-[#00205F] transition-colors duration-200 focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </div>
      <form @submit.prevent="handleForgotPassword">
        <div class="space-y-4">
          <div class="space-y-2">
            <label for="resetEmail" class="block text-sm font-medium text-[#00205F]">
              Email Address
            </label>
            <div class="relative group">
              <MailIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#00205F]/40 group-focus-within:text-[#00205F] transition-colors duration-200" />
              <input 
                type="email" 
                id="resetEmail" 
                v-model="resetEmail" 
                required 
                class="w-full pl-10 pr-4 py-3 rounded-lg border border-[#00205F]/10 bg-white focus:outline-none focus:ring-2 focus:ring-[#00205F]/20 focus:border-[#00205F]/30 transition-all duration-200 text-[#00205F] placeholder-[#00205F]/40 shadow-sm"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div class="flex gap-3 pt-2">
            <button 
              type="button" 
              @click="showForgotPassword = false"
              class="flex-1 px-4 py-3 border border-[#00205F]/10 rounded-lg text-[#00205F] hover:bg-[#00205F]/5 transition-all duration-200 font-medium"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              class="flex-1 px-4 py-3 bg-[#00205F] text-white rounded-lg hover:bg-[#002c85] transition-all duration-200 disabled:opacity-50 shadow-lg font-medium"
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
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { auth, db } from '@/config/firebase'
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  updateProfile,
  sendPasswordResetEmail
} from 'firebase/auth'
import { doc, setDoc, getDoc, collection, getDocs, query, where } from 'firebase/firestore'
import { 
  User as UserIcon,
  Mail as MailIcon,
  Lock as LockIcon,
  Eye as EyeIcon,
  EyeOff as EyeOffIcon,
  Loader as LoaderIcon,
  Shield as ShieldIcon
} from 'lucide-vue-next'

const router = useRouter()
const isAdminExists = ref(false)
const isLoading = ref(false)
const alertMessage = ref('')
const alertType = ref('success')
const showForgotPassword = ref(false)
const isResetting = ref(false)
const resetEmail = ref('')
const activeTab = ref('login') // Always default to login tab
const showPassword = ref(false);
const showConfirmPassword = ref(false);
const showRegisterTab = ref(false); // Initialize to false

const ADMIN_SECURITY_CODE = "MPC2025";

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

const checkAdminExists = async () => {
  try {
    const adminQuery = query(collection(db, 'admins'));
    const adminSnapshot = await getDocs(adminQuery);
    
    isAdminExists.value = !adminSnapshot.empty;

  } catch (error) {
    console.error("Error checking admin existence:", error);
    isAdminExists.value = false;
  }
};

const loginAdmin = async () => {
  try {
    isLoading.value = true
    alertMessage.value = ''

    const { user } = await signInWithEmailAndPassword(
      auth,
      loginData.email,
      loginData.password
    )

    const adminDoc = await getDoc(doc(db, 'admins', user.uid))
    if (!adminDoc.exists()) {
      await auth.signOut();
      throw new Error('Unauthorized access. Admin privileges required.')
    }

    router.push('/admin/dashboard')
  } catch (err) {
    alertMessage.value = err.message
    alertType.value = 'error'
  } finally {
    isLoading.value = false
  }
}

const createAdminAccount = async () => {
  try {
    isLoading.value = true
    alertMessage.value = ''

    if (adminData.securityCode !== ADMIN_SECURITY_CODE) {
      throw new Error('Invalid admin security code')
    }

    if (adminData.password !== adminData.confirmPassword) {
      throw new Error('Passwords do not match')
    }

    const adminQuery = query(collection(db, 'admins'));
    const adminSnapshot = await getDocs(adminQuery);
    
    if (!adminSnapshot.empty) {
      const existingAdminsCount = adminSnapshot.size;
      
      if (existingAdminsCount > 0) {
        const adminSecurityCheck = await checkAdminSecurityPermission();
        if (!adminSecurityCheck) {
          throw new Error('You do not have permission to create additional admin accounts');
        }
      }
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
    activeTab.value = 'login';

    adminData.firstName = ''
    adminData.lastName = ''
    adminData.email = ''
    adminData.password = ''
    adminData.confirmPassword = ''
    adminData.securityCode = ''
  } catch (err) {
    alertMessage.value = err.message
    alertType.value = 'error'
  } finally {
    isLoading.value = false
  }
}

const checkAdminSecurityPermission = async () => {
  return false;
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

const initializeAdminState = async () => {
  await checkAdminExists();
};

onMounted(async () => {
  await initializeAdminState();
  showRegisterTab.value = !isAdminExists.value;
  activeTab.value = isAdminExists.value ? 'login' : 'register';
});
</script>

<style scoped>
/* All animation styles have been removed */
</style>