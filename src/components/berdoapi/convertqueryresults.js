

import convertBuildingType from "./convertbuildingtype"


/* 
ASSUMPTIONS IN DATASET CONVERSION:
- no input for multiple fuel oils... assume BERDO Input Number Two
- no 'district chw' input in BERDO calcs. assuming elec driven.
- no '% Other (Diesel #2, Kerosene, Propane or Other Fuel)' input in BERDO calcs. Assume diesel.
- other conversion lookups to be found in convertBuildingType
*/

const convertQueryResults = (results) => {
    let area = +results['Gross Area (sq ft)']
    let type = convertBuildingType(results['Property Type'])

    let name = results['Property Name'] + ' - ' + results['Address']

    let total_mmbtu = +results['Total Site Energy (kBTU)'] / 1e3

    let elec_mmbtu = total_mmbtu * +results['% Electricity']
    let gas_mmbtu = total_mmbtu * +results['% Gas']
    let district_chw_mmbtu = total_mmbtu * +results['% District Chilled Water']
    let district_hw_mmbtu = total_mmbtu * +results['% District Hot Water']
    let steam_mmbtu = total_mmbtu * +results['% Steam']
    let fuel_oil_two_mmbtu = total_mmbtu * +results['% Fuel Oil']
    let other_mmbtu = total_mmbtu * +results['% Other (Diesel #2, Kerosene, Propane or Other Fuel)']


    let areas = [
        {
            type: type,
            area: area,
            index: 0
        }
    ]

    let consumption = {
        gas: gas_mmbtu || 0,
        fuel_1: 0,
        fuel_2: fuel_oil_two_mmbtu || 0,
        fuel_4: fuel_oil_two_mmbtu || 0,
        diesel: other_mmbtu || 0,
        district_steam: steam_mmbtu || 0,
        district_hot_water: district_hw_mmbtu || 0,
        elec_driven_chiller: district_chw_mmbtu || 0,
        absorption_chiller_gas: 0,
        engine_driven_chiller_gas: 0,
        grid_elec: elec_mmbtu || 0,
    }



    return {
        areas: areas,
        consumption: consumption,
        name: name
    }
}


export { convertQueryResults }


