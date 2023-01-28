import { HTTPError } from "./error"
describe('Given HTTPError', () => { 
    test('HTTP error must be intanciated and have many properties', () => { 
        const error = new HTTPError(400,'statusMenssage','menssage', {})
        expect(error).toBeInstanceOf(HTTPError)
        expect(error).toHaveProperty('statusCode', 400)
        expect(error).toHaveProperty('statusMessage', 'statusMenssage')
        expect(error).toHaveProperty('message', 'menssage')
    }) 
})
