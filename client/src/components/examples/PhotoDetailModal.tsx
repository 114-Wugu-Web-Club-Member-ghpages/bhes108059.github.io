import PhotoDetailModal from '../PhotoDetailModal';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import samplePhoto from '@assets/generated_images/Sample_photo_1_2e135f2a.png';

export default function PhotoDetailModalExample() {
  const [open, setOpen] = useState(false);

  const mockPhoto = {
    id: '1',
    imageUrl: samplePhoto,
    title: 'Kawaii Anime Girl',
    description: 'A cute anime character with pastel colors and cheerful expression. This artwork captures the essence of kawaii culture with its soft color palette and adorable character design.',
    uploadedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
    likes: 42,
    views: 156,
  };

  return (
    <div className="p-8">
      <Button onClick={() => setOpen(true)} data-testid="button-open-modal">
        Open Photo Detail
      </Button>
      <PhotoDetailModal
        open={open}
        onOpenChange={setOpen}
        photo={mockPhoto}
      />
    </div>
  );
}
