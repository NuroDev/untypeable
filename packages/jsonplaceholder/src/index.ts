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

const allResources = u.pushArg<"GET" | "POST">();
const allResourcesRouter = allResources.router({
  "/albums": {
    GET: allResources.input<AlbumsParams>().output<Albums>(),
    POST: allResources.input().output(),
  },
  "/comments": {
    GET: allResources.input<CommentsParams>().output<Comments>(),
    POST: allResources.input().output(),
  },
  "/photos": {
    GET: allResources.input<PhotosParams>().output<Photos>(),
    POST: allResources.input().output(),
  },
  "/posts": {
    GET: allResources.input<PostsParams>().output<Posts>(),
    POST: allResources.input().output(),
  },
  "/todos": {
    GET: allResources.input<TodosParams>().output<Todos>(),
    POST: allResources.input().output(),
  },
  "/users": {
    GET: allResources.input<UsersParams>().output<Users>(),
    POST: allResources.input().output(),
  },
});

const singleResource = u.pushArg<"GET" | "PUT" | "PATCH" | "DELETE">();
const singleResourceRouter = singleResource.router({
  "/albums/:id": {
    GET: singleResource.input<AlbumParams>().output<Album>(),
  },
  "/albums/:id/comments": {
    GET: singleResource.input<AlbumParams>().output<Comments>(),
  },
  "/comments/:id": {
    GET: singleResource.input<CommentParams>().output<Comment>(),
  },
  "/comments/:id/comments": {
    GET: singleResource.input<CommentParams>().output<Comments>(),
  },
  "/photos/:id": {
    GET: singleResource.input<PhotoParams>().output<Photo>(),
  },
  "/photos/:id/comments": {
    GET: singleResource.input<PhotoParams>().output<Comments>(),
  },
  "/posts/:id": {
    GET: singleResource.input<PostParams>().output<Post>(),
  },
  "/posts/:id/comments": {
    GET: singleResource.input<PostParams>().output<Comments>(),
  },
  "/todos/:id": {
    GET: singleResource.input<TodoParams>().output<Todo>(),
  },
  "/todos/:id/comments": {
    GET: singleResource.input<TodoParams>().output<Comments>(),
  },
  "/users/:id": {
    GET: singleResource.input<UserParams>().output<User>(),
  },
  "/users/:id/comments": {
    GET: singleResource.input<UserParams>().output<Comments>(),
  },
});

const router = allResourcesRouter.merge(singleResourceRouter);

export type JSONPlaceholderRouter = typeof router;
