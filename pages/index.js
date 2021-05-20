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
        <title>Átomo</title>
        <meta name="title" content="Átomo - Distribuição Eletrônica de Linus Pauling"/>
        <meta name="title" content="Átomo - Distribuição Eletrônica de Linus Pauling"/>
        <link rel="icon" href="/atom.ico" />

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://atomo.vercel.app/"/>
        <meta property="og:title" content="Átomo - Distribuição Eletrônica de Linus Pauling"/>
        <meta property="og:description" content="Distribuição de Linus Pauling com ilustração gráfica do átomo. Similar a uma tabela periódica interativa, apresenta as camadas de energia de forma gráfica com os respectivos átomos . Além de apresentar o nome, simulo e número atômico"/>
        <meta property="og:image" content="/banner.png"/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://atomo.vercel.app/"/>
        <meta property="twitter:title" content="Átomo - Distribuição Eletrônica de Linus Pauling"/>
        <meta property="twitter:description" content="Distribuição de Linus Pauling com ilustração gráfica do átomo. Similar a uma tabela periódica interativa, apresenta as camadas de energia de forma gráfica com os respectivos átomos . Além de apresentar o nome, simulo e número atômico"/>
        <meta property="twitter:image" content="/banner.png"/>
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
