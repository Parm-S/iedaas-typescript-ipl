import { createUseStyles } from 'react-jss'
import Header from './components/Header/Header'
import MainRoute from './components/MainRoute'
import ErrorBoundary from './helper/ErroBoundary'
import Loading from './helper/Loading'
const useStyles = createUseStyles({
  loader: {
    margin: '5% 45%',
  },
})
function App() {
  const classes = useStyles()
  return (
    <ErrorBoundary>
      <div className="App">
        <Header />
        <div data-testid="location">
          <MainRoute />
        </div>
        <div data-testid="loading" className={classes.loader}>
          <Loading />
        </div>
      </div>
    </ErrorBoundary>
  )
}
export default App
