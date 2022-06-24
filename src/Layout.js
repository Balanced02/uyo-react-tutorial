import { SplitScreen } from './components/SplitScreen';

const RightComponent = () => <div>Right Component</div>
const LeftComponent = () => <div>Left Component</div>

const SideBar = () => <div>
  <ul>
    <li>Home</li>
    <li>About</li>
    <li>Profile</li>
  </ul>
</div>

const MainApp = () => <div>Main Application</div>

function Layout() {
  return (
    <div className="container">
     <SplitScreen leftWeight={2} rightWeight={1} >
        <LeftComponent />
        <RightComponent />
     </SplitScreen>

     <SplitScreen >
      <SideBar />
      <MainApp />
     </SplitScreen>
    </div>
  );
}

export default Layout;
