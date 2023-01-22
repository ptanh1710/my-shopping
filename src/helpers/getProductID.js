export const getPokemonID = async (productId) => {
    try {
        const res = await fetch(
            `https://fakestoreapi.com/product/${productId}`,
        );
        const data = await res.json();

        return data;
    } catch (err) {
        console.error(err);
        return null;
    }
};
