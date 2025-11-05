export const CallToAction = () => {
    return (
        <div className="mt-8">
            <div
                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl px-10 py-12 flex flex-col md:flex-row items-center justify-between shadow-lg max-w-[1100px] mx-auto">
                <div className="md:w-2/3 text-center md:text-left">
                    <h5 className="font-bold text-3xl text-white leading-snug">
                        Zadbaj o swój samochód już dziś — umów termin w Clariflow
                    </h5>
                    <p className="text-blue-100 mt-3 text-base 2xl:mt-8">
                        Skontaktuj się z nami i przywróć swojemu autu salonowy blask.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row md:flex-col items-center gap-4 mt-8 md:mt-0">
                    <button
                        className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-xl cursor-pointer">
                        Skontaktuj się z nami
                    </button>
                    <div className="flex items-center gap-6">
                        <button
                            className="text-white font-medium  transition cursor-pointer">Zadzwoń
                        </button>
                        <span className="text-white/40">|</span>
                        <button
                            className="text-white font-medium  transition cursor-pointer">Napisz
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}