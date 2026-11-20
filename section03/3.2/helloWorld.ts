export {};

function helloWorld(): void {
  console.log("Hello World");
  helloNode();
}

function helloNode(): void {
  console.log("Hello Node");
}

helloWorld();
