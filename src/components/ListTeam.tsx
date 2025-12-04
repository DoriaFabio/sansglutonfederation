import { teams } from '../data/teams'

function ListTeam() {
  return (
    <div className="py-5 px-4">
        <h1 className="text-center text-3xl font-bold text-amber-100 mb-8">Lista squadre</h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 max-w-7xl mx-auto">
            {teams.map((team, index) => (
                <div
                    key={index}
                    className="flex flex-col items-center bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                    <div className="w-24 h-24 mb-3 flex items-center justify-center">
                        <img
                            src={team.logo}
                            alt={team.teamName}
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <h3 className="font-bold text-white text-center text-sm mb-1">
                        {team.teamName}
                    </h3>
                    <p className="text-amber-100 text-center text-xs">
                        {team.ownerName}
                    </p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ListTeam