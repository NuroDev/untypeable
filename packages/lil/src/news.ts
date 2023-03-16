interface Article {
  description: string;
  title: string;
  url: string;
}

export interface News {
  articles: Array<Article>;
}
