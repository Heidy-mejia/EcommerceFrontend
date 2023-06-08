

export const getProducts = async () => {

    const baseUrl = import.meta.env.VITE_API_URL;
    const pants = import.meta.env.VITE_API_URL_PANTS;
    

    const response = await fetch(`${baseUrl}/${pants}`);
    const products = await response.json();

    return products;
}
//Funciones para camisas

export const getProductsShirts = async () => {

    const baseUrl = import.meta.env.VITE_API_URL;
  
    

    const response = await fetch(`${baseUrl}/shirt`);
    const products = await response.json();

    return products;
}
//Funciones para faldas

export const getProductsSkirts= async () => {

    const baseUrl = import.meta.env.VITE_API_URL;
  
    

    const response = await fetch(`${baseUrl}/skirts`);
    const products = await response.json();

    return products;
}

// funciones para zapatos
export const postProductShoes = async (data: any) => {
    const baseUrl = import.meta.env.VITE_API_URL;
   

    const response = await fetch(`${baseUrl}/shoes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const product = await response.json();

    return product;
}
//Funciones para Zapatos

export const getProductsShoes = async () => {

    const baseUrl = import.meta.env.VITE_API_URL;
  
    

    const response = await fetch(`${baseUrl}/shoes`);
    const products = await response.json();

    return products;
}

//Funciones para vestidos

export const getProductsDresses= async () => {

    const baseUrl = import.meta.env.VITE_API_URL;
  
    

    const response = await fetch(`${baseUrl}/dresses`);
    const products = await response.json();

    return products;
}


export const getProduct = async (id: string) => {

    const baseUrl = import.meta.env.VITE_API_URL;
    const pants = import.meta.env.VITE_API_URL_PANTS;

    const response = await fetch(`${baseUrl}/${pants}/${id}`);
    const product = await response.json();

    return product;
}
//funciones para camisas
export const getProductsShirt = async (id: string) => {

    const baseUrl = import.meta.env.VITE_API_URL;
    

    const response = await fetch(`${baseUrl}/shirt`);
    const product = await response.json();

    return product;
}
//funciones para vestidos
export const getProductsDress = async (id: string) => {

    const baseUrl = import.meta.env.VITE_API_URL;
    

    const response = await fetch(`${baseUrl}/dresses`);
    const product = await response.json();

    return product;
}



export const postProduct = async (data: any) => {
    const baseUrl = import.meta.env.VITE_API_URL;
    const pants = import.meta.env.VITE_API_URL_PANTS;

    const response = await fetch(`${baseUrl}/${pants}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const product = await response.json();

    return product;
}
// funciones para camisas
export const postProductShirt = async (data: any) => {
    const baseUrl = import.meta.env.VITE_API_URL;
   

    const response = await fetch(`${baseUrl}/shirt`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const product = await response.json();

    return product;
}

// funciones para vestidos
export const postProductDresses = async (data: any) => {
    const baseUrl = import.meta.env.VITE_API_URL;
   

    const response = await fetch(`${baseUrl}/dresses`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const product = await response.json();

    return product;
}