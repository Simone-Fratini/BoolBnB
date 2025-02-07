import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./pages/DefaultLayout";
import HomePage from "./pages/Homepage";
import SearchPropertyPage from "./pages/SearchPropertyPage";
import AddPropertyPage from "./pages/AddPropertyPage";
import PropertyDetail from "./pages/PropertyDetailPage";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={DefaultLayout}>
                    <Route index Component={HomePage} />
                    <Route path="search" Component={SearchPropertyPage} />
                    <Route path="addproperty" Component={AddPropertyPage} />
                    <Route path="detail/:id" Component={PropertyDetail} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
