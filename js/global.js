var style = document.createElement("style")

style.textContent = `
/*
    Background
*/
.bg-white,
.bg-light {
    background-color: var(--light-theme-color) !important;
}

/*
    Navbar
*/
.navbar {
    background-color: var(--accent-color) !important;
}

.navbar .usermenu .icon,
.navbar-dark a .icon {
    color: inherit !important;
}

.navbar .dropdown-item:hover {
    color: var(--light-color) !important;
}

.navbar .notification a {
    color: var(--dark-theme-color) !important;
}

/*
    Footer
*/
footer#page-footer {
    background-color: var(--dark-color) !important;
}

/*
    Progress bar
*/
.progress {
    border: 0 !important;
    
    background-color: var(--light-color) !important;
}

/*
    Message
*/
[data-region="message-drawer"],
[data-region="right-hand-drawer"] {
    background-color: transparent !important;
}

[data-region="message-drawer"],
[data-region="emoji-picker-container"] {
    background-color: var(--light-theme-transparent-color) !important;

    box-shadow: 0.1em 0.1em 0.6em -0.45em var(--shadow-theme-color) !important;

    backdrop-filter: blur(0.4em) !important;
}

[data-region="view-conversation"] .btn {
    background-color: var(--light-theme-color) !important;
}
`

document.head.append(style)

for (const link of [...document.querySelectorAll("#region-main a.aalink")]) {
    link.onclick = ""
    link.removeAttribute("onclick")
    link.href += "&redirect=1"
    link.target = "_blank"
}

if (localStorage.getItem("selected_theme")?.length) document.documentElement.classList.add(localStorage.getItem("selected_theme"))

const theme_selector = document.createElement("select")

for (const selector_option of ["auto", "light", "dark"]) {
    const selector_option_element = document.createElement("option")

    selector_option_element.value = selector_option
    selector_option_element.textContent = selector_option

    if (selector_option == localStorage.getItem("selected_theme")) selector_option_element.setAttribute("selected", "")

    theme_selector.append(selector_option_element)
}

theme_selector.id = "theme_selector"
theme_selector.classList.add("custom-select")
theme_selector.addEventListener("change", () => {
    const selected_theme = theme_selector.value.replace("auto", "")

    document.documentElement.classList.remove("light", "dark")

    if (selected_theme.length) document.documentElement.classList.add(selected_theme)

    localStorage.setItem("selected_theme", selected_theme)
})

const theme_selector_container = document.createElement("div")

theme_selector_container.insertAdjacentHTML("beforeend", `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/></svg>`)
theme_selector_container.append("Theme :")
theme_selector_container.append(theme_selector)
theme_selector_container.id = "theme_selector_container"

document.body.getElementsByTagName("footer")[0].append(theme_selector_container)