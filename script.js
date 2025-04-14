const correctPassword = "matkhau123"; // Thay bằng mật khẩu bạn muốn

// Cập nhật phòng ban theo team
document.getElementById("team").addEventListener("change", function() {
    const department = document.getElementById("department");
    department.innerHTML = "<option value=''>Chọn phòng ban</option>";
    if (this.value === "Thuoc") {
        ["Call", "Tick", "Chat", "CTV_Sale chat Zalo", "CTV_DSCM"].forEach(dep => {
            department.innerHTML += `<option value="${dep}">${dep}</option>`;
        });
    } else if (this.value === "Vaccine") {
        ["Tổng đài", "Chat", "Xử lý yêu cầu", "Comment", "Vệ tinh"].forEach(dep => {
            department.innerHTML += `<option value="${dep}">${dep}</option>`;
        });
    }
});

// Xử lý form đăng nhập
document.getElementById("info-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const password = document.getElementById("password").value;
    if (password !== correctPassword) {
        alert("Mật khẩu sai!");
        return;
    }

    document.getElementById("login-form").style.display = "none";
    document.getElementById("quiz-form").style.display = "block";
    loadQuiz();
    startTimer();
});

// Tải câu hỏi
function loadQuiz() {
    const team = document.getElementById("team").value;
    const quizForm = document.getElementById("quiz");
    questions[team].forEach((q, index) => {
        quizForm.innerHTML += `
            <div class="question">
                <p>${index + 1}. ${q.question}</p>
                ${q.options.map(opt => `
                    <label><input type="radio" name="q${index}" value="${opt}"> ${opt}</label><br>
                `).join("")}
            </div>
        `;
    });
}

// Đếm ngược thời gian (20 phút)
function startTimer() {
    let time = 20 * 60;
    const timer = document.getElementById("timer");
    const interval = setInterval(() => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        timer.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
        time--;
        if (time < 0) {
            clearInterval(interval);
            submitQuiz();
        }
    }, 1000);
}

// Nộp bài
document.getElementById("submit-quiz").addEventListener("click", submitQuiz);

function submitQuiz() {
    const team = document.getElementById("team").value;
    const name = document.getElementById("name").value;
    const insideCode = document.getElementById("inside-code").value;
    const department = document.getElementById("department").value;

    let score = 0;
    questions[team].forEach((q, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected && selected.value === q.correct) {
            score += 0.5;
        }
    });

    // Lưu kết quả (console.log tạm thời)
    saveResult(name, insideCode, department, team, score);

    document.getElementById("quiz-form").style.display = "none";
    document.getElementById("result").style.display = "block";
}

function saveResult(name, insideCode, department, team, score) {
    fetch("https://script.google.com/macros/s/AKfycbxacHRhbxYGrnxdifMh7HKThJswrSunSCXw-jGZibL6lC8kFDUwI9BZ2sQJPsuHva8OFw/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, insideCode, department, team, score: `${score}/10` })
    }).then(() => console.log("Kết quả đã lưu!"));
    console.log({
        name,
        insideCode,
        department,
        team,
        score: `${score}/10`
    });
}
    });
}
