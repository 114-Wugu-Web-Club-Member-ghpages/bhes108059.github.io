import PhotoCard from "./PhotoCard";

export interface Photo {
  id: string;
  imageUrl: string;
  title: string;
  description?: string;
  uploadedAt: Date;
  likes?: number;
  views?: number;
}

interface PhotoGridProps {
  photos: Photo[];
  onPhotoClick?: (id: string) => void;
}

export default function PhotoGrid({ photos, onPhotoClick }: PhotoGridProps) {
  return (
    <section className="py-16 px-4 md:px-8" data-testid="section-photo-grid">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-gallery-title">
            畫廊精選
          </h2>
          <p className="text-muted-foreground text-lg" data-testid="text-gallery-description">
            探索社群分享的精彩作品
          </p>
        </div>

        {photos.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg" data-testid="text-no-photos">
              還沒有照片，成為第一個上傳的人吧！
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {photos.map((photo) => (
              <PhotoCard
                key={photo.id}
                {...photo}
                onPhotoClick={onPhotoClick}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
