export const validateUserId = userId => userId ? null : 'Please enter a valid userId';

export const validatePassword = (password) =>
  password ? null : 'Please enter a valid password';

export const validateName = name => name ? null : 'Please enter a valid User name';

export const validateUserType = userType => userType === 'User Type' ? 'Please select valid user type' : null;