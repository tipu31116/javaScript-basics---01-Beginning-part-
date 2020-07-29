const arr1=['I','love','programming'];
const arr2=['I','love','IOS and Android developement'];


const [index1,index2,index3]=arr1;//desturcturing
console.log(index1,index2,index3);
//rest operator
const [index5,...restValue]=arr2;
console.log(index5,restValue);


//rest operator of object
const developement={
    androidDeveloperName:'Tipu Sultan',
    androidDeveloperCourse:'react native',
    androidVersion:9.7,
    androidIsTrue:true,
    androidDevelopementRate:8.9,
};
const {androidDeveloperName,...restOfObject}=developement;
console.log(androidDeveloperName,restOfObject);
