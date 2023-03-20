import { initUntypeable } from "untypeable";

import type {
  Album,
  AlbumParams,
  Albums,
  AlbumsParams,
} from "./album/album.types";
import type {
  Comment,
  CommentParams,
  Comments,
  CommentsParams,
} from "./comment/comment.types";
import type {
  Photo,
  PhotoParams,
  Photos,
  PhotosParams,
} from "./photo/photo.types";
import type { Post, PostParams, Posts, PostsParams } from "./post/post.types";
import type { Todo, TodoParams, Todos, TodosParams } from "./todo/todo.types";
import type { User, UserParams, Users, UsersParams } from "./user/user.types";

const u = initUntypeable().pushArg<
  "GET" | "POST" | "PUT" | "PATCH" | "DELETE"
>();

const router = u.router({
  "/albums": { GET: u.input<AlbumsParams>().output<Albums>() },
  "/albums/:id": { GET: u.input<AlbumParams>().output<Album>() },
  "/albums/:id/comments": { GET: u.input<AlbumParams>().output<Comments>() },

  "/comments": { GET: u.input<CommentsParams>().output<Comments>() },
  "/comments/:id": { GET: u.input<CommentParams>().output<Comment>() },
  "/comments/:id/comments": {
    GET: u.input<CommentsParams>().output<Comments>(),
  },

  "/photos": { GET: u.input<PhotosParams>().output<Photos>() },
  "/photos/:id": { GET: u.input<PhotoParams>().output<Photo>() },
  "/photos/:id/comments": { GET: u.input<PhotoParams>().output<Comments>() },

  "/posts": { GET: u.input<PostsParams>().output<Posts>() },
  "/posts/:id": { GET: u.input<PostParams>().output<Post>() },
  "/posts/:id/comments": { GET: u.input<PostParams>().output<Comments>() },

  "/todos": { GET: u.input<TodosParams>().output<Todos>() },
  "/todos/:id": { GET: u.input<TodoParams>().output<Todo>() },
  "/todos/:id/comments": { GET: u.input<TodoParams>().output<Comments>() },

  "/users": { GET: u.input<UsersParams>().output<Users>() },
  "/users/:id": { GET: u.input<UserParams>().output<User>() },
  "/users/:id/comments": { GET: u.input<UserParams>().output<Comments>() },
});

export type JSONPlaceholderRouter = typeof router;
