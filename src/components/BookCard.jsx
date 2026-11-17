// Composant enfant : affiche un livre sous forme de carte
// Il reçoit 4 props (en lecture seule) : titre, auteur, estDisponible, onClickEmprunt
function BookCard({ titre, auteur, estDisponible, onClickEmprunt }) {
  return (
    <div className="book-card">
      <h3>{titre}</h3>
      <p className="auteur">Auteur : {auteur}</p>

      {/* Affichage conditionnel du statut */}
      <p className="statut">{estDisponible ? '🟢 Disponible' : '🔴 Emprunté'}</p>

      {/* Le bouton déclenche la fonction reçue en prop */}
      <button onClick={onClickEmprunt}>
        {estDisponible ? 'Emprunter' : 'Rendre'}
      </button>
    </div>
  )
}

export default BookCard
