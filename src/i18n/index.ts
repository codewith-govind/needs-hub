import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: 'Welcome back',
      signIn: 'Please sign in to your account',
      email: 'Email address',
      password: 'Password',
      rememberMe: 'Remember me',
      forgotPassword: 'Forgot your password?',
      signInButton: 'Sign in',
      noAccount: 'Don\'t have an account?',
      signUp: 'Sign up',
      // Add more translations
    },
  },
  es: {
    translation: {
      welcome: 'Bienvenido de nuevo',
      signIn: 'Inicia sesión en tu cuenta',
      email: 'Correo electrónico',
      password: 'Contraseña',
      rememberMe: 'Recuérdame',
      forgotPassword: '¿Olvidaste tu contraseña?',
      signInButton: 'Iniciar sesión',
      noAccount: '¿No tienes una cuenta?',
      signUp: 'Regístrate',
      // Add more translations
    },
  },
  fr: {
    translation: {
      welcome: 'Bon retour',
      signIn: 'Connectez-vous à votre compte',
      email: 'Adresse e-mail',
      password: 'Mot de passe',
      rememberMe: 'Se souvenir de moi',
      forgotPassword: 'Mot de passe oublié ?',
      signInButton: 'Se connecter',
      noAccount: 'Vous n\'avez pas de compte ?',
      signUp: 'S\'inscrire',
      // Add more translations
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;