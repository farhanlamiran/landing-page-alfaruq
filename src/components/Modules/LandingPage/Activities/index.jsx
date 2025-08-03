import { lIST_ACTIVITIES } from "../../../../constants/listActivities";
import EachUtils from "../../../../utils/EachUtils";

const Activities =() => {
    return (
        <section id="activities" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Kegiatan Kami</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Berbagai kegiatan yang kami selenggarakan untuk mahasiswa</p>
                </div>
                <div className="flex overflow-x-auto pb-4 space-x-6">
                    <EachUtils of={lIST_ACTIVITIES} render={(item, index) => (
                        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all card-hover flex-shrink-0 w-72">
                            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <div className="text-blue-600 text-sm mb-2">{new Date(item.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                                <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium">Selengkapnya →</button>
                            </div>
                        </div>
                    )}/>
                </div>
                <div className="text-center mt-10">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-bold transition-all">
                        Lihat Semua Kegiatan
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Activities