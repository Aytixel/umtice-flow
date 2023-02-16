var style = document.createElement("style")

style.textContent = `
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

footer#page-footer {
    background-color: var(--dark-color) !important;
}

.progress {
    border: 0 !important;
    
    background-color: var(--light-color) !important;
}
`

document.head.append(style)

for (const link of [...document.querySelectorAll("#region-main a.aalink")]) {
    link.onclick = ""
    link.removeAttribute("onclick")
    link.href += "&redirect=1"
    link.target = "_blank"
}