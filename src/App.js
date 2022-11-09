// Components
import Footer from './components/common/Footer';
import Nav from './components/common/Nav';
import RoutesComponent from './components/RoutesComponent';

function App() {
  return (
    <div className="wrapper">
      <Nav />
      <RoutesComponent />
      <Footer />
    </div>
  );
}

export default App;
