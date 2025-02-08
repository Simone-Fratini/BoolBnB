import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./pages/DefaultLayout";
import HomePage from "./pages/HomePage";
import SearchPropertyPage from "./pages/SearchPropertyPage";
import AddPropertyPage from "./pages/AddPropertyPage";
import PropertyDetail from "./pages/PropertyDetailPage";
import { GlobalProvider } from "./Context/GlobalContext";
function App() {
    return (
        <GlobalProvider>
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
        </GlobalProvider>
    );
}

export default App;
