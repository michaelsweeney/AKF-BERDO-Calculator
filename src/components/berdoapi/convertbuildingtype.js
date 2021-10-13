

const BUILDING_TYPE_CONVERSIONS = {

}


const convertBuildingType = (input) => {
    if (input in BUILDING_TYPE_CONVERSIONS) {
        return BUILDING_TYPE_CONVERSIONS[input]
    }
    else {
        return "office"
    }
}

export default convertBuildingType