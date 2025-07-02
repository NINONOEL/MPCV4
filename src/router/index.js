import { createRouter, createWebHistory } from "vue-router"
import { auth, db } from "@/config/firebase"
import { getDoc, doc } from "firebase/firestore"
import { onAuthStateChanged } from "firebase/auth"
import HomePage from "../components/HomePage.vue"
import AdminPortal from "../components/admin/AdminPortal.vue"
import AdminDashboard from "../components/admin/AdminDashboard.vue"
import AdminStaffManagement from "../components/admin/AdminStaffManagement.vue"
import AdminInventory from "../components/admin/AdminInventory.vue"
import AdminPaintMixing from "../components/admin/AdminPaintMixing.vue"
import AdminSalesAnalytics from "../components/admin/AdminSalesAnalytics.vue"
import AdminReports from "../components/admin/AdminReports.vue"
import AdminSettings from "../components/admin/AdminSettings.vue"
import AdminHousePaintRecommender from "../components/admin/AdminHousePaintRecommender.vue"
import StaffPortal from "../components/staff/StaffPortal.vue"
import StaffDashboard from "../components/staff/StaffDashboard.vue"
import StaffPaintMixing from "../components/staff/StaffPaintMixing.vue"
import HousePaintRecommender from "../components/staff/HousePaintRecommender.vue"
import Settings from "../components/staff/Settings.vue"
import StaffSalesAnalytics from "../components/staff/StaffSalesAnalytics.vue"

// Estado global de autenticación
const authState = {
  isStaff: false,
  isAdmin: false,
  initialized: false,
}

// Función para verificar el estado de autenticación
const checkAuthState = () => {
  return new Promise((resolve) => {
    // Si ya está inicializado y el usuario está autenticado, resolver inmediatamente
    if (authState.initialized && auth.currentUser) {
      resolve()
      return
    }

    // Si no hay usuario actual, esperar a que se determine el estado de autenticación
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe() // Cancelar la suscripción inmediatamente
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
    // Verificar si el usuario ya ha sido comprobado como admin
    if (authState.isAdmin) {
      next()
      return
    }

    // Verificar en la base de datos
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
    // Verificar si el usuario ya ha sido comprobado como staff
    if (authState.isStaff) {
      next()
      return
    }

    // Verificar en la base de datos
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

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
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
    path: "/admin/reports",
    name: "AdminReports",
    component: AdminReports,
    beforeEnter: requireAdmin,
  },
  {
    path: "/admin/settings",
    name: "AdminSettings",
    component: AdminSettings,
    beforeEnter: requireAdmin,
  },
  {
    path: "/admin/security",
    name: "AdminSecurity",
    component: () => import("../components/admin/AdminSecurity.vue"),
    beforeEnter: requireAdmin,
  },
  {
    path: "/admin/house-paint-recommender",
    name: "AdminHousePaintRecommender",
    component: AdminHousePaintRecommender,
    beforeEnter: requireAdmin,
  },
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
  // Add the Paint Mixing route
  {
    path: "/staff/paint-mixing",
    name: "StaffPaintMixing",
    component: StaffPaintMixing,
    beforeEnter: requireStaff,
  },
  // Add the House Paint Recommender route
  {
    path: "/staff/house-paint-recommender",
    name: "HousePaintRecommender",
    component: HousePaintRecommender,
    beforeEnter: requireStaff,
    meta: {
      keepAlive: true,
    },
  },
  // Add the Staff Sales Analytics route
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
