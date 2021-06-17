import React from 'react';
import '../assets/components/BlogPost.scss';

const BlogPost = (props) => {
  return (
    <section className='blogpost-main-container'>
      <div className='grid-container'>
        <h3>Noticias</h3>
        <article>
          <h1>Titulo del blogpost</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem eius reiciendis aliquid nulla, modi dicta iusto dolor iste asperiores deleniti tempore. Ad animi laboriosam facere illo nesciunt repellendus iste delectus!</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates provident, amet doloremque alias iure perspiciatis, a ducimus beatae tempore maiores temporibus dolor commodi asperiores doloribus. Cum voluptatum praesentium mollitia aliquid.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium quis aspernatur suscipit fuga aut, possimus totam distinctio consequuntur voluptatibus beatae, quo nesciunt, eius provident dicta. Porro necessitatibus quas minus ex! Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eum qui quaerat at nostrum quisquam ipsa sequi vero porro voluptatibus ullam mollitia quasi consequuntur, tempore expedita delectus, fugiat, quo sunt.</p>
        </article>
      </div>
    </section>
  );
};

export default BlogPost;
