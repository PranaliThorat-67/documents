import logo from './logo.svg';
import './App.css';

function App() {
       //whatever written in return() that was the JSX - JSX is the HTML but with the Javascript
  /* //but if we written it in the Javascript fragment means <>...</> in this then it execute without error - wrap all the the things in this <>...</>
    <h1>this is me</h1>  //this is not allowed - bcz in this by executing all code only one element returned 
    -unterminated js content gives error*/
  
  return (
    <>
    <nav classname="navbar navbar-expand-lg navbar-light bg-light">
  <div classname="container-fluid">
    <a classname="navbar-brand" href="/">Navbar</a>
    <button classname="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span classname="navbar-toggler-icon"></span>
    </button>
    <div classname="collapse navbar-collapse" id="navbarSupportedContent">
      <ul classname="navbar-nav me-auto mb-2 mb-lg-0">
        <li classname="nav-item">
          <a classname="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li classname="nav-item">
          <a classname="nav-link" href="/">Link</a>
        </li>
        <li classname="nav-item dropdown">
          <a classname="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul classname="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a classname="dropdown-item" href="/">Action</a></li>
            <li><a classname="dropdown-item" href="/">Another action</a></li>
            <li><hr classname="dropdown-divider"/></li>
            <li><a classname="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li classname="nav-item">
          <a classname="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form classname="d-flex">
        <input classname="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button classname="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</>   
  );
}

export default App;
