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
      <div className="bg-background border-b py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-foreground">
            Mural Digital Corporativo
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Conectando nossa equipe, compartilhando sucessos
          </p>
        </div>
      </div>
    </div>
  );
};

export default MuralHeader;
