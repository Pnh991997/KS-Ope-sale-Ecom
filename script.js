// Đợi DOM tải xong trước khi chạy code
document.addEventListener("DOMContentLoaded", function() {
    // Khai báo biến
    const teamSelect = document.getElementById("team");
    const departmentSelect = document.getElementById("department");
    const infoForm = document.getElementById("info-form");
    const quizForm = document.getElementById("quiz-form");
    const loginForm = document.getElementById("login-form");
    const resultDiv = document.getElementById("result");
    const quizContainer = document.getElementById("quiz");
    const submitQuizButton = document.getElementById("submit-quiz");
    const timerDisplay = document.getElementById("timer");

    // Mật khẩu để truy cập bài kiểm tra (thay đổi nếu cần)
    const correctPassword = "matkhau123";

    // Kiểm tra các phần tử cần thiết
    if (!teamSelect || !departmentSelect || !infoForm || !quizForm || !loginForm || !resultDiv || !quizContainer || !submitQuizButton || !timerDisplay) {
        console.error("Không tìm thấy một hoặc nhiều phần tử cần thiết. Kiểm tra ID trong index.html.");
        return;
    }

    // Cập nhật phòng ban theo team
    teamSelect.addEventListener("change", function() {
        // Reset dropdown phòng ban
        departmentSelect.innerHTML = "<option value=''>Chọn phòng ban</option>";

        // Danh sách phòng ban theo team
        const departments = {
            "Thuoc": ["Call", "Tick", "Chat", "CTV_Sale chat Zalo", "CTV_DSCM"],
            "Vaccine": ["Tổng đài", "Chat", "Xử lý yêu cầu", "Comment", "Vệ tinh"]
        };

        // Lấy danh sách phòng ban theo team đã chọn
        const selectedDepartments = departments[this.value] || [];

        // Thêm các tùy chọn vào dropdown
        selectedDepartments.forEach(dep => {
            const option = document.createElement("option");
            option.value = dep;
            option.textContent = dep;
            departmentSelect.appendChild(option);
        });
    });

    // Xử lý form đăng nhập
    infoForm.addEventListener("submit", function(e) {
        e.preventDefault();

        // Kiểm tra mật khẩu
        const password = document.getElementById("password").value;
        if (password !== correctPassword) {
            alert("Mật khẩu sai!");
            return;
        }

        // Ẩn form đăng nhập, hiện bài kiểm tra
        loginForm.style.display = "none";
        quizForm.style.display = "block";

        // Tải câu hỏi và bắt đầu đếm ngược
        loadQuiz();
        startTimer();
    });

    // Tải câu hỏi từ questions.js
    function loadQuiz() {
        const team = teamSelect.value;
        if (!team || !questions[team]) {
            console.error("Team không hợp lệ hoặc không có câu hỏi: ", team);
            alert("Không tìm thấy câu hỏi cho team này. Vui lòng thử lại.");
            return;
        }

        // Xóa câu hỏi cũ (nếu có)
        quizContainer.innerHTML = "";

        // Tải câu hỏi
        questions[team].forEach((q, index) => {
            const questionDiv = document.createElement("div");
            questionDiv.className = "question";
            questionDiv.innerHTML = `
                <p>${index + 1}. ${q.question}</p>
                ${q.options.map(opt => `
                    <label><input type="radio" name="q${index}" value="${opt}"> ${opt}</label><br>
                `).join("")}
            `;
            quizContainer.appendChild(questionDiv);
        });
    }

    // Đếm ngược thời gian (20 phút)
    function startTimer() {
        let time = 20 * 60; // 20 phút (1200 giây)
        timerDisplay.textContent = "20:00";

        const interval = setInterval(() => {
            const minutes = Math.floor(time / 60);
            const seconds = time % 60;
            timerDisplay.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
            time--;

            if (time < 0) {
                clearInterval(interval);
                submitQuiz();
            }
        }, 1000);
    }

    // Nộp bài
    submitQuizButton.addEventListener("click", submitQuiz);

    function submitQuiz() {
        const team = teamSelect.value;
        const name = document.getElementById("name").value;
        const insideCode = document.getElementById("inside-code").value;
        const department = departmentSelect.value;

        // Tính điểm
        let score = 0;
        questions[team].forEach((q, index) => {
            const selected = document.querySelector(`input[name="q${index}"]:checked`);
            if (selected && selected.value === q.correct) {
                score += 0.5; // Mỗi câu 0.5 điểm
            }
        });

        // Lưu kết quả
        saveResult(name, insideCode, department, team, score);

        // Ẩn bài kiểm tra, hiện thông báo
        quizForm.style.display = "none";
        resultDiv.style.display = "block";
    }

    // Lưu kết quả (gửi đến Google Sheets)
    function saveResult(name, insideCode, department, team, score) {
        // URL Web app từ Google Apps Script (thay YOUR_WEB_APP_URL bằng URL bạn lấy được)
        const webAppUrl = "https://script.google.com/macros/s/AKfycbzd3gE5Td_aDd52Lep_ZqlAattg81fc8DgpOdVJjzqm4VVRo9c7LJjlQwvDERzVmPdkDg/exec";

        fetch(webAppUrl, {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, insideCode, department, team, score: `${score}/10` })
        }).then(() => console.log("Kết quả đã lưu vào Google Sheets!"))
          .catch(error => console.error("Lỗi khi lưu kết quả: ", error));

        // In kết quả ra console để kiểm tra
        console.log({
            name,
            insideCode,
            department,
            team,
            score: `${score}/10`
        });
    }
});
    });
}
    });
}
