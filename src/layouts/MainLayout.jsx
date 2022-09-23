import React from "react";
import { Navbar, Footer } from "views";

export default function MainLayout(props) {
  const { children } = props;
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
