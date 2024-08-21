import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./Components/Header"
import DataStore from "./Store/DataStore"
import Homepage from "./Components/Homepage/Homepage"
import Singlecoin from "./Components/Singlecoin/Singlecoin"

function App() {
  return (
    <DataStore>
    <BrowserRouter>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Homepage></Homepage>}></Route>
      <Route path="/coin/:id" element={<Singlecoin></Singlecoin>}></Route>
    </Routes>
    </BrowserRouter>
    </DataStore>
  )
}

export default App
