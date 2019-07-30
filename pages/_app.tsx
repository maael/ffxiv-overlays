import App, {Container} from 'next/app';
import DragCorner from '../components/DragCorner';

class OverlaysApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
        <DragCorner />
      </Container>
    );
  }
}

export default OverlaysApp;