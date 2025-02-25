
import './App.css'
import EmployeeList from './components/EmployeeList'
import Header from './components/Header'
import SearchBar from './components/SearchBar'

function App() {
  return (
    < div className="mainPage" >
      <div className="header">
      <Header/>
      </div>
    <SearchBar/>
    <EmployeeList/>
    <EmployeeList/>
    <EmployeeList/>
    <EmployeeList/>
    </div>
  )
}

export default App


// You should create an App, Homepage, Header, SearchBar, EmployeeList and EmployeeListItem.
// Style your components to accurately match the given layout. You do not need to include images, but can if you have time.
// No functionality is needed, just arrange the layout with with React components.