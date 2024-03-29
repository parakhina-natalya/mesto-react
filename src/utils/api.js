class Api {
  constructor(configApi) {
    this._baseUrl = configApi.baseUrl;
    this._headers = configApi.headers;
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json()
    }

    return Promise.reject(new Error('Что-то пошло не так....'));
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers
    })
      .then((res) => this._getResponseData(res));
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers
    })
      .then((res) => this._getResponseData(res));
  }

  setUserInfo({ name, about }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: about
      })
    })
      .then((res) => this._getResponseData(res));
  }

  postNewCard({ name, link }) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link
      })
    })

      .then((res) => this._getResponseData(res));
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then((res) => this._getResponseData(res));
  }

  changeLikeCardStatus(cardId, changeMethod) {
    let methodLike = changeMethod ? "PUT" : "DELETE";
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: methodLike,
      headers: this._headers
    })
      .then((res) => this._getResponseData(res));
  }

  setUserAvatar({ avatar }) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatar
      })
    })
      .then((res) => this._getResponseData(res));
  }
}

const configApi = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-58',
  headers: {
    authorization: '1d69b9f0-d49a-47d2-84a3-fc000deead31',
    'Content-Type': 'application/json'
  }
};

const api = new Api(configApi);

export default api;