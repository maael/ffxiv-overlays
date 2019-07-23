import Link from 'next/link';

export default () => (
  <>
    <style global jsx>{`
      body {
        font-family: sans-serif;
      }
    `}</style>
    <h1>Mael'a Niwa's Overlay Themes</h1>
    <ul>
      <li><Link href='/t/base'>Base</Link></li>
    </ul>
  </>
);