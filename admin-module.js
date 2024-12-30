// admin-module.js
import { db } from './firebase-init.js';
import { logAction } from './logging.js';

export const adminModule = {
  createService: async (serviceData) => {
    try {
      await db.collection('services').add(serviceData);
      logAction('Service Creation', serviceData);
    } catch (error) {
      console.error('Error in creating service:', error);
    }
  },
  updateService: async (serviceId, updatedData) => {
    try {
      await db.collection('services').doc(serviceId).update(updatedData);
      logAction('Service Update', updatedData);
    } catch (error) {
      console.error('Error in updating service:', error);
    }
  },
  deleteService: async (serviceId) => {
    try {
      await db.collection('services').doc(serviceId).delete();
      logAction('Service Deletion', { serviceId });
    } catch (error) {
      console.error('Error in deleting service:', error);
    }
  }
};
