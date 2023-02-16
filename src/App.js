import "./App.css";
import Wallet from "./components/Pages/Dashboard/Wallet";
import CreatePin from "./components/UserAuthentication/SignUp/CreatePin";
import SignUp from "./components/UserAuthentication/SignUp/SignUp";
import { Link, Route, Switch } from 'react-router-dom';
import ErrorModal from "./components/UI/Modal/ErrorModal";
import Login from "./components/UserAuthentication/Login/Login";
import SuccessModal from "./components/UI/Modal/SuccessModal";

function App() {
  // const Dashboard = () => <h1>Dashboard</h1>;
  // const Send = () => <h1>Send</h1>;
  // const Wallet = () => <h1>Wallet</h1>;
  // const Beneficiary = () => <h1>Beneficiary</h1>;
  // const Transactions = () => <h1>Transactions</h1>;
  // const Settings = () => <h1>Settings</h1>;

  return (
    <div>
      {/* <Wallet/> */}
      {/* <Wallet/> */}
      {/* <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/send" component={Send} />
        <Route exact path="/wallet" component={Wallet} />
        <Route exact path="/beneficiary" component={Beneficiary} />
        <Route exact path="/transactions" component={Transactions} />
        <Route exact path="/settings" component={Settings} />
      </Switch> */}

      <SignUp/>
    </div>
  );
}

export default App;
