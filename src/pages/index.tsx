import Link from "next/link";

export default () => {
  return (
    <div>
      <p>
        <Link href="/schema_first" passHref>
          <a>Schema First</a>
        </Link>
      </p>
      <p>
        <Link href="/rest" passHref>
          <a>REST</a>
        </Link>
      </p>
      <p>
        <Link href="/code_first" passHref>
          <a>Schema First</a>
        </Link>
      </p>
    </div>
  );
};
