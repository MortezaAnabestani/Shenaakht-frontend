import styles from "../../styles/validation/passwordValidation.module.css";

const PasswordValidation = ({ password }) => {
  const validatePassword = () => {
    const hasLowerCase = /[a-z]/.test(password);
    const hasUpperCase = /[A-Z]/.test(password);
    const hasDigit = /[\d]/.test(password);
    const hasSymbol = /[@$!%#*?&]/.test(password);
    const hasValidLength = password.length >= 8;
    return {
      hasLowerCase,
      hasUpperCase,
      hasDigit,
      hasSymbol,
      hasValidLength,
    };
  };

  const passwordValidation = validatePassword();

  return (
    password && (
      <div className={styles.passValidationWrapper}>
        <div style={{ color: passwordValidation.hasLowerCase ? "green" : "red" }}>
          {passwordValidation.hasLowerCase ? "✔ " : "✘ "}
          یک حرف کوچک
        </div>
        <div style={{ color: passwordValidation.hasUpperCase ? "green" : "red" }}>
          {passwordValidation.hasUpperCase ? "✔ " : "✘ "}
          یک حرف بزرگ
        </div>
        <div style={{ color: passwordValidation.hasDigit ? "green" : "red" }}>
          {passwordValidation.hasDigit ? "✔ " : "✘ "}
          یک عدد
        </div>
        <div style={{ color: passwordValidation.hasSymbol ? "green" : "red" }}>
          {passwordValidation.hasSymbol ? "✔ " : "✘ "}
          یک نویسۀ خاص
        </div>
        <div style={{ color: passwordValidation.hasValidLength ? "green" : "red" }}>
          {passwordValidation.hasValidLength ? "✔ " : "✘ "}
          هشت نویسه
        </div>
      </div>
    )
  );
};

export default PasswordValidation;
