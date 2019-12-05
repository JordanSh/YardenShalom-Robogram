import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { flexbox } from "./../styles/mixins";

//importing Components
import Login from "./Login";
import Feed from "./Feed";
import AddPost from "./AddPost";
import SignUp from "./SignUp";
import HomeBar from "./HomeBar";
import Profile from "./Profile";
import Credits from "./Credits";

//importing GlobalStyle Component
import GlobalStyleComponent from "../styles/GlobalStyle";
import { GlobalContext } from "../state/GlobalContext";

const App = () => {
  const { loggedIn, setDropDownIsOpen } = useContext(GlobalContext);

  return (
    <Router>
      <MainContainer>
        <HomeBar />
        <CloseDropDownDiv onClick={() => setDropDownIsOpen(false)}>
          <Switch>
            <Route exact path="/">
              {loggedIn ? <Feed /> : <Credits />}
            </Route>
            <Route path="/credits" component={Credits} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/feed">{loggedIn ? <Feed /> : <Login />}</Route>
            <Route path="/addpost">{loggedIn ? <AddPost /> : <Login />}</Route>
            <Route path="/profile">{loggedIn ? <Profile /> : <Login />}</Route>
          </Switch>
        </CloseDropDownDiv>
      </MainContainer>
      <GlobalStyleComponent />
    </Router>
  );
};

export default App;

const MainContainer = styled.div`
  /* padding-top: 5vh; */
  user-select: none;
  display: flex;
  /* justify-content: center; */
  /* border: 3px solid red; */
  flex-direction: column;
  margin: 50px auto 0;
  height: 100vh;
  position: relative;

  width: 100vw;
  min-width: 350px;
  max-width: 450px;
  background: white;
  font-family: "Hind Guntur", sans-serif;
  /* overflow: hidden; */
  /* overflow-y: scroll; */
  /* overflow-x: hidden; */
`;

const CloseDropDownDiv = styled.div`
  height: 100%;
`;
