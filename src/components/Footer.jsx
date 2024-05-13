import { Icon } from '@iconify/react';
import React from 'react';
import { footerLinks } from '../utils/links';
import alif from '../assets/images/alif.png';
import raihan from '../assets/images/raihan.png';
import tegar from '../assets/images/tegar.png';

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-15">
    <div className="container mx-auto">
        <div className="flex flex-row items-center mb-4">
          <img src={alif} alt="Foto alif" className="w-20 h-20 rounded-full mr-2" />
          <span className="text-white">21.11.4104 - FIRRESA ALIF NURRAHMAN</span> {/* Menambahkan kelas text-white */}
        </div>
        <div className="flex flex-row items-center mb-4">
          <img src={raihan} alt="Foto amu" className="w-20 h-20 rounded-full mr-2" />
          <span className="text-white">21.11.4099 - MUAMMAR RAIHAN</span> {/* Menambahkan kelas text-white */}
        </div>
        <div className="flex flex-row items-center mb-4">
          <img src={tegar} alt="Foto tegar" className="w-20 h-20 rounded-full mr-2" />
          <span className="text-white">21.11.4111 - TEGAR TRI PUTRAWANA</span> {/* Menambahkan kelas text-white */}
        </div>
        <div className="flex flex-row justify-center">
          {footerLinks.map((link, index) => {
            return (
              <a href={link.link} target="_blank" rel="noopener noreferrer" key={link.id} className={`mx-2 flex items-center ${index !== 0 && 'ml-4'}`}>
                <Icon icon={link.logo} className="w-6 h-6" />
                <span className="sr-only">{link.name}</span>
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
