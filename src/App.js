import './App.scss';
import ChooseEasybank from './Components/ChooseEasybank/ChooseEasybank';
import Footer from './Components/Footer/Footer';
import Intro from './Components/Introduction.js/Intro';
import LatestArticles from './Components/LatestArticles/LatestArticles';
import Header from './Components/NavBar/Header';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Intro></Intro>
      <ChooseEasybank></ChooseEasybank>
      <LatestArticles />
      <Footer />
    </div>
  );
}

export default App;
