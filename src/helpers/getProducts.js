export const getProducts = async () => {
    try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        return data;
    } catch (err) {
        console.error(err);
        return null;
    }
};
