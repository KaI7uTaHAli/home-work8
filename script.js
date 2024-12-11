// 1st Task
let firstName = "Султан";
let lastName = "Амангельдиев";
let age = 30;
console.log(`Меня зовут ${firstName} ${lastName}, и мне ${age} лет`);

// 2nd Task
let city = "Астана";
console.log("Я родом из города " + city);

// 3rd Task
let password = "mySecurePassword";
let hasAccess = password !== "";
console.log("Password:", password);
console.log("Has access:", hasAccess);

// 4th Task
let isMember = false;
let isMemberString = isMember.toString();
console.log("Is member (string):", isMemberString, "Type:", typeof isMemberString);

// 5th Task
let cartItems = 0;
let isCartEmpty = Boolean(cartItems);
console.log("Is cart empty:", isCartEmpty);

// 6th Task
let averageScore = 89.75695;
averageScore = Number(averageScore.toFixed(1));
console.log("Average score (rounded):", averageScore);

// 7th Task
let greetingMessage = "      Приветствуем вас в мире программирования!        ";

// 8th Task
let trimmedMessage = greetingMessage.trim();
console.log("Trimmed message:", trimmedMessage);

// 9th Task
let upperCaseMessage = trimmedMessage.toUpperCase();
console.log("Uppercase message:", upperCaseMessage);

// 10th Task
let containsProgramming = trimmedMessage.includes("программирования");
console.log("Contains 'программирования':", containsProgramming);
