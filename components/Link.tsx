import Link from "next/link";

export default ({href, children, ...props}) => (
  <Link href={href} as={`${process.env.BACKEND_URL}${href}`} {...props}>{typeof children === 'string' ? <a>{children}</a> : children}</Link>
);