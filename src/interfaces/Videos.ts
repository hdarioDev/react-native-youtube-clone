export interface IUser {
  name: string;
  image: string;
}

export interface IVideo {
  id: string;
  createdAt: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
  duration: number;
  user: IUser;
  views: number;
}
