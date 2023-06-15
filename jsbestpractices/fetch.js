//concepts covered:
//concurrency Async operation using Promise.all()
//code reusability
//destructuring Objects/Arrays

//step 1:
// import axios from "axios";

// const fetchUserDetails = async () => {
//   const start = new Date().getTime();
//   const user1 = await axios.get("https://jsonplaceholder.typicode.com/users/1");
//   const user2 = await axios.get("https://jsonplaceholder.typicode.com/users/2");
//   const user3 = await axios.get("https://jsonplaceholder.typicode.com/users/3");

//   const result = [];
//   result.push =
//     ({
//       id: user1?.data?.id,
//       name: user1?.data?.name,
//       city: user1?.data?.address?.city,
//     },
//     {
//       id: user2?.data?.id,
//       name: user2?.data?.name,
//       city: user2?.data?.address?.city,
//     },
//     {
//       id: user3?.data?.id,
//       name: user3?.data?.name,
//       city: user3?.data?.address?.city,
//     });
//   console.log((new Date().getTime() - start) / 1000, " Seconds Taken");
//   return result;
// };

// fetchUserDetails().then((data) => console.log(data));

// //================================================================================
// //step 2

// import axios from "axios";

// const fetchUserDetails = async () => {
//   const start = new Date().getTime();
//   let user1 = axios.get("https://jsonplaceholder.typicode.com/users/1");
//   let user2 = axios.get("https://jsonplaceholder.typicode.com/users/2");
//   let user3 = axios.get("https://jsonplaceholder.typicode.com/users/3");
//   //Destructuring an array
//   [user1, user2, user3] = await Promise.all([user1, user2, user3]);

//   const result = [];
//   result.push =
//     ({
//       id: user1?.data?.id,
//       name: user1?.data?.name,
//       city: user1?.data?.address?.city,
//     },
//     {
//       id: user2?.data?.id,
//       name: user2?.data?.name,
//       city: user2?.data?.address?.city,
//     },
//     {
//       id: user3?.data?.id,
//       name: user3?.data?.name,
//       city: user3?.data?.address?.city,
//     });
//   console.log((new Date().getTime() - start) / 1000, " Seconds Taken");
//   return result;
// };

// fetchUserDetails().then((data) => console.log(data));

// //================================================================================
// //step 3
// //cleanup

// import axios from "axios";

// const fetchUserDetails = async () => {
//   const start = new Date().getTime();
//   const userIds = [1, 2, 3];
//   const requests = userIds.map((id) =>
//     axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
//   );

//   const [user1, user2, user3] = await Promise.all(requests);

//   const result = [];
//   result.push =
//     ({
//       id: user1?.data?.id,
//       name: user1?.data?.name,
//       city: user1?.data?.address?.city,
//     },
//     {
//       id: user2?.data?.id,
//       name: user2?.data?.name,
//       city: user2?.data?.address?.city,
//     },
//     {
//       id: user3?.data?.id,
//       name: user3?.data?.name,
//       city: user3?.data?.address?.city,
//     });
//   console.log((new Date().getTime() - start) / 1000, " Seconds Taken");
//   return result;
// };

// fetchUserDetails().then((data) => console.log(data));

// //================================================================================
// //step 4
// //cleanup

// import axios from "axios";

// const fetchUserDetails = async () => {
//   const start = new Date().getTime();
//   const userIds = [1, 2, 3];
//   const requests = userIds.map((id) =>
//     axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
//   );

//   const responses = await Promise.all(requests);
//   const result = [];
//   responses.forEach((response) => {
//     result.push({
//       id: response?.data?.id,
//       name: response?.data?.name,
//       city: response?.data?.address?.city,
//     });
//   });

//   console.log((new Date().getTime() - start) / 1000, " Seconds Taken");
//   return result;
// };

// fetchUserDetails().then((data) => console.log(data));

// //================================================================================
// //step 4
// //destructuring

// import axios from "axios";

// const fetchUserDetails = async () => {
//   const start = new Date().getTime();
//   const userIds = [1, 2, 3];
//   const requests = userIds.map((id) =>
//     axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
//   );

//   const responses = await Promise.all(requests);
//   const result = [];
//   responses.forEach((response) => {
//     const { data } = response;
//     result.push({
//       id: data?.id,
//       name: data?.name,
//       city: data?.address?.city,
//     });
//   });

//   console.log((new Date().getTime() - start) / 1000, " Seconds Taken");
//   return result;
// };

// fetchUserDetails().then((data) => console.log(data));

//================================================================================
//step 5
//destructuring

// import axios from "axios";

// const fetchUserDetails = async () => {
//   const start = new Date().getTime();
//   const userIds = [1, 2, 3];
//   const requests = userIds.map((id) =>
//     axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
//   );

//   const responses = await Promise.all(requests);
//   const result = [];
//   responses.forEach((response) => {
//     //destructuring
//     const {
//       data: {
//         id,
//         name,
//         address: { city },
//       },
//     } = response;
//     result.push({
//       id,
//       name,
//       city,
//     });
//   });

//   console.log((new Date().getTime() - start) / 1000, " Seconds Taken");
//   return result;
// };

// fetchUserDetails().then((data) => console.log(data));

//==================================================================
//this provided by chatgpt

import axios from "axios";

const fetchUserDetails = async () => {
  const start = Date.now();
  const userIds = [1, 2, 3];

  const responses = await Promise.all(
    userIds.map((id) =>
      axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    )
  );

  const result = responses.map(
    ({
      data: {
        id,
        name,
        address: { city },
      },
    }) => ({
      id,
      name,
      city,
    })
  );

  console.log(`${(Date.now() - start) / 1000} Seconds Taken`);
  return result;
};

fetchUserDetails().then(console.log);
