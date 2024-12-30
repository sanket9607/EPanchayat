// user-module.js
import { auth, db } from './firebase-init.js';
import { logAction } from './logging.js';

export const userModule = {
  register: async (userData) => {
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(userData.email, userData.password);
      await db.collection('users').doc(userCredential.user.uid).set(userData);
      logAction('User Registration', userData);
    } catch (error) {
      console.error('Error in user registration:', error);
    }
  },
  login: async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      logAction('User Login', { email });
    } catch (error) {
      console.error('Error in user login:', error);
    }
  },
  searchServices: async () => {
    try {
      const services = await db.collection('services').get();
      return services.docs.map(doc => doc.data());
    } catch (error) {
      console.error('Error in searching services:', error);
    }
  },
  applyService: async (applicationData) => {
    try {
      await db.collection('applications').add(applicationData);
      logAction('Service Application', applicationData);
    } catch (error) {
      console.error('Error in applying for service:', error);
    }
  }
};
