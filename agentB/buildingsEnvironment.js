import {getThreeAccess} from "./threeDRenderScript.js";
import * as THREE from "./three.module.min.js"
import {OBJLoader} from "./OBJLoader.js"

export const buildings = () =>{
    // building_init("set1/large_buildingC.glb" , [10,10,10] , [5, -5 ,-50]);
    // building_init("set1/large_buildingD.glb" , [10,10,10] , [20, -5 ,-10]);
    // building_init("set1/large_buildingG.glb" , [10,10,10] , [-15, -5 ,-50]);
    // building_init("set1/skyscraperD.glb" , [10,10,10] , [35, -5 ,-50]);
    // building_init("set1/skyscraperC.glb" , [10,10,10] , [5, -5 ,-80]);
    // building_init("set1/skyscraperE.glb" , [10,10,10] , [40, -5 ,-80]);
    // building_init("set1/skyscraperB.glb" , [10,10,10] , [-20, -5 ,-70]);

    // building_init("set1/large_buildingA.glb" , [10,10,10] , [5, -5 ,20]);
    // building_init("set1/large_buildingC.glb" , [10,10,10] , [55, -5 ,10]);
    // building_init("set1/large_buildingD.glb" , [10,10,10] , [50, -5 , 0]);
    // building_init("set1/large_buildingG.glb" , [10,10,10] , [5, -5 ,50]);
    // building_init("set1/skyscraperD.glb" , [10,10,10] , [75, -5 ,50]);
    // building_init("set1/skyscraperC.glb" , [10,10,10] , [65, -5 ,60]);
    // building_init("set1/skyscraperE.glb" , [10,10,10] , [80, -5 ,60]);
    // building_init("set1/skyscraperA.glb" , [10,10,10] , [80, -5 ,40]);
    // building_init("set1/skyscraperB.glb" , [10,10,10] , [80, -5 ,20]);
    // building_init("set1/skyscraperE.glb" , [10,10,10] , [80, -5 ,0]);
    // building_init("set1/skyscraperA.glb" , [10,10,10] , [80, -5 ,-20]);
    // building_init("set1/skyscraperB.glb" , [10,10,10] , [80, -5 ,-40]);
    building_init("earth.obj" , [10,10,10] , [0, 0 ,0]);


}

const building_init = (pathName , scaleArray , positionArray) =>{
    const threeAccess = getThreeAccess();

    //load 3d environment
    const loader = new OBJLoader();
    loader.load(
        `./assets/${pathName}`, // Replace with the actual path
        (object) => {
            object.scale.set(...scaleArray); // Scale the model
            object.position.set(...positionArray); // Scale the model
            threeAccess.scene.add(object); // Add the loaded model to the scene
            console.log("Model loaded successfully!");
        },
        (xhr) => {
            console.log(`Loading: ${(xhr.loaded / xhr.total) * 100}%`); // Loading progress
        },
        (error) => {
            console.error("Error loading model:", error);
        }
    );
    //load 3d environment

}