import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Basket from "./routes/Basket";
import Convenientcategory from "./routes/Convenientcategory";
import Convenientmode from "./routes/Convenientmode";
import Convenientpayment from "./routes/Convenientpaymentmethod";
import Convenientmenu from "./routes/Convenientmenu";
import Home from "./routes/Home";
import Normalmode from "./routes/Normalmode";
import Payment from "./routes/Payment";
import Convenientmain from "./routes/Convenientmain";
import Convenientbasket from "./routes/Convenientbasket";
import Convenientpaymentmethod from "./routes/Convenientpaymentmethod";

const AppRouter = () => {
	return (
		<Router>
			<Routes>
				<Route path="/:storeid" element={<Home />}></Route>
				<Route path="/normalmode" element={<Normalmode />}></Route>
				<Route path="/basket" element={<Basket />}></Route>
				<Route path="/payment" element={<Payment />}></Route>
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
