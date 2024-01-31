let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  let result = arr
    .map((val, i, arr) => val)
    .filter((item, i, arr) => item.name === "developer");
  console.log(result);
}

function PrintDeveloperbyForEach() {
  arr.forEach((val, i, arr) => {
    if (val.profession === "developer") {
      console.log(val);
    }
  });
}

function addData() {
  let result = arr.push({
    name: "xyz",
    age: "23",
    profession: "dev",
  });
  console.log(result);
}

function removeAdmin() {
  let filterData = arr.filter((val, i, arr) => val.profession === "dev");
  console.log(filterData);
}

function concatenateArray() {
  let obj1 = {
    name: "xyz",
  };
  let obj2 = {
    name: "abc",
  };
  let obj3 = {
    name: "xyz",
  };

  // Creating a new array with the three objects using .concat()
  const newArray = [].concat(obj1, obj2, obj3);

  console.log(newArray);
}
