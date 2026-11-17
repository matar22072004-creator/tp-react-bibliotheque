function BookCard({ titre, auteur, estDisponible, onClickEmprunt }) {
  return (
    <div className="book-card">
      <h3>{titre}</h3>
      <p className="auteur">Auteur : {auteur}</p>

      <p className="statut">{estDisponible ? '🟢 Disponible' : '🔴 Emprunté'}</p>

      <button onClick={onClickEmprunt}>
        {estDisponible ? 'Emprunter' : 'Rendre'}
      </button>
    </div>
  )
}

export default BookCard
