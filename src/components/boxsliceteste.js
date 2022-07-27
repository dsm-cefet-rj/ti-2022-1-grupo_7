const INITIAL_STATE = [
    {
        "id": 1,
        "nomeProduto":"Calça Verde",
        "descProduto":"Calça muito verde, tão verde que se camufla em árvores de todo o deserto",
        "tamanho":"P",
        "categoria":"Calça",
        "preco": 249.99
        },
        {
        "id": 2,
        "nomeProduto":"Calça Verde",
        "descProduto":"Calça muito verde, tão verde que se camufla em árvores de todo o deserto",
        "tamanho":"P",
        "categoria":"Calça",
        "preco": 249.99
        },
        {
        "id": 3,
        "nomeProduto":"Calça Verde",
        "descProduto":"Calça muito verde, tão verde que se camufla em árvores de todo o deserto",
        "tamanho":"P",
        "categoria":"Calça",
        "preco": 249.99
        },
        {
        "id": 4,
        "nomeProduto":"Calça Verde",
        "descProduto":"Calça muito verde, tão verde que se camufla em árvores de todo o deserto",
        "tamanho":"P",
        "categoria":"Calça",
        "preco": 249.99
        },
        {
        "id": 5,
        "nomeProduto":"Calça Verde",
        "descProduto":"Calça muito verde, tão verde que se camufla em árvores de todo o deserto",
        "tamanho":"P",
        "categoria":"Calça",
        "preco": 249.99
        },
        {
        "id": 6,
        "nomeProduto":"Calça Verde",
        "descProduto":"Calça muito verde, tão verde que se camufla em árvores de todo o deserto",
        "tamanho":"P",
        "categoria":"Calça",
        "preco": 249.99
        },
        {
        "id": 7,
        "nomeProduto":"Calça Verde",
        "descProduto":"Calça muito verde, tão verde que se camufla em árvores de todo o deserto",
        "tamanho":"P",
        "categoria":"Calça",
        "preco": 249.99
        },
        {
        "id": 8,
        "nomeProduto":"Calça Verde",
        "descProduto":"Calça muito verde, tão verde que se camufla em árvores de todo o deserto",
        "tamanho":"P",
        "categoria":"Calça",
        "preco": 249.99
        }
];

// export default function reducer(state = INITIAL_STATE, action) {
//     return state;
// }

export default function reducer(state = INITIAL_STATE, action) {
    if(action.type =='ADD_BOX ') {
        return [ ...state, action.box ];
    }
    return state;
}

export const addBox = box => {
    return {
        type: 'ADD_BOX',
        box
    }
}