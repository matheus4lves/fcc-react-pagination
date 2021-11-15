import faker from "faker";

faker.locale = "pt_BR";
faker.seed(1);

export default function generateUsers() {
  let users = [];

  for (let id = 1; id <= 1000; id++) {
    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    let email = faker.internet.email(firstName);
    let phone = faker.phone.phoneNumber();

    users.push({
      id,
      firstName,
      lastName,
      email,
      phone,
    });
  }

  return users;
}
