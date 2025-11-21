import PhotoCard from '../PhotoCard';
import samplePhoto from '@assets/generated_images/Sample_photo_1_2e135f2a.png';

export default function PhotoCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <PhotoCard
        id="1"
        imageUrl={samplePhoto}
        title="Kawaii Anime Girl"
        description="A cute anime character with pastel colors"
        uploadedAt={new Date(Date.now() - 2 * 60 * 60 * 1000)}
        likes={42}
        views={156}
        onPhotoClick={(id) => console.log('Photo clicked:', id)}
      />
    </div>
  );
}
