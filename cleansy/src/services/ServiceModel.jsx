// ServiceModal.jsx - Service Detail Modal
import React from 'react';
import { X } from 'lucide-react';
import OfficeCleaningDetail from './OfficeCleaningDetail';
import SchoolCleaningDetail from './SchoolCleaningDetail';
import ChildcareCleaningDetail from './ChildcareCleaningDetail';
import FitnessCentreDetail from './FitnessCentreDetail';
import BuildersCleanDetail from './BuildersCleanDetail';
import ShoppingCenterCleaningDetail from './ShoppingCenterCleaningDetail';
import MedicalCleaningDetail from './MedicalCleaningDetail';
import CommercialCleaningDetail from './CommercialCleaningDetail';


const ServiceModal = ({ service, onClose }) => {
  const renderServiceDetail = () => {
    switch (service.id) {
      case 1:
        return <OfficeCleaningDetail />;
      case 2:
        return <SchoolCleaningDetail />;
      case 3:
        return <ChildcareCleaningDetail />;
      case 4:
        return <FitnessCentreDetail />;
      case 5:
        return <BuildersCleanDetail />;
      case 8:
        return <ShoppingCenterCleaningDetail />;
      case 6:
        return <CommercialCleaningDetail />;
      case 7:
        return <MedicalCleaningDetail />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-4xl max-h-[90vh] overflow-y-auto ring-1 ring-blue-100">
        <div className="relative">
          <img 
            src={service.image} 
            alt={service.title}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-colors"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
          <div className="absolute bottom-6 left-6">
            <div className="flex items-center space-x-4">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                {service.icon}
              </div>
              <h2 className="text-3xl font-bold text-white">{service.title}</h2>
            </div>
          </div>
        </div>

        <div className="p-8">
          {renderServiceDetail()}

          <div className="mt-8 text-center">
            <a
              href="/#quote"
              className="btn-accent px-8 py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 mr-4 inline-block"
            >
              Get Quote for This Service
            </a>
            <button
              onClick={onClose}
              className="border-2 border-[#1E3A8A] text-[#1E3A8A] px-8 py-3 rounded-xl font-semibold hover:bg-[#1E3A8A] hover:text-white transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
