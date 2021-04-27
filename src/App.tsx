import { Route, Switch } from 'react-router-dom'
import { MainPage, OrderPage } from './pages'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/order-page" component={OrderPage} />
    </Switch>
  )
}

export default App
