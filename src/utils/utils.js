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
    let rand = min + Math.random() * (max + 1 - min)
    return Math.floor(rand)
}

export const updateProp = (persons, name, setPersons, newPropValue) => {
    let regex = /(?<=pass).*(?=\.)/
    let regexNameProp = /(?<=\.).*/

    let indexPerson = regex.exec(name)[0]
    let nameProp = regexNameProp.exec(name)[0]

    if (indexPerson > persons.length) {
        setPersons([...persons, {[nameProp]: newPropValue}])
    } else {
        setPersons(persons.map((item, index) => {
            if (index === indexPerson - 1) {
                const newObjProps = {
                    [nameProp]: newPropValue
                }
                return {...item, ...newObjProps}
            }
            return item
        }))
    }
}
