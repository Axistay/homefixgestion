import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

const LocationComponent = () => {
  const { t, isRTL } = useLanguage()
  

  const locationData = {
    name: "Nador Location",
    address: "532Q+98Q, Nador, Morocco",
    coordinates: {
      lat: 35.150892173351366,
      lng: -2.9116241940283065
    },
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d526.1832056570242!2d-2.9116241940283065!3d35.150892173351366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd77a7bbc231db65%3A0x76d99657224cb3d1!2s532Q%2B98Q%2C%20Nador!5e1!3m2!1sen!2sma!4v1752249379771!5m2!1sen!2sma"
  };

 

  return (
    <div className="max-w-7xl mx-auto p-6  rounded-lg ">

      {/* Google Maps Embed */}
      <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-md">
        <iframe
          src={locationData.embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        />
      </div>

      {/* Footer */}
      <div className="mt-4 text-center text-sm text-gray-500">
        <p>{t("contact.desmaps")} </p>
      </div>
    </div>
  );
};

export default LocationComponent;