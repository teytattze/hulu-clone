import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import { GetServerSideProps } from "next";
import { requests } from "../shared/requests";
import { IResponseEntity } from "../shared/response";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const genre = context.query.genre as string;
  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
};

type HomeProps = {
  results: IResponseEntity[];
};

function Home({ results }: HomeProps) {
  return (
    <>
      <Head>
        <title>Hulu - Clone</title>
      </Head>
      <Header />
      <Nav />
      <Results results={results} />
    </>
  );
}

export default Home;
