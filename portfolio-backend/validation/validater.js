function validateName(name) {
  if (typeof name !== "string") return false;

  const trimmedName = name.trim();

  // Allow letters, spaces, hyphens, apostrophes; min 2 chars, starts with letter
  const nameRegex = /^[A-Za-z][A-Za-z\s'-]{1,}$/;

  if (trimmedName.length < 2) return false;
  if (isNaN(trimmedName) === false) return false; // numeric string rejection
  if (!nameRegex.test(trimmedName)) return false;

  return true;
}

function validateEmail(email) {
  if (typeof email !== "string") return false;

  const trimmedEmail = email.trim();

  // Simple but stricter email pattern
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  return emailRegex.test(trimmedEmail);
}

function validateMessage(message) {
  if (typeof message !== "string") return false;

  const trimmedMessage = message.trim();

  return trimmedMessage.length >= 10;
}

function validateContactForm(data) {
  const { name, email, message } = data;

  if (!validateName(name)) {
    return { success: false, error: "Invalid name format." };
  }

  if (!validateEmail(email)) {
    return { success: false, error: "Invalid email address." };
  }

  if (!validateMessage(message)) {
    return {
      success: false,
      error: "Message must be at least 10 characters long.",
    };
  }

  return { success: true };
}

export{
  validateName,
  validateEmail,
  validateMessage,
  validateContactForm,
};
