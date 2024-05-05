var posts=["2024/05/05/hello-world/","2024/05/05/文章标题/","2024/05/05/testhaha/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };