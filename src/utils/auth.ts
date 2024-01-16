import Cookies from 'js-cookie';

export function getAuth() {
  return Cookies.get('auth');
}

export function setAuth(credentials: string) {
  return Cookies.set('auth', credentials, {
    expires: 1,
    sameSite: 'Lax',
  });
}

export function removeAuth() {
  Cookies.remove('auth');
  window.location.href = '/login';
}
