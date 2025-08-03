import { LIST_TESTIMONIALS } from "../../../../constants/listTestimonials";
import EachUtils from "../../../../utils/EachUtils";

const Testimonials = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Apa Kata Mereka?</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Testimoni dari anggota dan mahasiswa tentang pengalaman mereka dengan UKMI ALFARUQ</p>
                </div>
                <div className="flex overflow-x-auto pb-4 space-x-6">
                    <EachUtils of={LIST_TESTIMONIALS} render={(item, index) => (
                        <div key={index} className="bg-white p-8 rounded-lg shadow-md flex-shrink-0 w-80">
                            <div className="flex items-center mb-4">
                                <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full mr-4" />
                                <div>
                                    <h4 className="font-bold text-gray-900">{item.name}</h4>
                                    <p className="text-gray-600 text-sm">{item.position}</p>
                                </div>
                            </div>
                            <p className="text-gray-700 italic">"{item.quote}"</p>
                        </div>
                    )}/>
                </div>
            </div>
        </section>
    );
}

export default Testimonials