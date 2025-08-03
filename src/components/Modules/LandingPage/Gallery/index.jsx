import { LIST_GALERRY } from "../../../../constants/listGallery";
import EachUtils from "../../../../utils/EachUtils";

const Gallery = () => {
    return (
        <section id="gallery" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Galeri Kegiatan</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Momen-momen berharga dari berbagai kegiatan kami</p>
                </div>
                <div className="flex overflow-x-auto pb-4 space-x-6">
                    <EachUtils of={LIST_GALERRY} render={(item, index) => (
                        <div key={item.id} className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all card-hover flex-shrink-0 w-64 h-64">
                            <img src={item.image} alt={item.caption} className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300" />
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-white font-bold text-lg">{item.caption}</span>
                            </div>
                        </div>
                    )}/>
                </div>
                <div className="text-center mt-10">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-bold transition-all">
                        Lihat Galeri Lengkap
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Gallery