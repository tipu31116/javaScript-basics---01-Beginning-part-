function Dept(

    personName,
    personRoll,
    personAge,
    personBatch,
    personReadd,
    personCGPA,
    personLocal,
)
{
    this.personName=personName
    this.personRoll=personRoll
    this.personAge=personAge
    this.personBatch=personBatch
    this.personReadd=personReadd
    this.personCGPA=personCGPA
    this.personLocal=personLocal
}
Dept.prototype.showAllStudentInfo=function(){
    return `${personName} - ${this.personRoll} - ${personAge} -${personBatch} - ${personReadd} - ${personCGPA} - ${personLocal}`

}
const student1=new Dept('Romel',11708001,23,'9th','No',3.45,true);
const student2=new Dept('Chadon',11708002,24,'9th','NO',3.23,false);

console.log(student1);
console.log(student2);