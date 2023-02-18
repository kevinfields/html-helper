import makeValidSubject from "./makeValidSubject";

export default function makeEmailHREF(address, subject) {

  let subj = subject ? "?subject=" + makeValidSubject(subject) : '';
  return '<a href="mailto:' + address + subj + '">' + address + '</a>';
}