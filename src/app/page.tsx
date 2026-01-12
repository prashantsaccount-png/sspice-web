export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "#000", color: "#fff", padding: "40px" }}>
      <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>SSPICE Pizza</h1>

      <p style={{ marginBottom: "30px", opacity: 0.8 }}>
        Coming soon — we’re firing up the ovens to accept orders online.
      </p>

      <div
        style={{
          border: "1px solid #333",
          borderRadius: "12px",
          padding: "20px",
          maxWidth: "520px",
        }}
      >
        <h3>Store address</h3>

        <p>
          Shop No. 3, Crown Park,<br />
          Near Lourdes School,<br />
          Opp Maxi Ground,<br />
          Chikanghar, Kalyan West,<br />
          Pincode 400301
        </p>

        <p>📞 9156986500</p>
        <p>✉️ sspicepizza@gmail.com</p>
      </div>
    </main>
  );
}
