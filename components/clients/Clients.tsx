import React from "react";

interface Props {
  name: string;
}

export const Clients: React.FC<Props> = ({ name }) => {
  return (
    <>
      <p className="client">{name}</p>
    </>
  );
};
