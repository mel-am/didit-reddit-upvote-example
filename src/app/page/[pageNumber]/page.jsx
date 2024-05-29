import { PostList } from "@/components/PostList";


export default async function PageNumberRoute({ params }) {
  return (
    <div>
      <h1 className="text-2xl">{post.title}</h1>
      <PostList currentPage={parseInt(params.pageNumber, 10)} />
    </div>
  );
}
