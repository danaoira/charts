import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import combinedReducer from './store/combinedReducer'
import combinedEpics from './store/combinedEpics'
import { ChartSuggestionPage } from './components/pages';

const epicMiddleware = createEpicMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
let store = createStore(
  combinedReducer,
  composeEnhancers(
    applyMiddleware(epicMiddleware)
  )
)
epicMiddleware.run(combinedEpics)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ChartSuggestionPage />
      </Provider>
    )
  }
}

export default App