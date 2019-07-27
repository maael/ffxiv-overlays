import Link from '../components/Link';

export default () => (
  <>
    <style global jsx>{`
      body {
        font-family: sans-serif;
      }
      h1, h2 {
        margin-bottom: 0;
      }
      ul {
        margin: 10px 0 20px 0;
        list-style: none;
        width: 250px;
      }
      li {
        padding: 5px 0;
      }
      a {
        text-decoration: none;
      }
      li > *:nth-child(2) {
        font-size: 12px;
        float: right;
      }
    `}</style>
    <h1>Mael'a Niwa's Overlay Themes</h1>
    <ul>
      <li><Link href='/t/base'>Base</Link></li>
      <li><Link href='/t/minidps'>Mini DPS</Link></li>
      <li><Link href='/t/sparky'>Sparky</Link></li>
    </ul>
    <h2>Others Overlay Themes</h2>
    <ul>
      <li><Link href='https://waffru.github.io/waffru-overlay/'>waffru</Link> <Link href='https://github.com/Waffru/waffru.github.io'>GitHub</Link></li>
      <li><Link href='https://waffru.github.io/waffru-overlay2/'>waffru2</Link> <Link href='https://github.com/Waffru/waffru.github.io'>GitHub</Link></li>
      <li><Link href='https://hibiyasleep.github.io/kagerou/overlay'>kagerou</Link> <Link href='https://github.com/hibiyasleep/kagerou'>GitHub</Link></li>
      <li><Link href='https://hibiyasleep.github.io/kagerou/overlay'>ikegami</Link> <Link href='https://github.com/hibiyasleep/kagerou'>GitHub</Link></li>
      <li><Link href='http://kagerou.hibiya.moe/ikegami-test'>horizoverlay</Link> <Link href='https://github.com/hibiyasleep/ikegami'>GitHub</Link></li>
      <li><Link href='https://billyvg.github.io/OverlayPlugin-themes/rdmty_default.html'>rdmty</Link> <Link href='https://github.com/billyvg/OverlayPlugin-themes'>GitHub</Link></li>
      <li><Link href='https://billyvg.github.io/OverlayPlugin-themes/rdmty_no_job_colors.html'>rdmty (no job colours)</Link> <Link href='https://github.com/billyvg/OverlayPlugin-themes'>GitHub</Link></li>
      <li><Link href='https://billyvg.github.io/OverlayPlugin-themes/kyitrai.html'>kyitrai</Link> <Link href='https://github.com/billyvg/OverlayPlugin-themes'>GitHub</Link></li>
      <li><Link href='https://billyvg.github.io/OverlayPlugin-themes/xephero.html'>xephero</Link> <Link href='https://github.com/billyvg/OverlayPlugin-themes'>GitHub</Link></li>
      <li><Link href='https://billyvg.github.io/OverlayPlugin-themes/elizar2006_miniparse.html'>elizar2006</Link> <Link href='https://github.com/billyvg/OverlayPlugin-themes'>GitHub</Link></li>
      <li><Link href='https://billyvg.github.io/OverlayPlugin-themes/momokotomoko_miniparse.html'>momokotomoko</Link> <Link href='https://github.com/billyvg/OverlayPlugin-themes'>GitHub</Link></li>
      <li><Link href='https://billyvg.github.io/OverlayPlugin-themes/tristoune_miniparse.html'>tristoune</Link> <Link href='https://github.com/billyvg/OverlayPlugin-themes'>GitHub</Link></li>
      <li><Link href='https://billyvg.github.io/OverlayPlugin-themes/miniparseVertigo.html'>Vertigo</Link> <Link href='https://github.com/billyvg/OverlayPlugin-themes'>GitHub</Link></li>
      <li><Link href='https://billyvg.github.io/OverlayPlugin-themes/rumaruma_miniparse.html'>RumaRuma</Link> <Link href='https://github.com/billyvg/OverlayPlugin-themes'>GitHub</Link></li>
      <li><Link href='https://billyvg.github.io/OverlayPlugin-themes/laiglinne-ff-dmgmeter.html'>laiglinne</Link> <Link href='https://github.com/billyvg/OverlayPlugin-themes'>GitHub</Link></li>
      <li><Link href='https://billyvg.github.io/OverlayPlugin-themes/Torgan.MiniParse.html'>Torgan</Link> <Link href='https://github.com/billyvg/OverlayPlugin-themes'>GitHub</Link></li>
      <li><Link href='https://billyvg.github.io/OverlayPlugin-themes/enilia-overlay.html'>enilia</Link> <Link href='https://github.com/billyvg/OverlayPlugin-themes'>GitHub</Link></li>
      <li><Link href='https://billyvg.github.io/OverlayPlugin-themes/Bylanders.html'>Bylanders</Link> <Link href='https://github.com/billyvg/OverlayPlugin-themes'>GitHub</Link></li>
    </ul>
  </>
);