export default function DemoLoginPage() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
      <h1 style={{ marginBottom: '2rem', color: '#212121' }}>Demo Login</h1>
      <div style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: 'white' }}>
        <h2 style={{color: '#212121'}}>Login</h2>
        <form>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="role" style={{ display: 'block', marginBottom: '5px', color: '#212121' }}>Role</label>
            <select id="role" name="role" style={{ width: '100%', padding: '8px', boxSizing: 'border-box', color: 'black' }}>
              <option value="pilot">Pilot</option>
              <option value="mechanic">Mechanic</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="username" style={{ display: 'block', marginBottom: '5px', color: '#212121' }}>Username</label>
            <input type="text" id="username" name="username" style={{ width: '100%', padding: '8px', boxSizing: 'border-box', color: 'black' }} />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="password" style={{ display: 'block', marginBottom: '5px', color: '#212121' }}>Password</label>
            <input type="password" id="password" name="password" style={{ width: '100%', padding: '8px', boxSizing: 'border-box', color: 'black' }} />
          </div>
          <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '5px' }}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
