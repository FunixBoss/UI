import './assets/css/style.css';
import './assets/css/plugins.min.css';
import {Helmet} from "react-helmet";
import Header from './components/General/Header';
import SideMenu from './components/General/SideMenu';
import SideBar from './components/General/SideBar';
function App() {
  return (
    <div id="wrapper">
      <Header />
      <SideMenu/>
      <div className="sidemenu-overlay"></div>
      <div className='main'>
        <div className='container'>
          <div className='row'>
            <div className="col-md-9 col-md-push-3"></div>
            <SideBar/>
          </div>

        </div>
      </div>
      


      <Helmet>
      <script  src="./assets/js/plugins.js"/>
      <script  src="./assets/js/main.js"/>
        {/*  SLIDER REVOLUTION 5.0 EXTENSIONS  
      (Load Extensions only on Local File Systems !  
      The following part can be removed on Server for On Demand Loading   */}
      <script type="text/javascript" src="./assets/js/extensions/revolution.extension.actions.min.js"></script>
      <script type="text/javascript" src="./assets/js/extensions/revolution.extension.carousel.min.js"></script>
      <script type="text/javascript" src="./assets/js/extensions/revolution.extension.kenburn.min.js"></script>
      <script type="text/javascript" src="./assets/js/extensions/revolution.extension.layeranimation.min.js"></script>
      <script type="text/javascript" src="./assets/js/extensions/revolution.extension.migration.min.js"></script>
      <script type="text/javascript" src="./assets/js/extensions/revolution.extension.navigation.min.js"></script>
      <script type="text/javascript" src="./assets/js/extensions/revolution.extension.parallax.min.js"></script>
      <script type="text/javascript" src="./assets/js/extensions/revolution.extension.slideanims.min.js"></script>
      <script type="text/javascript" src="./assets/js/extensions/revolution.extension.video.min.js"></script>

      </Helmet>
      

    </div>
  )
}

export default App;
