import { ORGANIZATION } from "../../../../constants/listJumbotron";


const Hero = () => {
    return (
        <section className="hero-gradient text-white py-20 md:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-10 md:mb-0">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">{ORGANIZATION.fullName}</h1>
                        <p className="text-xl mb-8">{ORGANIZATION.motto}</p>
                        <div className="flex space-x-4">
                            <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-md font-bold transition-all">
                                Jelajahi Kegiatan
                            </button>
                            <a href="/daftar" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-md font-bold transition-all inline-block">
                                Daftar Sekarang
                            </a>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <img src={ORGANIZATION.logo} alt="Hero Image" className="rounded-lg" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero