

function intersection(arr1, arr2) {
    let resultSet = [];

    for ( let i = 0;i<arr1.length; i++) {
        let eachElement = arr1[i];
         if(arr2.includes(eachElement)) {
            let duplicateCheck = resultSet.includes(eachElement);
            if(duplicateCheck === false){
                resultSet.push(eachElement)
            }
         }
    }
    return resultSet;
}

console.log(`Scenario-1 : No Common Elements in both arrays. arr1[1,2,3] and arr2[4,5,6]. The Output is: `,intersection([1,2,3],[4,5,6]));
console.log(`Scenario-2 : Both the arrays are same. arr1[1,2,3] and arr2[1,2,3]. The Output is: `,intersection([1,2,3],[1,2,3]));
console.log(`Scenario-3 : Common element present along with duplicates. arr1[1,2,3,3] and arr2[2,3,3,5]. The Output is: `,intersection([1,2,3,3],[2,3,3,5]));
console.log(`Scenario-4 : Common Elements present in both arrays. arr1[1,2,3] and arr2[3,4,5]. The Output is: `,intersection([1,2,3],[3,4,5]));