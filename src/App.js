import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import WpLogin from "./components/WpLogin";
import SignIn from "./components/SignIn";
import Error from "./components/Error";
import RelationStatus from "./components/RelationStatus";
import Gender from "./components/Gender";
import Competitor from "./components/Competitor";
import Profession from "./components/Profession";
import Payment from "./components/Payment";
import Anniversary from "./components/Anniversary";
import AgeGroup from "./components/AgeGroup";
import Birthday from "./components/Birthday";
import Review from "./components/Review";

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/:id" element={<WpLogin />} />
      <Route path="/signin/:id" element={<SignIn />} />
      <Route path="/relationstatus/:id" element={<RelationStatus />} />
      <Route path="/gender/:id" element={<Gender />} />
      <Route path="/competitor/:id" element={<Competitor />} />
      <Route path="/profession/:id" element={<Profession />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/anniversary/:id" element={<Anniversary />} />
      <Route path="/agegroup/:id" element={<AgeGroup />} />
      <Route path="/birthday/:id" element={<Birthday />} />
      <Route path="/review/:id" element={<Review />} />
      <Route path="/error" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
