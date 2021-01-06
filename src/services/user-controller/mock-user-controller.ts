import avatar from '../../img/main photo.png';
import { IUser } from '../../types/user';
import { getUserById as originalGetUserById } from './user-controller';

export function getUserById(): IUser {
  return {
    userId: 1,
    firstName: 'Руслан',
    lastName: 'Вадимов',
    password: 'A1',
    email: 'admin0@user.ru',
    dateOfBirth: '01.01.2000',
    education: 'Высшее техническое',
    aboutMe: 'About me',
    linkSite: 'www.site.com',
    roleName: 'ADMIN',
    avatar,
    city: 'Moscow',
    status: '- На моем компе все работает.\n— Отправим клиенту твой комп.',
    activeName: 'ACTIVE',
  };
}

export function getCurrentUser(): IUser {
  return getUserById();
}

export async function getAsyncCurrentUser() {
  return originalGetUserById(10);
}
