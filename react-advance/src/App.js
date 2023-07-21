import "./App.css";
import FragmentDemo from "./component/Fragments/FragmentDemo";
import React from "react";
import Table from "./component/Fragments/Table";
import PureComponent from "./component/Pure components/PureComponent";
import ParentComp from "./component/Pure components/ParentComponent";
import RefsDemo from "./component/Refs/RefsDemo";
import FocusInput from "./component/Refs/FocusInput";
import FRParentInput from "./component/Refs/FRParentInput";
import Hero from "./component/Error boundry/Hero";
import ErrorBoundry from "./component/Error boundry/ErrorBoundry";

function App() {
  return (
    <div className="App">
      {/* <FragmentDemo/> */}
      {/* <Table/> */}
      {/* <PureComponent/> */}
      {/* <ParentComp/> */}
      {/* <RefsDemo/> */}
      {/* <FocusInput/> */}
      {/* <FRParentInput/> */}
      <ErrorBoundry>
        <Hero heroName="Batman" />
      </ErrorBoundry>
      <ErrorBoundry>
        <Hero heroName="Superman" />
      </ErrorBoundry>
      <ErrorBoundry>
        <Hero heroName="Joker" />
      </ErrorBoundry>
    </div>
  );
}

export default App;
