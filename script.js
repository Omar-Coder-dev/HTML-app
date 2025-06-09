const questions = [
  {
    question: "1. What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language"
    ],
    answer: 0
  },
  {
    question: "2. What is the correct HTML element for the largest heading?",
    options: ["<h6>", "<heading>", "<h1>"],
    answer: 2
  },
  {
    question: "3. Which tag is used to create a hyperlink?",
    options: ["<a>", "<link>", "<href>"],
    answer: 0
  },
  {
    question: "4. How can you insert an image in HTML?",
    options: ["<img src='img.jpg'>", "<image src='img.jpg'>", "<img href='img.jpg'>"],
    answer: 0
  },
  {
    question: "5. Which tag creates an unordered list?",
    options: ["<ul>", "<ol>", "<li>"],
    answer: 0
  },
  {
    question: "6. Which tag is used for a line break?",
    options: ["<br>", "<break>", "<lb>"],
    answer: 0
  },
  {
    question: "7. HTML files use which file extension?",
    options: [".htm", ".html", ".doc"],
    answer: 1
  },
  {
    question: "8. Which tag defines a paragraph?",
    options: ["<p>", "<para>", "<text>"],
    answer: 0
  },
  {
    question: "9. How do you make text bold in HTML?",
    options: ["<b>", "<bold>", "<strongtext>"],
    answer: 0
  },
  {
    question: "10. What does the <title> tag do?",
    options: ["Displays page title in tab", "Styles the page", "Shows main heading"],
    answer: 0
  },
  {
    question: "11. Which tag is correct for a checkbox?",
    options: ["<checkbox>", "<input type='checkbox'>", "<input type='check'>"],
    answer: 1
  },
  {
    question: "12. Which tag creates a table row?",
    options: ["<td>", "<row>", "<tr>"],
    answer: 2
  },
  {
    question: "13. What tag is used for table data (cell)?",
    options: ["<td>", "<data>", "<cell>"],
    answer: 0
  },
  {
    question: "14. Which is correct for a text input field?",
    options: ["<input type='text'>", "<textfield>", "<input type='textfield'>"],
    answer: 0
  },
  {
    question: "15. Which tag adds a horizontal line?",
    options: ["<hr>", "<line>", "<hl>"],
    answer: 0
  },
  {
    question: "16. Where should <meta> tags go?",
    options: ["In the body", "In the head", "Outside html"],
    answer: 1
  },
  {
    question: "17. What tag creates a drop-down list?",
    options: ["<dropdown>", "<select>", "<list>"],
    answer: 1
  },
  {
    question: "18. Which tag is used for italic text?",
    options: ["<em>", "<i>", "Both <em> and <i>"],
    answer: 2
  },
  {
    question: "19. Which is a correct image tag?",
    options: [
      "<img src='cat.png' alt='cat'>",
      "<image src='cat.png'>",
      "<img href='cat.png'>"
    ],
    answer: 0
  },
  {
    question: "20. What is the correct doctype declaration?",
    options: [
      "<!DocType html>",
      "<!DOCTYPE HTML>",
      "<html doctype>"
    ],
    answer: 1
  }
];

window.onload = function () {
  const container = document.getElementById("quiz-container");
  questions.forEach((q, index) => {
    const qBlock = document.createElement("div");
    qBlock.classList.add("quiz-card");

    const qTitle = document.createElement("p");
    qTitle.classList.add("fw-bold");
    qTitle.innerHTML = q.question;

    qBlock.appendChild(qTitle);

    q.options.forEach((opt, i) => {
      const optId = `q${index}_opt${i}`;
      const optWrapper = document.createElement("div");
      optWrapper.classList.add("form-check", "mb-1");

      const radio = document.createElement("input");
      radio.classList.add("form-check-input");
      radio.type = "radio";
      radio.name = `q${index}`;
      radio.id = optId;
      radio.value = i;

      const label = document.createElement("label");
      label.classList.add("form-check-label");
      label.setAttribute("for", optId);
      label.innerText = opt;

      optWrapper.appendChild(radio);
      optWrapper.appendChild(label);
      qBlock.appendChild(optWrapper);
    });

    container.appendChild(qBlock);
  });
};

function submitQuiz() {
  let score = 0;
  questions.forEach((q, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    if (selected && parseInt(selected.value) === q.answer) {
      score++;
    }
  });

  document.getElementById("result").innerHTML =
    `✅ You scored <strong>${score}</strong> out of <strong>${questions.length}</strong>`;
}
