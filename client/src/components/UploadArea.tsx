import { Upload, Image as ImageIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface UploadAreaProps {
  onFileSelect?: (file: File) => void;
}

export default function UploadArea({ onFileSelect }: UploadAreaProps) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
    
    if (imageFiles.length > 0 && onFileSelect) {
      onFileSelect(imageFiles[0]);
      console.log('File dropped:', imageFiles[0].name);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0 && onFileSelect) {
      onFileSelect(files[0]);
      console.log('File selected:', files[0].name);
    }
  };

  return (
    <section className="py-16 px-4 md:px-8" data-testid="section-upload">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-upload-title">
            分享您的作品
          </h2>
          <p className="text-muted-foreground text-lg" data-testid="text-upload-description">
            上傳您最喜愛的二次元作品與大家分享
          </p>
        </div>

        <Card
          className={`border-2 border-dashed rounded-3xl p-12 text-center hover-elevate transition-all ${
            isDragging ? "border-primary bg-primary/5" : "border-border"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          data-testid="card-upload-area"
        >
          <div className="flex flex-col items-center gap-6">
            <div className="rounded-full bg-primary/10 p-6">
              <ImageIcon className="h-16 w-16 text-primary" data-testid="icon-upload" />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2" data-testid="text-drag-drop">
                拖放圖片到這裡
              </h3>
              <p className="text-muted-foreground" data-testid="text-or">
                或者
              </p>
            </div>

            <input
              type="file"
              accept="image/*"
              onChange={handleFileInput}
              className="hidden"
              id="file-upload"
              data-testid="input-file"
            />
            
            <Button
              size="lg"
              className="rounded-full"
              onClick={() => document.getElementById('file-upload')?.click()}
              data-testid="button-choose-file"
            >
              <Upload className="h-5 w-5 mr-2" />
              選擇檔案
            </Button>

            <p className="text-sm text-muted-foreground" data-testid="text-file-types">
              支援 JPG, PNG, GIF 格式
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
