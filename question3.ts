//3. Remove Duplicate Test Cases 
let ids: number[] = [101, 102, 103, 101, 104, 102, 105, 103];

let uniqueIds = ids.filter((id, index) => {
    return ids.indexOf(id) === index;
});

console.log(uniqueIds);
//
