import { useState } from 'react'
import BookCard from './components/BookCard'

function App() {
  // État books : la liste des livres (au moins 4)
  const [books, setBooks] = useState([
    { id: 1, titre: "L'Aventure ambiguë", auteur: 'Cheikh Hamidou Kane', estDisponible: true },
    { id: 2, titre: 'Une si longue lettre', auteur: 'Mariama Bâ', estDisponible: false },
    { id: 3, titre: 'Les Bouts de bois de Dieu', auteur: 'Ousmane Sembène', estDisponible: true },
    { id: 4, titre: "L'Enfant noir", auteur: 'Camara Laye', estDisponible: true },
  ])

  // États des champs contrôlés du formulaire
  const [titre, setTitre] = useState('')
  const [auteur, setAuteur] = useState('')

  // Nombre de livres disponibles, recalculé à chaque rendu (temps réel)
  const nbDisponibles = books.filter((book) => book.estDisponible).length

  // Inverse la disponibilité du livre cliqué
  const onClickEmprunt = (bookId) => {
    setBooks(
      books.map((book) =>
        book.id === bookId ? { ...book, estDisponible: !book.estDisponible } : book
      )
    )
  }

  // Soumission du formulaire d'ajout
  const handleSubmit = (e) => {
    e.preventDefault() // empêche le rechargement de la page

    // Vérifie que les champs ne sont pas vides
    if (titre.trim() === '' || auteur.trim() === '') {
      alert('Veuillez remplir le titre et l\'auteur.')
      return
    }

    // Ajoute le nouveau livre (disponible par défaut)
    const nouveauLivre = {
      id: Date.now(),
      titre: titre.trim(),
      auteur: auteur.trim(),
      estDisponible: true,
    }
    setBooks([...books, nouveauLivre])

    // Vide les champs de saisie
    setTitre('')
    setAuteur('')
  }

  return (
    <div className="app">
      <h1>📚 Bibliothèque universitaire</h1>
      <h2>
        Livres disponibles : {nbDisponibles} / {books.length}
      </h2>

      {/* Formulaire d'ajout */}
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Titre du livre"
          value={titre}
          onChange={(e) => setTitre(e.target.value)}
        />
        <input
          type="text"
          placeholder="Auteur"
          value={auteur}
          onChange={(e) => setAuteur(e.target.value)}
        />
        <button type="submit">Ajouter</button>
      </form>

      {/* Affichage de la liste avec .map() et key */}
      <div className="book-list">
        {books.map((book) => (
          <BookCard
            key={book.id}
            titre={book.titre}
            auteur={book.auteur}
            estDisponible={book.estDisponible}
            onClickEmprunt={() => onClickEmprunt(book.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default App
