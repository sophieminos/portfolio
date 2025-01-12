// Fonction utilitaire pour convertir la date JSON
export function parseProjectDate(date) {
    const parts = date.split("/");
    const month = parts[0] === "x" ? new Date().getMonth() : parseInt(parts[0], 10) - 1;
    const year = parseInt(parts[1], 10);
    return new Date(year, month);
}
  
// Fonction pour formater les dates
export function formatDate(date) {
    if (date.startsWith("x/")) {
        const now = new Date();
        return new Intl.DateTimeFormat("en-US", { year: "numeric", month: "long" }).format(new Date(now.getFullYear(), now.getMonth()));
    }
    const [month, year] = date.split("/");
    return new Intl.DateTimeFormat("en-US", { year: "numeric", month: "long" }).format(new Date(year, month - 1));
}
