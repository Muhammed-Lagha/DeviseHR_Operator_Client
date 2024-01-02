export const getTokensFromCookies = () => {
  const cookies: { [key: string]: string } = {}

  const decodedCookie = decodeURIComponent(document.cookie)
  const cookieArray = decodedCookie.split(';')

  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i]
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1)
    }
    const cookieParts = cookie.split('=')
    const name = cookieParts[0]
    const value = cookieParts[1]
    cookies[name] = value
  }

  const val1: string = cookies['token'] || ''
  const val2: string = cookies['refreshToken'] || ''

  return [val1, val2]
}

export const getAuthToken = () : string | null => {
  const cookies = document.cookie.split(";");

  for (const cookie of cookies) {
    const [name, value] = cookie.trim().split("=");

    if (name === "token") {
      return decodeURIComponent(value);
    }
  }

  return null;
}

export const addTokensToCookies = (token: string, refreshToken: string) => {
  document.cookie = `token=${encodeURIComponent(token)}`;
  document.cookie = `refreshToken=${encodeURIComponent(refreshToken)}`;
}

export const clearTokenCookies = () => {
  document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  document.cookie = 'refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
};