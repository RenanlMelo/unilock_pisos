import { Form } from "@/components/form/Form";
import { Header } from "@/components/header/Header";
import React from "react";

export default function page() {
  document.body.style.overflowY = "hidden";

  return (
    <>
      <Header />
      <Form />
    </>
  );
}
