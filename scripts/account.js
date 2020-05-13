const sign_up = document.querySelector(".sign_up");
sign_up.addEventListener("click", formSign);
const log_in = document.querySelector(".log_in");
log_in.addEventListener("click", formLog);
const forgot = document.querySelector(".link");
forgot.addEventListener("click", formForgot);

const window_sign_up = document.querySelector(".form_control_sign_up");
const window_log_in = document.querySelector(".form_control_log_in")
const window_forgot = document.querySelector(".form_control_forgot")
const window_account = document.querySelector(".account")

function formSign() {
        window_sign_up.classList.remove("hidden");
        window_log_in.classList.add("hidden")
        window_forgot.classList.add("hidden")
}
function formLog() {
        window_log_in.classList.remove("hidden");
        window_sign_up.classList.add("hidden")
        window_forgot.classList.add("hidden")
}
function formForgot() {
        window_forgot.classList.remove("hidden", "secret");
        window_log_in.classList.add("hidden");
        window_sign_up.classList.add("hidden");
        window_account.classList.add("hidden");
}