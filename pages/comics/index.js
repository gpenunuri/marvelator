import { APIFetch } from "../../utils/APIFetch";
import { Layout } from "../../components/Layout";
import { Searchbar } from "../../components/Searchbar";
import { ComicCard } from "../../components/ComicCard";
import { Pagination } from "../../components/Pagination";

export default function ComicsPage({ data, page, perPage, paramValue }) {
  const comics = data.results;
  return (
    <Layout>
      <main className="main">
        <h1 className="main__title">SEARCH BY COMIC</h1>
        <Searchbar base={"comic"} param={"title"} paramValue={paramValue} />
        <section className="section-comics">
          <div className="comics">
            {comics.map((el) => {
              return <ComicCard comic={el} key={el.id} />;
            })}
          </div>
          <Pagination
            perPage={perPage}
            base="/comics"
            totalCount={data.total}
            currentPage={page}
            skip={0}
            param={paramValue !== "" ? `&title=${paramValue}` : ""}
          />
        </section>
      </main>
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  try {
    const page = query.page || 1;
    const name = query.title || "";
    const paramValue = name;
    const perPage = 40;
    const offset = page === 1 ? 0 : perPage * (page - 1);
    const url =
      name !== ""
        ? `/comics?title=${name}&limit=${perPage}&offset=${offset}`
        : `/comics?limit=${perPage}&offset=${offset}`;
    // let { data } = await APIFetch(url);
    let { data } = await APIFetch(url);

    return {
      props: { data, page, perPage, paramValue },
    };
  } catch (err) {
    console.error(err);
    const comics = [];
    return { props: { comics } };
  }
}
