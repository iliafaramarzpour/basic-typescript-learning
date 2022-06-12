// Tuple
let constantUserData: [string, number, object] = [
  "ilia",
  09111111111,
  { name: "ilia", family: "faramarzpour" },
];

// Enum
enum USER_ROLE {
  ADMIN,
  FINANCIAL_ADMIN,
  SIMPLE_USER,
}

// console.log(USER_ROLE.ADMIN); // result : 0

// Use enum in types

let userRole: USER_ROLE = USER_ROLE.ADMIN;

// console.log(userRole); result : 0

// enum USER_ROLE {
//   ADMIN = 10,
//   FINANCIAL_ADMIN,
//   SIMPLE_USER,
// }

// console.log(USER_ROLE.ADMIN); // result : 10
// console.log(USER_ROLE.FINANCIAL_ADMIN); // result : 11
// console.log(USER_ROLE.SIMPLE_USER); // result : 12

// enum USER_ROLE {
//   ADMIN = "ADMIN",
//   FINANCIAL_ADMIN = "FINANCIAL_ADMIN",
//   SIMPLE_USER : "SIMPLE_USER",
// }

// console.log(USER_ROLE.ADMIN); // result : "ADMIN"
// console.log(USER_ROLE.FINANCIAL_ADMIN); // result : "FINANCIAL_ADMIN"
// console.log(USER_ROLE.SIMPLE_USER); // result : "SIMPLE_USER"
