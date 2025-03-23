"use client"
import { useState, useEffect } from 'react'
import { FaPlus, FaMinus, FaSyncAlt, FaUndo, FaTimes } from 'react-icons/fa'
import { GiTabletopPlayers } from 'react-icons/gi'
import { IoIosSettings } from 'react-icons/io'
import { LuLayoutPanelTop } from 'react-icons/lu'
import './style.css'

export default function LifeCounterPage() {
  const [top, setTop] = useState(40)
  const [bottom, setBottom] = useState(40)
  const [colors, setColors] = useState<string[]>([])
  const [topChange, setTopChange] = useState<number>(0)
  const [bottomChange, setBottomChange] = useState<number>(0)
  const [topTimeout, setTopTimeout] = useState<NodeJS.Timeout | null>(null)
  const [bottomTimeout, setBottomTimeout] = useState<NodeJS.Timeout | null>(null)
  const [isTopRotated, setIsTopRotated] = useState(false)
  const [isBottomRotated, setIsBottomRotated] = useState(false)
  
  const [isModalPlayerOpen, setIsModalPlayerOpen] = useState(false)
  const [isModalConfigOpen, setIsModalConfigOpen] = useState(false)

  const [player1Name, setPlayer1Name] = useState("Joueur 1")
  const [player2Name, setPlayer2Name] = useState("Joueur 2")

  const [startingLife, setStartingLife] = useState(40)

  useEffect(() => {
    const savedState = localStorage.getItem("lifeCounterState")
    console.log(savedState)
    if (savedState) {
      try {
        const { top, bottom, player1Name, player2Name, startingLife } = JSON.parse(savedState)
        setTop(top)
        setBottom(bottom)
        setPlayer1Name(player1Name)
        setPlayer2Name(player2Name)
        setStartingLife(startingLife)
      } catch (error) {
        console.error("Erreur lors du parsing du state sauvegardé :", error)
      }
    }
  }, [])

  useEffect(() => {
    const stateToSave = { top, bottom, player1Name, player2Name, startingLife }
    localStorage.setItem("lifeCounterState", JSON.stringify(stateToSave))
  }, [top, bottom, player1Name, player2Name, startingLife])

  useEffect(() => {
    const colorList = ['bg-yellow-500', 'bg-pink-400', 'bg-blue-500', 'bg-green-500', 'bg-red-500']
    setColors(shuffleArray(colorList))
  }, [])

  const shuffleArray = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }

  const resetCounters = () => {
    setTop(startingLife)
    setBottom(startingLife)
  }

  const handleTopChange = (change: number) => {
    setTop(prev => prev + change)
    setTopChange(prev => prev + change)
    if (topTimeout) clearTimeout(topTimeout)
    setTopTimeout(setTimeout(() => setTopChange(0), 2000))
  }

  const handleBottomChange = (change: number) => {
    setBottom(prev => prev + change)
    setBottomChange(prev => prev + change)
    if (bottomTimeout) clearTimeout(bottomTimeout)
    setBottomTimeout(setTimeout(() => setBottomChange(0), 2000))
  }

  const toggleTopRotation = () => {
    setIsTopRotated(!isTopRotated)
  }

  const toggleBottomRotation = () => {
    setIsBottomRotated(!isBottomRotated)
  }

  const openModalPlayer = () => {
    setIsModalPlayerOpen(true)
  }
  const closeModalPlayer = () => {
    setIsModalPlayerOpen(false)
  }
  const openModalConfig = () => {
    setIsModalConfigOpen(true)
  }
  const closeModalConfig = () => {
    setIsModalConfigOpen(false)
  }

  const applyConfig = () => {
    setTop(startingLife)
    setBottom(startingLife)
    closeModalConfig()
  }

  return (
    <main className="relative w-full h-screen font-sans bg-black">
      <div className="absolute inset-0 flex flex-col justify-between">
        <div className={`m-6 mb-2 flex-1 rounded-lg shadow-lg overflow-hidden ${isTopRotated ? 'rotate-180' : ''} ${colors[0]}`}>
          <div className="relative text-black p-4 h-full">
            <button
              onClick={toggleTopRotation}
              className="absolute top-2 right-2 text-2xl hover:scale-110 transition-transform"
              aria-label="Pivoter Joueur 1"
            >
              <FaUndo />
            </button>
            <button
              onClick={() => handleTopChange(1)}
              className="absolute right-1/4 top-1/2 -translate-y-1/2 text-4xl hover:scale-110 transition-transform flex items-center"
              aria-label="Incrémenter Joueur 1"
            >
              <FaPlus />
              {topChange > 0 && <span className="ml-2 text-6xl beleren-font">{topChange}</span>}
            </button>
            <button
              onClick={() => handleTopChange(-1)}
              className="absolute left-1/4 top-1/2 -translate-y-1/2 text-4xl hover:scale-110 transition-transform flex items-center"
              aria-label="Décrémenter Joueur 1"
            >
              <FaMinus />
              {topChange < 0 && <span className="ml-2 text-6xl beleren-font">{Math.abs(topChange)}</span>}
            </button>
            <div className="flex flex-col items-center justify-center h-full">
              <div className="text-[120px] beleren-font">{top}</div>
              <div className="mt-4 text-2xl font-bold">{player1Name}</div>
            </div>
          </div>
        </div>

        <div className={`m-6 mt-2 flex-1 rounded-lg shadow-lg overflow-hidden ${isBottomRotated ? 'rotate-180' : ''} ${colors[1]}`}>
          <div className="relative text-black p-4 h-full">
            <button
              onClick={toggleBottomRotation}
              className="absolute top-2 right-2 text-2xl hover:scale-110 transition-transform"
              aria-label="Pivoter Joueur 2"
            >
              <FaUndo />
            </button>
            <button
              onClick={() => handleBottomChange(1)}
              className="absolute right-1/4 top-1/2 -translate-y-1/2 text-4xl hover:scale-110 transition-transform flex items-center"
              aria-label="Décrémenter Joueur 2"
            >
              <FaPlus />
              {bottomChange > 0 && <span className="ml-2 text-6xl beleren-font">{bottomChange}</span>}
            </button>
            <button
              onClick={() => handleBottomChange(-1)}
              className="absolute left-1/4 top-1/2 -translate-y-1/2 text-4xl hover:scale-110 transition-transform"
              aria-label="Incrémenter Joueur 2"
            >
              <FaMinus />
              {bottomChange < 0 && <span className="ml-2 text-6xl beleren-font">{Math.abs(bottomChange)}</span>}
            </button>
            <div className="flex flex-col items-center justify-center h-full">
              <div className="text-[120px] beleren-font">{bottom}</div>
              <div className="mt-4 text-2xl font-bold">{player2Name}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center space-x-4 z-10">
        <button
          onClick={openModalConfig}
          className="bg-white text-black rounded-full hover:scale-110 transition-transform border-4 border-black border-opacity-50 w-12 h-12 flex justify-center items-center"
          aria-label="Bouton config"
        >
          <IoIosSettings size={35} />
        </button>
        <button
          onClick={resetCounters}
          className="bg-white text-black rounded-full hover:scale-110 transition-transform border-4 border-black border-opacity-50 w-12 h-12 flex justify-center items-center"
          aria-label="Bouton reset"
        >
          <FaSyncAlt size={24} />
        </button>
        <button
          onClick={() => { window.location.href = '/' }}
          className="hexagon hover:scale-110 transition-transform flex justify-center items-center"
          aria-label="Bouton hexagon"
        >
        </button>
        <button
          onClick={() => {  }}
          className="bg-white text-black rounded-full hover:scale-110 transition-transform border-4 border-black border-opacity-50 w-12 h-12 flex justify-center items-center"
          aria-label="Bouton droit"
        >
          <LuLayoutPanelTop size={29} />
        </button> 
        <button
          onClick={openModalPlayer}
          className="bg-white text-black rounded-full hover:scale-110 transition-transform border-4 border-black border-opacity-50 w-12 h-12 flex justify-center items-center"
          aria-label="Bouton player"
        >
          <GiTabletopPlayers size={35} />
        </button>
      </div>

      {isModalPlayerOpen && (
        <div className="fixed inset-0 flex flex-col justify-center items-center bg-black/90 z-20">
          <div className="w-1/2 px-4">
            <h2 className="text-2xl font-bold mb-4 text-center text-white">Modifier les noms</h2>
            <div className="mb-4">
              <label className="block text-lg mb-1 text-white">Joueur 1 :</label>
              <input
                type="text"
                value={player1Name}
                onChange={(e) => setPlayer1Name(e.target.value)}
                className="w-full border border-white bg-transparent p-2 rounded text-white placeholder-white"
                placeholder="Nom du Joueur 1"
              />
            </div>
            <div className="mb-16">
              <label className="block text-lg mb-1 text-white">Joueur 2 :</label>
              <input
                type="text"
                value={player2Name}
                onChange={(e) => setPlayer2Name(e.target.value)}
                className="w-full border border-white bg-transparent p-2 rounded text-white placeholder-white"
                placeholder="Nom du Joueur 2"
              />
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <button
              onClick={closeModalPlayer}
              className="bg-white text-black rounded-full w-12 h-12 flex justify-center items-center hover:scale-110 transition-transform"
              aria-label="Fermer le modal Player"
            >
              <FaTimes size={20} />
            </button>
          </div>
        </div>
      )}

      {isModalConfigOpen && (
        <div className="fixed inset-0 flex flex-col justify-center items-center bg-black/90 z-20">
          <div className="w-1/2 px-4">
            <h2 className="text-2xl font-bold mb-4 text-center text-white">
              Configurer les points de vie de départ
            </h2>
            <div className="mb-8">
              <label className="block text-lg mb-2 text-white">
                Points de vie : {startingLife}
              </label>
              <input
                type="range"
                min="20"
                max="50"
                step="10"
                value={startingLife}
                onChange={(e) => setStartingLife(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-white text-sm mt-2">
                <span>20</span>
                <span>30</span>
                <span>40</span>
                <span>50</span>
              </div>
            </div>
            <button
              onClick={applyConfig}
              className="bg-white text-black rounded px-4 py-2 hover:scale-110 transition-transform"
            >
              Appliquer
            </button>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <button
              onClick={closeModalConfig}
              className="bg-white text-black rounded-full w-12 h-12 flex justify-center items-center hover:scale-110 transition-transform"
              aria-label="Fermer le modal Config"
            >
              <FaTimes size={20} />
            </button>
          </div>
        </div>
      )}
    </main>
  )
}