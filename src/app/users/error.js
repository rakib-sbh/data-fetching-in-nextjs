"use client";

const Error = ({ error }) => {
  return <h1>{error.message}</h1>;
};

export default Error;

// as error will be occurred in client.
// so this component must be client component
