const contactsContainer = document.querySelector(".contacts-lists");
const addNewContactBtn = document.querySelector(".add-contact");

let contactList = [
  {
    name: "Andrzej Duda",
    phoneNumber: "500 100 235",
  },
  {
    name: "Emanuel Macron",
    phoneNumber: "134 456 551",
  },
];

const renderContact = () => {
  contactsContainer.innerHTML = "";

  contactList.forEach((contact) => {
    let newContact = `
        <div class="contact">
            <div class="contact-info">
                <p>${contact.name}</p>
                <span>${contact.phoneNumber}</span>
            </div>
            <div class="remove-img-wrapper">
                <img alt="trash" src="/img/trash-bin.png"/>
            </div>
        </div>
    `;

    contactsContainer.innerHTML += newContact;
  });
};

renderContact();

addNewContactBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let nameInput = document.querySelector("#name");
  let phoneInput = document.querySelector("#phone-number");

  let newContact = {
    name: nameInput.value,
    phoneNumber: phoneInput.value,
  };

  contactList.push(newContact);

  nameInput.value = "";
  phoneInput.value = "";

  renderContact();
});

contactsContainer.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.tagName == "IMG") {
    let trashes = [...document.querySelectorAll(".remove-img-wrapper img")];
    let removeElement = trashes.indexOf(e.target);

    contactList = contactList.filter((e, idx) => {
      return idx != removeElement;
    });

    renderContact();
  }
});
