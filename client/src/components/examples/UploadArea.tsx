import UploadArea from '../UploadArea';

export default function UploadAreaExample() {
  return (
    <UploadArea 
      onFileSelect={(file) => console.log('File selected:', file.name)}
    />
  );
}
