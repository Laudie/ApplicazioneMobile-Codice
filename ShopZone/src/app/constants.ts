export const USE_PROXY = true;

export const URL_BASE = USE_PROXY ? 'api' : 'http://localhost:8080/shopzoneserver/api';

export const URL = {
    LOGIN: URL_BASE + '/login',
    LOGOUT: URL_BASE + '/logout',
    NOTIZIE: URL_BASE + '/notizie',
    NEGOZIO: URL_BASE + '/negozio',
    NUOVO_UTENTE: URL_BASE + '/login/registrazione'
};

export const X_AUTH = 'X-Auth';

export const AUTH_TOKEN = 'auth-token';

export const UTENTE_STORAGE = 'utente';

export const LINGUA = 'lingua';
