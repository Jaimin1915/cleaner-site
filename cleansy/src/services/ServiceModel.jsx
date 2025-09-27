// ServiceModal.jsx - Service Detail Modal
import React from 'react';
import { X } from 'lucide-react';
import OfficeCleaningDetail from './OfficeCleaningDetail';
import SchoolCleaningDetail from './SchoolCleaningDetail';
import ChildcareCleaningDetail from './ChildcareCleaningDetail';
import FitnessCentreDetail from './FitnessCentreDetail';
import BuildersCleanDetail from './BuildersCleanDetail';
import BodyCorpCleaningDetail from './BodyCorpCleaningDetail';
import PressureCleaningDetail from './PressureCleaningDetail';
import CarpetCleaningDetail from './CarpetCleaningDetail';

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
      case 6:
        return <BodyCorpCleaningDetail />;
      case 7:
        return <PressureCleaningDetail />;
      case 8:
        return <CarpetCleaningDetail />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-4xl max-h-[90vh] overflow-y-auto">
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
            <button
              onClick={onClose}
              className="bg-gradient-to-r from-[#4D757B] to-[#A2B5C3] text-white px-8 py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 mr-4"
            >
              Get Quote for This Service
            </button>
            <button
              onClick={onClose}
              className="border-2 border-[#4D757B] text-[#4D757B] px-8 py-3 rounded-xl font-semibold hover:bg-[#4D757B] hover:text-white transition-all duration-300"
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