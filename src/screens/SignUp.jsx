import { useState } from "react";
import { Google, Apple } from "react-bootstrap-icons";
import { useAuth } from "../context/AuthContext";

const inputStyle = {
  height: 48,
  borderRadius: 10,
  border: "2px solid #d9d9d9",
  fontSize: 16,
  fontWeight: 600,
  padding: "0 16px",
};

/**
 * Compact, responsive sign-up card matching the "Create an account" Figma
 * frame, with first name / surname added and wired to POST /auth/sign-up.
 */
export default function SignUp({ onSignUp, onGoToSignIn }) {
  const { signUp } = useAuth();
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!firstName.trim() || !surname.trim()) {
      setError("Please enter your first name and surname.");
      return;
    }
    if (!email.trim() || !password) {
      setError("Please enter your email and password.");
      return;
    }

    setSubmitting(true);
    try {
      await signUp({
        firstName: firstName.trim(),
        surname: surname.trim(),
        email: email.trim(),
        password,
      });
      onSignUp?.();
    } catch (err) {
      setError(err.message || "Sign up failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="edcheck-card p-4 p-md-5" onSubmit={handleSubmit} noValidate>
      <p className="fw-semibold m-0" style={{ fontSize: 24 }}>
        Create an account
      </p>
      <p className="fw-normal mb-4" style={{ fontSize: 13, color: "#666" }}>
        Let&rsquo;s get you started
      </p>

      <div className="d-flex flex-column gap-3">
        <button
          type="button"
          className="d-flex align-items-center justify-content-center gap-2 w-100 bg-white"
          style={{ ...inputStyle, border: "1px solid #ccc" }}
        >
          <Google size={18} color="#666" />
          <span className="fw-semibold" style={{ fontSize: 15, color: "#666" }}>Continue with Google</span>
        </button>
        <button
          type="button"
          className="d-flex align-items-center justify-content-center gap-2 w-100 bg-white"
          style={{ ...inputStyle, border: "1px solid #ccc" }}
        >
          <Apple size={18} color="#666" />
          <span className="fw-semibold" style={{ fontSize: 15, color: "#666" }}>Continue with Apple</span>
        </button>

        <div className="d-flex align-items-center gap-2">
          <div className="flex-fill" style={{ height: 1, background: "#e5e5e5" }} />
          <span className="fw-bold" style={{ fontSize: 13 }}>or</span>
          <div className="flex-fill" style={{ height: 1, background: "#e5e5e5" }} />
        </div>

        {/* Name fields sit side by side on wider cards, stack on narrow ones */}
        <div className="d-flex flex-column flex-sm-row gap-3">
          <input
            type="text"
            name="firstName"
            autoComplete="given-name"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-100"
            style={inputStyle}
          />
          <input
            type="text"
            name="surname"
            autoComplete="family-name"
            placeholder="Surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            className="w-100"
            style={inputStyle}
          />
        </div>

        <input
          type="email"
          name="email"
          autoComplete="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-100"
          style={inputStyle}
        />
        <input
          type="password"
          name="password"
          autoComplete="new-password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-100"
          style={inputStyle}
        />

        {error && (
          <p className="m-0" style={{ fontSize: 13, color: "#c0392b" }} role="alert">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="d-flex align-items-center justify-content-center w-100 mt-1"
          style={{
            height: 48,
            borderRadius: 10,
            background: "#0709b7",
            border: "none",
            opacity: submitting ? 0.7 : 1,
          }}
        >
          <span className="fw-bold text-white" style={{ fontSize: 16 }}>
            {submitting ? "Creating account…" : "Sign up"}
          </span>
        </button>
      </div>

      <div className="d-flex justify-content-center align-items-baseline gap-2 mt-4">
        <span className="fw-normal" style={{ fontSize: 14 }}>Already have an account?</span>
        <button type="button" onClick={onGoToSignIn} className="fw-bold p-0 border-0 bg-transparent" style={{ fontSize: 14, color: "#09094f" }}>
          Sign in
        </button>
      </div>
    </form>
  );
}
