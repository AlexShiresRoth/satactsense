import React from "react";
import { useEffect } from "react";
import Layout from "../layout/Layout";
import Header from "../testimonials/Header";
import { setBanner } from "../../actions/headerData";
import { headerText } from "../reusable/headerText";
import { connect } from "react-redux";

type Props = {
  setBanner: (val: any) => any;
};

const Testimonials = ({ setBanner }: Props) => {
  useEffect(() => {
    const findBannerData = headerText.filter((item) => item.id === "TES")[0]
      .banner;
    setBanner(findBannerData);
  }, [setBanner]);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0 });
    }, 300);
  }, []);
  const pageInfo = {
    pageTitle: "Testimonials",
    description: "Testimonials",
    path: "Testimonials",
  };

  return (
    <Layout pageInfo={pageInfo}>
      <Header />
    </Layout>
  );
};

export default connect(null, { setBanner })(Testimonials);
