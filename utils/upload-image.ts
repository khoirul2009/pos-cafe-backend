import { v4 as uuidv4 } from 'uuid';
import { supabase } from '@/lib/supabase';

export default async function uploadImage(image: File) {
  // Validasi tipe file
  const validTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/webp'];
  if (!validTypes.includes(image.type)) {
    throw new Error('Invalid image type');
  }

  // Generate nama unik untuk gambar
  const imageName = `${uuidv4()}-${image.name}`;

  // Konversi File ke Buffer
  const arrayBuffer = await image.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);

  // Upload ke Supabase Storage (bucket: "uploads")
  const { data, error } = await supabase.storage
    .from('uploads') // Ganti dengan nama bucket di Supabase
    .upload(imageName, buffer, {
      contentType: image.type
    });

  if (error) {
    throw new Error(`Upload failed: ${error.message}`);
  }

  // Ambil URL gambar
  const { data: publicUrl } = supabase.storage
    .from('uploads')
    .getPublicUrl(imageName);

  return publicUrl.publicUrl;
}
