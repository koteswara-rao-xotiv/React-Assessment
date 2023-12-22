
async function formatResponse(response) {
    let result = [];
Object.values(response.record).forEach((each) => {
let matchedObj = result.find(({section}) => section === each?.section);
if(matchedObj) {
matchedObj.data.push( {
        label: each.label,
        amount: each.amount,
        key: each.key,
        isEditing: false
})
} else {
    result.push({
        section: each.section,
        data: [{
            label: each.label,
            amount: each.amount,
            key: each.key,
            isEditing: false
        }]
    })
}
})

return result;
}

export { formatResponse }