interface BookingOverlayProps {
    show: boolean;
}

function BookingOverlay({ show }: BookingOverlayProps) {
    if (!show) return null;

    return (
        <div
            className="
                fixed inset-0
                bg-black/70 backdrop-blur-sm
                flex items-center justify-center
                z-50
                animate-fadeIn
            "
        >
            <div
                className="
                    relative
                    bg-linear-to-br from-neutral-900 to-neutral-800
                    text-white
                    rounded-2xl
                    p-8 md:p-10
                    shadow-[0_0_40px_rgba(255,0,85,0.25)]
                    border border-white/10
                    animate-scaleIn
                "
            >
                {/* Glow decorativo */}
                <span
                    className="
                        absolute inset-0 rounded-2xl
                        bg-pink-500/20 blur-xl opacity-30
                    "
                />

                <h2 className="relative text-3xl font-bold mb-1">
                    Classifica Finale
                </h2>

                <p className="relative text-neutral-300 text-sm md:text-base">
                    Ecco la classifica finale del nostro fantacalcio! Complimenti a tutti i partecipanti per la loro passione e dedizione. Che la prossima stagione sia ancora più emozionante!
                </p>
                <p>
                    1. Brunori Sassuolo - 68 punti
                    <br />
                    2. De Paul Fiction - 65 punti
                    <br />
                    3. Club D. Regatas Mugiwara - 59 punti
                    <br />
                    4. Toronto Staraptor - 58 punti
                    <br />
                    5. Sambuca Juniors - 55 punti
                    <br />
                    6. Alfa Romeo Giulia - 55 punti
                    <br />
                    7. One Pisa - 54 punti
                    <br />
                    8. Lecrerkusen - 53 punti
                    <br />
                    9. Udinegre - 51 punti
                    <br />
                    10. Trumpzonsor - 51 punti
                    <br />
                    11. Florentia Viola - 50 punti
                    <br />
                    12. Cacio e Pepe FC - 48 punti
                    <br />
                    13. Barchillona - 45 punti
                    <br />
                    14. Chiattillos FC - 45 punti
                    <br />
                    15. Fucking Dangerous Nightmare - 39 punti
                    <br />
                    16. Ossobuco FCecche - 34 punti
                    <br />
                    17. Godo Glimt - 28 punti
                    <br />
                    18. Krusty Krak Klub - 18 punti
                </p>
            </div>
        </div>
    )
}

export default BookingOverlay
