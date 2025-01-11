
import { useEffect } from 'react';
import Routes from './routes';
import { StyledButton } from './components';
import styles from './components/ApplicationButton/Button.module.scss'

const App = () => {

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      paddingTop: '30px',
      maxWidth: '400px'
    }}>
      <StyledButton className={styles.button} fullWidth>
        Button
      </StyledButton>
    </div>
  )
}

export default App
