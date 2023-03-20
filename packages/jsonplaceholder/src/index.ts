import { initUntypeable } from "untypeable";

import type {
  Comment,
  CommentParams,
  Comments,
  CommentsParams,
} from "./comment/comment.types";
import type { Post, PostParams, Posts, PostsParams } from "./post/post.types";

const u = initUntypeable().pushArg<
  "GET" | "POST" | "PUT" | "PATCH" | "DELETE"
>();

const router = u.router({
  "/comments": {
    GET: u.input<CommentsParams>().output<Comments>(),
  },
  "/comments/:id": {
    GET: u.input<CommentParams>().output<Comment>(),
  },
  "/posts": {
    GET: u.input<PostsParams>().output<Posts>(),
  },
  "/posts/:id": {
    GET: u.input<PostParams>().output<Post>(),
  },
  "/posts/:id/comments": {
    GET: u.input<PostParams>().output<Comments>(),
  },
});

export type JSONPlaceholderRouter = typeof router;
