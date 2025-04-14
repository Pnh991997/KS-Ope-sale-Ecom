const questions = {
    Thuoc: [
        {
            question: "Để đăng nhập vào RSA Ecom, bước đầu tiên là gì?",
            options: ["Nhập mã OTP", "Lựa chọn hệ thống “Long Châu”", "Nhấn chọn “Đăng nhập”", "Nhập ghi chú của sale"],
            correct: "Lựa chọn hệ thống “Long Châu”"
        },
        {
            question: "Thao tác nào được thực hiện để thêm sản phẩm quan tâm vào giỏ hàng chọn mua?",
            options: ["Nhấn “Tìm kiếm”", "Nhấn “+”", "Nhấn “Tiếp tục”", "Nhấn “Đẩy đơn”"],
            correct: "Nhấn “+”"
        },
        {
            question: "Đơn hàng chỉ được phép đổi quà hoặc voucher bằng điểm F-sell theo hình thức nào?",
            options: ["Đổi cả quà và voucher cùng lúc", "Chỉ chọn 1 trong 2 hình thức", "Đổi không giới hạn số lượng", "Đổi mà không cần xác nhận"],
            correct: "Chỉ chọn 1 trong 2 hình thức"
        },
        {
            question: "Đối với đơn hàng “Nhận tại Shop”, hệ thống gợi ý tối đa bao nhiêu shop gần khách hàng nhất trong nội tỉnh?",
            options: ["1", "2", "3", "4"],
            correct: "3"
        },
        {
            question: "Khi thanh toán qua cổng VNPAY, link thanh toán có hiệu lực trong bao lâu?",
            options: ["5 phút", "10 phút", "15 phút", "20 phút"],
            correct: "15 phút"
        },
        {
            question: "Ai có quyền cập nhật trạng thái yêu cầu trong “Danh sách yêu cầu”?",
            options: ["Tất cả tài khoản xem", "Chỉ sale đảm trách", "Chỉ manager", "Tất cả nhân viên sale"],
            correct: "Chỉ sale đảm trách"
        },
        {
            question: "Đơn hàng nào được phép hủy bởi sale?",
            options: ["Đơn đã đẩy shop ở trạng thái “Hoàn tất”", "Đơn chưa đẩy shop hoặc COD ở trạng thái “Đang xử lý”", "Đơn thanh toán online đã hoàn tất", "Đơn của nhân viên khác"],
            correct: "Đơn chưa đẩy shop hoặc COD ở trạng thái “Đang xử lý”"
        },
        {
            question: "Để đăng nhập Cisco trong RSA Ecom, bước đầu tiên là gì?",
            options: ["Mở RSA Ecom", "Mở app Cisco", "Nhấn “Tiếp tục”", "Vào “Lịch sử cuộc gọi”"],
            correct: "Mở app Cisco"
        },
        {
            question: "Ai có quyền chỉnh sửa thông tin khách hàng công nợ trong “Định nghĩa KH công nợ”?",
            options: ["Sale", "Manager", "Leader", "Tất cả nhân viên"],
            correct: "Manager"
        },
        {
            question: "Đơn hàng COD có thể chỉnh sửa thông tin khách hàng ở bước nào?",
            options: ["Sau khi đẩy shop", "Trước khi nhấn “Tiếp tục”", "Sau khi khách thanh toán", "Khi đơn ở trạng thái “Hoàn tất”"],
            correct: "Trước khi nhấn “Tiếp tục”"
        },
        {
            question: "Khi khách hàng yêu cầu giao hàng nhanh, sale chọn chế độ nào?",
            options: ["Giao hàng thường", "Giao hàng tiết kiệm", "Giao hàng hỏa tốc", "Nhận tại shop"],
            correct: "Giao hàng hỏa tốc"
        },
        {
            question: "Hệ thống RSA Ecom cho phép sale xem lịch sử giao dịch của khách hàng trong bao lâu?",
            options: ["30 ngày", "60 ngày", "90 ngày", "Không giới hạn"],
            correct: "Không giới hạn"
        },
        {
            question: "Nếu khách hàng nhập sai số điện thoại, sale sửa thông tin ở đâu?",
            options: ["Màn hình thanh toán", "Màn hình giỏ hàng", "Lịch sử đơn hàng", "Danh sách yêu cầu"],
            correct: "Màn hình giỏ hàng"
        },
        {
            question: "Khách hàng có thể sử dụng điểm F-sell để làm gì?",
            options: ["Thanh toán trực tiếp đơn hàng", "Đổi quà hoặc voucher", "Chuyển nhượng cho người khác", "Tích lũy không giới hạn"],
            correct: "Đổi quà hoặc voucher"
        },
        {
            question: "Ai có quyền xem toàn bộ lịch sử đơn hàng của tất cả sale?",
            options: ["Sale", "Leader/Manager", "Khách hàng", "Nhân viên kho"],
            correct: "Leader/Manager"
        },
        {
            question: "Hệ thống RSA Ecom tự động gửi thông báo gì đến khách hàng?",
            options: ["Xác nhận đơn hàng qua SMS", "Gợi ý sản phẩm mới", "Cập nhật điểm F-sell qua email", "Yêu cầu thanh toán qua VNPAY"],
            correct: "Xác nhận đơn hàng qua SMS"
        },
        {
            question: "Đơn hàng thanh toán qua VNPAY bị hủy khi nào?",
            options: ["Sau 15 phút không thanh toán", "Khi khách từ chối nhận hàng", "Khi sale hủy đơn", "Khi shop hết hàng"],
            correct: "Sau 15 phút không thanh toán"
        },
        {
            question: "Hệ thống RSA Ecom tự động từ chối đơn hàng khi nào?",
            options: ["Khi khách hàng không nhập địa chỉ", "Khi sản phẩm vượt số lượng tồn kho", "Khi sale không chọn nguồn đơn", "Khi khách yêu cầu giao hàng hỏa tốc"],
            correct: "Khi sản phẩm vượt số lượng tồn kho"
        },
        {
            question: "Khi khách hàng yêu cầu giao hàng tiết kiệm, phí ship được tính như thế nào?",
            options: ["Cố định 20.000đ", "Tự động theo khoảng cách", "Sale nhập thủ công", "Miễn phí nếu đơn trên 500.000đ"],
            correct: "Tự động theo khoảng cách"
        },
        {
            question: "Sale có thể thêm mã giảm giá vào đơn hàng ở bước nào?",
            options: ["Trước khi chọn phương thức thanh toán", "Sau khi đẩy đơn", "Trong lịch sử đơn hàng", "Khi khách yêu cầu hủy đơn"],
            correct: "Trước khi chọn phương thức thanh toán"
        }
    ],
    Vaccine: [
        {
            question: "Để đăng nhập RSA Vaccine Ecom, bước đầu tiên là truy cập link nào?",
            options: ["https://uat-vaccine-ecom.frt.vn/", "https://vaccine-ecom.frt.vn/", "https://longchauecom.frt.vn/", "https://return-home.frt.vn/"],
            correct: "https://vaccine-ecom.frt.vn/"
        },
        {
            question: "Khi đăng nhập Call Center trên RSA Vaccine, nhân viên cần nhập thông tin gì?",
            options: ["Số điện thoại khách hàng", "Mã inside, mật khẩu, IPP", "Tên khách hàng và địa chỉ", "Ghi chú cuộc gọi"],
            correct: "Mã inside, mật khẩu, IPP"
        },
        {
            question: "Nếu không liên hệ được khách hàng khi gọi ra, sale cần làm gì?",
            options: ["Nhấn “Gọi lại”", "Nhấn “Gửi SMS”", "Nhấn “Tìm kiếm”", "Nhấn “Lưu kết quả”"],
            correct: "Nhấn “Gửi SMS”"
        },
        {
            question: "Trong “Danh sách gọi nhỡ”, thao tác nào được thực hiện để gọi lại?",
            options: ["Nhấn “Gửi SMS”", "Nhấn “Gọi lại”", "Nhấn “Lưu kết quả”", "Nhấn “Tìm kiếm”"],
            correct: "Nhấn “Gọi lại”"
        },
        {
            question: "Ai có quyền xem toàn bộ yêu cầu tư vấn trong “Danh sách yêu cầu”?",
            options: ["Sale Ecom", "Leader/Manager Sale Ecom", "Tất cả nhân viên", "Chỉ khách hàng"],
            correct: "Leader/Manager Sale Ecom"
        },
        {
            question: "Lịch sử tiêm của khách hàng hiển thị thông tin từ thời điểm nào?",
            options: ["Ngày D-7", "Ngày D-1 và D", "Ngày D+1", "Toàn bộ lịch sử"],
            correct: "Ngày D-1 và D"
        },
        {
            question: "Để xử lý phiếu chăm sóc trong “Danh sách chăm sóc sau tiêm”, sale nhấn nút gì?",
            options: ["Nhấn “Tìm kiếm”", "Nhấn “Xử lý”", "Nhấn “Gọi lại”", "Nhấn “Đảm trách”"],
            correct: "Nhấn “Xử lý”"
        },
        {
            question: "Kết quả xử lý trong “Danh sách chăm sóc sau tiêm” có thể cập nhật bao nhiêu lần?",
            options: ["Không giới hạn", "1 lần duy nhất", "2 lần", "3 lần"],
            correct: "1 lần duy nhất"
        },
        {
            question: "Để tạo đơn hàng từ “Danh sách yêu cầu”, sale nhấn nút gì ở màn hình chi tiết yêu cầu?",
            options: ["Nhấn “Xử lý”", "Nhấn “Tạo đơn hàng”", "Nhấn “Gửi SMS”", "Nhấn “Lưu kết quả”"],
            correct: "Nhấn “Tạo đơn hàng”"
        },
        {
            question: "Nếu khách hàng thuộc hộ gia đình, thông tin nào được hiển thị gộp chung trong “Danh sách chăm sóc sau tiêm”?",
            options: ["Ngày tiêm và trạng thái xử lý", "Người giám hộ và số điện thoại", "Lịch sử tiêm và điểm F-sell", "Tên khách hàng và mã TCLC"],
            correct: "Người giám hộ và số điện thoại"
        },
        {
            question: "Trạng thái “Sẵn sàng” của sale có ý nghĩa gì?",
            options: ["Sale đang xử lý đơn hàng", "Sale sẵn sàng nhận cuộc gọi vào", "Sale đang gọi ra cho khách", "Sale đã hoàn tất ca làm"],
            correct: "Sale sẵn sàng nhận cuộc gọi vào"
        },
        {
            question: "Yêu cầu “Mới tạo” trong “Danh sách yêu cầu” có màu gì?",
            options: ["Xanh lá", "Đỏ", "Vàng", "Xám"],
            correct: "Xanh lá"
        },
        {
            question: "Hệ thống RSA Vaccine Ecom tự động phân công yêu cầu khi nào?",
            options: ["Khi sale không nhận trong 5 phút", "Khi có nhân viên check-in và không có yêu cầu “Mới tạo”", "Khi Leader chỉ định", "Khi khách hàng gọi lại"],
            correct: "Khi có nhân viên check-in và không có yêu cầu “Mới tạo”"
        },
        {
            question: "Sale có thể chỉnh sửa thông tin khách hàng trong “Thông tin khách gọi” không?",
            options: ["Có, bất kỳ lúc nào", "Không, chỉ xem được", "Có, nếu là khách mới", "Có, sau khi tạo đơn"],
            correct: "Không, chỉ xem được"
        },
        {
            question: "Khi xử lý phiếu chăm sóc, sale có thể cập nhật ghi chú không?",
            options: ["Có, trong màn hình “Xử lý”", "Không, chỉ chọn kết quả", "Có, sau khi lưu kết quả", "Không, chỉ Leader cập nhật"],
            correct: "Có, trong màn hình “Xử lý”"
        },
        {
            question: "Hệ thống tự động gửi SMS nhắc lịch tiêm khi nào?",
            options: ["Trước 1 ngày", "Trước 2 ngày", "Sau khi khách trễ hẹn", "Khi sale lưu kết quả"],
            correct: "Trước 1 ngày"
        },
        {
            question: "Sale có thể xem lịch sử đơn hàng của khách trong RSA Vaccine Ecom không?",
            options: ["Có, trong “Thông tin khách gọi”", "Không, chỉ xem lịch tiêm", "Có, trong “Lịch sử cuộc gọi”", "Không, chỉ Leader xem được"],
            correct: "Có, trong “Thông tin khách gọi”"
        },
        {
            question: "Sale có thể chuyển cuộc gọi cho nhân viên khác không?",
            options: ["Có, qua nút “Chuyển tiếp”", "Không, chỉ Leader chuyển được", "Có, qua SMS", "Không, hệ thống không hỗ trợ"],
            correct: "Có, qua nút “Chuyển tiếp”"
        },
        {
            question: "Hệ thống RSA Vaccine Ecom tự động cập nhật trạng thái “Trễ hẹn” khi nào?",
            options: ["Sau 24h không tiêm", "Sau 48h không tiêm", "Khi sale báo cáo", "Khi khách hủy lịch"],
            correct: "Sau 24h không tiêm"
        },
        {
            question: "Sale có thể hủy yêu cầu tư vấn trong “Danh sách yêu cầu” không?",
            options: ["Có, nếu chưa xử lý", "Không, chỉ Leader hủy được", "Có, sau khi gọi lại", "Không, hệ thống tự động hủy"],
            correct: "Có, nếu chưa xử lý"
        }
    ]
};
