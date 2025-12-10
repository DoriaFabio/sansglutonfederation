import { useNavigate } from 'react-router-dom';

export default function Meme() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-cyan-800 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
          <button
            onClick={() => navigate('/')}
            className="text-amber-100 hover:text-white mb-4 flex items-center gap-2 cursor-pointer"
          >
            ← Torna alla lista
          </button>
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Meme</h1>
            <p className="text-amber-100 text-lg">Sezione meme della lega</p>
          </div>
        </div>

        {/* Contenuto */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
          <p className="text-white text-lg">Pagina in costruzione...</p>
        </div>
      </div>
    </div>
  )
}