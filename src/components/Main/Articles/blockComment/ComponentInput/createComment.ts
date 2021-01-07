import { addNewCommentToPost } from '../../../../../services/post-controller';
import { ICreateComment } from '../../../../../types/comment';
import { IUser } from '../../../../../types/user';

interface IFuncCreateComment {
  postId: number;
  text: string;
  user: IUser | null;
}

export default async function createPost({ postId, text, user }: IFuncCreateComment) {
  if (!user?.userId) {
    throw new Error('unlogged');
  }
  const comment: ICreateComment = {
    comment: text,
    userDto: {
      userId: user.userId,
      email: user.email,
      password: user.password,
      avatar: user.avatar,
      firstName: user.firstName,
      lastName: user.lastName,
      activeName: 'ACTIVE',
      status: user.status,
      linkSite: user.linkSite,
      dateOfBirth: user.dateOfBirth,
      education: user.education,
      city: user.city,
    },
  };
  await addNewCommentToPost(postId, comment);
}
