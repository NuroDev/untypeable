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

const u = initUntypeable();

const allResourcesRouter = u.pushArg<"GET" | "POST">().router({
  "/albums": { GET: u.input<AlbumsParams>().output<Albums>() },
  "/comments": { GET: u.input<CommentsParams>().output<Comments>() },
  "/photos": { GET: u.input<PhotosParams>().output<Photos>() },
  "/posts": { GET: u.input<PostsParams>().output<Posts>() },
  "/todos": { GET: u.input<TodosParams>().output<Todos>() },
  "/users": { GET: u.input<UsersParams>().output<Users>() },
});

const singleResourceRouter = u
  .pushArg<"GET" | "PUT" | "PATCH" | "DELETE">()
  .router({
    "/albums/:id": { GET: u.input<AlbumParams>().output<Album>() },
    "/albums/:id/comments": { GET: u.input<AlbumParams>().output<Comments>() },

    "/comments/:id": { GET: u.input<CommentParams>().output<Comment>() },
    "/comments/:id/comments": {
      GET: u.input<CommentParams>().output<Comments>(),
    },

    "/photos/:id": { GET: u.input<PhotoParams>().output<Photo>() },
    "/photos/:id/comments": { GET: u.input<PhotoParams>().output<Comments>() },

    "/posts/:id": { GET: u.input<PostParams>().output<Post>() },
    "/posts/:id/comments": { GET: u.input<PostParams>().output<Comments>() },

    "/todos/:id": { GET: u.input<TodoParams>().output<Todo>() },
    "/todos/:id/comments": { GET: u.input<TodoParams>().output<Comments>() },

    "/users/:id": { GET: u.input<UserParams>().output<User>() },
    "/users/:id/comments": { GET: u.input<UserParams>().output<Comments>() },
  });

const router = allResourcesRouter.merge(singleResourceRouter);

export type JSONPlaceholderRouter = typeof router;
