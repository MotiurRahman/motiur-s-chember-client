import React from "react";
import useTitle from "../../hooks/useTitle";
import "./Blog.css";

const Blog = () => {
  useTitle("Blog");
  return (
    <div className="mt-5">
      <h4 className="text-center font-bold">
        Welcome to the knowledge-sharing session
      </h4>
      <section className="queAnsSec">
        <h3 className="font-bold">1. Difference between SQL and NoSQL</h3>
        <p>
          <b>Answer: </b>SQL is the programming language used to interface with
          relational databases. (Relational databases model data as records in
          rows and tables with logical links between them). NoSQL is a class of
          DBMs that are non-relational and generally do not use SQL.
        </p>
      </section>
      <section className="queAnsSec">
        <h3 className="font-bold">2.What is JWT, and how does it work?</h3>
        <p>
          <b>Answer: </b> JSON Web Token (JWT) is an open standard (RFC 7519)
          for securely transmitting information between parties as JSON object.
          It is compact, readable and digitally signed using a private key/ or a
          public key pair by the Identity Provider(IdP). So the integrity and
          authenticity of the token can be verified by other parties involved.
          The purpose of using JWT is not to hide data but to ensure the
          authenticity of the data. JWT is signed and encoded, not encrypted.
          JWT is a token based stateless authentication mechanism. Since it is a
          client-side based stateless session, server doesn't have to completely
          rely on a datastore(database) to save session information.
        </p>
      </section>
      <section className="queAnsSec">
        <h3 className="font-bold">
          3. What is the difference between javascript and NodeJS?
        </h3>
        <p>
          <b>Answer: </b>JavaScript is a simple programming language that can be
          used with any browser that has the JavaScript Engine installed. Node.
          js, on the other hand, is an interpreter or execution environment for
          the JavaScript programming language.
        </p>
      </section>
      <section className="queAnsSec">
        <h3 className="font-bold">
          4. How does NodeJS handle multiple requests at the same time?
        </h3>
        <p>
          <b>Answer: </b>NodeJS receives multiple client requests and places
          them into EventQueue. NodeJS is built with the concept of event-driven
          architecture. NodeJS has its own EventLoop which is an infinite loop
          that receives requests and processes them.
        </p>
      </section>
    </div>
  );
};

export default Blog;
