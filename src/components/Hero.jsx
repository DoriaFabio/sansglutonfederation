import { useState } from 'react'

function Hero() {
    const [showOverlay, setShowOverlay] = useState(false);

    const handleClick = () => {
        setShowOverlay(true);
        setTimeout(() => {
            setShowOverlay(false);
        }, 2000);
    };

    return (
        <section
            className="relative w-full min-h-[250px] md:min-h-[500px] lg:min-h-[750px] flex items-end"
            style={{
                backgroundImage: "url('../HeroImage.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            aria-label="Immagine di copertina"
        >
            <div className="w-full flex justify-center pb-10">
                <button
                    onClick={handleClick}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                >
                    Prenota ora il tuo posto!
                </button>
            </div>

            {showOverlay && (
                <div className="fixed inset-0 bg-[#11101084] bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-8 shadow-2xl">
                        <h2 className="text-2xl font-bold text-black">Match prenotato!</h2>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Hero