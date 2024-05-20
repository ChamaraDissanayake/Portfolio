export function scrollToElementById(id: string) {

    setTimeout(() => {
        let element = document.getElementById(id);
        element.scrollIntoView({ behavior: "smooth", block: 'start' });
    });
}