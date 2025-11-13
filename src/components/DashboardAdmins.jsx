import { useState, useEffect } from 'react';
import { adminService } from '../services/UserService';

export function Admins() {
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [submitLoading, setSubmitLoading] = useState(false);

  // Charger la liste des administrateurs
  const loadAdmins = async () => {
    try {
      setLoading(true);
      setError('');
      const response = await adminService.getAdmins();
      
      if (response.data && response.data.success) {
        setAdmins(response.data.data || []);
      } else {
        setError('Format de réponse inattendu');
      }
    } catch (err) {
      console.error('Error details:', err);
      setError(err.response?.data?.message || 'Erreur lors du chargement des administrateurs');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAdmins();
  }, []);

  // Gestion du formulaire d'ajout
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Ajouter un nouvel agent
  const handleAddAgent = async (e) => {
    e.preventDefault();
    try {
      setSubmitLoading(true);
      setError('');
      const response = await adminService.addAgent(formData);
      
      if (response.data && response.data.success) {
        setShowAddModal(false);
        setFormData({ name: '', email: '' });
        await loadAdmins(); // Recharger la liste
      }
    } catch (err) {
      console.error('Add agent error:', err);
      setError(err.response?.data?.message || 'Erreur lors de l\'ajout de l\'agent');
    } finally {
      setSubmitLoading(false);
    }
  };

  // Supprimer un administrateur
  const handleDeleteAdmin = async () => {
    try {
      setDeleteLoading(true);
      setError('');
      await adminService.deleteAdmin(selectedAdmin.id);
      setShowDeleteModal(false);
      setSelectedAdmin(null);
      await loadAdmins(); // Recharger la liste
    } catch (err) {
      console.error('Delete error:', err);
      setError(err.response?.data?.message || 'Erreur lors de la suppression');
    } finally {
      setDeleteLoading(false);
    }
  };

  // Ouvrir la modale de suppression
  const openDeleteModal = (admin) => {
    setSelectedAdmin(admin);
    setShowDeleteModal(true);
  };

  // Réinitialiser le formulaire
  const resetForm = () => {
    setFormData({ name: '', email: '' });
    setError('');
  };

  // Squelette pour les lignes du tableau
  const TableRowSkeleton = () => (
    <tr className="animate-pulse">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          <div className="ml-4 space-y-2">
            <div className="h-4 bg-gray-300 rounded w-32"></div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="h-4 bg-gray-300 rounded w-40"></div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="h-6 bg-gray-300 rounded w-16"></div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="h-4 bg-gray-300 rounded w-20"></div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="h-5 bg-gray-300 rounded w-5"></div>
      </td>
    </tr>
  );

  // Squelette pour le header
  const HeaderSkeleton = () => (
    <div className="flex justify-between items-center mb-6 animate-pulse">
      <div className="space-y-2">
        <div className="h-8 bg-gray-300 rounded w-64"></div>
        <div className="h-4 bg-gray-200 rounded w-48"></div>
      </div>
      <div className="h-10 bg-gray-300 rounded w-40"></div>
    </div>
  );

  return (
    <div className="p-6">
      {/* Header */}
      {loading ? (
        <HeaderSkeleton />
      ) : (
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Gestion des Administrateurs</h1>
            <p className="text-gray-600">Gérez les comptes administrateurs et agents</p>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <span>Ajouter un Agent</span>
          </button>
        </div>
      )}

      {/* Message d'erreur */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {error}
          </div>
        </div>
      )}

      {/* Tableau des administrateurs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nom
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rôle
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Password
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {loading ? (
                // Squelettes de chargement
                Array.from({ length: 5 }).map((_, index) => (
                  <TableRowSkeleton key={index} />
                ))
              ) : admins && admins.length > 0 ? (
                // Données réelles
                admins.map((admin) => (
                  <tr key={admin.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                          {admin.name?.charAt(0) || 'A'}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{admin.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{admin.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        admin.role === 'Admin' 
                          ? 'bg-purple-100 text-purple-800' 
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {admin.role}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 font-mono">{admin.password}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => openDeleteModal(admin)}
                          disabled={admin.role === 'Admin'}
                          className={`text-red-600 hover:text-red-900 transition-colors ${
                            admin.role === 'Admin' ? 'opacity-50 cursor-not-allowed' : ''
                          }`}
                          title={admin.role === 'Admin' ? 'Impossible de supprimer un Admin principal' : 'Supprimer'}
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-6 py-4 text-center text-gray-500">
                    <div className="flex flex-col items-center justify-center py-8">
                      <svg className="w-12 h-12 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                      </svg>
                      <p className="text-lg font-medium text-gray-900">Aucun administrateur</p>
                      <p className="text-gray-600">Commencez par ajouter un nouvel agent.</p>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modale d'ajout d'agent */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 transform animate-scale-in">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">Ajouter un Agent</h2>
              <button 
                onClick={() => {
                  setShowAddModal(false);
                  resetForm();
                }}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleAddAgent} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nom complet
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Entrez le nom complet"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Entrez l'email"
                />
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowAddModal(false);
                    resetForm();
                  }}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition-colors"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  disabled={submitLoading}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                >
                  {submitLoading && (
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  )}
                  <span>{submitLoading ? 'Ajout...' : 'Ajouter l\'agent'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modale de confirmation de suppression */}
      {showDeleteModal && selectedAdmin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 transform animate-scale-in">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-red-600">Confirmer la suppression</h2>
              <button 
                onClick={() => setShowDeleteModal(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <p className="text-gray-600 mb-6">
              Êtes-vous sûr de vouloir supprimer l'agent <strong>{selectedAdmin.name}</strong> ? 
              Cette action est irréversible.
            </p>

            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition-colors"
                disabled={deleteLoading}
              >
                Annuler
              </button>
              <button
                onClick={handleDeleteAdmin}
                disabled={deleteLoading}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                {deleteLoading && (
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                )}
                <span>{deleteLoading ? 'Suppression...' : 'Supprimer'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}