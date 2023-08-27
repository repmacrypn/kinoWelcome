/* eslint-disable indent */
import ReactDOM from 'react-dom/client'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App'
import { store } from 'store/store'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <Provider store={store} >
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Provider>
  </HashRouter>,
)
