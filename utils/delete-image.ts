import { supabase } from '@/lib/supabase';

export default async function deleteImage(publicUrl: string) {
  try {
    // Ambil nama file dari URL Supabase (contoh: https://xyz.supabase.co/storage/v1/object/public/uploads/my-image.jpg)
    const urlParts = publicUrl.split('/');
    const fileName = urlParts[urlParts.length - 1]; // Ambil bagian akhir URL sebagai nama file

    if (!fileName) throw new Error('Invalid file URL');

    // Hapus dari Supabase Storage
    const { error } = await supabase.storage.from('uploads').remove([fileName]);

    if (error) {
      console.error('Error deleting file from Supabase:', error.message);
      throw new Error(`Failed to delete file: ${error.message}`);
    }

    console.log('File deleted successfully from Supabase:', fileName);
    return { success: true, message: 'File deleted successfully' };
  } catch (err) {
    console.error('Error:', err);
    return { success: false, message: 'Failed to delete file' };
  }
}
