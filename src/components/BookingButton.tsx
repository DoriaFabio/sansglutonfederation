interface BookingButtonProps {
    onClick: () => void;
}

function BookingButton({ onClick }: BookingButtonProps) {
    return (
        <button
            onClick={onClick}
            className="
                relative
                bg-linear-to-r from-red-600 to-pink-600
                text-white font-semibold
                py-1 px-3 md:py-2 md:px-5
                rounded-xl
                shadow-[0_4px_15px_rgba(255,0,85,0.3)]
                transition-all duration-300 ease-out
                transform hover:scale-110 active:scale-95
                text-sm md:text-lg
                overflow-hidden
            "
        >
            {/* glow interno */}
            <span
                className="
                    absolute inset-0
                    bg-linear-to-r from-white/10 to-white/0
                    opacity-0 hover:opacity-100
                    transition-opacity duration-300
                    pointer-events-none
                "
            />

            {/* pulsazione punto energia */}
            <span className="inline-block w-2 h-2 md:w-3 md:h-3 rounded-full bg-white/90 mr-2 animate-pulse" />

            Prenota ora

            {/* freccia */}
            <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
            </span>
        </button>
    )
}

export default BookingButton
