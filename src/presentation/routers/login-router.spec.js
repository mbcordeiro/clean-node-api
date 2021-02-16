class LoginRouter {
    route () {
        if (!httpRequest.body.email || !httpRequest.body.password) { 
            return {
                statusCode: 400
            }
        }
    }
}

describe('LoginRouter', () => {
    test('Should return 400 if no email is provided', () => {
        const sut = new loginRouter();
        const httpRequest = {
            body : {
                password: 'any_password'
            }
        }
        const httpResponse = sut.routr(httpRequest)
        expect(httpResponse.statusCode).toBe(400)
    })

    test('Should return 400 if no password is provided', () => {
        const sut = new loginRouter();
        const httpRequest = {
            body : {
                email: 'any_email@email.com'
            }
        }
        const httpResponse = sut.routr(httpRequest)
        expect(httpResponse.statusCode).toBe(400)
    })
})