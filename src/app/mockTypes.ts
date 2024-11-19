export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  avatar: string;
  bgPhoto: string;
  followers: number;
  gifts: number;
  likes: number;
  questions: Question[];
  posts: Post[];
  following: Follower[];
}

export interface Follower {
  id: string;
  username: string;
  avatar: string;
}

export interface Question {
  question: string;
  author: string | null;
  date?: Date | string;
  avatar?: string | null;
}

export interface Post {
  id: string;
  question: Question;
  answer: string;
  photo: string | null;
  likes: Like[];
  date: Date | string;
}

export interface Like {
  postId: string;
  userId: string;
}
