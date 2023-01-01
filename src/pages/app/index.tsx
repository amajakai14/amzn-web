import Head from "next/head";
import type { NextPageWithLayout } from "../_app";

// components imports
import DefaultLayout from "@/components/layouts/DefaultLayout";

const App: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Amzn Store</title>
      </Head>
      <main className="bg-bg-neutral pt-28">
        <div className="mx-auto min-h-screen w-[95vw] max-w-screen-2xl">
          App page
        </div>
      </main>
    </>
  );
};

export default App;

App.getLayout = (page) => <DefaultLayout>{page}</DefaultLayout>;
