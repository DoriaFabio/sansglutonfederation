import { useState } from 'react'
import BookingButton from './BookingButton'
import BookingOverlay from './BookingOverlay'

function Hero() {
    const [showOverlay, setShowOverlay] = useState<boolean>(false);

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
            <div className="w-full flex justify-center md:pb-10 pb-3">
                <BookingButton onClick={handleClick} />
            </div>

            <BookingOverlay show={showOverlay} />
        </section>
    )
}

export default Hero
