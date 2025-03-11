import { HttpException } from '@/lib/http-execption';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';

export default async function uploadImage(image: File) {
  const validTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/webp'];
  if (!validTypes.includes(image.type)) {
    throw new HttpException(400, 'Invalid image type');
  }

  const imageName = `${uuidv4()}-${image.name}`;
  const uploadPath = path.join(process.cwd(), 'public', 'uploads', imageName);

  const buffer = new Uint8Array(await image.arrayBuffer());
  fs.writeFileSync(uploadPath, buffer);

  return `/uploads/${imageName}`;
}
