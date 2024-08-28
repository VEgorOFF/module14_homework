const parser = new DOMParser();

const xmlString = `
  <list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const listDom = xmlDOM.querySelector("list");
const studentNode = listDom.querySelectorAll("student");

studentNode.forEach((item) => {
  const nameNode = item.querySelector("name");
  const firstName = nameNode.querySelector("first").textContent;
  const secondName = nameNode.querySelector("second").textContent;
  const ageNode = item.querySelector("age").textContent;
  const profNode = item.querySelector("prof").textContent;
  const langAttr = nameNode.getAttribute("lang");

  const result = {
    name: `${firstName} ${secondName}`,
    age: ageNode,
    prof: profNode,
    lang: langAttr,
  };
  console.log("result", result);
});
