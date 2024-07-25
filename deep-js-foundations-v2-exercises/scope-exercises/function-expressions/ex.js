const printRecords = (recordIds) => {
  // TODO
  const data = studentRecords
    .reduce((acc, curr) => {
      if (recordIds.indexOf(curr.id) >= 0) {
        acc.push(curr);
      }
      return acc;
    }, [])
    .sort((a, b) => (a.name > b.name ? 1 : -1));

  for (let item of data) {
    console.log(
      `${item.name} (${item.id}): ${item.paid ? "Paid" : "Not Paid"}`
    );
  }
};

const paidStudentsToEnroll = () => {
  // TODO
  const result = studentRecords
    .filter((student) => student.paid)
    .reduce(
      (acc, curr) => {
        if (acc.indexOf(curr.id) < 0) {
          acc.push(curr.id);
        }
        return acc;
      },
      [...currentEnrollment]
    );

  return result;
};

const remindUnpaid = (recordIds) => {
  // TODO
  const data = studentRecords.reduce((acc, curr) => {
    if (recordIds.indexOf(curr.id) >= 0 && !curr.paid) {
      acc.push(curr.id);
    }
    return acc;
  }, []);
  printRecords(data);
};

// ********************************

var currentEnrollment = [410, 105, 664, 375];

var studentRecords = [
  { id: 313, name: "Frank", paid: true },
  { id: 410, name: "Suzy", paid: true },
  { id: 709, name: "Brian", paid: false },
  { id: 105, name: "Henry", paid: false },
  { id: 502, name: "Mary", paid: true },
  { id: 664, name: "Bob", paid: false },
  { id: 250, name: "Peter", paid: true },
  { id: 375, name: "Sarah", paid: true },
  { id: 867, name: "Greg", paid: false },
];

printRecords(currentEnrollment);
console.log("----");
currentEnrollment = paidStudentsToEnroll();
printRecords(currentEnrollment);
console.log("----");
remindUnpaid(currentEnrollment);

/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/
