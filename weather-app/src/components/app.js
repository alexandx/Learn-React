const React = require('react');
const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;
const Switch = ReactRouter.Switch;
const Forecast = require('./Forecast');
const WeatherSearch = require('./WeatherSearch');

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
            <Route render={function (props) {
              return (
                <div className='navbar'>
                  <h1>Main.js Header</h1>
                  <WeatherSearch
                  flex='row'
                  onSubmitCity={function(city){
                    props.history.push({
                      pathname: 'forecast',
                      search: '?city=' + city
                    });
                  }}
                  />
                </div>
              )
            }} />
            <Route exact path='/' render={function(props){
              return(
                  <div className='body-container' style={{backgroundImage: "url('images/pattern.svg')"}}>
                    <h1 className='header'>Enter a City and State</h1>
                    <WeatherSearch
                      flex = 'column'
                      onSubmitCity={function (city) {
                        props.history.push({
                          pathname: 'forecast',
                          search: '?city=' + city
                        })
                      }}
                    />
                  </div>
              )
            }}/>
            <Route path='/forecast' component={Forecast} />
      </div>
      </Router>

    )
  }
}

module.exports = App;
