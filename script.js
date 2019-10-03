const googleDataBase = [
    'cats.com',
    'souprecipes.com',
    'flowers.com',
    'animals.com',
    'catphotos.com',
    'myfavoritecats.com'
];

const googleSearch = (searchInput, db) => {
    const matches = db.filter((website) => {
        return website.includes(searchInput)
    })
    return matches.length < 3 ? matches.slice(0, 3) : matches;
}
//console.log(googleSearch('cat', googleDataBase));

module.exports = googleSearch;