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
                    Match prenotato!
                </h2>

                <p className="relative text-neutral-300 text-sm md:text-base">
                    Preparati alla sfida.
                </p>
            </div>
        </div>
    )
}

export default BookingOverlay
