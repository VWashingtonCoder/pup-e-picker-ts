export const baseUrl = "http://localhost:3000";

export const Requests = {
  getAllDogs: () => {
    return fetch(`${baseUrl}/dogs`)
      .then((res) => res.json())
      .catch((err) => console.log(err));
  },

  // should create a dog in the database from a partial dog object
  // and return a promise with the result
  postDog: () => {},

  deleteDog: (id: number) => {
    return fetch(`${baseUrl}/dogs/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  },

  updateDog: (id: number, isFavorite: boolean) => {
    return fetch(`${baseUrl}/dogs/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isFavorite }),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  },

  // Just a dummy function for use in the playground
  dummyFunction: () => {
    console.log("dummy stuff");
  },
};
