import muralBg from '@/assets/mural-bg.png';

const MuralHeader = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-400 text-white py-16 mb-8 overflow-hidden">
      <div 
        className="absolute inset-0 opacity-30 bg-cover bg-center"
        style={{ backgroundImage: `url(${muralBg})` }}
      />
      <div className="relative max-w-4xl mx-auto px-4 z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-3 drop-shadow-lg">
          Mural Digital Corporativo
        </h1>
        <p className="text-lg md:text-xl opacity-95 drop-shadow">
          Conectando nossa equipe, compartilhando sucessos
        </p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400" />
    </div>
  );
};

export default MuralHeader;
