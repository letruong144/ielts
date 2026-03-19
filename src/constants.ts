export interface Session {
  id: number;
  day: string;
  title: string;
  homework: string;
}

export interface Phase {
  title: string;
  subtitle: string;
  weeks: string;
  sessions: Session[];
}

export const ROADMAP_DATA: Phase[] = [
  {
    title: "GIAI ĐOẠN 1",
    subtitle: "TÁI THIẾT NỀN TẢNG",
    weeks: "Tuần 1-2",
    sessions: [
      { id: 1, day: "T2", title: "Khởi động. 3 thì cốt lõi + Format đề", homework: "100 câu chia động từ + 50 từ vựng" },
      { id: 2, day: "T5", title: "Listening Part 1", homework: "Nghe chép chính tả 5 track" },
      { id: 3, day: "T6", title: "Reading Section 1 (Skimming/Scanning & T/F/NG)", homework: "3 bài Reading" },
      { id: 4, day: "T7", title: "Speaking Part 1 (Direct Answer + Reason + Detail)", homework: "Ghi âm 10 câu" },
      { id: 5, day: "CN", title: "Mini-test Ngữ pháp & Từ vựng", homework: "Xem cấu trúc Writing Task 1" },
      { id: 6, day: "T2", title: "Writing Task 1 (Line & Bar)", homework: "5 Mở bài + 5 Overview" },
      { id: 7, day: "T5", title: "Listening Part 1 & 2", homework: "5 test Listening" },
      { id: 8, day: "T6", title: "Reading Section 1 (Note Completion)", homework: "5 bài điền từ" },
      { id: 9, day: "T7", title: "Speaking Part 1 (Hobbies, Fillers)", homework: "Ghi âm 15 câu" },
      { id: 10, day: "CN", title: "Mini-test Kỹ năng", homework: "Chữa lỗi" },
    ]
  },
  {
    title: "GIAI ĐOẠN 2",
    subtitle: "ÉP KHUÔN TEMPLATE",
    weeks: "Tuần 3-4",
    sessions: [
      { id: 11, day: "T2", title: "Writing Task 1 (Pie & Table)", homework: "Viết 3 bài hoàn chỉnh" },
      { id: 12, day: "T5", title: "Listening Part 2", homework: "10 bài Map Labeling" },
      { id: 13, day: "T6", title: "Reading Section 2", homework: "3 Passage" },
      { id: 14, day: "T7", title: "Speaking Part 2 (Universal Story)", homework: "Áp dụng nói 5 đề" },
      { id: 15, day: "CN", title: "Writing Task 2 (Discuss both views)", homework: "Học 10 từ nối" },
      { id: 16, day: "T2", title: "Writing Task 2 (P.I.E)", homework: "Viết 2 bài Task 2" },
      { id: 17, day: "T5", title: "Listening Part 3", homework: "Nghe 5 track Part 3" },
      { id: 18, day: "T6", title: "Reading Section 2", homework: "4 Passage Section 2" },
      { id: 19, day: "T7", title: "Speaking Part 2 (Sửa lỗi phát âm)", homework: "Dàn ý 10 đề" },
      { id: 20, day: "CN", title: "Mid-term Mock Test", homework: "Viết lại bài Task 2" },
    ]
  },
  {
    title: "GIAI ĐOẠN 3",
    subtitle: "TĂNG TỐC TỐI ƯU",
    weeks: "Tuần 5-6",
    sessions: [
      { id: 21, day: "T2", title: "Writing Task 2 (Agree/Disagree)", homework: "3 bài Task 2" },
      { id: 22, day: "T5", title: "Listening Full Test", homework: "2 Full Test Listening" },
      { id: 23, day: "T6", title: "Reading Full Test", homework: "2 Full Test Reading" },
      { id: 24, day: "T7", title: "Speaking Part 3 (A.R.E)", homework: "Ghi âm 10 câu" },
      { id: 25, day: "CN", title: "Chữa chi tiết Full Test", homework: "Lập bảng từ đồng nghĩa" },
      { id: 26, day: "T2", title: "Full Test & Writing Feedback", homework: "Viết bài trực tiếp trên lớp" },
      { id: 27, day: "T5", title: "Full Test & Listening Feedback", homework: "Luyện đề cường độ cao" },
      { id: 28, day: "T6", title: "Full Test & Reading Feedback", homework: "Luyện đề cường độ cao" },
      { id: 29, day: "T7", title: "Speaking Mock Test", homework: "Sửa lỗi trực tiếp" },
      { id: 30, day: "CN", title: "Review & Strategy", homework: "Tổng hợp lỗi sai" },
    ]
  },
  {
    title: "GIAI ĐOẠN 4",
    subtitle: "THỰC CHIẾN & CHỐT HẠ",
    weeks: "Tuần 7-8",
    sessions: [
      { id: 31, day: "T2", title: "Phòng thi máu (Mock test 2.5h)", homework: "Xem sổ ghi lỗi" },
      { id: 32, day: "T5", title: "Phòng thi máu (Mock test 2.5h)", homework: "Dịch bài" },
      { id: 33, day: "T6", title: "Phòng thi máu (Mock test 2.5h)", homework: "Sửa trực tiếp" },
      { id: 34, day: "T7", title: "Sát hạch Speaking 1-1", homework: "Khắc phục lỗi cuối" },
      { id: 35, day: "CN", title: "Sát hạch Speaking 1-1", homework: "Khắc phục lỗi cuối" },
      { id: 36, day: "T2", title: "Tối giản hóa - Ôn Template", homework: "Làm lại câu sai" },
      { id: 37, day: "T5", title: "Tối giản hóa - Ôn Template", homework: "Làm lại câu sai" },
      { id: 38, day: "T6", title: "Tối giản hóa - Ôn Template", homework: "Làm lại câu sai" },
      { id: 39, day: "T7", title: "Sát hạch Speaking lần cuối", homework: "Dặn dò tâm lý" },
      { id: 40, day: "CN", title: "Thư giãn - Chốt Quy tắc 1A", homework: "Không giao thêm BTVN" },
    ]
  }
];
