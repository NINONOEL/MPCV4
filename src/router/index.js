import { createRouter, createWebHistory } from "vue-router"
import { auth, db } from "@/config/firebase"
import { getDoc, doc } from "firebase/firestore"
import { onAuthStateChanged } from "firebase/auth"
import SystemHomePage from "@/components/SystemHomePage.vue"

// PUBLIC COMPONENTS (Customer-facing)
import LandingPage from "@/components/public/LandingPage.vue"
import LoginPage from "@/components/public/LoginPage.vue"
import SignupPage from "@/components/public/SignupPage.vue"
import CustomerPortal from "@/components/public/CustomerPortal.vue"
import HouseColorRecommender from "@/components/public/HouseColorRecommender.vue"
import PaintMixing from "@/components/public/PaintMixing.vue"
import Products from "@/components/public/Products.vue"

// ADMIN COMPONENTS
import AdminPortal from "../components/admin/AdminPortal.vue"
import AdminDashboard from "../components/admin/AdminDashboard.vue"
import AdminStaffManagement from "../components/admin/AdminStaffManagement.vue"
import AdminInventory from "../components/admin/AdminInventory.vue"
import AdminPaintMixing from "../components/admin/AdminPaintMixing.vue"
import AdminSalesAnalytics from "../components/admin/AdminSalesAnalytics.vue"
import AdminSettings from "../components/admin/AdminSettings.vue"
import AdminHousePaintRecommender from "../components/admin/AdminHousePaintRecommender.vue"
import AdminVisualization from "../components/admin/AdminVisualization.vue"

// STAFF COMPONENTS
import StaffPortal from "../components/staff/StaffPortal.vue"
import StaffDashboard from "../components/staff/StaffDashboard.vue"
import StaffPaintMixing from "../components/staff/StaffPaintMixing.vue"
import HousePaintRecommender from "../components/staff/HousePaintRecommender.vue"
import Settings from "../components/staff/Settings.vue"
import StaffSalesAnalytics from "../components/staff/StaffSalesAnalytics.vue"

// (Ang iyong mga navigation guards ay mananatili dito)
// Global authentication state
const authState = {
  isStaff: false,
  isAdmin: false,
  isCustomer: false,
  initialized: false,
}

// Function to check authentication state
const checkAuthState = () => {
  return new Promise((resolve) => {
    if (authState.initialized && auth.currentUser) {
      resolve()
      return
    }
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe()
      authState.initialized = true
      resolve(user)
    })
  })
}

// Navigation guard for admin routes
const requireAdmin = async (to, from, next) => {
  await checkAuthState()
  const user = auth.currentUser
  if (!user) {
    next("/admin")
    return
  }
  try {
    if (authState.isAdmin) {
      next()
      return
    }
    const adminDoc = await getDoc(doc(db, "admins", user.uid))
    if (adminDoc.exists()) {
      authState.isAdmin = true
      next()
    } else {
      next("/admin")
    }
  } catch (error) {
    console.error("Error checking admin status:", error)
    next("/admin")
  }
}

// Navigation guard for staff routes
const requireStaff = async (to, from, next) => {
  await checkAuthState()
  const user = auth.currentUser
  if (!user) {
    next("/staff")
    return
  }
  try {
    if (authState.isStaff) {
      next()
      return
    }
    const staffDoc = await getDoc(doc(db, "staff", user.uid))
    if (staffDoc.exists()) {
      authState.isStaff = true
      next()
    } else {
      next("/staff")
    }
  } catch (error) {
    console.error("Error checking staff status:", error)
    next("/staff")
  }
}

// Navigation guard for customer routes
const requireCustomer = async (to, from, next) => {
  await checkAuthState()
  const user = auth.currentUser
  if (!user) {
    next("/login")
    return
  }
  try {
    if (authState.isCustomer) {
      next()
      return
    }
    const adminDoc = await getDoc(doc(db, "admins", user.uid))
    const staffDoc = await getDoc(doc(db, "staff", user.uid))

    if (!adminDoc.exists() && !staffDoc.exists()) {
      authState.isCustomer = true
      next()
    } else {
      if (adminDoc.exists()) {
        next("/admin/dashboard")
      } else {
        next("/staff/dashboard")
      }
    }
  } catch (error) {
    console.error("Error checking customer status:", error)
    next("/login")
  }
}

const routes = [
  // PUBLIC ROUTES (Customer-facing)
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
  },
  {
    path: "/signup",
    name: "Signup",
    component: SignupPage,
  },

  {
    path: "/customer/portal",
    name: "CustomerPortal",
    component: CustomerPortal,
    beforeEnter: requireCustomer,
  },
  {
    path: "/customer/portal/products",
    name: "CustomerPortalProducts",
    component: Products,
    beforeEnter: requireCustomer,
  },
  {
    path: "/customer/portal/mixing",
    name: "CustomerPortalMixing",
    component: PaintMixing,
    beforeEnter: requireCustomer,
  },
  {
    path: "/customer/portal/recommender",
    name: "CustomerPortalRecommender",
    component: HouseColorRecommender,
    beforeEnter: requireCustomer,
  },

  // SYSTEM ROUTE (Internal access)
  {
    path: "/system",
    name: "SystemHomePage",
    component: SystemHomePage,
  },

  // ADMIN ROUTES (Mananatili)
  {
    path: "/admin",
    name: "AdminPortal",
    component: AdminPortal,
  },
  {
    path: "/admin/dashboard",
    name: "AdminDashboard",
    component: AdminDashboard,
    beforeEnter: requireAdmin,
  },
  {
    path: "/admin/staff",
    name: "AdminStaffManagement",
    component: AdminStaffManagement,
    beforeEnter: requireAdmin,
  },
  {
    path: "/admin/inventory",
    name: "AdminInventory",
    component: AdminInventory,
    beforeEnter: requireAdmin,
  },
  {
    path: "/admin/paint-mixing",
    name: "AdminPaintMixing",
    component: AdminPaintMixing,
    beforeEnter: requireAdmin,
  },
  {
    path: "/admin/sales-analytics",
    name: "AdminSalesAnalytics",
    component: AdminSalesAnalytics,
    beforeEnter: requireAdmin,
  },
  {
    path: "/admin/visualization",
    name: "AdminVisualization",
    component: AdminVisualization,
    beforeEnter: requireAdmin,
  },
  {
    path: "/admin/settings",
    name: "AdminSettings",
    component: AdminSettings,
    beforeEnter: requireAdmin,
  },
  {
    path: "/admin/house-paint-recommender",
    name: "AdminHousePaintRecommender",
    component: AdminHousePaintRecommender,
    beforeEnter: requireAdmin,
  },

  // STAFF ROUTES (Mananatili)
  {
    path: "/staff",
    name: "StaffPortal",
    component: StaffPortal,
  },
  {
    path: "/staff/dashboard",
    name: "StaffDashboard",
    component: StaffDashboard,
    beforeEnter: requireStaff,
  },
  {
    path: "/staff/inventory",
    name: "StaffInventory",
    component: () => import("../components/staff/StaffInventory.vue"),
    beforeEnter: requireStaff,
  },
  {
    path: "/staff/paint-mixing",
    name: "StaffPaintMixing",
    component: StaffPaintMixing,
    beforeEnter: requireStaff,
  },
  {
    path: "/staff/house-paint-recommender",
    name: "HousePaintRecommender",
    component: HousePaintRecommender,
    beforeEnter: requireStaff,
    meta: {
      keepAlive: true,
    },
  },
  {
    path: "/staff/sales-analytics",
    name: "StaffSalesAnalytics",
    component: StaffSalesAnalytics,
    beforeEnter: requireStaff,
  },
  {
    path: "/staff/settings",
    name: "StaffSettings",
    component: Settings,
    beforeEnter: requireStaff,
  },

  // CATCH ALL - redirect to homepage
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
