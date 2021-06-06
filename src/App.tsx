import { Route, Switch } from 'react-router-dom'
import { MainPage, OrderInfo, OrderPage } from './pages'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route path="/order-page" component={OrderPage} />
      <Route path="/order-id/:id" component={OrderInfo} />
    </Switch>
  )
}

export default App
