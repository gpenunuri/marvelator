import React from "react";
import Link from "next/link";
import { APIFetch } from "../../utils/APIFetch";
import { Layout } from "../../components/Layout";
import { Pagination } from "../../components/Pagination";

export default function StoriesPage({ data, page, perPage, paramValue }) {
  const stories = data.results;
  return (
    <>
      <Layout>
        <main className="main">
          <h1 className="main__title">STORIES</h1>

          <section className="section-characters">
            <div className="characters">
              {stories &&
                stories.map((el) => {
                  return (
                    <div className="character-card">
                      <p className="character-card__title">{el.title}</p>
                      <Link href={`/stories/${el.id}`}>
                        <a className="btn btn--primary character-card__btn">
                          Details
                        </a>
                      </Link>
                    </div>
                  );
                })}
            </div>
            <Pagination
              perPage={perPage}
              base="/stories"
              totalCount={data.total}
              currentPage={page}
              skip={0}
              param={paramValue !== "" ? `&name=${paramValue}` : ""}
            />
          </section>
        </main>
      </Layout>
    </>
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
        ? `/stories?title=${name}&limit=${perPage}&offset=${offset}`
        : `/stories?limit=${perPage}&offset=${offset}`;
    // let { data } = await APIFetch(url);
    let { data } = await APIFetch(url);

    return {
      props: { data, page, perPage, paramValue },
    };
  } catch (err) {
    console.error(err);
    const stories = [];
    return { props: { stories } };
  }
}
