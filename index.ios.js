import { NativeModules, NativeEventEmitter } from 'react-native';

export const RNSnapchatLogin = NativeModules.SnapchatLogin;
export const RNSnapchatLoginEmitter = new NativeEventEmitter(RNSnapchatLogin);

class SnapchatLogin {
  login = () => {
    return new Promise((resolve, reject) => {
      RNSnapchatLogin.login()
        .then((result) => {
          if (result.error) {
            reject(result.error);
          } else {
            console.log('THISS??', this);
            this.getUserInfo().then(resolve).catch(reject);
          }
        })
        .catch((e) => reject(e));
    });
  };

  isLogged = async () => {
    const { result } = await RNSnapchatLogin.isUserLoggedIn();
    return result;
  };

  logout = async () => {
    const { result } = await RNSnapchatLogin.logout();
    return result;
  };

  getUserInfo = () => {
    return new Promise((resolve, reject) => {
      RNSnapchatLogin.fetchUserData()
        .then(async (tmp) => {
          const data = tmp;
          if (data === null) {
            resolve(null);
          } else {
            const res = await RNSnapchatLogin.getAccessToken();
            data.accessToken = res.accessToken;
            resolve(data);
          }
        })
        .catch((e) => {
          reject(e);
        });
    });
  };
}

export default new SnapchatLogin();
