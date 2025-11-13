import api from "../api/api"

export const loginUser = async (data) => {
  return await api.post('/loginAdmin', data);
};

// Service pour les administrateurs
export const adminService = {
  // Récupérer la liste des administrateurs
  getAdmins: async () => {
    return await api.get('/ListeAdmin');
  },

  // Ajouter un nouvel agent
  addAgent: async (data) => {
    return await api.post('/AjouterAgent', data);
  },

  // Supprimer un administrateur/agent
  deleteAdmin: async (id) => {
    return await api.post(`/DeleteAdmin/${id}`);
  },
};