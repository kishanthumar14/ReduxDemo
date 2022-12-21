export const getAllUsers = () => {
  const requestOptions = {
    method: "GET",
    headers: { Authorization: localStorage.token },
  };

  return fetch(`http://localhost:3000/posts`, requestOptions);
};

export const createPets = (DATA) => {
  console.log(DATA, "DATA");
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(DATA),
  };
  return fetch(`http://localhost:3000/posts`, requestOptions);
};

export const deltePets = (DATA) => {
  console.log(DATA, "DATA");
  let _id = DATA.id;
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(DATA),
  };
  return fetch(`http://localhost:3000/posts/${_id}`, requestOptions);
};

export const editPets = (DATA) => {
  let _id = DATA.id;
  const requestOptions = {
    method: "GET",
    headers: { Authorization: localStorage.token },
  };
  return fetch(`http://localhost:3000/posts/${_id}`, requestOptions);
};

export const updatePets = (DATA) => {
  console.log(DATA, "DATA");
  let _id = DATA.id;
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(DATA),
  };
  return fetch(`http://localhost:3000/posts/${_id}`, requestOptions);
};
