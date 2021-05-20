
import { useState } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login"
import Register from "./Register"
import Today from "./Habits/Today"
import UserContext from "../contexts/UserContext"


export default function App(){
	const [userData, setUserData] = useState("")
    return(
		<UserContext.Provider value={{userData,setUserData}}>
			<BrowserRouter>
				<Switch>
					<Route path="/" exact>
						<Login/>
					</Route>
					<Route path="/cadastro" exact>
						<Register/>
					</Route>
					<Route path="/hoje" exact>
						<Today/>
					</Route>

				</Switch>
			</BrowserRouter>
		</UserContext.Provider>
    )
}