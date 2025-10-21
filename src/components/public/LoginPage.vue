<template>
  <div class="min-h-screen bg-gradient-to-br from-red-50 via-slate-50 to-orange-50/30 flex items-center justify-center p-2 sm:p-3 lg:p-4 font-sans relative overflow-hidden">
    <!-- Enhanced Background Pattern with Paint-Inspired Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Responsive animated paint brush strokes -->
      <div class="absolute top-10 sm:top-20 left-5 sm:left-10 w-16 sm:w-24 h-1 bg-red-600/20 rounded-full rotate-12 blur-sm animate-pulse"></div>
      <div class="absolute bottom-20 sm:bottom-32 right-8 sm:right-16 w-12 sm:w-20 h-1 bg-orange-500/20 rounded-full -rotate-45 blur-sm animate-pulse delay-1000"></div>
      <div class="absolute top-1/3 right-10 sm:right-20 w-10 sm:w-16 h-1 bg-red-500/20 rounded-full rotate-45 blur-sm animate-pulse delay-500"></div>
      
      <!-- Responsive enhanced paint drops with glassmorphism -->
      <div class="absolute top-20 sm:top-32 right-20 sm:right-32 w-8 sm:w-16 h-8 sm:h-16 bg-red-600/10 rounded-full blur-2xl animate-float"></div>
      <div class="absolute bottom-24 sm:bottom-40 left-10 sm:left-20 w-12 sm:w-20 h-12 sm:h-20 bg-orange-500/10 rounded-full blur-2xl animate-float delay-700"></div>
      <div class="absolute top-1/2 left-1/4 w-8 sm:w-12 h-8 sm:h-12 bg-red-500/10 rounded-full blur-xl animate-float delay-300"></div>
      
      <!-- Responsive additional glassmorphism elements -->
      <div class="absolute top-1/4 left-1/3 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-br from-red-400/5 to-orange-400/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      <div class="absolute bottom-1/4 right-1/3 w-14 sm:w-20 h-14 sm:h-20 bg-gradient-to-br from-orange-400/5 to-red-400/5 rounded-full blur-3xl animate-pulse delay-1500"></div>
    </div>

    <!-- Enhanced responsive toast notification -->
    <div 
      :class="showToast ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'"
      class="fixed top-[35%] sm:top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 transition-all duration-500 ease-out"
    >
      <div class="bg-white/90 backdrop-blur-xl rounded-xl shadow-2xl border border-white/60 p-3 sm:p-4 max-w-xs sm:max-w-sm mx-2 text-center">
        <div class="w-8 sm:w-10 h-8 sm:h-10 mx-auto mb-2 sm:mb-3 bg-gradient-to-br from-red-600 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
          <svg class="w-4 sm:w-5 h-4 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h3 class="text-xs sm:text-sm font-bold text-gray-800 mb-1">{{ toastMessage }}</h3>
      </div>
    </div>

    <!-- Responsive container with better mobile layout -->
    <div class="relative w-full max-w-sm">
      <!-- Enhanced responsive back button -->
      <button 
        @click="goBack" 
        class="inline-flex items-center text-gray-600 hover:text-red-600 transition-all duration-300 group mb-2 sm:mb-3 bg-white/60 backdrop-blur-sm rounded-full px-2.5 py-1 hover:bg-white/80 hover:shadow-lg touch-manipulation text-xs"
      >
        <svg class="h-3 w-3 mr-1 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
        <span class="font-semibold">Back</span>
      </button>

      <!-- Enhanced responsive login card with glassmorphism -->
      <div class="bg-white/80 backdrop-blur-2xl rounded-lg sm:rounded-xl shadow-2xl border border-white/60 overflow-hidden hover:shadow-3xl transition-all duration-500 hover:bg-white/85">
        <!-- Enhanced responsive header -->
        <div class="px-3 sm:px-4 py-3 sm:py-4 text-center border-b border-red-50/50 bg-gradient-to-r from-red-50/30 to-orange-50/30">
          <div class="inline-flex items-center justify-center w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-br from-red-600 to-orange-500 rounded-lg sm:rounded-xl shadow-xl mb-2 sm:mb-2.5 hover:scale-105 transition-transform duration-300 touch-manipulation">
            <svg class="h-4 sm:h-5 w-4 sm:w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
            </svg>
          </div>
          <h1 class="text-sm sm:text-base font-bold bg-gradient-to-r from-red-800 to-orange-600 bg-clip-text text-transparent mb-1 leading-tight">Welcome Back</h1>
          <p class="text-xs text-gray-600 leading-relaxed px-1">Log in to your account</p>
        </div>

        <!-- Enhanced responsive form body -->
        <div class="px-3 sm:px-4 py-3 sm:py-4">
          <!-- Enhanced responsive error display -->
          <div v-if="errorMessage" class="mb-2 sm:mb-3 p-2 sm:p-3 bg-red-50/80 backdrop-blur-sm border border-red-100/60 rounded-lg">
            <div class="flex items-center">
              <svg class="h-3 w-3 text-red-500 mr-1.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z"></path>
              </svg>
              <p class="text-red-700 text-xs font-medium">{{ errorMessage }}</p>
            </div>
          </div>

          <!-- Enhanced responsive social login buttons -->
          <div class="space-y-2 mb-3 sm:mb-4">
            <!-- Enhanced responsive Google button with better touch targets -->
            <button 
              type="button"
              @click="handleSocialLogin('google')"
              :disabled="isLoading"
              class="w-full flex items-center justify-center px-2.5 sm:px-3 py-2 sm:py-2.5 border border-gray-200/60 rounded-lg text-gray-700 bg-white/60 backdrop-blur-sm hover:bg-white/80 hover:border-red-200 transition-all duration-300 text-xs font-semibold disabled:opacity-50 hover:shadow-lg hover:-translate-y-0.5 group touch-manipulation min-h-[40px]"
            >
              <svg class="w-3.5 h-3.5 mr-1.5 group-hover:scale-110 transition-transform duration-300 flex-shrink-0" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66 2.84.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span class="truncate text-xs">Google</span>
            </button>
          </div>
          
          <!-- Enhanced responsive divider -->
          <div class="relative my-2.5 sm:my-3">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-200/60"></div>
            </div>
            <div class="relative flex justify-center text-xs">
              <span class="px-2 sm:px-3 bg-white/80 backdrop-blur-sm text-gray-500 font-medium rounded-full text-xs">or email</span>
            </div>
          </div>
          
          <!-- Enhanced responsive login form -->
          <form @submit.prevent="handleLogin" class="space-y-2 sm:space-y-3">
            <!-- Enhanced responsive email field -->
            <div class="space-y-1">
              <label for="email" class="block text-xs font-bold text-gray-800">Email</label>
              <div class="relative">
                <input 
                  type="email"
                  id="email"
                  v-model="form.email"
                  :class="[
                    'w-full px-2.5 py-2 sm:py-2.5 text-xs border rounded-lg transition-all duration-300 bg-white/60 backdrop-blur-sm placeholder-gray-400 hover:bg-white/80 focus:bg-white/90 touch-manipulation min-h-[40px]',
                    errors.email 
                      ? 'border-red-300 focus:border-red-500 focus:ring-red-100' 
                      : 'border-gray-200/60 focus:border-red-500 focus:ring-red-100 hover:border-red-300 hover:shadow-lg'
                  ]"
                  placeholder="email@example.com"
                  :disabled="isLoading"
                  @blur="validateField('email')"
                  @input="clearError('email')"
                />
                <svg class="absolute right-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <Transition name="error">
                <p v-if="errors.email" class="text-red-500 text-xs font-semibold">{{ errors.email }}</p>
              </Transition>
            </div>
            
            <!-- Enhanced responsive password field -->
            <div class="space-y-1">
              <label for="password" class="block text-xs font-bold text-gray-800">Password</label>
              <div class="relative">
                <input 
                  :type="showPassword ? 'text' : 'password'"
                  id="password"
                  v-model="form.password"
                  :class="[
                    'w-full px-2.5 py-2 sm:py-2.5 pr-8 text-xs border rounded-lg transition-all duration-300 bg-white/60 backdrop-blur-sm placeholder-gray-400 hover:bg-white/80 focus:bg-white/90 touch-manipulation min-h-[40px]',
                    errors.password 
                      ? 'border-red-300 focus:border-red-500 focus:ring-red-100' 
                      : 'border-gray-200/60 focus:border-red-500 focus:ring-red-100 hover:border-red-300 hover:shadow-lg'
                  ]"
                  placeholder="Password"
                  :disabled="isLoading"
                  @blur="validateField('password')"
                  @input="clearError('password')"
                />
                <button 
                  type="button"
                  @click="showPassword = !showPassword"
                  class="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center justify-center text-gray-400 static-button"
                  :disabled="isLoading"
                >
                  <svg v-if="!showPassword" class="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                  <svg v-else class="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"></path>
                  </svg>
                </button>
              </div>
              <Transition name="error">
                <p v-if="errors.password" class="text-red-500 text-xs font-semibold">{{ errors.password }}</p>
              </Transition>
            </div>
            
            <!-- Enhanced responsive remember me & forgot password -->
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs pt-0.5 space-y-1.5 sm:space-y-0">
              <label class="flex items-center group cursor-pointer touch-manipulation">
                <input 
                  type="checkbox" 
                  v-model="form.rememberMe" 
                  class="rounded border-gray-300 text-red-600 focus:ring-red-500 w-3 h-3 transition-colors duration-300"
                  :disabled="isLoading"
                >
                <span class="ml-1.5 text-gray-600 group-hover:text-gray-800 transition-colors duration-300 text-xs">Remember</span>
              </label>
              <button 
                type="button" 
                class="text-red-600 hover:text-orange-600 font-semibold transition-colors duration-300 hover:underline text-left sm:text-right touch-manipulation min-h-[36px] flex items-center text-xs"
                @click="handleForgotPassword"
                :disabled="isLoading || forgotPasswordLoading"
              >
                {{ forgotPasswordLoading ? 'Sending...' : 'Forgot password?' }}
              </button>
            </div>
            
            <!-- Enhanced responsive submit button with better touch target -->
            <button 
              type="submit"
              :disabled="isLoading"
              class="w-full bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white font-bold py-2 sm:py-2.5 px-3 rounded-lg transition-all duration-300 disabled:opacity-50 hover:shadow-xl hover:-translate-y-0.5 text-xs group relative overflow-hidden touch-manipulation min-h-[40px]"
            >
              <div class="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <template v-if="isLoading">
                <div class="inline-flex items-center relative z-10">
                  <div class="animate-spin rounded-full h-3 w-3 border-2 border-white border-t-transparent mr-1.5"></div>
                  <span class="truncate text-xs">Signing in...</span>
                </div>
              </template>
              <template v-else>
                <div class="inline-flex items-center justify-center relative z-10">
                  <svg class="h-3.5 w-3.5 mr-1.5 group-hover:scale-105 transition-transform duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
                  </svg>
                  <span class="truncate text-xs">Sign In</span>
                </div>
              </template>
            </button>
          </form>
          
          <!-- Enhanced responsive sign up link -->
          <div class="text-center mt-2.5 sm:mt-3 pt-2 sm:pt-2.5 border-t border-gray-100/60">
            <p class="text-xs text-gray-600">
              No account? 
              <router-link 
                to="/signup"
                class="text-red-600 hover:text-orange-600 font-bold ml-1 transition-colors duration-300 hover:underline touch-manipulation"
              >
                Sign up
              </router-link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { useRouter } from 'vue-router'
import { 
  signInWithEmailAndPassword, 
  sendPasswordResetEmail,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth'
import { auth, db } from '../../config/firebase.js'
import { getDoc, doc, setDoc } from 'firebase/firestore'

const router = useRouter()

// Providers
const googleProvider = new GoogleAuthProvider()

// Form state
const form = ref({
  email: '',
  password: '',
  rememberMe: false
})

// UI state
const showPassword = ref(false)
const isLoading = ref(false)
const errors = ref({})
const errorMessage = ref('')
const successMessage = ref('')
const showToast = ref(false)
const toastMessage = ref('')
const forgotPasswordLoading = ref(false)

// Computed
const isFormValid = computed(() => {
  return form.value.email && 
         form.value.password && 
         Object.keys(errors.value).length === 0
})

const getUserRole = async (uid) => {
  try {
    // Check if user is admin
    const adminDoc = await getDoc(doc(db, "admins", uid))
    if (adminDoc.exists()) {
      return "admin"
    }

    // Check if user is staff
    const staffDoc = await getDoc(doc(db, "staff", uid))
    if (staffDoc.exists()) {
      return "staff"
    }

    // Check if user is customer - UPDATED to check customers collection
    const customerDoc = await getDoc(doc(db, "customers", uid))
    if (customerDoc.exists()) {
      return "customer"
    }

    // Default to customer if not found in any collection
    return "customer"
  } catch (error) {
    console.error("Error getting user role:", error)
    return "customer"
  }
}

const createCustomerDocumentIfNotExists = async (user, provider = null) => {
  const customerDoc = await getDoc(doc(db, "customers", user.uid))
  
  if (!customerDoc.exists()) {
    console.log('💾 Creating customer document in customers collection...')
    
    const customerData = {
      uid: user.uid,
      email: user.email,
      firstName: user.displayName?.split(" ")[0] || "",
      lastName: user.displayName?.split(" ").slice(1).join(" ") || "",
      role: "customer",
      createdAt: new Date().toISOString(),
      isActive: true,
      memberSince: new Date().toISOString(),
      totalOrders: 0,
      totalSpent: 0,
      loyaltyPoints: 0,
      savedColors: [],
      preferences: {
        newsletter: true,
        promotions: true,
        notifications: true
      },
      signupMethod: provider || 'social',
      provider: provider
    }

    await setDoc(doc(db, "customers", user.uid), customerData)
    console.log('✅ Customer document created in customers collection')
    return true // New user created
  } else {
    console.log('👤 Customer already exists in customers collection')
    return false // Existing user
  }
}

const sendWelcomeEmail = async (userEmail, userName) => {
  try {
    console.log('📧 Sending welcome email to:', userEmail)
    
    const emailData = {
      service_id: 'service_barcelona_paint', // Replace with your EmailJS service ID
      template_id: 'template_welcome', // Replace with your EmailJS template ID
      user_id: 'your_emailjs_public_key', // Replace with your EmailJS public key
      template_params: {
        to_email: userEmail,
        to_name: userName,
        from_name: 'Barcelona Paint Center',
        subject: 'Welcome to Barcelona Paint Center! 🎨',
        message: `Hi ${userName},

Welcome to Barcelona Paint Center! 🎨

Thank you for signing up with Google. We're excited to have you as part of our community.

What you can do now:
• Browse our extensive paint collection
• Get personalized color recommendations
• Track your orders and purchase history
• Access exclusive member offers

If you have any questions, feel free to reach out to our support team.

Best regards,
The Barcelona Paint Center Team`
      }
    }

    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData)
    })
    
    if (response.ok) {
      console.log('✅ Welcome email sent successfully via EmailJS')
      return true
    } else {
      console.error('❌ Failed to send email via EmailJS:', response.statusText)
      return false
    }
  } catch (error) {
    console.error('❌ Error sending welcome email:', error)
    return false
  }
}

const sendWelcomeBackEmail = async (userEmail, userName) => {
  try {
    console.log('📧 Sending welcome back email to:', userEmail)
    
    const emailData = {
      service_id: 'service_barcelona_paint', // Replace with your EmailJS service ID
      template_id: 'template_welcome_back', // Replace with your EmailJS template ID
      user_id: 'your_emailjs_public_key', // Replace with your EmailJS public key
      template_params: {
        to_email: userEmail,
        to_name: userName,
        from_name: 'Barcelona Paint Center',
        subject: 'Welcome Back to Barcelona Paint Center! 🎨',
        message: `Hi ${userName},

Welcome back to Barcelona Paint Center! 🎨

We're happy to see you again. Here's what's new since your last visit:

• New paint collections and seasonal colors
• Updated color matching tools
• Exclusive member discounts available
• Your loyalty points: Check your account for current balance

Recent Updates:
• Enhanced color recommendation system
• Faster checkout process
• New project inspiration gallery

Ready to start your next painting project? Browse our latest collections or continue where you left off.

Thank you for being a valued customer!

Best regards,
The Barcelona Paint Center Team`
      }
    }

    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData)
    })
    
    if (response.ok) {
      console.log('✅ Welcome back email sent successfully via EmailJS')
      return true
    } else {
      console.error('❌ Failed to send email via EmailJS:', response.statusText)
      return false
    }
  } catch (error) {
    console.error('❌ Error sending welcome back email:', error)
    return false
  }
}

// Validation functions
const validateField = (field) => {
  switch (field) {
    case 'email':
      if (!form.value.email) {
        errors.value.email = 'Email required'
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)) {
        errors.value.email = 'Invalid email'
      }
      break
    case 'password':
      if (!form.value.password) {
        errors.value.password = 'Password required'
      }
      break
  }
}

const clearError = (field) => {
  if (errors.value[field]) {
    delete errors.value[field]
  }
  // Clear global messages when user starts typing
  errorMessage.value = ''
  successMessage.value = ''
}

const validateForm = () => {
  errors.value = {}
  validateField('email')
  validateField('password')
  return Object.keys(errors.value).length === 0
}

// Updated handleLogin to use toast notification instead of success message
const handleLogin = async () => {
  console.log('🚀 Starting login process...')
  
  if (!validateForm()) {
    errorMessage.value = 'Please fix the errors above'
    return
  }
  
  isLoading.value = true
  errorMessage.value = ''
  successMessage.value = ''
  
  try {
    console.log('📧 Signing in with email:', form.value.email)
    
    const userCredential = await signInWithEmailAndPassword(auth, form.value.email, form.value.password)
    const user = userCredential.user

    console.log('✅ User signed in successfully:', user.uid)

    // Get user role from proper collections
    const userRole = await getUserRole(user.uid)
    console.log('👤 User role:', userRole)
    
    // Send welcome back email for customers
    if (userRole === 'customer') {
      console.log('📧 Sending welcome back email for returning customer...')
      const emailSent = await sendWelcomeBackEmail(
        user.email, 
        user.displayName || user.email.split('@')[0]
      )
      
      if (emailSent) {
        toastMessage.value = 'Welcome back! Check your email for updates.'
      } else {
        toastMessage.value = 'Welcome to Barcelona Paint Center!'
      }
    } else {
      toastMessage.value = 'Login Successful!'
    }
    
    showToast.value = true
    
    // Redirect based on user role after a short delay
    setTimeout(() => {
      showToast.value = false
      if (userRole === 'admin') {
        console.log('🔄 Redirecting to admin dashboard...')
        router.push('/admin/dashboard')
      } else if (userRole === 'staff') {
        console.log('🔄 Redirecting to staff dashboard...')
        router.push('/staff/dashboard')
      } else {
        console.log('🔄 Redirecting to customer portal...')
        router.push('/customer/portal')
      }
    }, 2000)
    
  } catch (error) {
    console.error('❌ Login error:', error)
    
    let message = 'Failed to sign in. Please try again.'
    
    if (error.code === 'auth/user-not-found') {
      message = 'No account found with this email. Please sign up first.'
    } else if (error.code === 'auth/wrong-password') {
      message = 'Incorrect password. Please try again.'
    } else if (error.code === 'auth/invalid-email') {
      message = 'Invalid email address.'
    } else if (error.code === 'auth/too-many-requests') {
      message = 'Too many failed attempts. Please try again later.'
    } else if (error.code === 'auth/invalid-credential') {
      message = 'Invalid email or password. Please check your credentials.'
    }
    
    errorMessage.value = message
  } finally {
    isLoading.value = false
  }
}

const handleSocialLogin = async (provider) => {
  console.log(`🚀 Starting ${provider} login...`)
  
  isLoading.value = true
  errorMessage.value = ''
  successMessage.value = ''
  
  try {
    let result
    if (provider === 'google') {
      result = await signInWithPopup(auth, googleProvider)
    }
    
    const user = result.user
    console.log(`✅ ${provider} login successful:`, user.uid)

    // Create customer document if it doesn't exist and check if it's a new user
    const isNewUser = await createCustomerDocumentIfNotExists(user, provider)

    if (isNewUser) {
      // Send welcome email for new users
      console.log('🎉 New user detected, sending welcome email...')
      const emailSent = await sendWelcomeEmail(
        user.email, 
        user.displayName || user.email.split('@')[0]
      )
      
      if (emailSent) {
        toastMessage.value = `Welcome! Check your email for account details.`
      } else {
        toastMessage.value = `Welcome to Barcelona Paint Center!`
      }
    } else {
      // Send welcome back email for returning users
      console.log('👋 Returning user detected, sending welcome back email...')
      const emailSent = await sendWelcomeBackEmail(
        user.email, 
        user.displayName || user.email.split('@')[0]
      )
      
      if (emailSent) {
        toastMessage.value = `Welcome back! Check your email for updates.`
      } else {
        toastMessage.value = `Welcome back!`
      }
    }

    // Get user role from proper collections
    const userRole = await getUserRole(user.uid)
    console.log('👤 User role:', userRole)
    
    showToast.value = true
    
    // Redirect based on user role after a short delay
    setTimeout(() => {
      showToast.value = false
      if (userRole === 'admin') {
        console.log('🔄 Redirecting to admin dashboard...')
        router.push('/admin/dashboard')
      } else if (userRole === 'staff') {
        console.log('🔄 Redirecting to staff dashboard...')
        router.push('/staff/dashboard')
      } else {
        console.log('🔄 Redirecting to customer portal...')
        router.push('/customer/portal')
      }
    }, 2000)
    
  } catch (error) {
    console.error(`❌ ${provider} login error:`, error)
    
    let message = `Failed to sign in with ${provider}. Please try again.`
    
    if (error.code === 'auth/popup-closed-by-user') {
      message = 'Sign in was cancelled.'
    } else if (error.code === 'auth/popup-blocked') {
      message = 'Popup was blocked. Please allow popups and try again.'
    } else if (error.code === 'auth/network-request-failed') {
      message = 'Network error. Please check your internet connection.'
    } else if (error.code === 'auth/account-exists-with-different-credential') {
      message = 'An account already exists with the same email address but different sign-in credentials.'
    }
    
    errorMessage.value = message
  } finally {
    isLoading.value = false
  }
}

const handleForgotPassword = async () => {
  if (!form.value.email) {
    errorMessage.value = 'Please enter your email address first'
    return
  }

  if (!isValidEmail(form.value.email)) {
    errorMessage.value = 'Please enter a valid email address'
    return
  }

  forgotPasswordLoading.value = true
  errorMessage.value = ''

  try {
    console.log('🔄 Sending password reset email to:', form.value.email)
    
    const actionCodeSettings = {
      url: `${window.location.origin}/login`,
      handleCodeInApp: false
    }
    
    await sendPasswordResetEmail(auth, form.value.email, actionCodeSettings)
    
    console.log('✅ Password reset email sent successfully')
    
    toastMessage.value = `📧 Password reset email sent! Please check your spam folder.`
    showToast.value = true
    
    // Clear the form to prevent multiple requests
    form.value.email = ''
    
    setTimeout(() => {
      showToast.value = false
    }, 3000)
    
  } catch (error) {
    console.error('❌ Password reset error:', error)
    
    let message = 'Failed to send password reset email. Please try again.'
    
    switch (error.code) {
      case 'auth/user-not-found':
        message = 'No account found with this email address. Please check the email or sign up for a new account.'
        break
      case 'auth/invalid-email':
        message = 'Invalid email address format. Please enter a valid email.'
        break
      case 'auth/too-many-requests':
        message = 'Too many password reset requests. Please wait 15 minutes before trying again.'
        break
      case 'auth/network-request-failed':
        message = 'Network error. Please check your internet connection and try again.'
        break
      default:
        message = `Unable to send password reset email. Please try again or contact support.`
    }
    
    errorMessage.value = message
    
  } finally {
    forgotPasswordLoading.value = false
  }
}

const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

const goBack = () => {
  router.push('/')
}
</script>

<style scoped>
input:focus {
  outline: none;
  box-shadow: 0 0 0 3px var(--tw-ring-color);
}

.error-enter-active, .error-leave-active {
  transition: all 0.3s ease;
}

.error-enter-from, .error-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

.bg-admin-primary-gradient {
  background: linear-gradient(135deg, #dc2626, #ea580c);
}

.bg-customer-primary-gradient {
  background: linear-gradient(135deg, #dc2626, #ea580c);
}

/* Enhanced animations */
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-10px) rotate(5deg); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

/* Glassmorphism enhancements */
.backdrop-blur-2xl {
  backdrop-filter: blur(40px);
}

.backdrop-blur-3xl {
  backdrop-filter: blur(64px);
}

/* Custom shadow for enhanced depth */
.shadow-3xl {
  box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
}

/* Gradient text support */
.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}

.text-transparent {
  color: transparent;
}

/* Enhanced focus states */
input:focus,
button:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

/* Button hover enhancements */
button:hover:not(:disabled) {
  transform: translateY(-1px);
}

/* Smooth transitions for all interactive elements */
* {
  transition-property: transform, box-shadow, background-color, border-color, color, opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

/* Enhanced responsive animations and interactions */
@media (max-width: 640px) {
  .animate-float {
    animation: float 8s ease-in-out infinite;
  }
  
  /* Reduce motion for mobile performance */
  @media (prefers-reduced-motion: reduce) {
    .animate-float,
    .animate-pulse {
      animation: none;
    }
  }
}

/* Enhanced touch targets for mobile */
@media (max-width: 768px) {
  button, input, [role="button"] {
    min-height: 44px;
    min-width: 44px;
  }
}

/* Enhanced hover states for desktop */
@media (min-width: 1024px) {
  .hover\:scale-105:hover {
    transform: scale(1.05);
  }
  
  .group:hover .group-hover\:scale-110 {
    transform: scale(1.1);
  }
}

/* Enhanced smooth scrolling and performance */
* {
  scroll-behavior: smooth;
}

/* Enhanced backdrop blur support */
@supports (backdrop-filter: blur(40px)) {
  .backdrop-blur-2xl {
    backdrop-filter: blur(40px);
  }
}

@supports not (backdrop-filter: blur(40px)) {
  .backdrop-blur-2xl {
    background-color: rgba(255, 255, 255, 0.9);
  }
}

/* Added static button styles to completely eliminate movement */
.static-button {
  background: none !important;
  border: none !important;
  padding: 0 !important;
  margin: 0 !important;
  outline: none !important;
  box-shadow: none !important;
  transform: none !important;
  transition: none !important;
}

.static-button:hover,
.static-button:focus,
.static-button:active,
.static-button:visited {
  background: none !important;
  border: none !important;
  padding: 0 !important;
  margin: 0 !important;
  outline: none !important;
  box-shadow: none !important;
  transform: none !important;
  transition: none !important;
  color: #9ca3af !important;
}

.static-button:hover svg,
.static-button:focus svg,
.static-button:active svg {
  transform: none !important;
  transition: none !important;
}
</style>
