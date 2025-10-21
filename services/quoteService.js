import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  doc,
  deleteDoc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore"
import { db } from "../src/config/firebase"

const COLLECTION_NAME = "quotes"

export const quoteService = {
  // Save a new quote submission
  async saveQuote(data) {
    try {
      const quoteData = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        service: data.service,
        message: data.message,
        status: "new", // new, contacted, completed
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      }

      const docRef = await addDoc(collection(db, COLLECTION_NAME), quoteData)
      return { success: true, id: docRef.id }
    } catch (error) {
      console.error("Error saving quote:", error)
      return { success: false, error }
    }
  },

  // Get all quotes
  async getAllQuotes() {
    try {
      const quotesRef = collection(db, COLLECTION_NAME)
      const q = query(quotesRef, orderBy("createdAt", "desc"))

      const snapshot = await getDocs(q)
      return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    } catch (error) {
      console.error("Error fetching quotes:", error)
      return []
    }
  },

  // Delete a quote
  async deleteQuote(id) {
    try {
      const docRef = doc(db, COLLECTION_NAME, id)
      await deleteDoc(docRef)
      return { success: true }
    } catch (error) {
      console.error("Error deleting quote:", error)
      return { success: false, error }
    }
  },

  // Update quote status
  async updateQuoteStatus(id, status) {
    try {
      const docRef = doc(db, COLLECTION_NAME, id)
      await updateDoc(docRef, {
        status: status,
        updatedAt: serverTimestamp(),
      })
      return { success: true }
    } catch (error) {
      console.error("Error updating quote status:", error)
      return { success: false, error }
    }
  },
}
