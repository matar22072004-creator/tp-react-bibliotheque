import { useState } from 'react'
import BookCard from './components/BookCard'

function App() {
  const [books, setBooks] = useState([
    { id: 1, titre: "L'Aventure ambiguë", auteur: 'Cheikh Hamidou Kane', estDisponible: true },
    { id: 2, titre: 'Une si longue lettre', auteur: 'Mariama Bâ', estDisponible: false },
    { id: 3, titre: 'Les Bouts de bois de Dieu', auteur: 'Ousmane Sembène', estDisponible: true },
    { id: 4, titre: "L'Enfant noir", auteur: 'Camara Laye', estDisponible: true },
  ])

  const [titre, setTitre] = useState('')
  const [auteur, setAuteur] = useState('')

  const nbDisponibles = books.filter((book) => book.estDisponible).length

  const onClickEmprunt = (bookId) => {
    setBooks(
      books.map((book) =>
        book.id === bookId ? { ...book, estDisponible: !book.estDisponible } : book
      )
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (titre.trim() === '' || auteur.trim() === '') {
      alert('Veuillez remplir le titre et l\'auteur.')
      return
    }

    const nouveauLivre = {
      id: Date.now(),
      titre: titre.trim(),
      auteur: auteur.trim(),
      estDisponible: true,
    }
    setBooks([...books, nouveauLivre])

    setTitre('')
    setAuteur('')
  }

  return (
    <div className="app">
      <h1>📚 Livres disponibles : {nbDisponibles}</h1>
      <p className="sous-titre">Bibliothèque universitaire — {books.length} livres au total</p>

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
