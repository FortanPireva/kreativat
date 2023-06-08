import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Layout from "../components/Layout";
import Main from "../containers/Main/Main";
import { footerLinks, links, socialMediaLinks } from "../data/data";

const NewDesignPage = () => {
  return (
    <Layout
      title="Kreativat - veprat krijuese të të rinjëve kosovar"
      description="Kreativat - platformë për shpalosjen e talentit kosovar, në fushat e teknologjisë, ndërmarrësisë, inovacionit."
    >
      <div className="bg-hero bg-no-repeat w-full bg-cover  min-h-screen h-screen flex flex-col">
        <Header />
        <Hero />
      </div>
      <div>
        <Main />
      </div>
      <Footer
        company="Kreativat"
        year={new Date().getFullYear()}
        links={links}
        socialMediaLinks={socialMediaLinks}
        externalLinks={footerLinks}
      />
    </Layout>
  );
};

export default NewDesignPage;
