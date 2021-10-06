import { compileBuildingProfile } from "../calculations/compilebuilding";

const DemoBuilding = (props) => {

  const areas = [
    {
      type: 'office',
      area: 20000
    },
    {
      type: 'retail',
      area: 100
    }

  ]
  const consumption_mmbtu = {
    gas: 50000,
    grid_elec: 120000,
    district_steam: 5302,
  };

  const buildingprofile = compileBuildingProfile({
    areas: areas,
    consumption: consumption_mmbtu,
  });

  return <div>{Object.keys(buildingprofile)}</div>;
};
export { DemoBuilding };
