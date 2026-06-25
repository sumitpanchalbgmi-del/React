import React from "react";

export default function App() {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      background: "linear-gradient(135deg, #667eea, #764ba2)",
      fontFamily: "Arial, sans-serif",
    },
    card: {
      width: "320px",
      background: "#fff",
      borderRadius: "20px",
      padding: "25px",
      textAlign: "center",
      boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
      transition: "transform 0.3s ease",
    },
    avatar: {
      width: "90px",
      height: "90px",
      borderRadius: "50%",
      marginBottom: "15px",
      border: "4px solid #667eea",
    },
    name: {
      margin: "0",
      color: "#333",
      fontSize: "28px",
      fontWeight: "bold",
    },
    title: {
      color: "#667eea",
      margin: "8px 0 20px",
      fontSize: "16px",
      fontWeight: "500",
    },
    divider: {
      border: "none",
      height: "2px",
      background: "linear-gradient(to right, #667eea, #764ba2)",
      margin: "15px 0",
    },
    contact: {
      color: "#555",
      fontSize: "15px",
      margin: "10px 0",
    },
    button: {
      marginTop: "15px",
      padding: "10px 20px",
      border: "none",
      borderRadius: "25px",
      background: "linear-gradient(135deg, #667eea, #764ba2)",
      color: "#fff",
      cursor: "pointer",
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <img
          src="https://via.placeholder.com/90"
          alt="Profile"
          style={styles.avatar}
        />

        <h2 style={styles.name}>Ankush</h2>
        <p style={styles.title}>🎮 Game Developer</p>

        <hr style={styles.divider} />

        <p style={styles.contact}>📞 +91 65165465654</p>
        <p style={styles.contact}>✉️ ankush@example.com</p>

        <button style={styles.button}>Contact Me</button>
      </div>
    </div>
  );
}