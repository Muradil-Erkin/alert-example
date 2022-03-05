import AlertManager from './AlertManager';
import AlertExample from './AlertExample';
import { AlertProvider } from './AlertContext';

function App() {
  return (
    <AlertProvider>
      <AlertManager />
      <AlertExample />
    </AlertProvider>
  );
}

export default App;
