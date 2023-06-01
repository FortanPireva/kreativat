import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Layout from "../components/Layout";

const NewDesignPage = () => {
  return (
    <Layout
      title="Kreativat - veprat krijuese të të rinjëve kosovar"
      description="Kreativat - platformë për shpalosjen e talentit kosovar, në fushat e teknologjisë, ndërmarrësisë, inovacionit."
    >
      <div className="bg-hero w-full  min-h-screen">
        <Header />
        <Hero />
      </div>
    </Layout>
  );
};

export default NewDesignPage;
