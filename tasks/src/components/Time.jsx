const styles = {
  h3: {
    textAlign: 'center',
    color: 'blue',
  },
  span: {
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '0.5rem 1rem',
    color: 'red',
    fontSize: '20px'
  }

}

export default function Time() {
  return (
    <div>
      &nbsp;
      <h3 style={styles.h3}>Current time: <span style={styles.span}>{new Date().toLocaleTimeString()}</span></h3>
      &nbsp;
    </div>
  );
  
}


