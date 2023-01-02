function compareArrays(arr1, arr2) {
  if (arr1.length === arr2.length) {
    if (arr1.every((item, index) => item === arr2[index])){
      return true;
    }
  }
  return false;
}

function getUsersNamesInAgeRange(users, gender) {
  return users.filter(user => user.gender === gender).reduce((acc, user, index, arr) => {
    acc += user.age;
    if (index === arr.length - 1) {
      return acc / arr.length;
    }
    return acc;
  }, 0);
}