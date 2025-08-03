import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFileAlt,
    faMoneyBillWave,
    faBroadcastTower,
    faUsers,
    faHandsHelping,
    faFlask,
} from '@fortawesome/free-solid-svg-icons';

import { LIST_DEPARTMENTS } from "../../../../constants/listDepartments";
import EachUtils from "../../../../utils/EachUtils";

// Pemetaan nama icon string ke object FontAwesome
const iconMap = {
    "file-alt": faFileAlt,
    "money-bill-wave": faMoneyBillWave,
    "broadcast-tower": faBroadcastTower,
    "users": faUsers,
    "hands-helping": faHandsHelping,
    "flask": faFlask,
};

const Departments = () => {
    return (
        <section id="departments" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Departemen Kami</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Berbagai departemen yang bekerja sama untuk mewujudkan tujuan organisasi
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <EachUtils
                        of={LIST_DEPARTMENTS}
                        render={(item, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all card-hover"
                            >
                                <div className="text-blue-600 mb-4">
                                    {iconMap[item.icon] && (
                                        <FontAwesomeIcon icon={iconMap[item.icon]} className="text-4xl" />
                                    )}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        )}
                    />
                </div>
            </div>
        </section>
    );
};

export default Departments;
