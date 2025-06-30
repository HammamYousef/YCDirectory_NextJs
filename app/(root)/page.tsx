import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

const posts = [{
  _id: "1",
  title: "Innovative Tech Startup",
  description: "A startup that revolutionizes technology.",
  image: "/images/startup1.jpg",
  _createdAt: "2023-10-01T12:00:00Z",
  views: 150,
  author: {
    _id: "author1",
    name: "John Doe",
    image: "/images/author1.jpg",
  },
  category: "Technology",
}]

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  const query = (await searchParams).query;
  return (
    <>
    <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>

        <SearchForm query={query} />
    </section>

    <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
