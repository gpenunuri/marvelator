import { Layout } from "../components/Layout";
import { Searchbar } from "../components/Searchbar";

export default function Home() {
  return (
    <Layout>
      <main className="main main--fixed">
        <h1 className="main__title">
          BROWSING MARVEL INFO NEVER WAS THIS EASY
        </h1>
        <Searchbar />
        <p className="main__description">Find your favorite Character!</p>
      </main>
    </Layout>
  );
}
