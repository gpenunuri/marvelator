import { APIFetch } from "../../utils/APIFetch";
import { Layout } from "../../components/Layout";

export default function StoryPage({ character }) {
  const { title, description, thumbnail, characters, comics } = character[0];
  const imgUrl = thumbnail?.path + "." + thumbnail?.extension;

  return (
    <Layout>
      <main className="main section-character">
        <div className="container">
          <div className="character">
            <img src={imgUrl} alt={title} className="character__photo" />
            <div className="character__text-wrap">
              <h2 className="character__title">{title}</h2>
              <p className="character__description">{description}</p>
            </div>
          </div>
          <br />
          <br />
          <hr />
          <div className="character-resources">
            <div className="character-comics">
              {comics?.items.length > 0 ? (
                <h4 className="character-comics__title">Comics:</h4>
              ) : (
                ""
              )}
              <ul className="character-comics__list">
                {comics?.items &&
                  comics.items.map((el) => {
                    return (
                      <li className="character-comics__item" key={el.name}>
                        <p>{el.name}</p>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  const id = query.id;
  try {
    const {
      data: { results: character },
    } = await APIFetch(`/stories/${id}?`);
    return {
      props: { character },
    };
  } catch (err) {
    console.error(err);
    const character = [];
    return { props: { character } };
  }
}
