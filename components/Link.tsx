import Link from 'next/link';
import qualityUrl from '../util/qualityUrl';

export default ({href, children, ...props}) => (
  <Link href={href} as={qualityUrl(href)} {...props}>{typeof children === 'string' ? <a>{children}</a> : children}</Link>
);
