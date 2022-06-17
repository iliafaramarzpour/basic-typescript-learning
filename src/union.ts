enum STATUS {
  SUCCESS = 1,
  FAILED = 2,
}

function getStatus(statusCode: number): string | number {
  return STATUS[statusCode] ? statusCode : "چنین وضعیتی موجود نیست";
}

console.log(getStatus(1)); // 1
console.log(getStatus(3)); // "چنین وضعیتی موجود نیست"

let statusUsed: string = getStatus(5) as string;
statusUsed.concat(" google.com");
