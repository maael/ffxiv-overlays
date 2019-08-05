import App, {Container} from 'next/app';
import DragCorner from '../components/DragCorner';

class OverlaysApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <style jsx global>{`
          html, body {
            overflow: 'hidden'
          }
        `}</style>
        <Component {...pageProps} />
        <DragCorner />
      </Container>
    );
  }
}

export default OverlaysApp;