const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

// -------------------------------
// ITERATION 0 EXAMPLE (given):
// -------------------------------
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);
const randomContact = splicedArr[0];

const exampleRow = document.createElement("tr");
exampleRow.innerHTML = `
  <td>
    <img src="${randomContact.pictureUrl}" />
  </td>
  <td> ${randomContact.name} </td>
  <td> ${randomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;
tableBody.appendChild(exampleRow);

// -------------------------------
// ITERATION 1 | Display 3 Contacts
// -------------------------------
const threeContacts = contacts.splice(0, 3);

threeContacts.forEach((contact) => {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>
      <img src="${contact.pictureUrl}" />
    </td>
    <td>${contact.name}</td>
    <td>${contact.popularity.toFixed(2)}</td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `;

  // -------------------------------
  // ITERATION 2 | Delete Buttons
  // -------------------------------
  const deleteBtn = newRow.querySelector(".btn-delete");
  deleteBtn.addEventListener("click", () => {
    newRow.remove();
  });

  tableBody.appendChild(newRow);
});
