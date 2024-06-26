function jwtDecode(token) {
  try {
    // Перевірка, що токен є рядком і має три частини, розділені крапками
    if (typeof token !== "string" || token.split(".").length !== 3) {
      return undefined;
    }

    // Розділяємо токен на три частини
    const parts = token.split(".");

    // Виділяємо середню частину
    const middlePart = parts[1];

    // Розкодовуємо середню частину з кодування Base64
    const decodedBase64 = atob(middlePart);

    // Парсимо JSON
    const json = JSON.parse(decodedBase64);

    // Повертаємо розкодовані дані
    return json;
  } catch (error) {
    // У випадку помилки повертаємо undefined
    return undefined;
  }
}

// Приклади використання
function Testtoken1() {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOiI2MzIyMDVhZWI3NGUxZjVmMmVjMWEzMjAiLCJsb2dpbiI6InRlc3Q0NTciLCJhY2wiOlsiNjMyMjA1YWViNzRlMWY1ZjJlYzFhMzIwIiwidXNlciJdfSwiaWF0IjoxNjY4MjcyMTYzfQ.rxV1ki9G6LjT2IPWcqkMeTi_1K9sb3Si8vLB6UDAGdw";
  console.log(jwtDecode(token));
  //{
  //  "sub": {
  //    "id": "632205aeb74e1f5f2ec1a320",
  //    "login": "test457",
  //    "acl": [
  //      "632205aeb74e1f5f2ec1a320",
  //      "user"
  //    ]
  //  },
  //  "iat": 1668272163
  //}

  try {
    console.log(jwtDecode()); // undefined
    console.log(jwtDecode("дічь")); // undefined
    console.log(jwtDecode("ey.ey.ey")); // undefined

    console.log(
      "до сюди допрацювало, а значить jwtDecode не матюкався в консоль червоним кольором"
    );
  } finally {
    console.log("ДЗ, мабуть, закінчено");
  }
}

export { jwtDecode, Testtoken1 };
