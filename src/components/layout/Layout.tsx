import React, { ReactNode } from "react";
import layoutStyle from "./Layout.module.scss";
import { Helmet } from "react-helmet";
import Nav from "../nav/Nav";
import EmailSignup from "../signup/EmailSignup";
import Video from "../video/Video";
import Bio from "../bio/Bio";
import Action from "../action/Action";
import Footer from "../footer/Footer";
// import ClassSchedule from "../scheduling/ClassSchedule";
interface LayoutProps {
  children: ReactNode;
  pageInfo: {
    pageTitle: string;
    description: string;
    path: string;
  };
}

const Layout = ({
  children,
  pageInfo: { pageTitle, description, path },
}: LayoutProps) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>SATACTSENSE:{pageTitle}</title>
        <link rel="canonical" href={`https://satactsense.com/#/${path}`} />
        <meta name="description" content={description} />
        <meta name="theme-color" content="#1a3a6d" />
        <meta name="robots" content="index, follow" />
        <meta
          name="SATACTSENSE"
          content="Tutoring site for sat and act preparation"
        />
      </Helmet>
      <main className={layoutStyle.main}>
        <div className={layoutStyle.main__container}>
          <Nav />
          {children}
          <EmailSignup />
          {/* <ClassSchedule /> */}
          <Video />
          <Bio />
          <Action />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Layout;
