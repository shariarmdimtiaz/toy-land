import { TabTitle } from "../../../utils/GeneralFunctions";

const Blog = () => {
  TabTitle("Toyland | Blogs");
  return (
    <div className="container mx-auto">
      <div className="py-5 p-3 mx-auto">
        <div className="text-star">
          <h1 className="font-bold text-3xl text-center py-5">Blogs</h1>
        </div>
        <div className="p-5 text-left border rounded-lg mt-2">
          <p className="font-bold">
            Questions 1: What is an access token and refresh token? How do they
            work and where should we store them on the client-side?
          </p>
          <p className="">
            Answer 1: <br />
            <span className="font-bold">Access Token:</span> An access token is
            a credential that represents the authorization granted to a user to
            access protected resources or perform specific actions. It is
            typically short-lived and carries information such as the user's
            identity and any associated permissions. Access tokens are usually
            issued by an authentication server when a user successfully logs in
            or authorizes an application. <br />
            <span className="font-bold">Refresh Token:</span> A refresh token is
            a long-lived credential used to obtain a new access token once the
            current one expires. Unlike access tokens, refresh tokens are not
            meant to be sent with every request to access protected resources.
            Instead, they are securely stored on the client-side and sent to the
            authentication server when needed to obtain a fresh access token.{" "}
            <br /> <br />
            To ensure the security of access and refresh tokens on the
            client-side, it is recommended to store the access token in memory
            or a secure browser storage mechanism such as sessionStorage or
            localStorage. However, it is crucial to avoid storing the refresh
            token in client-side storage due to potential security risks.
            Instead, the refresh token should be stored in an HTTP-only cookie
            or another secure mechanism provided by the server. This prevents
            client-side JavaScript from accessing the refresh token, reducing
            the risk of token theft or abuse. It is also important to use secure
            communication protocols like HTTPS to protect the transmission of
            tokens between the client and server, ensuring the confidentiality
            and integrity of the tokens during transit.
          </p>
        </div>
        <div className="p-5 text-left border rounded-lg mt-2">
          <p className="font-bold">
            Questions 2: Compare SQL and NoSQL databases?
          </p>
          <p className="">
            Answer 2: <br />
            There are two types of database management systems: SQL (Structured
            Query Language) and NoSQL (Not Only SQL). Each of these types has
            its own characteristics and uses. <br />
            SQL databases are based on a relational model and use structured
            schemas to organize and store data. They provide a well-defined
            structure, enforce data integrity through constraints, and support
            powerful querying capabilities using SQL. SQL databases are suitable
            for applications with complex relationships between data entities
            and when maintaining data consistency is crucial. They excel in
            scenarios where transactions, joins, and ACID (Atomicity,
            Consistency, Isolation, Durability) properties are required, making
            them a popular choice for traditional business applications. <br />
            On the other hand, NoSQL databases are designed to handle large
            volumes of unstructured or semi-structured data. They offer
            flexibility in terms of data models, allowing for dynamic and
            schema-less data storage. NoSQL databases use various data models,
            such as key-value, document, columnar, and graph, to store and
            retrieve data efficiently. They are well-suited for handling
            high-velocity, highly scalable, and distributed environments, making
            them a preferred choice for modern web applications, real-time
            analytics, and handling large data sets.
          </p>
        </div>
        <div className="p-5 text-left border rounded-lg mt-2">
          <p className="font-bold">
            Questions 3: What is express js? What is Nest JS?
          </p>
          <p className="">
            Answer 3: <br />
            Express.js is a popular web application framework for Node.js. It
            provides a simple and minimalist approach to building web servers
            and APIs. Express.js is known for its flexibility, ease of use, and
            robust set of features, making it a popular choice for developing
            server-side applications. Express.js allows developers to handle
            HTTP requests and responses, define routes, and implement middleware
            functions to process incoming requests. It provides a
            straightforward and intuitive API for handling various HTTP methods
            like GET, POST, PUT, DELETE, and more. Additionally, it supports the
            creation of dynamic web pages, rendering of templates, and serving
            static files. <br />
            NestJS is a progressive, modular, and TypeScript-based framework for
            building scalable and efficient server-side applications. It is
            built on top of Node.js and leverages modern JavaScript features and
            architectural patterns to create robust and maintainable
            applications.
          </p>
        </div>
        <div className="p-5 text-left border rounded-lg mt-2">
          <p className="font-bold">
            Questions 4: What is MongoDB aggregate and how does it work?
          </p>
          <p className="">
            Answer 4: <br />
            MongoDB's aggregate framework is a flexible and powerful tool for
            performing advanced data processing and analysis in the database. It
            works by taking an array of stages as input, where each stage
            represents a step in the data transformation pipeline. The stages
            are executed sequentially, allowing for complex operations like
            filtering, grouping, projecting, and aggregating data. Each stage
            modifies the input documents based on specific operations and passes
            the result to the next stage. This allows for flexible data
            manipulation and aggregation, enabling developers to perform
            sophisticated queries and computations directly within MongoDB. The
            aggregate framework is particularly useful for generating insights,
            producing reports, and performing complex data transformations
            efficiently.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
