import React, { useState } from "react";

export default function MetaVisa() {
  const [fullName, setFullName] = useState("");
  const [citizenship, setCitizenship] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ maxWidth: 720, margin: "40px auto", padding: 24 }}>
      <h1 style={{ marginBottom: 8 }}>MetaVisa</h1>
      <p style={{ color: "#6b7280", marginBottom: 24 }}>
        Demo application card. Fill the fields and click <b>Generate</b>.
      </p>

      <div
        style={{
          background: "white",
          borderRadius: 12,
          padding: 20,
          boxShadow: "0 1px 4px rgba(0,0,0,.08)",
          border: "1px solid #e5e7eb",
        }}
      >
        <form onSubmit={onSubmit}>
          <div style={{ display: "grid", gap: 12 }}>
            <label style={{ display: "grid", gap: 6 }}>
              <span style={{ fontWeight: 600 }}>Full name</span>
              <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Satoshi Nakamoto"
                style={{
                  border: "1px solid #d1d5db",
                  borderRadius: 8,
                  padding: "10px 12px",
                }}
                required
              />
            </label>

            <label style={{ display: "grid", gap: 6 }}>
              <span style={{ fontWeight: 600 }}>Citizenship</span>
              <input
                value={citizenship}
                onChange={(e) => setCitizenship(e.target.value)}
                placeholder="Network State"
                style={{
                  border: "1px solid #d1d5db",
                  borderRadius: 8,
                  padding: "10px 12px",
                }}
                required
              />
            </label>

            <label style={{ display: "grid", gap: 6 }}>
              <span style={{ fontWeight: 600 }}>Notes</span>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Purpose of travel, credentials, etc."
                rows={4}
                style={{
                  border: "1px solid #d1d5db",
                  borderRadius: 8,
                  padding: "10px 12px",
                  resize: "vertical",
                }}
              />
            </label>

            <button
              type="submit"
              style={{
                marginTop: 8,
                background: "#2563eb",
                color: "white",
                padding: "10px 16px",
                borderRadius: 8,
                border: "none",
                cursor: "pointer",
              }}
            >
              Generate
            </button>
          </div>
        </form>

        {submitted && (
          <div
            style={{
              marginTop: 20,
              padding: 16,
              borderRadius: 10,
              background: "#f9fafb",
              border: "1px solid #e5e7eb",
            }}
          >
            <div style={{ fontWeight: 700, marginBottom: 8 }}>
              Preview (not on-chain)
            </div>
            <div style={{ display: "grid", gap: 4 }}>
              <div>
                <b>Name:</b> {fullName || "—"}
              </div>
              <div>
                <b>Citizenship:</b> {citizenship || "—"}
              </div>
              <div>
                <b>Notes:</b> {notes || "—"}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
