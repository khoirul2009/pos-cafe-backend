import fs from 'fs';
import path from 'path';

export default function deleteImage(imagePath: string) {
  const filePath = path.join(process.cwd(), 'public', imagePath);

  if (fs.existsSync(filePath)) {
    fs.unlink(filePath, (err) => {
      if (err) {
        console.error('Error deleting file:', err);
      } else {
        console.log('File deleted successfully');
      }
    });
  } else {
    console.log('File does not exist, nothing to delete');
  }
}
