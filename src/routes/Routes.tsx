
import {
  BrowserRouter,
  Route,
  Routes as Routess,
} from "react-router-dom";
import Layout from "../container/pages/layout/Layout";
import Home from "../container/pages/Home/Home";






export default function Routes() {


  return (
    <BrowserRouter>
      <Routess>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routess>
    </BrowserRouter>
  );
}
