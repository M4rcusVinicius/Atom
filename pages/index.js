import React from "react";

import Head from "next/head";

import Layout from "../components/Layout";
import Atom from "../components/Atom";
import Main from "../components/Main";
import Header from "../components/Header";
import Forms from "../components/Forms";
import Result from "../components/Result";
import Footer from "../components/Footer";

import db from "../db";

export default function Home() {
  const [number, setNumber] = React.useState(1);
  const [atom, setAtom] = React.useState({
    n: 1,
    distribution: [[1, "s", 1]],
    layers: [1],
    name: "Hidrogênio",
    symbol: "H",
  });

  React.useEffect(() => {
    try {
      if (0 < number < 119) {
        const att = db[number];
        if (att) {
          setAtom(att);
        }
      }
    } catch (err) {
      console.log('Erro:', err)
      setAtom({
        n: 1,
        distribution: [[1, "s", 1]],
        layers: [1],
        name: "Hidrogênio",
        symbol: "H",
      })
      setNumber(1)
    }
  }, [number]);

  return (
    <Layout>
      <Head>
        <title>Linus Pauling</title>
        <meta
          name="description"
          content="Distribuição de Linus Pauling com ilustração gráfica para cada átomo. Esse app foi desenvolvido por Marcus Vinícius <marcus.vinicius.mvap@gmail.com>"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Atom layers={atom.layers} />
      <Main>
        <Header />
        <Forms number={number} setNumber={setNumber} />
        <Result atom={atom} />
        <Footer />
      </Main>
    </Layout>
  );
}
