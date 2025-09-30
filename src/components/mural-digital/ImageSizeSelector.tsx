import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export type ImageSize = 'small' | 'fit' | 'original';

interface ImageSizeSelectorProps {
  value: ImageSize;
  onChange: (value: ImageSize) => void;
}

const ImageSizeSelector = ({ value, onChange }: ImageSizeSelectorProps) => {
  return (
    <div className="space-y-2">
      <Label className="text-sm font-medium">Tamanho da imagem</Label>
      <RadioGroup value={value} onValueChange={onChange}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="small" id="small" />
          <Label htmlFor="small" className="cursor-pointer font-normal">
            Pequeno (300px)
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="fit" id="fit" />
          <Label htmlFor="fit" className="cursor-pointer font-normal">
            Melhor Ajuste (responsivo)
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="original" id="original" />
          <Label htmlFor="original" className="cursor-pointer font-normal">
            Tamanho Original
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default ImageSizeSelector;
