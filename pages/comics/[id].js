import { APIFetch } from "../../utils/APIFetch";
import { Layout } from "../../components/Layout";

export default function ComicPage({ comic }) {
  const {
    title,
    description,
    thumbnail,
    dates,
    images,
    stories,
    characters,
  } = comic[0];
  const imgUrl = thumbnail.path + "." + thumbnail.extension;
  console.log(images);
  return (
    <Layout>
      <main className="main section-comic">
        <div className="container">
          <div className="comic">
            <figure className="comic__figure">
              <img src={imgUrl} alt="" className="comic__photo" />
            </figure>
            <div className="comic__text-wrap">
              <h2 className="comic__title">{title}</h2>

              {dates &&
                dates.map((el) => {
                  return (
                    <div key={el.name}>
                      <p className="comic__date">
                        {el.type + ": "}
                        <span>
                          {el.date.length > 10 ? el.date.slice(0, 10) : el.date}
                        </span>
                      </p>
                      <br />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>

        {description && (
          <div className="container container--description">
            <div className="comic">
              <div className="comic__text-wrap">
                <h2 className="comic__title">Description:</h2>
                <p className="comic__description">{description}</p>
              </div>
            </div>
          </div>
        )}

        {characters && (
          <div className="container container--description">
            <div className="comic">
              <div className="comic__text-wrap">
                <h2 className="comic__title">Characters:</h2>
                {characters?.items.map((el) => (
                  <p className="comic__description" key={el.name}>
                    - {el.name}
                  </p>
                ))}
              </div>
            </div>
          </div>
        )}

        {stories?.items && (
          <div className="container container--description">
            <div className="comic">
              <div className="comic__text-wrap">
                <h2 className="comic__title">Stories:</h2>
                {stories.items
                  .filter((el) => el.name.length > 2)
                  .map((el) => (
                    <p
                      className="comic__description"
                      key={el.name + Math.random()}
                    >
                      - {el.name}
                    </p>
                  ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  const id = query.id;
  try {
    const {
      data: { results: comic },
    } = await APIFetch(`/comics/${id}?&offset=0`);
    return {
      props: { comic },
    };
  } catch (err) {
    console.error(err);
    const comic = [];
    return { props: { comic } };
  }
}
