import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Normalbasket from "./routes/Normalbasket";
import Normalmode from "./routes/Normalmode";
import Normalpayment from "./routes/Normalpayment";
import Convenientcategory from "./routes/Convenientcategory";
import Convenientmode from "./routes/Convenientmode";
import Convenientpayment from "./routes/Convenientpayment";
import Convenientmenu from "./routes/Convenientmenu";
import Home from "./routes/Home";
import Convenientmain from "./routes/Convenientmain";
import Convenientbasket from "./routes/Convenientbasket";
import Convenientpaymentmethod from "./routes/Convenientpaymentmethod";

const AppRouter = () => {
	return (
		<Router basename="/store">
			<Routes>
				<Route path="/:storeid" element={<Home />}></Route>
				<Route path="/normalmode" element={<Normalmode />}></Route>
				<Route path="/normalbasket" element={<Normalbasket />}></Route>
				<Route path="/normalpayment" element={<Normalpayment />}></Route>
				<Route path="/convenientmode" element={<Convenientmode />}></Route>
				<Route path="/convenientmain" element={<Convenientmain />}></Route>
				<Route
					path="/convenientcategory"
					element={<Convenientcategory />}
				></Route>
				<Route
					path="/convenientmenu/:menuname"
					element={<Convenientmenu />}
				></Route>
				<Route path="/convenientbasket" element={<Convenientbasket />}></Route>
				<Route
					path="/convenientpayment/:method"
					element={<Convenientpayment />}
				></Route>
				<Route
					path="/convenientpaymentmethod"
					element={<Convenientpaymentmethod />}
				></Route>
			</Routes>
		</Router>
	);
};

export default AppRouter;
