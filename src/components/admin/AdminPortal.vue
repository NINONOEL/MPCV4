<template>
  <div class="min-h-screen bg-gradient-to-br from-pale-blue via-light-blue to-medium-blue relative overflow-hidden">
    <!-- Background Effects -->
    <div class="absolute inset-0">
      <div class="absolute top-0 left-0 w-96 h-96 bg-white opacity-10 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full filter blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
    </div>

    <!-- Main Content -->
    <div class="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
      <div class="w-full max-w-md">
        <!-- Form Card -->
        <div class="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden animate-fade-in">
          <!-- Tabs -->
          <div class="flex border-b border-navy/10">
            <button 
              @click="activeTab = 'login'"
              class="flex-1 py-4 text-center font-medium transition-colors"
              :class="activeTab === 'login' ? 'text-navy border-b-2 border-navy' : 'text-navy/60 hover:text-navy/80'"
            >
              Login
            </button>
            <button 
              v-if="showRegisterTab"
              @click="activeTab = 'register'"
              class="flex-1 py-4 text-center font-medium transition-colors"
              :class="activeTab === 'register' ? 'text-navy border-b-2 border-navy' : 'text-navy/60 hover:text-navy/80'"
            >
              Register
            </button>
          </div>

          <div class="p-8 space-y-6">
            <!-- Header -->
            <div class="text-center space-y-2">
              <h2 class="text-3xl font-bold text-navy">
                {{ activeTab === 'login' ? 'Admin Login' : 'Create Admin Account' }}
              </h2>
              <p class="text-dark-blue/80">
                {{ activeTab === 'login' ? 'Login to access the administrator dashboard' : 'Set up your administrator account to manage the system' }}
              </p>
            </div>

            <!-- Admin Registration Form -->
            <form v-if="activeTab === 'register'" @submit.prevent="createAdminAccount" class="space-y-6">
              <!-- Registration Security Code -->
              <div class="space-y-2">
                <label for="securityCode" class="block text-sm font-medium text-navy">
                  Admin Security Code
                </label>
                <div class="relative">
                  <ShieldIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-navy/40" />
                  <input 
                    type="password" 
                    id="securityCode" 
                    v-model="adminData.securityCode" 
                    required 
                    class="w-full pl-10 pr-4 py-3 rounded-xl border border-navy/10 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy/30 transition-all duration-200"
                    placeholder="Enter admin security code"
                  />
                </div>
              </div>

              <!-- Last Name Field -->
              <div class="space-y-2">
                <label for="lastName" class="block text-sm font-medium text-navy">
                  Last Name
                </label>
                <div class="relative">
                  <UserIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-navy/40" />
                  <input 
                    type="text" 
                    id="lastName" 
                    v-model="adminData.lastName" 
                    required 
                    class="w-full pl-10 pr-4 py-3 rounded-xl border border-navy/10 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy/30 transition-all duration-200"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <!-- First Name Field -->
              <div class="space-y-2">
                <label for="firstName" class="block text-sm font-medium text-navy">
                  First Name
                </label>
                <div class="relative">
                  <UserIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-navy/40" />
                  <input 
                    type="text" 
                    id="firstName" 
                    v-model="adminData.firstName" 
                    required 
                    class="w-full pl-10 pr-4 py-3 rounded-xl border border-navy/10 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy/30 transition-all duration-200"
                    placeholder="Enter your first name"
                  />
                </div>
              </div>

              <!-- Email Field -->
              <div class="space-y-2">
                <label for="email" class="block text-sm font-medium text-navy">
                  Email
                </label>
                <div class="relative">
                  <MailIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-navy/40" />
                  <input 
                    type="email" 
                    id="email" 
                    v-model="adminData.email" 
                    required 
                    class="w-full pl-10 pr-4 py-3 rounded-xl border border-navy/10 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy/30 transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <!-- Password Field -->
              <div class="space-y-2">
                <label for="password" class="block text-sm font-medium text-navy">
                  Password
                </label>
                <div class="relative">
                  <LockIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-navy/40" />
                  <input 
                    :type="showPassword ? 'text' : 'password'" 
                    id="password" 
                    v-model="adminData.password" 
                    required 
                    class="w-full pl-10 pr-12 py-3 rounded-xl border border-navy/10 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy/30 transition-all duration-200"
                    placeholder="Create a strong password"
                    minlength="8"
                  />
                  <button 
                    type="button" 
                    class="absolute right-3 top-1/2 transform -translate-y-1/2 text-navy/40 hover:text-navy/60 focus:outline-none"
                    @click="showPassword = !showPassword"
                  >
                    <EyeIcon v-if="!showPassword" class="h-5 w-5" />
                    <EyeOffIcon v-else class="h-5 w-5" />
                  </button>
                </div>
              </div>

              <!-- Confirm Password Field -->
              <div class="space-y-2">
                <label for="confirmPassword" class="block text-sm font-medium text-navy">
                  Confirm Password
                </label>
                <div class="relative">
                  <LockIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-navy/40" />
                  <input 
                    :type="showConfirmPassword ? 'text' : 'password'" 
                    id="confirmPassword" 
                    v-model="adminData.confirmPassword" 
                    required 
                    class="w-full pl-10 pr-12 py-3 rounded-xl border border-navy/10 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy/30 transition-all duration-200"
                    placeholder="Confirm your password"
                  />
                  <button 
                    type="button" 
                    class="absolute right-3 top-1/2 transform -translate-y-1/2 text-navy/40 hover:text-navy/60 focus:outline-none"
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
                class="w-full bg-navy hover:bg-navy/90 text-white py-3 rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
                <label for="loginEmail" class="block text-sm font-medium text-navy">
                  Email
                </label>
                <div class="relative">
                  <MailIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-navy/40" />
                  <input 
                    type="email" 
                    id="loginEmail" 
                    v-model="loginData.email" 
                    required 
                    class="w-full pl-10 pr-4 py-3 rounded-xl border border-navy/10 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy/30 transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <!-- Password Field -->
              <div class="space-y-2">
                <label for="loginPassword" class="block text-sm font-medium text-navy">
                  Password
                </label>
                <div class="relative">
                  <LockIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-navy/40" />
                  <input 
                    :type="showPassword ? 'text' : 'password'" 
                    id="loginPassword" 
                    v-model="loginData.password" 
                    required 
                    class="w-full pl-10 pr-12 py-3 rounded-xl border border-navy/10 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy/30 transition-all duration-200"
                    placeholder="Enter your password"
                  />
                  <button 
                    type="button" 
                    class="absolute right-3 top-1/2 transform -translate-y-1/2 text-navy/40 hover:text-navy/60 focus:outline-none"
                    @click="showPassword = !showPassword"
                  >
                    <EyeIcon v-if="!showPassword" class="h-5 w-5" />
                    <EyeOffIcon v-else class="h-5 w-5" />
                  </button>
                </div>
                <button 
                  type="button"
                  @click="showForgotPassword = true"
                  class="text-sm text-navy/60 hover:text-navy transition-colors text-right w-full"
                >
                  Forgot Password?
                </button>
              </div>

              <!-- Submit Button -->
              <button 
                type="submit" 
                class="w-full bg-navy hover:bg-navy/90 text-white py-3 rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                :disabled="isLoading"
              >
                <LoaderIcon v-if="isLoading" class="animate-spin h-5 w-5" />
                <span>{{ isLoading ? 'Logging in...' : 'Login' }}</span>
              </button>
            </form>

            <!-- Alert Message -->
            <div 
              v-if="alertMessage" 
              :class="[
                'p-4 rounded-xl text-sm font-medium transition-all duration-200',
                alertType === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
              ]"
            >
              {{ alertMessage }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Add this after your login form -->
  <div v-if="showForgotPassword" class="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
    <div class="bg-white rounded-xl p-6 w-full max-w-md mx-4">
      <h3 class="text-xl font-bold text-navy mb-4">Reset Password</h3>
      <form @submit.prevent="handleForgotPassword">
        <div class="space-y-4">
          <div class="space-y-2">
            <label for="resetEmail" class="block text-sm font-medium text-navy">
              Email Address
            </label>
            <div class="relative">
              <MailIcon class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-navy/40" />
              <input 
                type="email" 
                id="resetEmail" 
                v-model="resetEmail" 
                required 
                class="w-full pl-10 pr-4 py-3 rounded-xl border border-navy/10 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-navy/20 focus:border-navy/30 transition-all duration-200"
                placeholder="Enter your email"
              />
            </div>
          </div>
          <div class="flex gap-3">
            <button 
              type="button" 
              @click="showForgotPassword = false"
              class="flex-1 px-4 py-2 border border-navy/10 rounded-lg text-navy hover:bg-navy/5 transition-colors"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              class="flex-1 px-4 py-2 bg-navy text-white rounded-lg hover:bg-navy/90 transition-colors disabled:opacity-50"
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
const activeTab = ref('login')
const showPassword = ref(false);
const showConfirmPassword = ref(false);
const showRegisterTab = ref(false);

// Admin security code - in a real app, this would be stored securely in environment variables
// or managed through a more secure system
const ADMIN_SECURITY_CODE = "YourNewSecurityCode123";  // Replace with your preferred code

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

    // Verify security code
    if (adminData.securityCode !== ADMIN_SECURITY_CODE) {
      throw new Error('Invalid admin security code')
    }

    if (adminData.password !== adminData.confirmPassword) {
      throw new Error('Passwords do not match')
    }

    // Check if an admin already exists
    const adminQuery = query(collection(db, 'admins'));
    const adminSnapshot = await getDocs(adminQuery);
    
    if (!adminSnapshot.empty) {
      // Check if this is a first-time setup or if there's already an admin
      const existingAdminsCount = adminSnapshot.size;
      
      if (existingAdminsCount > 0) {
        // Check if the current user has permission to create another admin
        // This could be enhanced with additional security checks
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

    // Reset form
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
  // This is a placeholder for a more robust security check
  // In a real application, you might check for a specific admin role or permission
  return false; // By default, don't allow creating additional admins
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

const checkAdminExists = async () => {
  try {
    // Check if any admin exists in the system
    const adminQuery = query(collection(db, 'admins'));
    const adminSnapshot = await getDocs(adminQuery);
    
    if (adminSnapshot.empty) {
      // No admins exist, show register tab
      isAdminExists.value = false;
      showRegisterTab.value = true;
    } else {
      // Admins exist, check if current user is an admin
      const user = auth.currentUser;
      if (user) {
        const adminDoc = await getDoc(doc(db, 'admins', user.uid));
        isAdminExists.value = adminDoc.exists();
        
        // Only show register tab for existing admins
        showRegisterTab.value = adminDoc.exists();
      } else {
        isAdminExists.value = true;
        showRegisterTab.value = false;
      }
    }
  } catch (error) {
    console.error("Error checking admin existence:", error);
    isAdminExists.value = false;
    // If there's an error, show register tab as a fallback for first-time setup
    showRegisterTab.value = true;
  }
};

onMounted(async () => {
  await checkAdminExists();
  activeTab.value = isAdminExists.value ? 'login' : 'register';
});
</script>

<style scoped>
.pale-blue {
  background-color: #e0f2fe;
}

.light-blue {
  background-color: #90caf9;
}

.medium-blue {
  background-color: #2196f3;
}

.dark-blue {
  background-color: #1976d2;
}

.navy {
  background-color: #282c34;
  color: white;
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>

