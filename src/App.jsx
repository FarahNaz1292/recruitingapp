import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Foremployers from "./Components/Foremployers";
import Aboutus from "./Components/Aboutus";
import Jobseekers from "./Components/Jobseekers";
import Contactus from "./Components/Contactus";

import Singlepagejob from "./Components/Singlejobpage";
import JobDetails from "./Components/Jobdetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route
          path="Foremployers"
          element={<Foremployers></Foremployers>}
        ></Route>
        <Route path="AboutUs" element={<Aboutus></Aboutus>}></Route>
        <Route path="Jobseekers" element={<Jobseekers></Jobseekers>}>
          <Route path="Joblistings" element={<JobDetails></JobDetails>} />
        </Route>
        <Route path="/data/:id" element={<Singlepagejob></Singlepagejob>} />
        <Route path="Contactus" element={<Contactus></Contactus>}></Route>
      </Routes>
    </>
  );
}

export default App;
