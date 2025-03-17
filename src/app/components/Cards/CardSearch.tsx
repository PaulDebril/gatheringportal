'use client'
import React, { useState, useEffect, Suspense } from 'react'
import { motion } from 'framer-motion'
import { useRouter, useSearchParams } from 'next/navigation'
import CardItem from '@/app/components/Cards/CardItem'
import { FaSearch } from 'react-icons/fa'
import { searchCards } from '@/app/services/scryfallService'
import { ScryfallCard } from '@/app/types/scryfallTypes'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

function CardSearchContent() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [query, setQuery] = useState<string>('')
  const [cards, setCards] = useState<ScryfallCard[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const initialQuery = searchParams.get('q') || ''
    setQuery(initialQuery)
    if (initialQuery.trim() !== '') {
      effectuerRecherche(initialQuery)
    }
  }, [searchParams])

  const effectuerRecherche = async (q: string) => {
    setLoading(true)
    setError('')
    try {
      const result = await searchCards(q)
      setCards(result)
    } catch {
      setError('Une erreur est survenue lors de la recherche.')
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (query.trim() === '') return
    router.push(`?q=${encodeURIComponent(query)}`, { scroll: false })
    effectuerRecherche(query)
  }

  return (
    <div className="card-search">
      <form onSubmit={handleSearch} className="flex items-center space-x-2">
        <div className="flex flex-col items-center mt-8 w-full">
          <div className="flex space-x-2 mt-4">
            <input
              type="text"
              placeholder="Rechercher une carte..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="border-2 border-gray-300 bg-gray-100 text-black rounded-lg p-3 w-96"
            />
            <button type="submit" className="bg-[#c49a0d] text-white rounded-lg px-6">
              <FaSearch />
            </button>
          </div>
        </div>
      </form>

      <div className='flex justify-center w-full mb-10'>
        <div className="flex flex-col items-center mt-8 w-1/2">
          {loading && <p>Chargement...</p>}
          {error && <p className="text-red-500">{error}</p>}    
          {cards.length > 0 && (
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {cards.map((card) => (
                <CardItem key={card.id} card={card} />
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function CardSearch() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CardSearchContent />
    </Suspense>
  )
}