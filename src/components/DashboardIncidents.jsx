import { useState, useEffect } from 'react';
import { incidentService } from '../services/IncidentService';

export function DashboardIncidents() {
  const [incidents, setIncidents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Charger la liste des incidents
  const loadIncidents = async () => {
    try {
      setLoading(true);
      setError('');
      const response = await incidentService.getIncidents();
      
      if (response.data && response.data.success) {
        setIncidents(response.data.data || []);
      } else {
        setError('Format de réponse inattendu');
      }
    } catch (err) {
      console.error('Erreur chargement incidents:', err);
      setError(err.response?.data?.message || 'Erreur lors du chargement des incidents');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadIncidents();
  }, []);

  // Fonction pour formater la date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Fonction pour obtenir la couleur selon la gravité
  const getGraviteColor = (niveau) => {
    switch (niveau) {
      case 'eleve':
        return 'bg-red-500 text-white';
      case 'moyen':
        return 'bg-yellow-500 text-white';
      case 'faible':
        return 'bg-green-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  // Fonction pour formater le type d'incident
  const formatTypeIncident = (type) => {
    const types = {
      'chute': 'Chute détectée',
      'feu': 'Début d\'incendie',
      'intrusion': 'Intrusion',
      'mouvement': 'Mouvement suspect'
    };
    return types[type] || type.charAt(0).toUpperCase() + type.slice(1);
  };

  // Squelette de chargement
  const IncidentSkeleton = () => (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 animate-pulse">
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
        <div className="flex-1 space-y-3">
          <div className="flex items-center space-x-2">
            <div className="h-4 bg-gray-300 rounded w-24"></div>
            <div className="h-4 bg-gray-300 rounded w-16"></div>
          </div>
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="flex space-x-2">
            <div className="h-8 bg-gray-300 rounded w-20"></div>
            <div className="h-8 bg-gray-300 rounded w-24"></div>
          </div>
          <div className="h-48 bg-gray-300 rounded-lg"></div>
          <div className="flex justify-between pt-4">
            <div className="h-8 bg-gray-300 rounded w-24"></div>
            <div className="h-8 bg-gray-300 rounded w-32"></div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Incidents en temps réel</h1>
        <p className="text-gray-600 mt-2">
          Surveillance des événements en direct
        </p>
      </div>

      {/* Message d'erreur */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-2xl mb-6">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {error}
          </div>
        </div>
      )}

      {/* Flux d'incidents */}
      <div className="space-y-6">
        {loading ? (
          // Squelettes de chargement
          Array.from({ length: 3 }).map((_, index) => (
            <IncidentSkeleton key={index} />
          ))
        ) : incidents && incidents.length > 0 ? (
          // Liste des incidents
          incidents.map((incident) => (
            <div key={incident.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200">
              {/* En-tête de l'incident */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{formatTypeIncident(incident.type_incident)}</h3>
                    <p className="text-sm text-gray-500">{formatDate(incident.date_heure)}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getGraviteColor(incident.niveau_gravite)}`}>
                  {incident.niveau_gravite === 'eleve' ? 'Élevé' : 
                   incident.niveau_gravite === 'moyen' ? 'Moyen' : 
                   incident.niveau_gravite === 'faible' ? 'Faible' : incident.niveau_gravite}
                </span>
              </div>

              {/* Détails de l'incident */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  </svg>
                  <span>Localisation: {incident.cameras?.localisation || 'Non spécifiée'}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <span>Caméra: {incident.cameras?.nom_camera || 'N/A'}</span>
                </div>
              </div>

              {/* Zone vidéo */}
              <div className="mb-4">
                <div className="bg-gray-100 rounded-xl p-4 text-center border-2 border-dashed border-gray-300">
                  <svg className="w-12 h-12 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm text-gray-600 mb-3">Enregistrement vidéo disponible</p>
                  <button
                    onClick={() => window.open(incident.video_url, '_blank')}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2 mx-auto"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    </svg>
                    <span>Visionner l'incident</span>
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>ID: {incident.id.substring(0, 8)}...</span>
                </div>
                <div className="flex space-x-2">
                  <button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 font-medium flex items-center space-x-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                    </svg>
                    <span>Options</span>
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          // Aucun incident
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-12 text-center">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Aucun incident signalé</h3>
            <p className="text-gray-600">Tout semble calme pour le moment.</p>
          </div>
        )}
      </div>
    </div>
  );
}