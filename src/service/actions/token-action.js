export const UPDATE_TOKEN = 'token:updateToken';

export function updateToken(newToken) {
  return {
    type: UPDATE_TOKEN,
    payload: {
      token: newToken
    }
  }
}
