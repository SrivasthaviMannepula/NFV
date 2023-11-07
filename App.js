import logo from './logo.svg';
import './App.css';
import Title from './topics/Title';
import Sections from './topics/Sections';
import IntroducingNFV from './topics/IntroducingNfv';
import Revolution from './topics/Revolution';
import Powers from './topics/Powers';
import NFVBuildingBlocks from './topics/NFVBuildingBlocks';
import Management from './topics/Management';
import Welcome from './topics/Welcome';
import Conclusion from './topics/Conclusion';
import SuccessStories from './topics/SuccessStories';
import SHeading from './topics/SHeading';
import Architecture from './topics/Architecture';
import PH from './topics/PH';
import HH from './topics/HH';

function App() {
  return (
    <div className="App">

      <Title></Title>
      <Sections></Sections>
      <Welcome></Welcome>
      <IntroducingNFV></IntroducingNFV>
      <HH></HH>
      <Revolution></Revolution>
      <PH></PH>
      <Powers></Powers>
      <Architecture></Architecture>
      <SHeading></SHeading>
      <SuccessStories></SuccessStories>
      <Conclusion></Conclusion>
    </div>
  );
}

export default App;
