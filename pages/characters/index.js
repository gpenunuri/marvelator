import React, { useState } from "react";
import { APIFetch } from "../../utils/APIFetch";
import { Layout } from "../../components/Layout";
import { Searchbar } from "../../components/Searchbar";
import { CharacterCard } from "../../components/CharacterCard";
import { Pagination } from "../../components/Pagination";

export default function CharactersPage({ data, page, perPage, paramValue }) {
  const characters = data.results;

  return (
    <Layout>
      <main className="main">
        <h1 className="main__title">SEARCH BY CHARACTER</h1>

        <Searchbar base={"character"} param={"name"} paramValue={paramValue} />

        <section className="section-characters">
          <div className="characters">
            {characters &&
              characters.map((el) => {
                return <CharacterCard character={el} key={el.id} />;
              })}
          </div>
          <Pagination
            perPage={perPage}
            base="/characters"
            totalCount={data.total}
            currentPage={page}
            skip={0}
            param={paramValue !== "" ? `&name=${paramValue}` : ""}
          />
        </section>
      </main>
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  try {
    const page = query.page || 1;
    const name = query.name || "";
    const paramValue = name;
    const perPage = 18;
    const offset = page === 1 ? 0 : perPage * (page - 1);
    const url =
      name !== ""
        ? `/characters?name=${name}&limit=${perPage}&offset=0`
        : `/characters?limit=${perPage}&offset=${offset}`;
    let { data } = await APIFetch(url);

    return {
      props: { data, page, perPage, paramValue },
    };
  } catch (err) {
    console.error(err);
    const characters = [];
    return { props: { characters } };
  }
}
