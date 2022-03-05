import { Stack } from '@mui/material';
import { useContext, useEffect, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AlertComponent from './AlertComponent';
import AlertContext from './AlertContext';
import alertReducer from './AlertReducer';

export function useAlertReducer() {
  const { alerts, setAlerts } = useContext(AlertContext);
  const [state, dispatch] = useReducer(alertReducer, alerts);

  useEffect(() => {
    setAlerts(state);
  }, [state, setAlerts]);

  const addAlert = (id, timeLimit, text, link, alertType, alertTitle) => {
    let alertId = id ? id : uuidv4();

    if (state?.length > 0 && !!state.find((alert) => alert.id === alertId)) {
      alertId = uuidv4();
    }

    dispatch({
      type: 'ADD_ALERT',
      payload: {
        id: alertId,
        text,
        link,
        alertType,
        alertTitle,
      },
    });

    setTimeout(() => removeAlert(alertId), timeLimit ?? 10000);
  };

  const removeAlert = (alertId) => {
    dispatch({
      type: 'REMOVE_ALERT',
      payload: { id: alertId },
    });
  };

  return { addAlert, removeAlert };
}

const AlertManager = () => {
  const { alerts } = useContext(AlertContext);

  return (
    <div className='alert-container'>
      <Stack spacing={2}>
        {alerts?.length > 0 &&
          alerts.map((alert) => (
            <AlertComponent
              key={alert.id}
              id={alert.id}
              text={alert.text}
              link={alert.link}
              alertType={alert.alertType}
              alertTitle={alert.alertTitle}
            />
          ))}
      </Stack>
    </div>
  );
};

export default AlertManager;
