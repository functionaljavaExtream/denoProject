import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./routes/Home";
// import UpdatePage from "./routes/UpdatePage";
// import RestaurantsDetailPage from "./routes/RestaurantsDetailPage";
// import { RestaurantsContextProvider } from './context/RestaurantsContext';
const App = () => {
    return (
    // <RestaurantsContextProvider>
    //     <div className="container">
    //         <Router>
    //             <Switch>
    //                 <Route exact path="/" component={Home}/>
    //             </Switch>
    //         </Router>
    //     </div>
    // </RestaurantsContextProvider>
    <Router>
            <Route exact path="/" component={Home}/>

    </Router>

    )

}

export default App;