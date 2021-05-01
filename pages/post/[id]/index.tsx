interface PostValues {
  title: string;
  body: string;
}

const Post = ({ title, body }: PostValues) => (
  <>
    <h1>Hi</h1>
    <h1>{title}</h1>
    <p>{body}</p>
  </>
);

interface Params {
  query: {
    id: string;
  };
}

Post.getInitialProps = async ({ query }: Params) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${query.id}`
  );
  const post = res.json();
  return post;
};
export default Post;
