// 커맨드 라인 인자로 전달된 JSON 문자열을 파싱
const variables = JSON.parse(process.argv[2]);

// 변수 출력
console.log("Received variables Script2:");
console.log(`Name: ${variables.name}`);
console.log(`Age: ${variables.age}`);
console.log(`City: ${variables.city}`);

// 추가적인 로직 수행
const greeting = `Hello, ${variables.name} from ${variables.city}!`;
console.log(greeting);
