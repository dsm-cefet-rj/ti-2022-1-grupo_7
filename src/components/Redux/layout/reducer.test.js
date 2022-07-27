import reducer from "./layout";

describe('Layout Reducer', () => {
    test('deve retornar o state inicial', () => {
        expect(reducer(undefined, {})).toEqual({ showMessage: false })
    }),

    test('deve retornar o state inicial', () => {
        expect(reducer(undefined, {})).toEqual({ showMessage: false })
    })
});
