import { useParams, useNavigate } from 'react-router-dom';
import { teams } from '../data/teams';
import { Sambuca, Krusty_krak, chiattilos, Calciatore } from '../data/calciatori';


function TeamDetail() {
    const { teamIndex } = useParams<{ teamIndex: string }>();
    const navigate = useNavigate();

    const team = teams[Number(teamIndex)];

    if (!team) {
        return <div className="text-white text-center py-10">Squadra non trovata</div>;
    }

    // Combina tutti i giocatori
    const tuttiGiocatori: Calciatore[] = [...Sambuca, ...Krusty_krak, ...chiattilos];

    // Filtra i giocatori per teamId
    const giocatoriSquadra = tuttiGiocatori.filter(player => player.teamId === team.id);

    // Organizza i giocatori per ruolo
    const portieri = giocatoriSquadra.filter(p => p.ruolo === 'P');
    const difensori = giocatoriSquadra.filter(p => p.ruolo === 'D');
    const centrocampisti = giocatoriSquadra.filter(p => p.ruolo === 'C');
    const attaccanti = giocatoriSquadra.filter(p => p.ruolo === 'A');

    const RenderGiocatori = ({ giocatori, ruolo }: { giocatori: Calciatore[], ruolo: string }) => (
        <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">{ruolo}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {giocatori.map((giocatore, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-white">{giocatore.calciatore}</h3>
                        <p className="text-amber-100 text-sm">{giocatore.squadra}</p>
                        <div className="mt-2 text-xs text-white/80">
                            <span>Q.Acq: {giocatore.qAcq}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-cyan-800 py-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header squadra */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
                    <button
                        onClick={() => navigate('/')}
                        className="text-amber-100 hover:text-white mb-4 flex items-center gap-2 cursor-pointer"
                    >
                        ← Torna alla lista
                    </button>
                    <div className="flex items-center gap-6">
                        <img
                            src={team.logo}
                            alt={team.teamName}
                            className="w-24 h-24 object-contain"
                        />
                        <div>
                            <h1 className="text-4xl font-bold text-white mb-2">{team.teamName}</h1>
                            <p className="text-amber-100 text-lg">Proprietario: {team.ownerName}</p>
                            <p className="text-white/70 text-sm mt-1">Rosa: {giocatoriSquadra.length} giocatori</p>
                        </div>
                    </div>
                </div>

                {/* Lista giocatori */}
                {giocatoriSquadra.length > 0 ? (
                    <div className="space-y-8">
                        {portieri.length > 0 && <RenderGiocatori giocatori={portieri} ruolo="Portieri" />}
                        {difensori.length > 0 && <RenderGiocatori giocatori={difensori} ruolo="Difensori" />}
                        {centrocampisti.length > 0 && <RenderGiocatori giocatori={centrocampisti} ruolo="Centrocampisti" />}
                        {attaccanti.length > 0 && <RenderGiocatori giocatori={attaccanti} ruolo="Attaccanti" />}
                    </div>
                ) : (
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
                        <p className="text-white text-lg">Nessun giocatore disponibile per questa squadra</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default TeamDetail;