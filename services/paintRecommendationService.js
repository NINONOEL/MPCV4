import { 
  collection, 
  addDoc, 
  getDocs, 
  query, 
  orderBy, 
  limit,
  doc,
  getDoc,
  deleteDoc,
  where,
  serverTimestamp 
} from 'firebase/firestore';
import { db } from '../config/firebase';

const COLLECTION_NAME = 'paintRecommendations';

export const paintRecommendationService = {
  // Save a new recommendation
  async saveRecommendation(data, userType) {
    try {
      const recommendationData = {
        ...data,
        createdAt: serverTimestamp(),
        userType: userType // 'admin' or 'staff'
      };
      
      const docRef = await addDoc(collection(db, COLLECTION_NAME), recommendationData);
      return { success: true, id: docRef.id };
    } catch (error) {
      console.error('Error saving recommendation:', error);
      return { success: false, error };
    }
  },
  
  // Get recent recommendations
  async getRecentRecommendations(limitCount = 5) {
    try {
      const recommendationsRef = collection(db, COLLECTION_NAME);
      const q = query(
        recommendationsRef,
        orderBy('createdAt', 'desc'),
        limit(limitCount)
      );
      
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error('Error fetching recent recommendations:', error);
      return [];
    }
  },
  
  // Get all recommendations
  async getAllRecommendations() {
    try {
      const recommendationsRef = collection(db, COLLECTION_NAME);
      const q = query(
        recommendationsRef,
        orderBy('createdAt', 'desc')
      );
      
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error('Error fetching all recommendations:', error);
      return [];
    }
  },
  
  // Get recommendations by user type
  async getRecommendationsByUserType(userType) {
    try {
      const recommendationsRef = collection(db, COLLECTION_NAME);
      const q = query(
        recommendationsRef,
        where('userType', '==', userType),
        orderBy('createdAt', 'desc')
      );
      
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error(`Error fetching ${userType} recommendations:`, error);
      return [];
    }
  },
  
  // Delete a recommendation
  async deleteRecommendation(id) {
    try {
      const docRef = doc(db, COLLECTION_NAME, id);
      await deleteDoc(docRef);
      return { success: true };
    } catch (error) {
      console.error('Error deleting recommendation:', error);
      return { success: false, error };
    }
  },
  
  // Get a single recommendation by ID
  async getRecommendationById(id) {
    try {
      const docRef = doc(db, COLLECTION_NAME, id);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        return {
          id: docSnap.id,
          ...docSnap.data()
        };
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error fetching recommendation:', error);
      return null;
    }
  }
};