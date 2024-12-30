// staff-module.js
import { db } from './firebase-init.js';
import { logAction } from './logging.js';

export const staffModule = {
  viewServices: async () => {
    try {
      const services = await db.collection('services').get();
      return services.docs.map(doc => doc.data());
    } catch (error) {
      console.error('Error in viewing services:', error);
    }
  },
  updateApplicationStatus: async (applicationId, status) => {
    try {
      await db.collection('applications').doc(applicationId).update({ status });
      logAction('Application Status Update', { applicationId, status });
    } catch (error) {
      console.error('Error in updating application status:', error);
    }
  }
};
