import muralBg from '@/assets/mural-bg.png';
import { useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const MuralHeader = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="mb-8">
      <div className="relative h-48 md:h-64 bg-muted overflow-hidden">
        {!imageLoaded && (
          <Skeleton className="absolute inset-0" />
        )}
        <img 
          src={muralBg}
          alt="Mural Digital Corporativo"
          className="w-full h-full object-contain"
          loading="eager"
          onLoad={() => setImageLoaded(true)}
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
