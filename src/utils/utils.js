export const updateObjectInArray = (items, itemId, objPropName, objChangePropName) => {
    return items.map(item => {
        if (item[objPropName] === itemId) {
            const newObjProps = {
                deleteMarked: !item[objChangePropName]
            }
            return {...item, ...newObjProps}
        }
        return item
    })
}

export const randomInteger = (min, max) => {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}
