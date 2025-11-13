import api from "../api/api"

export const incidentService = {
  // Récupérer la liste des incidents
  getIncidents: async () => {
    return await api.get('/ListIncidents');
  }
};