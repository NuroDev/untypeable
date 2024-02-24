import { initUntypeable } from "untypeable";

import type {
  Album,
  AlbumParams,
  Albums,
  AlbumsParams,
  CreatedAlbum,
  CreatedAlbumParams,
} from "./album/album.types";
import type {
  Comment,
  CommentParams,
  Comments,
  CommentsParams,
  CreatedComment,
  CreatedCommentParams,
} from "./comment/comment.types";
import type {
  CreatedPhoto,
  CreatedPhotoParams,
  Photo,
  PhotoParams,
  Photos,
  PhotosParams,
} from "./photo/photo.types";
import type {
  CreatedPost,
  CreatedPostParams,
  Post,
  PostParams,
  Posts,
  PostsParams,
} from "./post/post.types";
import type {
  CreatedTodo,
  CreatedTodoParams,
  Todo,
  TodoParams,
  Todos,
  TodosParams,
} from "./todo/todo.types";
import type {
  CreatedUser,
  CreatedUserParams,
  User,
  UserParams,
  Users,
  UsersParams,
} from "./user/user.types";

const u = initUntypeable();

const allResources = u.pushArg<"GET" | "POST">();
const allResourcesRouter = allResources.router({
  "/albums": {
    GET: allResources.input<AlbumsParams>().output<Albums>(),
    POST: allResources.input<CreatedAlbumParams>().output<CreatedAlbum>(),
  },
  "/comments": {
    GET: allResources.input<CommentsParams>().output<Comments>(),
    POST: allResources.input<CreatedCommentParams>().output<CreatedComment>(),
  },
  "/photos": {
    GET: allResources.input<PhotosParams>().output<Photos>(),
    POST: allResources.input<CreatedPhotoParams>().output<CreatedPhoto>(),
  },
  "/posts": {
    GET: allResources.input<PostsParams>().output<Posts>(),
    POST: allResources.input<CreatedPostParams>().output<CreatedPost>(),
  },
  "/todos": {
    GET: allResources.input<TodosParams>().output<Todos>(),
    POST: allResources.input<CreatedTodoParams>().output<CreatedTodo>(),
  },
  "/users": {
    GET: allResources.input<UsersParams>().output<Users>(),
    POST: allResources.input<CreatedUserParams>().output<CreatedUser>(),
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
