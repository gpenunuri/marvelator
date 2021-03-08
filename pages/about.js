import { Layout } from "../components/Layout";

export default function AboutPage() {
  return (
    <Layout>
      <main className="main main--fixed">
        <p className="main__description">
          This project was made as a React Challenge using the
          <a href="http://www.developer.marvel.com" target="_blank">
            &nbsp; MARVEL API
          </a>
        </p>
        <p className="main__description">
          Designed & Coded by &nbsp;
          <a href="https://www.gpenunuri.com" target="_blank">
            Germán Peñuñuri
          </a>
        </p>
      </main>
    </Layout>
  );
}
