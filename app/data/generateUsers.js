import faker from "faker";

faker.locale = "pt_BR";

export default function generateUsers() {
  let users = [];

  for (let id = 1; id <= 1000; id++) {
    let first_name = faker.name.firstName();
    let last_name = faker.name.lastName();
    let email = faker.internet.email(first_name);
    let phone = faker.phone.phoneNumber();

    users.push({
      id: id,
      first_name: first_name,
      last_name: last_name,
      email: email,
      phone: phone,
    });
  }

  return users;
}
