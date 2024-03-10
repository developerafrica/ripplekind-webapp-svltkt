/** @type {import('./$types').PageServerLoad} */
export async function load() {
    return {
        data : "hello",
        verison : "0.0.1",
        details : []
    };
};