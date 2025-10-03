import muralBg from '@/assets/mural-bg.png';

const MuralHeader = () => {
  return (
    <div className="mb-8">
      <div className="relative h-48 md:h-64 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${muralBg})` }}
        />
      </div>
      <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Mural Digital Corporativo
          </h1>
          <p className="text-lg md:text-xl opacity-95">
            Conectando nossa equipe, compartilhando sucessos
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400" />
      </div>
    </div>
  );
};

export default MuralHeader;
