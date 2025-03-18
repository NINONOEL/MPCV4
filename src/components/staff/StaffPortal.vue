"use client"

import { useRouter } from "next/navigation"

<template>
  <div class="min-h-screen bg-gradient-to-br from-pale-blue via-light-blue to-medium-blue relative overflow-hidden">\
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
                {{ activeTab === 'login' ? 'Staff Login' : 'Staff Registration' }}
              </h2>
              <p class="text-dark-blue/80">
                {{ activeTab === 'login' ? 'Login to access the staff dashboard' : 'Create your staff account' }}
              </p>
            </div>
  
            <!-- Staff Registration Form -->
            <form v-if="activeTab === 'register'" @submit.prevent="createStaffAccount" class="space-y-6">
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
                    v-model="staffData.lastName" 
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
                    v-model="staffData.firstName" 
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
                    v-model="staffData.email" 
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
                    v-model="staffData.password" 
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
                    v-model="staffData.confirmPassword" 
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
                <span>{{ isLoading ? 'Creating Account...' : 'Create Staff Account' }}</span>
              </button>
  
              <!-- Login Link -->
              <p class="text-center text-navy/60">
                Already have an account? 
                <button 
                  type="button"
                  @click="activeTab = 'login'"
                  class="text-navy hover:text-navy/80 font-medium"
                >
                  Login here
                </button>
              </p>
            </form>
  
            <!-- Staff Login Form -->
            <form v-if="activeTab === 'login'" @submit.prevent="loginStaff" class="space-y-6">
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
  
  <!-- Forgot Password Modal -->
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
    }
    to {
      opacity: 1;
    }
  }
  </style>

