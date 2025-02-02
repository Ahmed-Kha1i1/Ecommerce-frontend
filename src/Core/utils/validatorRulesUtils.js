import {
  validateEmail,
  validateName,
  validatePassword,
  validatePhone,
} from "./validatorUtilsa";

export function setMaxLength(max, field) {
  return {
    value: max,
    message: `The length of ${field} must be ${max} characters or fewer.`,
  };
}

export function validateEmailRule() {
  return {
    required: "Email is required",
    validate: (value) => {
      
      return validateEmail(value.trim()) || "Email is not valid";
    },
  };
}

export function validateNameRule(field, maxLength = 50) {
  return {
    required: `${field} is required`,
    maxLength: setMaxLength(maxLength, field),
    validate: (value) =>
      validateName(value.trim()) ||
      `${field} is not valid. Please use only letters, numbers, underscores, and hyphens.`,
  };
}

export function validatePasswordRule(field) {
  return {
    required: `${field} is required`,
    maxLength: setMaxLength(20, field),
    validate: (value) =>
      validatePassword(value) ||
      `${field} must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one digit, and one special character`,
  };
}

export function validatePhoneNumberRule() {
  return {
    required: "Phone is required",
    validate: (value) => {
      return validatePhone(value.trim()) || "Phone is not valid";
    },
  };
}
export function validateConfirmPasswordRule(
  passwordFieldName = "password",
  name = "Confirm Password",
) {
  return {
    required: `${name} is required`,
    validate: (value, context) => {
      const passwordValue = context[passwordFieldName];
      if (value !== passwordValue) {
        return "Passwords do not match";
      }
      return true;
    },
  };
}
