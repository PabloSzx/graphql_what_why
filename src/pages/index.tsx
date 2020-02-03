import Link from "next/link";

export default () => {
  return (
    <div>
      <p>
        <Link href="/schema_first" passHref>
          <a>GraphQL Schema First</a>
        </Link>
      </p>
      <p>
        <Link href="/rest" passHref>
          <a>REST API</a>
        </Link>
      </p>
      <p>
        <Link href="/code_first" passHref>
          <a>GraphQL Code First</a>
        </Link>
      </p>
    </div>
  );
};
