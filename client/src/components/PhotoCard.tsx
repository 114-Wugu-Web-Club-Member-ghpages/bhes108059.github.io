import { Card } from "@/components/ui/card";
import { Heart, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow } from "date-fns";
import { zhTW } from "date-fns/locale";

interface PhotoCardProps {
  id: string;
  imageUrl: string;
  title: string;
  description?: string;
  uploadedAt: Date;
  likes?: number;
  views?: number;
  onPhotoClick?: (id: string) => void;
}

export default function PhotoCard({
  id,
  imageUrl,
  title,
  description,
  uploadedAt,
  likes = 0,
  views = 0,
  onPhotoClick,
}: PhotoCardProps) {
  return (
    <Card
      className="overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 cursor-pointer group"
      onClick={() => onPhotoClick?.(id)}
      data-testid={`card-photo-${id}`}
    >
      <div className="aspect-square overflow-hidden rounded-t-xl bg-muted">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          data-testid={`img-photo-${id}`}
        />
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1 truncate" data-testid={`text-title-${id}`}>
          {title}
        </h3>
        
        {description && (
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2" data-testid={`text-description-${id}`}>
            {description}
          </p>
        )}
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <Heart className="h-4 w-4 text-primary fill-primary" />
              <span className="text-xs font-medium" data-testid={`text-likes-${id}`}>{likes}</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye className="h-4 w-4 text-muted-foreground" />
              <span className="text-xs text-muted-foreground" data-testid={`text-views-${id}`}>{views}</span>
            </div>
          </div>
          
          <Badge variant="secondary" className="rounded-full text-xs" data-testid={`badge-time-${id}`}>
            {formatDistanceToNow(uploadedAt, { addSuffix: true, locale: zhTW })}
          </Badge>
        </div>
      </div>
    </Card>
  );
}
