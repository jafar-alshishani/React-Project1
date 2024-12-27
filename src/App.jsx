import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './Header'
import MainPage from './MainPage'
import Support from './Support'
import Enterprise from './Enterprise'
import Features from './Features'
function App() {

    const planets = [
        { id: 1, name: "Mars", isGasPlanet: false },
        { id: 2, name: "Earth", isGasPlanet: false },
        { id: 3, name: "Jupiter", isGasPlanet: true },
        { id: 4, name: "Venus", isGasPlanet: false },
        { id: 5, name: "Neptune", isGasPlanet: true },
        { id: 6, name: "Uranus", isGasPlanet: true },
    ]

    // const newPlanets = planets.map((p, index) => <p key={index}>{p.name} </p>)
    const newPlanets = planets.map((p) =>
        p.isGasPlanet ? <p style={{ color: 'green' }} key={p.id}>{p.name} </p> :
            <p style={{ color: 'blue' }} key={p.id}>{p.name} </p>)
    return (


        <Router>
            <Header />


            <Routes>
                <Route index element={<MainPage />} />
                <Route path="support" element={<Support />} />
                <Route path="enterprise" element={<Enterprise />} />
                <Route path="features" element={<Features />} />
            </Routes>
            {/* <MainPage /> */}

            {/* <h1>welcome to react</h1> */}
            {/* {newPlanets} */}
        </Router>



    )

}

export default App
