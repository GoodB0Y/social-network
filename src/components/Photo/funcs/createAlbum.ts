import { createAlbum } from '../../../services/images-controller';
import { AlbumCreateDto } from '../../../types/image';

/*
Данный миддлвар существует только чтобы не было прямой связи компонента с API бэка.
Пускай все связи контролируются через данный интерфейс (который, при том, можно будет дополнить)
*/
export default async function createAlbumPhoto({ name, icon, userId }: AlbumCreateDto) {
  await createAlbum({ userId, name, icon });
}
