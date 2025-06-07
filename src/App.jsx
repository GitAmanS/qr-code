import React from 'react';
import { QRCode } from 'react-qrcode-logo';


const RoundedLogo = () => (
  <div style={{
    width: 60,
    height: 60,
    borderRadius: 10, 

    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }}>
    <img 
      src="/logo.PNG" 
      alt="Logo" 
      style={{ width: '100%', height: '100%' }} 
    />
  </div>
);

function App() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.qrContainer}>
          <QRCode
            value="https://girogirls.kz/user/entryQRCode"
            size={256}
            bgColor="#ffffff"
            fgColor="#000000"
            qrStyle="dots"
            eyeRadius={10}
            quietZone={10}
            logoImage="/logo1.png"
            logoWidth={60}
            logoHeight={60}
            removeQrCodeBehindLogo={true}
            logoPadding={5}
            logoPaddingStyle="square"
          />
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    padding: '20px',
    boxSizing: 'border-box',
    backgroundColor: '#f8f8f8'
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '30px',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)',
    padding: '10px',
    textAlign: 'center'
  },
  qrContainer: {
    position: 'relative',
    display: 'inline-block'
  }
};

export default App;