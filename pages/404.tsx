import Link from "next/link";
import React from "react";
import Layout from "./components/Layout";

const Custom404 = () => {
  return (
    <Layout>
      <div className="min-h-screen max-h-screen flex items-center justify-center flex-col gap-4 p-4">
        <h4 className="font-bold text-3xl text-center">
          This Page is not available!!
        </h4>
        <Link
          href="/"
          className="bg-blue-800 text-xl text-white px-3 py-1 rounded-md font-normal"
        >
          Go Back Home &rarr;
        </Link>
      </div>
    </Layout>
  );
};

export default Custom404;
