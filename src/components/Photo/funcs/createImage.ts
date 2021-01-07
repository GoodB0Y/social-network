import { createImage, addImageToAlbum } from '../../../services/images-controller';
import { ImageCreateDto, ImageDto } from '../../../types/image';

/*
Данный миддлвар существует только чтобы не было прямой связи компонента с API бэка.
Пускай все связи контролируются через данный интерфейс (который, при том, можно будет дополнить)
*/
export default async function createImagePhoto({ description, url, userId }: ImageCreateDto) {
  return createImage({ userId, url, description });
}

export async function createImageToAlbum({
  description,
  url,
  userId,
  albumId,
}: ImageCreateDto & { albumId: number }) {
  const imageData = ((await createImagePhoto({ description, url, userId })) as unknown) as ImageDto;
  await addImageToAlbum(albumId, imageData.id);
}
