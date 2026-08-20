export default function Home() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '40px', textAlign: 'center', backgroundColor: '#0f172a', color: '#fff', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '2.5rem', color: '#38bdf8' }}>AutoZ Access Hub</h1>
      <p style={{ fontSize: '1.2rem', color: '#94a3b8' }}>Client AI Automation & Workflow Control</p>
      
      <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        <div style={{ border: '1px solid #334155', padding: '20px', borderRadius: '10px', backgroundColor: '#1e293b', width: '250px' }}>
          <h3>n8n Workflows</h3>
          <p style={{ color: '#cbd5e1' }}>Status: Active</p>
        </div>
        <div style={{ border: '1px solid #334155', padding: '20px', borderRadius: '10px', backgroundColor: '#1e293b', width: '250px' }}>
          <h3>AI Agents</h3>
          <p style={{ color: '#cbd5e1' }}>Status: Connected</p>
        </div>
      </div>
    </div>
  );
                    }

