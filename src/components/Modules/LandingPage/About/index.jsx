import { ORGANIZATION } from "../../../../constants/listJumbotron"
import { Info } from "lucide-react";
// About Component
const About = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Tentang {ORGANIZATION.name}</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                </div>
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
                        <Info className="w-48 h-48 text-blue-600" />
                    </div>
                    <div className="md:w-1/2">
                        <p className="text-gray-700 text-lg mb-6">{ORGANIZATION.description}</p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <h3 className="font-bold text-blue-800 mb-2">Visi</h3>
                                <p className="text-gray-700">Menjadi organisasi kemahasiswaan Islam yang visioner, inklusif, dan berdaya dalam membentuk generasi muslim yang berintegritas, cerdas, dan kontributif.</p>
                            </div>
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <h3 className="font-bold text-blue-800 mb-2">Misi</h3>
                                <p className="text-gray-700">Membina dan mengembangkan mahasiswa menjadi pribadi muslim yang berakhlak, cerdas, dan kontributif.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About