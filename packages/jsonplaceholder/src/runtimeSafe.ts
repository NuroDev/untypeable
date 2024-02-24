import { initUntypeable } from "untypeable";

import {
  AlbumSchema,
  AlbumParamsSchema,
  AlbumsSchema,
  AlbumsParamsSchema,
  CreatedAlbumSchema,
  CreatedAlbumParamsSchema,
} from "./album/album.validators";
import {
  CommentSchema,
  CommentParamsSchema,
  CommentsSchema,
  CommentsParamsSchema,
  CreatedCommentSchema,
  CreatedCommentParamsSchema,
} from "./comment/comment.validators";
import {
  CreatedPhotoSchema,
  CreatedPhotoParamsSchema,
  PhotoSchema,
  PhotoParamsSchema,
  PhotosSchema,
  PhotosParamsSchema,
} from "./photo/photo.validators";
import {
  CreatedPostSchema,
  CreatedPostParamsSchema,
  PostSchema,
  PostParamsSchema,
  PostsSchema,
  PostsParamsSchema,
} from "./post/post.validators";
import {
  CreatedTodoSchema,
  CreatedTodoParamsSchema,
  TodoSchema,
  TodoParamsSchema,
  TodosSchema,
  TodosParamsSchema,
} from "./todo/todo.validators";
import {
  CreatedUserSchema,
  CreatedUserParamsSchema,
  UserSchema,
  UserParamsSchema,
  UsersSchema,
  UsersParamsSchema,
} from "./user/user.validators";

const u = initUntypeable();

const allResources = u.pushArg<"GET" | "POST">();
const allResourcesRouter = allResources.router({
  "/albums": {
    GET: allResources.input(AlbumsParamsSchema).output(AlbumsSchema),
    POST: allResources
      .input(CreatedAlbumParamsSchema)
      .output(CreatedAlbumSchema),
  },
  "/comments": {
    GET: allResources.input(CommentsParamsSchema).output(CommentsSchema),
    POST: allResources
      .input(CreatedCommentParamsSchema)
      .output(CreatedCommentSchema),
  },
  "/photos": {
    GET: allResources.input(PhotosParamsSchema).output(PhotosSchema),
    POST: allResources
      .input(CreatedPhotoParamsSchema)
      .output(CreatedPhotoSchema),
  },
  "/posts": {
    GET: allResources.input(PostsParamsSchema).output(PostsSchema),
    POST: allResources.input(CreatedPostParamsSchema).output(CreatedPostSchema),
  },
  "/todos": {
    GET: allResources.input(TodosParamsSchema).output(TodosSchema),
    POST: allResources.input(CreatedTodoParamsSchema).output(CreatedTodoSchema),
  },
  "/users": {
    GET: allResources.input(UsersParamsSchema).output(UsersSchema),
    POST: allResources.input(CreatedUserParamsSchema).output(CreatedUserSchema),
  },
});

const singleResource = u.pushArg<"GET" | "PUT" | "PATCH" | "DELETE">();
const singleResourceRouter = singleResource.router({
  "/albums/:id": {
    GET: singleResource.input(AlbumParamsSchema).output(AlbumSchema),
  },
  "/albums/:id/comments": {
    GET: singleResource.input(AlbumParamsSchema).output(CommentsSchema),
  },
  "/comments/:id": {
    GET: singleResource.input(CommentParamsSchema).output(CommentSchema),
  },
  "/comments/:id/comments": {
    GET: singleResource.input(CommentParamsSchema).output(CommentsSchema),
  },
  "/photos/:id": {
    GET: singleResource.input(PhotoParamsSchema).output(PhotoSchema),
  },
  "/photos/:id/comments": {
    GET: singleResource.input(PhotoParamsSchema).output(CommentsSchema),
  },
  "/posts/:id": {
    GET: singleResource.input(PostParamsSchema).output(PostSchema),
  },
  "/posts/:id/comments": {
    GET: singleResource.input(PostParamsSchema).output(CommentsSchema),
  },
  "/todos/:id": {
    GET: singleResource.input(TodoParamsSchema).output(TodoSchema),
  },
  "/todos/:id/comments": {
    GET: singleResource.input(TodoParamsSchema).output(CommentsSchema),
  },
  "/users/:id": {
    GET: singleResource.input(UserParamsSchema).output(UserSchema),
  },
  "/users/:id/comments": {
    GET: singleResource.input(UserParamsSchema).output(CommentsSchema),
  },
});

export const jsonPlaceholderSafeRouter =
  allResourcesRouter.merge(singleResourceRouter);
