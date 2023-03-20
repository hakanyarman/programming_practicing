switch (new Date().getDay()) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    text = "bugün haftaiçi";
    break;
  default:
    text = "bugün haftasonu";
}
console.log(text);
