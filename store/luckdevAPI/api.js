import axios from "axios"
const luckdevAPI = axios.create({
  baseURL: "https://luck28-dev-114358.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return luckdevAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function api_v1_kudida_list(payload) {
  return luckdevAPI.get(`/api/v1/kudida/`)
}
function api_v1_kudida_create(payload) {
  return luckdevAPI.post(`/api/v1/kudida/`, payload)
}
function api_v1_kudida_retrieve(payload) {
  return luckdevAPI.get(`/api/v1/kudida/${payload.id}/`)
}
function api_v1_kudida_update(payload) {
  return luckdevAPI.put(`/api/v1/kudida/${payload.id}/`, payload)
}
function api_v1_kudida_partial_update(payload) {
  return luckdevAPI.patch(`/api/v1/kudida/${payload.id}/`, payload)
}
function api_v1_kudida_destroy(payload) {
  return luckdevAPI.delete(`/api/v1/kudida/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return luckdevAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return luckdevAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_login_create(payload) {
  return luckdevAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return luckdevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return luckdevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return luckdevAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return luckdevAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return luckdevAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return luckdevAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return luckdevAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return luckdevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return luckdevAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return luckdevAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_kudida_list,
  api_v1_kudida_create,
  api_v1_kudida_retrieve,
  api_v1_kudida_update,
  api_v1_kudida_partial_update,
  api_v1_kudida_destroy,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
