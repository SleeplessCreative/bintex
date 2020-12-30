import React from 'react';
import BlogPost from './BlogPost';

const Blog = () => {
  return (
    <section id="blog" className="py-10 bg-primary-light">
      <BlogPost
        image="https://images.unsplash.com/photo-1584707824245-f67bad2c62d5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80"
        altImage="A mask and a hand hand sanitizer."
        title="What is the novel coronavirus?"
        subtitle="A novel coronavirus (CoV) is a new strain of coronavirus. The disease caused by the
                  novel coronavirus first identified in Wuhan, China. (from
                  unicef.org)"
        goto="https://www.unicef.org/indonesia/coronavirus/FAQ"
      />
      <BlogPost
        image="https://images.unsplash.com/photo-1561948955-570b270e7c36?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=518&q=80"
        altImage="A mask and a hand hand sanitizer."
        title="A brief history of domestic cats."
        subtitle="Today, domestic cats are everywhere: in the home, in the yard, on television and, overwhelmingly, on the Internet. But have you ever wondered where they came from and how they ended up as the world’s most popular pet? Us too."
        goto="https://catspride.com/cat-matters/brief-history-human-ownership-cats/"
      />
    </section>
  );
};

export default Blog;
