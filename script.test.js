const googleSearch = require('./script')

dbMock = [
    'dogs.com',
    'cereals.com',
    'sunglasses.com',
    'dogpictures.com'
]

it('this is a silly test', () => {
    expect('hello').toBe('hello')
})

it('is searching google', () => {
    expect(googleSearch('dog', dbMock))
        .toEqual(['dogs.com', 'dogpictures.com'])

})