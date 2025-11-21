import PhotoGrid from '../PhotoGrid';
import sample1 from '@assets/generated_images/Sample_photo_1_2e135f2a.png';
import sample2 from '@assets/generated_images/Sample_photo_2_d41a8c03.png';
import sample3 from '@assets/generated_images/Sample_photo_3_dd99fcd5.png';
import sample4 from '@assets/generated_images/Sample_photo_4_d7579ce8.png';
import sample5 from '@assets/generated_images/Sample_photo_5_7bd422a5.png';
import sample6 from '@assets/generated_images/Sample_photo_6_01929cbd.png';

const mockPhotos = [
  {
    id: '1',
    imageUrl: sample1,
    title: 'Kawaii Character',
    description: 'Cute anime girl with cheerful smile',
    uploadedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
    likes: 42,
    views: 156,
  },
  {
    id: '2',
    imageUrl: sample2,
    title: 'Cherry Blossom',
    description: 'Beautiful sakura landscape',
    uploadedAt: new Date(Date.now() - 5 * 60 * 60 * 1000),
    likes: 89,
    views: 234,
  },
  {
    id: '3',
    imageUrl: sample3,
    title: 'Cozy Room',
    description: 'Aesthetic anime room interior',
    uploadedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    likes: 63,
    views: 189,
  },
  {
    id: '4',
    imageUrl: sample4,
    title: 'Sweet Treats',
    description: 'Delicious kawaii desserts',
    uploadedAt: new Date(Date.now() - 3 * 60 * 60 * 1000),
    likes: 127,
    views: 412,
  },
  {
    id: '5',
    imageUrl: sample5,
    title: 'Starry Night',
    description: 'Magical celestial scene',
    uploadedAt: new Date(Date.now() - 6 * 60 * 60 * 1000),
    likes: 98,
    views: 287,
  },
  {
    id: '6',
    imageUrl: sample6,
    title: 'Fluffy Cat',
    description: 'Adorable anime cat',
    uploadedAt: new Date(Date.now() - 4 * 60 * 60 * 1000),
    likes: 156,
    views: 523,
  },
];

export default function PhotoGridExample() {
  return (
    <PhotoGrid 
      photos={mockPhotos}
      onPhotoClick={(id) => console.log('Photo clicked:', id)}
    />
  );
}
