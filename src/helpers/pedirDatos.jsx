import stock from "../data/MOCK_DATA.json"

export const pedirDatos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(stock);
        }, 500);
    });
}